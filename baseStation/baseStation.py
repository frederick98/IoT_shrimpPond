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
dbTest = mysql.connector.connect(
    host = 'localhost',
    database = 'raspiConnectionTest',
    user = 'eric',
    password = 'Solaiman1'
)

db = mysql.connector.connect(
    host = 'localhost',
    database = 'raspiConnectionTest',
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
    splitted = data.split(";")
    
    if(len(splitted) > 1):
        node = splitted[0]
        sTemp = splitted[1]
        sTurb = splitted[2]
        sPH = splitted[3]
        sEC = splitted[4]
        sDO = splitted[5]
        
    cursor = db.cursor(buffered = True)
    
    query = ("INSERT INTO pengamatan(node, sensorTemp, sensorTurb, sensorPH, sensorEC, sensor DO) VALUES (%s, %s , %s, %s, %s, %s, %s, %s)")
    readings = (node, sTemp, sTurb, sPH, sEC, sDO)
    
    cursor.execute(query, readings)
    
    db.commit()
    cursor.close()
    db.close()
    