import React, { useState, useEffect } from "react";

const NodeStatus = (props) => {
  const [type, setType] = useState(props.idCheck);
  console.log("props = " + props.idCheck + "");

  const [item, setItem] = useState([]);

  useEffect(() => {
    let url = "http://192.168.100.16/skrispi/IoT_shrimpPond/react-php/api/";

    //fetch("http://localhost/skrispi/IoT_shrimpPond/react-php/api/index.php")
    fetch(url + "?type=" + type)
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
            <th scope="col">ID Tambak</th>
            <th scope="col">ID Node</th>
            <th scope="col">Time</th>
            <th scope="col">Status Node</th>
            <th scope="col">Status Monitoring</th>
          </tr>
        </thead>
        <tbody>
          {item.map((data) => (
            <tr key={data.idNode}>
              <td>{data.idTambak}</td>
              <td>{data.idNode}</td>
              <td>{data.waktuNode}</td>
              <td>{data.nodeStat}</td>
              <td>{data.sensorStat}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table class="table table-sm table-responsive-md table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">ID Tambak</th>
            <th scope="col">ID Base Station</th>
            <th scope="col">Status Base Station</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>Online</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NodeStatus;
