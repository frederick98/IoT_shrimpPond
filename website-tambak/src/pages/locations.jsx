import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Locations = () => {
  return (
    <div class="container">
      <div class="row justify-content-md-center my-4 col-auto">
        <h1 class="d-flex-center position-ref">Shrimp Pond Locations</h1>
      </div>
      <div class="row">
        <div id="locMaps" class="col-sm">
          {/* <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        /> */}
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5231.297410905262!2d106.44209930579586!3d-7.358835794407256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42aecd2ce4bb1f%3A0x2e91a5933115ee4e!2sTambak%20unit%20NAF%20Ujung%20Genteng!5e0!3m2!1sen!2sid!4v1621066508736!5m2!1sen!2sid"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div class="col-sm">
          <h1 class="font-weight-light">PT. Noerwy Aqua Farm</h1>
          <p class="text-justify">
            We did our testing of this application in a shrimp pond located at
            Ujunggenteng, Sukabumi. It's a marine company which specialized in
            exporting a saltwater vannamaei shrimp (<i>Litopenaeus Vannamei</i>
            ). It has produced many vannamaei shrimp for both domestic and
            international markets.
          </p>
          <p class="text-justify">
            The company established in 2005, with Mr. Joko Sasongko as President
            Director. He learned about shrimp farming from farmers and private
            companies in Lampung, which located in South Sumatera until he
            completely understand about shrimp farming, then he decided to start
            his own shrimp farming company called Noerwy Aqua Farm.
          </p>
        </div>
      </div>
      <div class="col">
        <p class="text-justify">
          It is located right in the south coast of Java island as seen on the
          map above, specifically at Ujunggenteng, Sukabumi which is the closest
          and direct water to the Hindian Ocean.
        </p>
      </div>
    </div>
  );
};

export default Locations;
