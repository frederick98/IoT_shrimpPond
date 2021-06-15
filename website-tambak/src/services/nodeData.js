import React, { useState, useEffect } from "react";

const NodeData = (props) => {
  const [type, setType] = useState(props.idNode);
  //console.log("props = " + props.idNode + "");

  const [item, setItem] = useState([]);

  useEffect(() => {
    let url = "http://192.168.100.16/skrispi/IoT_shrimpPond/react-php/api/";

    //fetch("http://localhost/skrispi/IoT_shrimpPond/react-php/api/index.php")
    fetch(url + "?type=" + "node" + "&idN=" + type)
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
            <th scope="col">DO (mg/L)</th>
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

export default NodeData;
