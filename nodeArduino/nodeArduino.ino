/**
 * list of library needed
 */
#include <OneWire.h>
#include "DFRobot_PH.h"
#include "DFRobot_EC.h"
#include <EEPROM.h>
#include <SoftwareSerial.h>
//#include 

/*
 * node name initialization
 */
 String N1 = "N1";

/*
 * connection & data transmission setup, XBee's DOUT(TX) is connected to pin 10 
 * (Arduino's software RX), XBee's DIN(RX) is connected to pin 11 (Arduino's 
 * Software TX)
 */
SoftwareSerial xbee = SoftwareSerial(10, 11);

/*
 * turbidity sensor setup, dengan input disimpan pada analog pin A0
 */
int sensor_turbidity_pin = A0;

/*
 * pH sensor setup, dengan input disimpan pada analog pin A1
 */
#define sensor_ph_pin A1
float voltage, phValue, temperature = 25;
DFRobot_PH ph;

/*
 * salinity sensor setup, dengan input disimpan pada analog pin A3
 */
#define sensor_ec_pin A3
float ecVoltage, ecValue, ecTemperature = 25;
DFRobot_EC ec;
 
/*
 * temperature sensor setup, dengana input disimpan pada digital pin 2 berikut temperature 
 * chipnya
 */
int sensor_temperature_pin = 2;
OneWire ds(sensor_temperature_pin);

/*
 * any other variables initialization
 */
char delimiter = ';';

void setup() {
  // baud rate: 9600
  Serial.begin(9600);
  ph.begin();
  ec.begin();
  xbee.begin(9600);
}

void loop() {
//  Serial.println("++++++++++++++++++++++++++++++++++++++++");
//  
//  Serial.print("Turbidity Sensor Readings: ");
//  Serial.print(turbiditySensing());
//  Serial.println(" NTU");
//  Serial.println("========================================");
//  
//  Serial.print("pH Sensor Readings: ");
//  pHSensing();
//  Serial.println("========================================");
//
//  Serial.print("Salinity Sensor Readings: ");
//  salinitySensing();
//  Serial.println("========================================");
//  
//  Serial.print("Temperature Sensor Readings: ");
//  Serial.println(temperatureSensing());
//  Serial.println("========================================");
  // sending data
  String message = dataConvert();
  Serial.println(message);
  sendMessage(message);

  // kasih delay biar bacanya tiap 5 detik
  //delay(5000);
}

/*
 * method untuk melakukan konversi hasil bacaan dari sensor temperatur
 */
float temperatureSensing(){
  byte data[12];
  byte addr[8];

  if ( !ds.search(addr)) {
      // no more sensors on chain, reset search
      ds.reset_search();
      return -1000;
  }

  if ( OneWire::crc8( addr, 7) != addr[7]) {
      Serial.println("CRC is not valid!");
      return -1000;
  }

  if ( addr[0] != 0x10 && addr[0] != 0x28) {
      Serial.print("Device is not recognized");
      return -1000;
  }

  ds.reset();
  ds.select(addr);
  // start conversion, with parasite power on at the end
  ds.write(0x44,1); 

  byte present = ds.reset();
  ds.select(addr);
  // Read Scratchpad
  ds.write(0xBE); 


  for (int i = 0; i < 9; i++) { 
    // we need 9 bytes
    data[i] = ds.read();
  }

  ds.reset_search();

  byte MSB = data[1];
  byte LSB = data[0];

  //use 2's compliment
  float tempRead = ((MSB << 8) | LSB); 
  float TemperatureSum = tempRead / 16;
  return TemperatureSum;
}

/*
 * method untuk melakukan konversi hasil bacaan dari sensor turbidity, karena bacaan
 * sensor menghasilkan range angka 0 hingga 1023
 */
float turbiditySensing(){
  float voltage = analogRead(sensor_turbidity_pin) * (5.0 / 1024.0);
  return voltage;
}

/*
 * method untuk melakukan pengukuran pH berdasarkan bacaan dari pH sensor
 */
float pHSensing(){
  static unsigned long timepoint = millis();
    if(millis()-timepoint>1000U){                  //time interval: 1s
        timepoint = millis();
        
        // read your temperature sensor to execute temperature compensation
        temperature = temperatureSensing();   
              
        // read the voltage
        voltage = analogRead(sensor_ph_pin)/1024.0*5000;  
        
        // convert voltage to pH with temperature compensation
        phValue = ph.readPH(voltage,temperature);  
        //Serial.print("temperature:");
        //Serial.print(temperature,1);
        //Serial.print("^C  pH:");
        // print hasil si ph hingga 2 angka di blkg koma
        Serial.println(phValue,2);                 
    }
    // calibration process by Serail CMD
    //ph.calibration(voltage,temperature);           
}

/*
 * method untuk melakukan pembacaan kadar garam (salinitas) dari electrical conductivity
 * sensor
 */
float salinitySensing(){
  static unsigned long timepoint = millis();
    if(millis()-timepoint>1000U)  //time interval: 1s
    {
      timepoint = millis();
      
      // read the voltage
      ecVoltage = analogRead(sensor_ec_pin)/1024.0*5000;   
      
      // read your temperature sensor to execute temperature compensation
      ecTemperature = temperatureSensing();
      
      // convert voltage to EC with temperature compensation          
      ecValue = ec.readEC(ecVoltage, ecTemperature);  
      //Serial.print("temperature:");
      //Serial.print(temperature,1);
      //Serial.print("^C  EC:");
      // baca nilai konduktivitas hingga 2 angka di blkg koma
      Serial.print(ecValue,2);
      Serial.println(" ms/cm");
    }
    // calibration process by Serail CMD
    //ec.calibration(voltage,temperature);          
}

/*
 * method ini melakukan pembacaan kadar oksigen (dissolved oxygen) dari DO sensor
 */
float doSensing(){
  
}

/*
 * this method checks node online status
 */
boolean nodeStatus(){
  // if all sensors online then the node must be online
  if(sensorStatus() == true){
    return true;
  }
  // checks if Arduino's built-in lights on then Arduino should be online, user just 
  // needs to check all the sensors
  else{
    if(digitalRead(LED_BUILTIN == HIGH)){
      return true;
    }
    else{
      return false;
    }
  }
}

/*
 * this methods checks sensors status
 */
boolean sensorStatus(){
  // checks temperature probe first, if its wrong then its not working
  if(temperatureSensing() == -1000){
    return false;
  }
  // temp fine, so lets check for other probe
  else{
    // checks turbidity's voltage range is between 0 & 4.5. if result falls outside the
    // range, so its not working
    if(turbiditySensing()<0 || turbiditySensing()>4.5){
      return false;
    }
    // turb fine, checking another probe
    else{
      // checks pH's voltage range.
      if(pHSensing() == 0.00){
        return false;
      }
      else{
        // checks EC sensor. it calculates with temp sensor, so if EC or temp is failing,
        // the EC result will stands below 0.
        if(salinitySensing() < 0){
          return false;
        }
        // no more sensors to check, if checking has passed through this, then sensors
        // must be working with no fault
        else{
          return true;
        }
      }
    }
  }
}

/*
 * this methods converts node status and sensor reading results to a string, with ';'
 * symbol as delimiter 
 */
String dataConvert(){
  // collect node & sensor status, then convert them to string
  boolean nodeOnline = nodeStatus();
  boolean sensorOnline = sensorStatus();
  String nodeStatus = "";
  String sensorStatus = "";
  if(nodeOnline == true){
    nodeStatus = "Online";
    if(sensorOnline == true){
      sensorStatus = "Normal";
    }
    else{
      sensorStatus = "Not Working";
    }
  }
  else{
    nodeStatus = "Offline";
    if(sensorOnline == true){
      sensorStatus = "Normal";
    }
    else{
      sensorStatus = "Not Working";
    }
  }
  
  // collect sensor results and convert them to string
  String temp = String(30.4);
  String turb = String(3.85);
  String pH = String(6.87);
  String sal = String(34.55);
  String DO = String(5.5);
//  String temp = String(temperatureSensing());
//  String turb = String(turbiditySensing());
//  String pH = String(pHSensing());
//  String sal = String(salinitySensing());
//  String DO = String(doSensing());

  String data = N1 + delimiter + temp + delimiter + turb + delimiter + pH + delimiter + sal + delimiter + DO + delimiter + nodeStatus + delimiter + sensorStatus;
  return data;
 }

/*
 * this method sends a message through xbee
 */
String sendMessage(String message){
  xbee.print(message);
 }
