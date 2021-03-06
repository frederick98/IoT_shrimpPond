import React from "react";

const Features = () => {
  return (
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="my-4 col-auto">
          <h1>Application Features</h1>
        </div>
      </div>
      {/* <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://via.placeholder.com/600x400"
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">
            Data Graphics Diagram (<strong>BETA</strong>)
          </h3>
          <p class="text-justify">
            Result received from Data's Monitoring will be shown in a line
            diagram chart. A line chart will be shown to user, which received
            real-time data directly from the sensor's reading.{" "}
            <strong>
              Please be warned that this feature still in development, and might
              not showing accurate data and/or implemented correctly.
            </strong>
          </p>
        </div>
      </div> */}
      <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            //src="https://via.placeholder.com/600x400"
            src={"img/features/feat_check.jpeg"}
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">Node Status Checking</h3>
          <p class="text-justify">
            What if some of the sensor's node are not working? What if static
            data shown? How do you check whether all of the node is online? Here
            we have a feature that allows user to check all the node status, and
            reports to user if something is not right.
          </p>
        </div>
      </div>
      <div class="my-3"></div>
      <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            //src="https://via.placeholder.com/600x400"
            src={"img/features/feat_monitor.jpeg"}
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">Monitoring</h3>
          <p class="text-justify">
            This application are designed to do a water quality monitoring using
            a wireless sensor network. It gives user a real-time monitoring to
            control the quality of the water.
          </p>
        </div>
      </div>
      <div class="my-3"></div>
      <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            //src="https://via.placeholder.com/600x400"
            src={"img/features/feat_nAdd.jpeg"}
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">Add New Node</h3>
          <p class="text-justify">
            Expanding your business? Did you add more pond? Ok you need a new
            node. With our "Add New Node" features, you can easily adds new node
            to put in the pond. Add the pond first, then add the node. You don't
            need to worry about anything.
          </p>
        </div>
      </div>
      <div class="my-3"></div>
      {/* <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://via.placeholder.com/600x400"
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">
            Bug Reporting (<strong>BETA</strong>)
          </h3>
          <p class="text-justify">
            If you ever found any bugs, or you wanted to submit a feature
            suggestions, we're pleased to know that!
          </p>
          <p class="text-justify">
            Reach us by going to the "About Us" section, and contact us uding
            any of the available number. Any suggestion and critics will help us
            design this application to be better :D
          </p>
        </div>
      </div> */}
      <div class="row">
        <div class="col-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            //src="https://via.placeholder.com/600x400"
            src={"img/features/feat_user.png"}
            alt="..."
          />
        </div>
        <div class="col-5">
          <h3 class="font-weight-light">Manage User Access</h3>
          <p class="text-justify">
            So you add new employee to be behind the desk. You can easily sets
            the new account for that guy.
          </p>
          <p class="text-justify">
            "Oh No, I fired him because he's working recklessly. I don't want
            him to still be able to access the apps."
            <br />
            Don't Worry! you can easily remove that account as well as adding
            new user!
          </p>
        </div>
      </div>
      <div class="my-4"></div>
    </div>
  );
};

export default Features;
