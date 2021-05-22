import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
  return (
    <div class="container">
      <div class="container align-content-center">
        <div class="row justify-content-start">
          <div id="title" class="col-8">
            <h1>
              WSN-Based Water Quality
              <br /> Monitoring Application
            </h1>
            <br />
            <h5>by Frederick - 2016730040</h5>
          </div>
        </div>
        <div>
          <a class="btn btn-round btn-dark" href="./login">
            Login
          </a>
          {/* <button class="btn-round" onClick={"signIn"}>
            Login
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
