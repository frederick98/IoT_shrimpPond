import React, { useState, useEffect } from "react";

const UserList = (props) => {
  const type = "userList";
  //console.log("props = " + props.idNode + "");

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
            <th scope="col">ID Number</th>
            <th scope="col">ID Username</th>
            <th scope="col">Name</th>
            <th scope="col">E-Mail</th>
          </tr>
        </thead>
        <tbody>
          {item.map((data) => (
            <tr key={data.idPengamatan}>
              <td>{data.idUser}</td>
              <td>{data.username}</td>
              <td>{data.namaUser}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
