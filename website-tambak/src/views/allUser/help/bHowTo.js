const HowTo = () => {
  return (
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="my-4 col-auto">
          <h1>Using Our Applications</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            //src="https://via.placeholder.com/600x400"
            src={"img/howTo/how_on.JPG"}
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">Step 1: Turn Devices On</h3>
          <p class="text-justify">
            Turn on both Arduino Sensor Node and Raspberry Pi's device. Make
            sure all devices got stable power so they won't shutdown during
            monitoring session.
          </p>
        </div>
      </div>
      <div class="my-3"></div>
      <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            //src="https://via.placeholder.com/600x400"
            src={"img/howTo/how_spread.jpg"}
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">Step 2: Put in Desired Location</h3>
          <p class="text-justify">
            Put Arduino's Sensor Node in location you wanted, and Raspberry Pi's
            base station. Make sure all devices are within the range (between
            50-100m) so they all can communicate properly and won't get
            disconnected. <br />
            <br />
            Arduino's sensor node modules (top box) are splash-proof, but it's
            not waterproof! Make sure the boat floats properly.
          </p>
        </div>
      </div>
      <div class="my-3"></div>
      <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            //src="https://via.placeholder.com/600x400"
            src={"img/howTo/how_set.jpeg"}
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">Step 3: Connection Setup</h3>
          <p class="text-justify">
            As a base station that receives all data and commands the sensor
            node, it needs to be connected to a local network. Setup the
            base-station and connects to the local network available until
            connection established, and the monitoring website will serve
            monitored data properly.
          </p>
        </div>
      </div>
      <div class="my-3"></div>
      <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            //src="https://via.placeholder.com/600x400"
            src={"img/howTo/how_start.jpeg"}
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">Step 4: Start the App!</h3>
          <p class="text-justify">
            If you've got into this point, that means all setups have been done.
            You can access the monitoring website using by typing your base
            station's local IP network, and the monitoring website will be
            served and ready to use, as long as you are in the network. <br />{" "}
            <br />
            Enjoy the apps!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
