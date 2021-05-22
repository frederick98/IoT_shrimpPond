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
import concurrent.futures
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

# Database didn't initialized here, if so, DB won't be updated.
#dbTest = mysql.connector.connect(
#    host = 'localhost',
#    database = 'raspiConnectionTest',
#    user = 'eric',
#    password = 'Solaiman1'
#)

# Any variable initializations
node = ""
temp = ""
turb = ""
pH = ""
sal = ""
do = ""
readTime = ""

isRunning = True
mainMenu = True
isMonitoring = True

# showing menu for first-run only
print("Welcome to Base Station v1.0")
print("----------------------------")
print("Please choose Menu Below:")
print("1. Start Monitoring")
print("0. Shutdown Node & Base Station")
print("----------------------------")
menu = input("Insert Menu's Number: ")
print(f'Menu Chosen: {menu}')

"""
method for main menu of the apps
"""
def main():
    print("Welcome to Base Station v1.0")
    print("----------------------------")
    print("Please choose Menu Below:")
    print("1. Start Monitoring")
    print("0. Shutdown Node & Base Station")
    print("----------------------------")


"""
method for splitting data received from arduino sensor node. Data received from
arduino (format):
    "Node/temp/turb/pH/sal/do/nodeStatus/sensorStatus"
which example is:
    "N1/30.40/3.85/7.00/34.55/5.50"
"""
def getNodeData(data):
    # initializing first
    node = ""
    temp = ""
    turb = ""
    pH = ""
    sal = ""
    do = ""
    readTime = ""
    
    # splitting data
    splittedMessage = data.split("/")
    
    # writing & formatting values 
    if len(splittedMessage) > 1:
        node = splittedMessage[0]
        temp = splittedMessage[1]
        turb = splittedMessage[2]
        pH = splittedMessage[3]
        sal = splittedMessage[4]
        do = splittedMessage[5]
        readTime = datetime.datetime.now()
        
        readTime = readTime.strftime('%Y-%m-%d %H:%M:%S')
        #print("Read Time: ", readTime)
    return node, temp, turb, pH, sal, do, readTime


"""
defining the database used and sets the cursor for uploading data to that 
database
"""
def updateDB(data):
    # DB initialization. If initialized outside the methods, inserting to DB 
    # will only run once, because its outside the thread
    db = mysql.connector.connect(
    host = 'localhost',
    database = 'raspiConnectionTest',
    user = 'eric',
    password = 'Solaiman1'
    )
    
    # Writing values
    node = data[0]
    temp = data[1]
    turb = data[2]
    pH = data[3]
    sal = data[4]
    do = data[5]        
    readTime = datetime.datetime.now()
    
    # Formatting values
    node = node[-1]
    temp = float(temp)
    turb = float(turb)
    pH = float(pH)
    sal = float(sal)
    do = float(do)
    readTime = readTime.strftime('%Y-%m-%d %H:%M:%S')
        
    # initializing cursor
    cursor = db.cursor(buffered = True)
    
    # creating query
    query = ("INSERT INTO connTest(time, node, temp, turb, pH, sal, do) VALUES (%s, %s , %s, %s, %s, %s, %s, %s)")
    values = (readTime, node, temp, turb, pH, sal, do)
    
    # executing query
    cursor.execute(query, values)
    
    # close cursor & DB to save resources
    db.commit()
    cursor.close()
    db.close()
    
    
"""
creating thread to run the apps and perform another task while it keeps reading 
from arduino's node
    
"""
while mainMenu:
    print("-----------------------------")
    if(menu == "0"):
        # choose to stop node or base station
        print("Choose Which Apps to Stop: ")
        print("----------------------------")
        print("1. Base Station")
        print("2. Sensor Node")
        choice = input("Menu Chosen: ")
        if(choice == "1"):
            print("Closing Base Station...")
            exit()
        elif(choice == "2"):
            print("Stopping Sensor Node...")
            main()
        else:
            print("Menu not Available!")
            main()
    elif(menu == "1"):
        # apps is running
        print("Monitoring Started...")
        print("Received Data: ")
        print("Node ID / Temperature / Turbidity / pH Stat / Salinity / DO Stat / Date & Time Received")
        while isRunning:
            # get data from arduino
            decoded = serial.readline().decode("ascii").strip()
            with concurrent.futures.ThreadPoolExecutor() as executor:
                #print("Message received: ", decoded)
                future = executor.submit(getNodeData, decoded)
                #print("Received data: ", future.result())
                if future.result() != None:
                    future2 = executor.submit(updateDB, future.result())
                    print(future.result())
                    print("Data uploaded to DB")
    else:
        print("Wrong Menu, Apps is restarting...")
        exit()
        
    menu = input("Insert Menu's Number: ")
    print(f'Menu Chosen: {menu}')


"""
method for getting arduino's node and sensor online status by splitting the
message sent from the arduino
"""
#def getArduinoStatus():
    