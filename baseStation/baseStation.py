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
import time
from mysql.connector import Error
from threading import Timer


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
# node = ""
# temp = ""
# turb = ""
# pH = ""
# sal = ""
# do = ""
# readTime = ""

global ctNode1, ctNode2
ctNode1 = 0;
ctNode2 = 0;

global nodeStat
testDataReceived = 0

isRunning = True
mainMenu = True
isMonitoring = True
timer = 0

# showing menu for first-run only
print("Welcome to Base Station v1.0")
print("----------------------------")
print("Please choose Menu Below:")
print("1. Start Monitoring")
print("2. Node Status Check")
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
    print("2. Node Status Check")
    print("0. Shutdown Node & Base Station")
    print("----------------------------")


"""
method for splitting data received from arduino sensor node. Data received from
arduino (format):
    "Node/temp/turb/pH/sal/do/nodeStatus/sensorStatus"
which example is:
    "N1/30.40/3.85/7.00/34.55/8.50/Online/Monitoring"
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
    nodeStat = ""
    sensorStat = ""
    
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
        nodeStat = splittedMessage[6]
        sensorStat = splittedMessage[7]
        readTime = datetime.datetime.now()
        
        readTime = readTime.strftime('%Y-%m-%d %H:%M:%S')
        #print("Read Time: ", readTime)
        
    return node, temp, turb, pH, sal, do, readTime, nodeStat, sensorStat


"""
defining the database used and sets the cursor for uploading data to that 
database
"""
def updateDB(data):
    # DB initialization. If initialized outside the methods, inserting to DB 
    # will only run once, because its outside the thread
    db = mysql.connector.connect(
    host = 'localhost',
    database = 'SkripsiEric',
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
    nodeStat = data[7]
    sensorStat = data[8]  
    readTime = datetime.datetime.now()
    
    # Formatting values
    node = node[-1]
    temp = float(temp)
    turb = float(turb)
    pH = float(pH)
    sal = float(sal)
    do = float("{:.2f}".format(float(do) / 1000))
    #nodeStat = String(nodeStat)
    #sensorStat = splittedMessage[7]
    readTime = readTime.strftime('%Y-%m-%d %H:%M:%S')
        
    # initializing cursor
    cursor = db.cursor(buffered = True)
    
    # creating insert monitor data query
    query = ("INSERT INTO Pengamatan(idTambak, idNode, waktuPengamatan, nodeStatus, monitoringStatus, temperature, turbidity, pH, salinity, DO) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)")
    values = (1, node, readTime, nodeStat, sensorStat, temp, turb, pH, sal, do)
    
    # executing query
    cursor.execute(query, values)
    
    # creating update node query
    query2 = ("UPDATE Node SET nodeStat=%s, sensorStat=%s, waktuNode=%s WHERE idNode=%s")
    values2 = (nodeStat, sensorStat, readTime, node)
    #print("values: ", values2)
    
    # executing query
    cursor.execute(query2, values2)
    
    # update node data counter
    #nodeCount(node)
    
    # close cursor & DB to save resources
    db.commit()
    cursor.close()
    db.close()
    
    print("Data uploaded to DB")
    
    #updateNodeStat()
    

"""
method for getting arduino's node and sensor online status by splitting the
message sent from the arduino
"""
def getArduinoStatus(data):
    # initializing first
    node = ""
    #temp = ""
    #turb = ""
    #pH = ""
    #sal = ""
    #do = ""
    readTime = ""
    nodeStat = ""
    #sensorStat = ""
    
    # splitting data
    splittedMessage = data.split("/")
    
    # writing & formatting values
    print("splittedMessage: ", splittedMessage)
    if len(splittedMessage) > 1:
        node = splittedMessage[0]
        temp = splittedMessage[1]
        turb = splittedMessage[2]
        pH = splittedMessage[3]
        sal = splittedMessage[4]
        do = splittedMessage[5]
        nodeStat = splittedMessage[6]
        sensorStat = splittedMessage[7]
        readTime = datetime.datetime.now()
        
        readTime = readTime.strftime('%Y-%m-%d %H:%M:%S')
        #print("Read Time: ", readTime)
    return node, readTime, nodeStat


"""
defining the database used and sets the cursor for uploading data to that 
database
"""
def updateNodeStat():
    # DB & cursor initialization. If initialized outside the methods,
    # inserting to DB will only run once, because its outside the thread
    db = mysql.connector.connect(
    host = 'localhost',
    database = 'SkripsiEric',
    user = 'eric',
    password = 'Solaiman1'
    )
    cursor = db.cursor(buffered = True)
    
    # Decide which node offline
    differ = 10
    if(abs(ctNode1 - ctNode2) > differ):
        readTime = datetime.datetime.now()
        readTime = readTime.strftime('%Y-%m-%d %H:%M:%S')
        query = ("UPDATE Node SET nodeStat=%s, sensorStat=%s, waktuNode=%s WHERE idNode=%s")
        values = ('Online', 'Data Transfer Delayed', readTime, 1)
    elif(abs(ctNode2 - ctNode1) > differ):
        readTime = datetime.datetime.now()
        readTime = readTime.strftime('%Y-%m-%d %H:%M:%S')
        query = ("UPDATE Node SET nodeStat=%s, sensorStat=%s, waktuNode=%s WHERE idNode=%s")
        values = ('Online', 'Data Transfer Delayed', readTime, 2)
    elif((ctNode1==0) and (ctNode2==0)):
        print("Both Blank")
        readTime = datetime.datetime.now()
        readTime = readTime.strftime('%Y-%m-%d %H:%M:%S')
        query1 = ("UPDATE Node SET nodeStat=%s, sensorStat=%s, waktuNode=%s WHERE idNode=%s")
        values1 = ('Offline', 'Problem with Sensor, Please Check', readTime, 1)
        cursor.execute(query1, values1)
        query = ("UPDATE Node SET nodeStat=%s, sensorStat=%s, waktuNode=%s WHERE idNode=%s")
        values = ('Offline', 'Problem with Sensor, Please Check', readTime, 2)
    
    # executing query
    cursor.execute(query, values)
        
    # close cursor & DB to save resources
    db.commit()
    cursor.close()
    db.close()
    #print("Stat uploaded to DB")
    
    
"""
this method counts how many data sent from node
"""
def nodeCount(node):
    if(node == 1):
        global ctNode1
        ctNode1 += 1
    elif(node == 2):
        global ctNode2
        ctNode2 += 1
    #else:
    #    print("Node not recognized!")
    #updateNodeStat()


"""
method which acts like a timer for counting until timeout
"""
def timerRun():
    global nodeStat
    result = "Ping Sensor Node: "
    
    if(timer > 30):
        print("Sensor Node Currently Offline.")
        print("Check Node")
        nodeStat = false
    return result


"""
this method resets the timer's counting to 0
"""
def timerReset():
    global timer
    timer = 0
    
    
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
        # apps is running, send request to start monitoring
        serial.write(str.encode("m"))
        print("Monitoring Started...")
        print("Received Data: ")
        print("Node ID / Temperature / Turbidity / pH Stat / Salinity / DO Stat / Date & Time Received / Node Status / Monitoring Status")
        while isRunning:
            # get data from arduino
            decoded = serial.readline().decode("ascii").strip()
            with concurrent.futures.ThreadPoolExecutor() as executor:
                #print("Message received: ", decoded)
                future = executor.submit(getNodeData, decoded)
                #print("Received data: ", future.result())
                if future.result() != None:
                    #future2 = executor.submit(updateDB, future.result())
                    #print("decoded1: ",future.result())
                    if(future.result() != ('', '', '', '', '', '', '', '', '')):
                        future2 = executor.submit(updateDB, future.result())
                        print(future.result())
                    else:
                        t = Timer(2.0, updateNodeStat)
                        t.start()
                            #time.sleep(0.5)
                        #updateNodeStat()
                            #print("Node Status Updated")
    elif(menu =="2"):
        print("Requesting Node Status Check")
        print("Loading...")
        # send check request to arduino node
        serial.write(str.encode("s").strip())
        
        while(timer < 30):
            message = serial.readline().decode("ascii").strip()
            
            # start timeout thread
            with concurrent.futures.ThreadPoolExecutor() as executor:
                timerRun()
                timer += 1
                future3 = executor.submit(getArduinoStatus, message)
                
                if future3.result() != None:
                    if(future3.result() != ('', '', '')):
                        print("Node Status Check completed.")
                        print("Result: ", future3.result())
                        print("Continue to Monitoring...")
                        future4 = executor.submit(updateDB, future3. result())
                        global nodeStat
                        nodeStat = True
                        testDataReceived += 1
                    else:
                        print("Still Trying to connect to Node")
            
        if (testDataReceived == 0):
            print("Sensor Node is Not Responding/Offline. Please Check")
        else:
            print("Node Status Checking has finished")
        timerReset()
        testDataReceived = 0
        main() 
    else:
        print("Wrong Menu, Apps is restarting...")
        exit()
        
    menu = input("Insert Menu's Number: ")
    print(f'Menu Chosen: {menu}')

