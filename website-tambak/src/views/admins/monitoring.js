import React, { Component } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CDataTable,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import nodeData from "../../services/data/nodeData";
import usersData from "../users/UsersData";
import { PostData } from "../../services/PostData";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const headers = [
  "Node ID",
  "Time",
  "Temperature (C)",
  "Turbidity (NTU)",
  "pH",
  "Salinity (ppt)",
  "DO",
];

class Monitoring extends Component {
  constructor() {
    super();
    // this.state = {
    //   username: "",
    //   password: "",
    //   redirectToReferrer: false,
    // };
    // this.login = this.login.bind(this);
    //this.onChange = this.onChange.bind(this);
  }

  node1() {
    PostData("node1", "").then((result) => {
      let response = result;

      while (response) {}

      //   while ($row = mysqli_fetch_array($result)){
      //     echo "<tr>";
      //     echo "<td>" . $row['waktuPengamatan'] . "</td>";
      //     echo "<td>" . $row['temperature'] . "</td>";
      //     echo "<td>" . $row['turbidity'] . "</td>";
      //     echo "<td>" . $row['pH'] . "</td>";
      //     echo "<td>" . $row['salinity'] . "</td>";
      //     echo "<td>" . $row['DO'] . "</td>";
      //     echo "</tr>";
      // }
    });
  }

  // login() {
  //   if (this.state.username && this.state.password) {
  //     PostData("login", this.state).then((result) => {
  //       let responseJson = result;
  //       if (responseJson.userData) {
  //         sessionStorage.setItem("userData", JSON.stringify(responseJson));
  //         this.setState({ redirectToReferrer: true });
  //       } else alert(result.error);
  //     });
  //   } else alert("Please fill Username or Password!");
  // }

  render() {
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>Arduino Sensor Node 1</CCardHeader>
              <CCardBody>
                <div>
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
                      {/* <tr>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>Arduino Sensor Node 2</CCardHeader>
              <CCardBody>
                <CDataTable
                  items={usersData}
                  fields={headers}
                  dark
                  hover
                  striped
                  bordered
                  size="sm"
                  itemsPerPage={5}
                  pagination
                  scopedSlots={{
                    status: (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default Monitoring;
