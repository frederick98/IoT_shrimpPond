import React, { Component } from "react";
import { Profile } from "../../../services/profile";
import { Redirect } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

class AAddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nUsername: "",
      nPassword: "",
      nEmail: "",
      nName: "",
      redirectToReferrer: false,
    };
    this.register = this.register.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  register() {
    if (
      this.state.nUsername &&
      this.state.nPassword &&
      this.state.nEmail &&
      this.state.nName
    ) {
      Profile("register", this.state).then((result) => {
        let response = result;
        if (response.userData) {
          sessionStorage.setItem("userData", JSON.stringify(response));
          this.setState({ redirectToReferrer: true });
          alert("Register Success! New User has been added.");
        } else {
          alert(result.error);
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
      //return <Redirect to={"/#/admins/ADashboard"} />;
    }
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="9" lg="7" xl="6">
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Add New User</h1>
                    <p className="text-muted">
                      Create new account for new user
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-envelope-closed" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Insert E-Mail"
                        autoComplete="email"
                        name="nEmail"
                        onChange={this.onChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Insert your Name"
                        autoComplete="name"
                        name="nName"
                        onChange={this.onChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Insert Username"
                        autoComplete="username"
                        name="nUsername"
                        onChange={this.onChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Insert Password"
                        autoComplete="new-password"
                        name="nPassword"
                        onChange={this.onChange}
                      />
                    </CInputGroup>
                    <CButton
                      //href=""
                      color="success"
                      block
                      onClick={this.register}
                    >
                      Create Account
                    </CButton>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

export default AAddUser;
