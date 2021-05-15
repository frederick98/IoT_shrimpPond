import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Locations = () => {
  return (
    <div>
      <div>
        <h3 class="d-flex-center position-ref">Shrimp Pond Locations</h3>
      </div>
      <div>
        <div id="locMaps">
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
        <div></div>
      </div>
    </div>
  );
};

export default Locations;
