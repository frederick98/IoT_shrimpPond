import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  CButton,
  CCol,
  CContainer,
  CRow,
  CInput,
  CCardGroup,
  CCard,
  CCardBody,
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Profile } from "../services/profile";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      jabatan: "",
      redirectToReferrer: false,
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.username && this.state.password) {
      Profile("login", this.state).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ jabatan: responseJson.userData.jabatan });
          console.log(this.state.jabatan);
          this.setState({ redirectToReferrer: true });
        } else alert(result.error);
      });
    } else alert("Please fill Username or Password!");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (sessionStorage.getItem("userData")) {
      // Sets which content pages shown to the users.
      if (this.state.jabatan == 1) {
        sessionStorage.setItem("jabatan", 1);
        return <Redirect to={"/admins/ADashboard"} />;
      } else {
        sessionStorage.setItem("jabatan", 0);
        return <Redirect to={"/users/uDashboard"} />;
      }
    }
    return (
      <div
        //style={{ backgroundImage: { background } }}
        className="c-app c-default-layout flex-row align-items-center"
        style={{
          backgroundImage: "url(/img/view.JPG)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md-auto className="py-5 my-4 align-middle">
              {/* <div class="my-4"></div> */}
              <h1 style={{ color: "white" }}>
                <strong>
                  WSN-Based Water Quality Monitoring Application for Shrimp Pond
                </strong>
              </h1>
              <h4 className="py-2" style={{ color: "white" }}>
                <strong>2016730040 - Frederick</strong>
              </h4>
            </CCol>
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted" style={{ color: "black" }}>
                        Sign In to your account
                      </p>
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
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}
export default MainPage;
