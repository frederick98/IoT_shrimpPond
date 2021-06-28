/**
 * Arduino node codes made by frederick 2016730040
 */

/**
 * list of library needed
 */
#include <OneWire.h>
#include "DFRobot_PH.h"
#include "DFRobot_EC.h"
#include <EEPROM.h>
#include <SoftwareSerial.h>

/*
 * connection & data transmission setup, XBee's DOUT(TX) is connected to pin 1 
 * (Arduino's software RX), XBee's DIN(RX) is connected to pin 0 (Arduino's 
 * Software TX)
 */
SoftwareSerial xbee(1, 0);

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
float phValue2 = 0;

/*
 * salinity sensor setup, dengan input disimpan pada analog pin A3
 */
#define sensor_ec_pin A3
float ecVoltage, ecValue, ecTemperature = 25;
DFRobot_EC ec;
float ecValue2 = 0;

/*
 * temperature sensor setup, dengana input disimpan pada digital pin 2 berikut temperature 
 * chipnya
 */
int sensor_temperature_pin = 2;
OneWire ds(sensor_temperature_pin);

/*
 * DO sensor setup, with input at pin A2
 */
#define sensor_do_pin A2
#define VREF 5000    //VREF (mv)
#define ADC_RES 1024 //ADC Resolution
#define TWO_POINT_CALIBRATION 1 //Two-point calibration Mode=1
#define READ_TEMP (25) //Current water temperature celcius, Or temperature sensor function
//Two-point calibration needs to be filled CAL2_V and CAL2_T
//CAL1 High temperature point, CAL2 Low temperature point
#define CAL1_V (2260) //mv, high temp point
#define CAL1_T (34)   //celcius, high temp point
#define CAL2_V (1777) //mv, low temp point
#define CAL2_T (23)   //celcius, low temp point
float tempRead = 25;
String doValue = "";
const uint16_t DO_Table[41] = {
    14460, 14220, 13820, 13440, 13090, 12740, 12420, 12110, 11810, 11530,
    11260, 11010, 10770, 10530, 10300, 10080, 9860, 9660, 9460, 9270,
    9080, 8900, 8730, 8570, 8410, 8250, 8110, 7960, 7820, 7690,
    7560, 7430, 7300, 7180, 7070, 6950, 6840, 6730, 6630, 6530, 6410};
uint8_t Temperaturet;
uint16_t ADC_Raw;
uint16_t ADC_Voltage;
uint16_t DO;
int16_t readDO(uint32_t voltage_mv, uint8_t temperature_c){
  #if TWO_POINT_CALIBRATION == 0
    uint16_t V_saturation = (uint32_t)CAL1_V + (uint32_t)35 * temperature_c - (uint32_t)CAL1_T * 35;
    return (voltage_mv * DO_Table[temperature_c] / V_saturation);
  #else
    uint16_t V_saturation = (int16_t)((int8_t)temperature_c - CAL2_T) * ((uint16_t)CAL1_V - CAL2_V) / ((uint8_t)CAL1_T - CAL2_T) + CAL2_V;
    return (voltage_mv * DO_Table[temperature_c] / V_saturation);
  #endif
}

/*
 * node name initialization
 */
 String N1 = "N1";
 String N2 = "N2";
 String N3 = "N3";

/**
 * any other variables initialization
 */
String delimiter = "/";

/*
 * put setup code here to run once:
 * Note:
 *  - sensor setup MUST WROTE BEFORE SERIAL, otherwise it'll print their unnecessary
 *    status code.
 */
void setup() {
  // initialize pH sensor
  ph.begin();
  // initialize EC sensor
  ec.begin();
  // initialize Serial
  Serial.begin(9600); //<- still bugs here about message spacing
  // initialize XBee
  xbee.begin(9600);
}

/*
 * put main code here, to run repeatedly:
 */
void loop() {
//  Serial.println("++++++++++++++++++++++++++++++++++++++++");
//  
//  Serial.print("Turbidity Sensor Readings: ");
//  Serial.print(turbiditySensing());
//  Serial.println("========================================");
//  
//  Serial.print("pH Sensor Readings: ");
    pHSensing();
//  Serial.println("========================================");
//
//  Serial.print("Salinity Sensor Readings: ");
    salinitySensing();
//  Serial.println("========================================");
//  
//  Serial.print("Temperature Sensor Readings: ");
//  Serial.println(temperatureSensing());
//  Serial.println("========================================");
//  
//  Serial.print("DO Sensor Readings: ");
//  Serial.println(doSensing());
//  Serial.println("========================================");

  // listening for raspi's command
  if(xbee.available()){
    byte command = xbee.read();
    boolean orders = true;
    // check status
    if(command == 's'){
      String reply = deviceStatus();
      
      // send the message using xbee (fixed, no more calling sendMessage method)
      //sendMessage(message);
      xbee.print(reply);
      Serial.println(reply);
    }
    else if(command == 'm'){
      //Serial.println(message);
      // start sensor reading, then send the data to xbee
      String message = dataConvert();
      // send the message using xbee (fixed, no more calling sendMessage method)
      //sendMessage(message);
      xbee.print(message);
      Serial.println(message);
    }
  }  
  // sets delay so it repeated every 1 secs
  //delay(750);
}

/*
 * this methods converts node status and sensor reading results to a string, with '/'
 * symbol as delimiter 
 */
String dataConvert(){
  // collect sensor results and convert them to string
  //String temp = String(30.4);
  //String turb = String(3.85);
  //String pH = String(6.87);
  //String sal = String(0.05);
  //String DO = String(5.5);
  
  String temp = String(temperatureSensing());
  String turb = String(turbiditySensing());
  String pH = String(phValue2);
  String sal = String(ecValue2);
  String DO = doSensing();
  // wrap the results, adding delimiter then return the data
  String data = N1 + delimiter + temp + delimiter + turb + delimiter + pH + delimiter + sal + delimiter + DO + delimiter + deviceStatus();
  //Serial.println(data);
  return data;
}

/*
 * THIS METHOD IS NO LONGER USED
 * this method sends a message through xbee
 */
String sendMessage(String message){
  xbee.print(message);
  Serial.println("terkirim");
 }

 /*
 * gets temperature's reading conversion result
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
 * gets turbidity's reading conversion result, because sensor's reading range vary 
 * between 0 to 1023.
 */
float turbiditySensing(){
  float voltage = analogRead(sensor_turbidity_pin) * (5.0 / 1024.0);
  return voltage;
}

/*
 * gets pH sensor reading conversion result
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
        phValue2 = phValue; 
        //Serial.println(phValue2,2);
        //Serial.println(phValue,2);  
    }
    //return phValue2;
    // calibration process by Serail CMD
    //ph.calibration(voltage,temperature);           
}

/*
 * gets EC sensor salinity reading conversion result
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
      ecValue2 = ecValue;
      //Serial.println(ecValue2);
      //Serial.print(ecValue,2);
      //Serial.println(" ms/cm");
    }
    //return ecValue2;
    // calibration process by Serail CMD
    //ec.calibration(voltage,temperature);          
}

/*
 * gets DO sensor reading conversion result. this methods calls readDO method
 */
String doSensing(){
  tempRead = temperatureSensing();
  Temperaturet = (uint8_t)tempRead;
  ADC_Raw = analogRead(sensor_do_pin);
  ADC_Voltage = uint32_t(VREF) * ADC_Raw / ADC_RES;

  doValue = String(readDO(ADC_Voltage, Temperaturet));
  return doValue;
  
  //Serial.print("Temperaturet:\t" + String(Temperaturet) + "\t");
  //Serial.print("ADC RAW:\t" + String(ADC_Raw) + "\t");
  //Serial.print("ADC Voltage:\t" + String(ADC_Voltage) + "\t");
  //Serial.println("DO:\t" + String(readDO(ADC_Voltage, Temperaturet)) + "\t");
}

/*
 * Wraps Node & Sensor Online Status in a line of strings, so it can then be attached
 * to the line of monitoring data
 */
String deviceStatus(){
  //boolean nodeStat = nodeStatus();
  //boolean sensorStat = sensorStatus();
  String node = "";
  String sensor = "";
  String result = "";

  // node status to string
  node = (nodeStatus())? "Online" : "Offline";

  // sensor status to string
  sensor = (sensorStatus())? "Sensor Works Well" : "Problem with Sensor, Please Check";

  // join both string then return the results
  result = node + delimiter + sensor;
  //Serial.println(result);
  return result;
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
  boolean temp = true;
  boolean turb = true;
  boolean pH = true;
  boolean sal = true;
  boolean stat = true;
  
  // checks temperature probe first, if its wrong then its not working
  if(temperatureSensing() == -1000){
    temp = false;
  }
  
  // checks turbidity's voltage range is between 0 & 4.5. if result falls outside the
  // range, so its not working
  if(turbiditySensing()<0 || turbiditySensing()>4.5){
    turb = false;
  }

  // checks pH's voltage range.
  if(pHSensing() < 0){
    pH = false;
  }

  // checks EC sensor. it calculates with temp sensor, so if EC or temp is failing,
  // the EC result will stands below 0.
  if(salinitySensing() < 0){
    sal = false;
  }

  // set final result of all sensors
  stat = ((temp&&turb&&pH&&sal) == true)? true : false;
//  if(temperatureSensing() == -1000){
//    return false;
//  }
//  // temp fine, so lets check for other probe
//  else{
//    // checks turbidity's voltage range is between 0 & 4.5. if result falls outside the
//    // range, so its not working
//    if(turbiditySensing()<0 || turbiditySensing()>4.5){
//      return false;
//    }
//    // turb fine, checking another probe
//    else{
//      // checks pH's voltage range.
//      if(pHSensing() < 0.00){
//        return false;
//      }
//      else{
//        // checks EC sensor. it calculates with temp sensor, so if EC or temp is failing,
//        // the EC result will stands below 0.
//        if(salinitySensing() < 0){
//          return false;
//        }
//        // no more sensors to check, if checking has passed through this, then sensors
//        // must be working with no fault
//        else{
//          return true;
//        }
//      }
//    }
//  }
  return stat;
}
