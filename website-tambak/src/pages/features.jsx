import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div>
      <div>
        <h1>Application's Features</h1>
      </div>
      <div class="row align-items-center my-6">
        <div class="col-lg-5">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://via.placeholder.com/600x400"
            alt="..."
          />
        </div>
        <div class="col-lg-4">
          <h3 class="font-weight-light">Monitoring</h3>
          <p>
            This application are able to do a water quality monitoring using a
            wireless sensor network. It gives user a real-time monitoring to
            control the quality of the water.
          </p>
          {/* <a class="btn btn-primary" href="#">
            Action!
          </a> */}
        </div>
      </div>
      <div class="my-5"></div>
      <div class="row align-items-center my-6">
        <div class="col-lg-5">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://via.placeholder.com/600x400"
            alt="..."
          />
        </div>
        <div class="col-lg-4">
          <h3 class="font-weight-light">Node Checking</h3>
          <p>
            What if some of the sensor's node are not working? What if static
            data shown? How do you check whether all of the node is online? Here
            we have a feature that allows user to check all the node status, and
            reports to user if something is not right.
          </p>
          {/* <a class="btn btn-primary" href="#">
            Action!
          </a> */}
        </div>
      </div>
      <div class="my-5"></div>
      <div class="row align-items-center my-6">
        <div class="col-lg-5">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://via.placeholder.com/600x400"
            alt="..."
          />
        </div>
        <div class="col-lg-4">
          <h3 class="font-weight-light">
            Data Graphics Diagram (<strong>BETA</strong>)
          </h3>
          <p>
            Result received from Data's Monitoring will be shown in a line
            diagram chart. A line chart will be shown to user, which received
            real-time data directly from the sensor's reading.{" "}
            <strong>
              Please be warned that this feature still in development, and might
              not showing accurate data.
            </strong>
          </p>
          {/* <a class="btn btn-primary" href="#">
            Action!
          </a> */}
        </div>
      </div>
      <div class="my-5"></div>
      <div class="row align-items-center my-6">
        <div class="col-lg-5">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://via.placeholder.com/600x400"
            alt="..."
          />
        </div>
        <div class="col-lg-4">
          <h3 class="font-weight-light">Easy-Login and Registration</h3>
          <p>
            Log into the application easily using your username and password.
            User can access it everywhere as long as you write the correct
            address. If you don't have an ID, feel free to contact us to make
            you a new ID and password.
          </p>
          {/* <a class="btn btn-primary" href="#">
            Action!
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
