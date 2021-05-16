import React from "react";
import { Link } from "react-router-dom";

const HowTo = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="my-4 col-auto">
          <h1>How-to-Use Our Applications</h1>
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
          <h3 class="font-weight-light">Step 1</h3>
          <p class="text-justify">Step 1 Explain</p>
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
          <h3 class="font-weight-light">Step 2</h3>
          <p class="text-justify">Step 2 Explain</p>
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
          <h3 class="font-weight-light">Step 3</h3>
          <p class="text-justify">Step 3 Explain</p>
        </div>
      </div>
      <div class="my-3"></div>
    </div>
  );
};

export default HowTo;
