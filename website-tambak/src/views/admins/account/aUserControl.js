import React, { Component } from "react";
import { Profile } from "../../../services/profile";
import { Redirect } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardHeader,
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
import { withRouter } from "react-router";
import UserList from "src/services/userList";

class AUserControl extends Component {
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

  //state = { seconds: 1 };

  componentDidMount() {
    //this.updateTimer = setInterval(() => this.loadNewData(), 10000);
    // this.timer = setInterval(() => {
    //   this.setState({ seconds: this.state.seconds + 1 });
    // }, 10000);
  }

  componentWillUnmount() {
    //clearInterval(this.timer);
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
          this.props.history.push("/admins/ADashboard");
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
    // if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
    //   //return <Redirect to={"/#/admins/ADashboard"} />;
    // }
    return (
      <>
        {/* <div class="my-3"></div> */}
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <h4>User List</h4>
              </CCardHeader>
              <CCardBody>
                <UserList />
                {/* <NodeStatus idCheck="status" /> */}
                <div class="my-3"></div>
                {/* <CTooltip
                  content={`You don't need to click the button, table refreshed every 1 seconds already!`}
                  placement="bottom"
                >
                  <CButton
                    // onClick={window.location.reload()}
                    color="primary"
                    size="lg"
                    block
                  >
                    Check Node Status
                  </CButton>
                </CTooltip> */}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <h4>Managing Users</h4>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>
                    {/*xs="12" sm="6" md="4"> */}
                    <CCard>
                      <CCardHeader>
                        <h5>Add New Users</h5>
                        <div className="card-header-actions"></div>
                      </CCardHeader>
                      <CCardBody>
                        <CForm>
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
                  <CCol>
                    <CCard>
                      <CCardHeader>
                        <h5>Remove User</h5>
                      </CCardHeader>
                      <CCardBody>
                        <CForm>
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
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default withRouter(AUserControl);
