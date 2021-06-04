// export function PostData(type, userData) {
//   let BaseURL =
//     "http://localhost/skrispi/IoT_shrimpPond/react-php/api/index.php";
//   return new Promise((resolve, reject) => {
//     fetch(BaseURL + "?tp=" + type, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     })
//       .then((response) =>
//         response.json().then((res) => {
//           resolve(res);
//         })
//       )
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

import React, { useState, useEffect } from "react";

const PostData = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    //fetch("http://localhost/skrispi/IoT_shrimpPond/react-php/api/index.php")
    fetch("http://192.168.100.7/skrispi/IoT_shrimpPond/react-php/api/")
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setItem(result);
      });
  });
  return (
    //<div className="row">
    <div>
      {/* <div className="d_flex my-4, text-uppercase">
        <h1>Show all monitored data from MySQL</h1>
      </div> */}
      <table class="table table-sm table-responsive-md table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Temperature (C)</th>
            <th scope="col">Turbidity (NTU)</th>
            <th scope="col">pH</th>
            <th scope="col">Salinity (ppt)</th>
            <th scope="col">DO</th>
          </tr>
        </thead>
        <tbody>
          {item.map((data) => (
            <tr key={data.idPengamatan}>
              {/* <td>{data.idTambak}</td>
          <td>{data.idNode}</td> */}
              <td>{data.waktuPengamatan}</td>
              <td>{data.temperature}</td>
              <td>{data.turbidity}</td>
              <td>{data.pH}</td>
              <td>{data.salinity}</td>
              <td>{data.DO}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostData;
