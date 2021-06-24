import React, { useEffect } from "react";

export function DeleteUser(type, userData) {
  type = "delUser";
  //let url = "http://170.20.10.6/skrispi/IoT_shrimpPond/react-php/api/";
  let url = "http://localhost/skrispi/IoT_shrimpPond/react-php/api/";
  //let url = ("http://localhost/skrispi/IoT_shrimpPond/react-php/api/");
  return new Promise((resolve, reject) => {
    fetch(url + "?type=" + type + "&username=" + userData, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  });
}
