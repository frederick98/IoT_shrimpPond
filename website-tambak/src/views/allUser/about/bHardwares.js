import React from "react";

const Hardwares = () => {
  return (
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="my-4 col-auto">
          <h1>Our Hardwares</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://via.placeholder.com/600x400"
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">Node Sensors</h3>
          <p class="text-justify">
            We used a high quality sensors made by{" "}
            <a href="https://www.dfrobot.com">DFRobot&trade;</a>. All sensors
            are ordered directly from their headquarters located in mainland
            China.
          </p>
          <p class="text-justify">
            This application used exactly 5 sensor, which is Turbidity Sensor,
            Temperature Sensor, Dissolved Oxygen Sensor, pH Sensor, and
            Electrical Conductivity (aka. Salinity) Sensor.
          </p>
        </div>
      </div>
      <div class="my-3"></div>
      <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://via.placeholder.com/600x400"
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">Arduino&trade;</h3>
          <p class="text-justify">
            As a controller for receiving data from all the sensors, the biggest
            high-tech micro-controller is used.{" "}
            <a href="https://store.arduino.cc/usa/mega-2560-r3">
              Arduino&trade; Mega 2560
            </a>
            , has the biggest RAM, and it has the most I/O lines among all other
            arduino boards. This gives our users a chance to expand any other
            new possibilities for their shrimp pond.
          </p>
          <p class="text-justify">
            The newest Arduino&trade; Mega 2560 is now on 3rd Revision. Let us
            know if you wants to upgrade your boards to the newest product by
            Arduino&trade;!
          </p>
        </div>
      </div>
      <div class="my-3"></div>
      <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://via.placeholder.com/600x400"
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">Raspberry Pi&trade;</h3>
          <p class="text-justify">
            Sleek, simple yet powerful base-station to control the nodes and
            acts as a web-server to maintain monitored data is needed. That's
            why we used the newest products from Raspberry Pi&trade; which is
            the faster-and-more-powerful{" "}
            <a href="https://www.raspberrypi.org/products/raspberry-pi-4-model-b/">
              Raspberry Pi&trade; 4
            </a>
            .
          </p>
          <p class="text-justify">
            As it says, "the speed and performance is a step up from earlier
            models". The biggest RAM available (8GB) is the one we used. You
            won't ever think about lagging in this sink. It performs well as we
            tested.
          </p>
        </div>
      </div>
      <div class="my-4"></div>
    </div>
  );
};

export default Hardwares;
