import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div class="flex-center position-ref full-height">
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
  );
};

export default MainPage;
