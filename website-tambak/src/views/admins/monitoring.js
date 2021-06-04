import React, { Component } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import PostData from "../../services/PostData";

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
        {/* <div className="container">
          <PostData />
        </div> */}
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>Arduino Sensor Node 1</CCardHeader>
              <CCardBody>
                <div>
                  <PostData />
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
                {/* <CDataTable
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
                /> */}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default Monitoring;
