import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
  return (
    <div class="row">
      <div class="col-lg-6 col-md-offset-3">
        <div id="title">
          <h1>WSN-Based Water Quality</h1>
          <br />
          <h1>Monitoring Application</h1>
          <br />
          <h1>for Shrimp Pond</h1>
        </div>
        <div id="subtitle">
          <br />
          <h5>by Frederick - 2016730040</h5>
        </div>
        <br />
        <div>
          <button class="btn-round">Login</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
