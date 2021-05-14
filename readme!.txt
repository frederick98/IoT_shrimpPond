Langkah Pengujian sensor & kode program:
	-	DS18B20 Temperature Sensor:
		-	Merakit sensor tersebut agar dapat terhubung dengan benar ke arduino
			
		

Setup xBee di Arduino (hanya untuk test saja):
	- pasangkan shield ke node arduino berikut xbee nya
	- download software XCTU
	- mulai konfigurasi dengan XCTU
	- update radio firmware module dengan function set 802.15.4 TH firmware version 2003
	- set konfigurasi untuk xbee, untuk pengiriman antar arduino menggunakan spesifikasi 
		sebagai berikut:
		- xbee 1 coord: 
			- ATDL : 1234
			- ATMY : 5678
			- ATID : 2244
		- xbee 2 end dev:
			- ATDL : 5678
			- ATMY : 1234
			- ATID : 2244
			
Setup xBee di Arduino-Raspberry:
	- pasangkan xbee ke adapter arduino
	- mulai konfigurasi dengan XCTU
	- update radio firmware module dengan function set 802.15.4 TH firmware version 2003
	- set konfigurasi untuk xbee, untuk pengiriman antar arduino menggunakan spesifikasi 
		sebagai berikut:
		- xbee 1 coord: (raspberry)
			- ATDL : 1234
			- ATMY : 5678
			- ATID : 2244
		- xbee 2 end dev: (arduino)
			- ATDL : 5678
			- ATMY : 1234
			- ATID : 2244
			
			
Setup Raspberry PI:
	- lakukan setup pertama kali untuk raspberry pi 
	- melakukan enable ssh seperti pada web berikut:
		- https://roboticsbackend.com/enable-ssh-on-raspberry-pi-raspbian/
		- https://www.raspberrypi.org/documentation/remote-access/ssh/
	- melakukan setup apache, php dan mysql seperti pada web berikut:
		- https://bitsnapper.com/create-lamp-web-server-raspberry-pi-2/
		- https://randomnerdtutorials.com/raspberry-pi-apache-mysql-php-lamp-server/
	- setup node js dan ubah dia agar running pada port 1080 seperti pada web berikut:
		- https://www.raspberrypi.org/forums/viewtopic.php?t=78142
		
		