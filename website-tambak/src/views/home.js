import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { CButton, CCol, CContainer, CRow } from "@coreui/react";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      // username: "",
      // password: "",
      redirectToReferrer: false,
    };
    //this.login = this.login.bind(this);
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
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/dashboard/Dashboard"} />;
    }
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md-auto className="py-5 align-middle">
              <h2>
                WSN-Based Water Quality Monitoring Application for Shrimp Pond
              </h2>
              <h5 className="py-2">2016730040 - Frederick</h5>
              <CButton
                color="primary"
                className="px-4"
                href="/#/dashboard"
                //onClick={this.login}
              >
                Login
              </CButton>
            </CCol>
            {/* <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          name="username"
                          placeholder="Username"
                          autoComplete="username"
                          onChange={this.onChange}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={this.onChange}
                          autoComplete="current-password"
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={this.login}
                          >
                            Login
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol> */}
          </CRow>
        </CContainer>
      </div>
    );
  }
}
export default MainPage;
