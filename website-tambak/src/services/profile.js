export function Profile(type, userData) {
  //let url = "http://192.168.1.14/skrispi/IoT_shrimpPond/react-php/api/";
  let url =
    "http://192.168.100.16/skrispi/IoT_shrimpPond/react-php/api/index.php";
  //let url = ("http://localhost/skrispi/IoT_shrimpPond/react-php/api/");
  return new Promise((resolve, reject) => {
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
