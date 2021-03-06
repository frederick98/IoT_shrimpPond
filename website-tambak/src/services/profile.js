export function Profile(type, userData) {
  //let url = "http://170.20.10.6/skrispi/IoT_shrimpPond/react-php/api/";
  //let url = "http://192.168.1.13/skrispi/IoT_shrimpPond/react-php/api/";
  let url = "http://localhost/skrispi/IoT_shrimpPond/react-php/api/";
  return new Promise((resolve, reject) => {
    //console.log("type: ", type);
    //console.log("userdata: ", userData);
    fetch(url + "?type=" + type, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) =>
        response.json().then((res) => {
          resolve(res);
        })
      )
      .catch((error) => {
        reject(error);
      });
  });
}
