# -*- coding: utf-8 -*-
"""
Created on Wed Apr 21 21:37:05 2021

This project is dedicated for my theses.

This code is a python program for base station, which receives 
data from the arduino nodes.

@author: frederick 2016730040
"""


"""
library needed
"""
import os
import datetime
import serial
import mysql.connector
from mysql.connector import Error


"""
variable initializing
"""
# USB Port setups
serial = serial.Serial(
    port = '/dev/ttyUSB0',
    baudrate = 9600,
    parity = serial.PARITY_NONE,
    stopbits = serial.STOPBITS_ONE,
    bytesize = serial.EIGHTBITS,
    timeout = 2
)

# Database setups
db = mysql.connector.connect(
    host = 'localhost',
    database = '',
    user = 'eric',
    password = 'Solaiman1'
)

"""
method for main menu of the apps
"""
def main():
    print("Welcome to Base Station")
    print("Please Choose Menu Options Below: ")
    print("----------------------------------")
    print("1. Node Online Status Check")
    print("2. Start Sensing")
    print("3. Stop Sensing")
    print("4. Shutdown Base Station")
    print("----------------------------------")
    print("Insert Menu's Number: ")


"""
method for splitting data received from arduino sensor node. Data received from
arduino (format):
    "Node;sensorTemp;sensorTurbidity;sensorPH;sensorConductivity;sensorDO;nodeStatus;sensorStatus"
which example is:
    "N1%"
"""
def getData(data):
    splittedMessage = data.split(";")
    
    if len(splittedMessage) > 1:
        node = splittedMessage[0]
        sensorTemp = splittedMessage[1]
        sensorTurbidity = splittedMessage[2]
        sensorPH = splittedMessage[3]
        sensorConductivity = splittedMessage[4]
        sensorDO = splittedMessage[5]
    return node, sensorTemp, sensorTurbidity, sensorPH, sensorConductivity, sensorDO

"""
method for getting arduino's node and sensor online status by splitting the
message sent from the arduino
"""
#def getArduinoStatus():
    
"""
defining the database used and sets the cursor for uploading data to that 
database
"""
def updateDB(data):
    

"""
import datetime
import serial
import RPi.GPIO as GPIO
import mysql.connector
from mysql.connector import Error
import concurrent.futures
import os

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(23,GPIO.OUT)


appRunning = True
menuShow = True
sensingRunning =  True

statusSensing = False
global statusNode
statusNum = -1
getPing = True
respon = 0
    
print("Base Station Online")
print("==================")
print("Pilihan Eksekusi Program")
print("1. Check Status Node")
print("2. Mulai Sensing")
print("3. Stop Sensing")
print("4. Matikan Aplikasi Base Station")
print("==================")
print("Masukan Nomor Instruksi=")


inputNum = input()
#print(inputNum)
counter = 0



def mainMenu():
    print("==================")
    print("Pilihan Eksekusi Program")
    print("1. Check Status Node")
    print("2. Mulai Sensing")
    print("3. Stop Sensing")
    print("4. Matikan Aplikasi Base Station")
    print("==================")
    print("Masukan Nomor Instruksi=")


ser = serial.Serial(
    port='/dev/ttyS0',
    baudrate = 9600,
    parity=serial.PARITY_NONE,
    stopbits=serial.STOPBITS_ONE,
    bytesize=serial.EIGHTBITS,
    timeout=1             
 )



def getDataSensing(dataSensing):
    # Data yang dikirim Arduino (String)
    # "Node 1"+"|"+kelembabanTanah+"|"+kelembabanUdara+"|"+suhuTanah+"|"+suhuUdara+"|"+phTanah+"|"+statusNode+"|"+"statusSensing";
    
    potongData = dataSensing.split("|")
    
    if len(potongData) > 1:
        nodeSensing = potongData[0]
        kelembabanTanah = potongData[1]
        kelembabanUdara = potongData[2]
        suhuTanah = potongData[3]
        suhuUdara = potongData[4]
        phTanah = potongData[5]
        statusNode = potongData[6]
        statusSensing = potongData[7]

        kelembabanTanahFlt = float(kelembabanTanah)/10.0
        suhuUdaraFlt = float(suhuUdara)-10.0
        phTanahFlt = float(phTanah)+2

        waktuSensing = datetime.datetime.now()
        waktuSensing = waktuSensing.strftime('%Y-%m-%d %H:%M:%S')
        
        return nodeSensing,kelembabanTanahFlt,kelembabanUdara,suhuTanah,suhuUdaraFlt,phTanahFlt,statusNode,statusSensing,waktuSensing


def getPingArduino(dataNode):
    potongData = dataNode.split("|")
    
    if len(potongData) > 1:
        nodeSensing = potongData[0]
        kelembabanTanah = potongData[1]
        kelembabanUdara = potongData[2]
        suhuTanah = potongData[3]
        suhuUdara = potongData[4]
        phTanah = potongData[5]
        statusNode = potongData[6]
        statusSensing = potongData[7]

        waktuSensing = datetime.datetime.now()
        waktuSensing = waktuSensing.strftime('%Y-%m-%d %H:%M:%S')
        
        return nodeSensing,statusNode,waktuSensing
    

#jumlah node yang disebar (thread)
POOL_SIZE = 5

def updateStatusSensing(dataSensing):
    db = mysql.connector.connect(
        host = 'localhost',
        database = 'Skripsi II',
        user = 'admin',
        password = 'root',
        pool_name = 'mypool',
        pool_size = POOL_SIZE+1
    )

    waktuSensing = datetime.datetime.now()
    waktuSensing = waktuSensing.strftime('%Y-%m-%d %H:%M:%S')
    statusSensing = "Not Sensing"

    #cursor digunakan untuk memasukan data ke mysql, dan eksekusi query
    cursor = db.cursor(buffered=True)


    queryNode2 = ("UPDATE nodesensor SET status_sensing = %s, waktu_node = %s")
    queryInputNode2 = (statusSensing,waktuSensing)


    cursor.execute(queryNode2,queryInputNode2)
    #cursor.execute(queryNode3,queryInputNode3)
    
    db.commit()
    cursor.close()
    db.close()


def goingOffline(dataSensing):
    db = mysql.connector.connect(
        host = 'localhost',
        database = 'Skripsi II',
        user = 'admin',
        password = 'root',
        pool_name = 'mypool',
        pool_size = POOL_SIZE+1
    )

    waktuSensing = datetime.datetime.now()
    waktuSensing = waktuSensing.strftime('%Y-%m-%d %H:%M:%S')
    statusNode = "Offline"
    statusSensing = "Not Sensing"

    #cursor digunakan untuk memasukan data ke mysql, dan eksekusi query
    cursor = db.cursor(buffered=True)


    queryNode2 = ("UPDATE nodesensor SET status_node = %s ,status_sensing = %s, waktu_node = %s WHERE kode_node != 5")
    queryInputNode2 = (statusNode,statusSensing,waktuSensing)


    cursor.execute(queryNode2,queryInputNode2)
    #cursor.execute(queryNode3,queryInputNode3)
    
    db.commit()
    cursor.close()
    db.close()
    

def sentDataSensing(dataSensing):
    db = mysql.connector.connect(
        host = 'localhost',
        database = 'Skripsi II',
        user = 'admin',
        password = 'root',
        pool_name = 'mypool',
        pool_size = POOL_SIZE+1
    )

    #global statusNode

    nodeSensing = dataSensing[0]
    kelembabanTanah = dataSensing[1]
    kelembabanUdara = dataSensing[2]
    suhuTanah = dataSensing[3]
    suhuUdara = dataSensing[4]
    phTanah = dataSensing[5]
    statusNode = dataSensing[6]
    statusSensing = dataSensing[7]
    

    kelembabanTanahFlt = float(kelembabanTanah)
    kelembabanUdaraFlt = float(kelembabanUdara)
    suhuTanahFlt = float(suhuTanah)
    suhuUdaraFlt = float(suhuUdara)
    phTanahFlt = float(phTanah)

    getNodeNumber = nodeSensing[len(nodeSensing)-1]
    getNodeNumberInt = int(getNodeNumber)

    waktuSensing = datetime.datetime.now() 
    waktuSensing = waktuSensing.strftime('%Y-%m-%d %H:%M:%S')

    jenisTanah = "irigasi"

    #cursor digunakan untuk memasukan data ke mysql, dan eksekusi query
    cursor = db.cursor(buffered=True)

    queryTanah = ("INSERT INTO tanah(waktu_sensing,ph_tanah,suhu_tanah,kelembaban_tanah,suhu_udara,kelembaban_udara,kode_petak,jenis_tanah) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)")
    queryInputTanah = (waktuSensing,phTanahFlt,suhuTanahFlt,kelembabanTanahFlt,suhuUdaraFlt,kelembabanUdaraFlt,getNodeNumberInt,jenisTanah)

    cursor.execute(queryTanah,queryInputTanah)

    #queryNode = ("INSERT INTO nodesensor(kode_node,nama_node,waktu_node,status_node,status_sensing) VALUES (%s,%s,%s,%s,%s)")
    #queryInputNode = (getNodeNumber,nodeSensing,waktuSensing,statusNode,statusSensing)


    queryNode2 = ("UPDATE nodesensor SET status_node = %s ,status_sensing = %s, waktu_node = %s WHERE kode_node = %s")
    queryInputNode2 = (statusNode,statusSensing,waktuSensing,getNodeNumber)


    #queryNode3 = ("UPDATE nodesensor SET status_node = %s ,status_sensing = %s, waktu_node = %s")
    #queryInputNode3 = ("Offline","Not Sensing",waktuSensing)


    cursor.execute(queryNode2,queryInputNode2)
    #cursor.execute(queryNode3,queryInputNode3)
    
    db.commit()
    cursor.close()
    db.close()


def counterAdd():
    global statusNode
    enter="try :"
    #jika tidak mendapat respon selama 28 detik artinya node mati
    if(counter>28):
        print("Node Offline")
        print("")
        statusNode = False

    return enter

def counterSet():
    global counter
    counter=0;
    

def terimaRespon():
    global statusNode
    output =""
     
    if(respon==0): #jika tidak mendapat respon
        output = "Tidak ada respon"
        statusNode = False
 
        
    return output
    


    
    
#thread solving + print serial dan sent data ke mysql
#tester
while appRunning:
    finding = False
    while menuShow:
        print(" ")
        if(inputNum=="2"):
            # kirim perintah sensing arduino   
            ser.write(str.encode("a"))
            print("Sensing dimulai...")
            print("Nama Node | Kel.Tanah | Kel.Udara | Suhu Tanah | Suhu Udara | pH Tanah | Status Node | Status Sensing | Waktu Sensing")
            while sensingRunning:
            # ambil hasil komunikasi arduino
                decoder=ser.readline().decode("ascii").strip()
                with concurrent.futures.ThreadPoolExecutor() as executor:  
                    future = executor.submit(getDataSensing,decoder)
                    #print(future.result())
                    if future.result() != None:
                        future2 = executor.submit(sentDataSensing, future.result())
                        print(future.result())

                
        elif(inputNum == "1"):
            print("Mengirim perintah check status")
            print("Silakan tunggu respon...")
            # kirim perintah check arduino   
            ser.write(str.encode("b").strip())
            
            while (counter<28): #28 detik untuk cek seluruh node yang disebar
            # ambil hasil komunikasi arduino
                decoder=ser.readline().decode("ascii").strip()
                with concurrent.futures.ThreadPoolExecutor() as executor:
                    counterAdd()
                    counter+=1
                    future3 = executor.submit(getPingArduino,decoder)
                    #print(counter)
                    #inputNum = input()

                    
                    if future3.result()!=None:
                        print("")
                        print("Ping Node Diterima")
                        print(future3.result())
                        future4 = executor.submit(sentDataSensing, future3.result())
                        global statusNode
                        statusNode = True
                        respon+=1
            
            if(respon==0):
                print(" ")
                print("Tidak ada respon")
                print("Silakan Check Perangkat..")
                print(" ")
            else:
                print(" ")
                print("Check Node Selesai")
                print(" ")
            counterSet()
            respon=0
            mainMenu()
                        
        elif(inputNum == "4"):
            # kirim perintah matikan sensing   
            ser.write(str.encode("c").strip())
            finding = False

            decoder=ser.readline().decode("ascii").strip()
            with concurrent.futures.ThreadPoolExecutor() as executor:  
                future = executor.submit(goingOffline,decoder)

            #Stop App Base Station
            print("Eksekusi : Matikan Aplikasi Base Station")
            os.system("skripsiLaravel_BS_Rev1.py")
            print("==================")
            print("Sensing Dihentikan !")
            print("Base Station Offline")
            exit()
            
            
        elif(inputNum == "3"):
            # kirim perintah matikan sensing   
            ser.write(str.encode("c").strip())
            finding = False


            # kirim perintah stop sensing 
            print("Sensing Dihentikan !")
            statusSensing = False
            
            decoder=ser.readline().decode("ascii").strip()
            with concurrent.futures.ThreadPoolExecutor() as executor:  
                future = executor.submit(updateStatusSensing,decoder)

            
            mainMenu()
        
        else:
            print("Pilihan Eksekusi Salah")
            print("Restart Aplikasi!")
            exit()


        inputNum=input()      
"""