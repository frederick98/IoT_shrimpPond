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

class AAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nIDNode: "",
      nIDPond1: "",
      nIDPond2: "",
      redirectToReferrer: false,
    };
    this.addNode = this.addNode.bind(this);
    this.addPond = this.addPond.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  addNode() {
    if (this.state.nIDNode && this.state.nIDPond1) {
      Profile("addNode", this.state).then((result) => {
        let response = result;
        if (response.userData) {
          sessionStorage.setItem("userData", JSON.stringify(response));
          this.setState({ redirectToReferrer: true });
          alert("Register Success! New Node has been added.");
          this.props.history.push("/admins/monitoring/ANodeCheck");
        } else {
          alert(result.error);
        }
      });
    } else {
      alert("Write Node or Pond ID first!");
    }
  }

  addPond() {
    if (this.state.nIDPond2) {
      Profile("addPond", this.state).then((result) => {
        let response = result;
        if (response.userData) {
          sessionStorage.setItem("userData", JSON.stringify(response));
          this.setState({ redirectToReferrer: true });
          alert("Register Success! New Pond has been added.");
          this.props.history.push("/admins/monitoring/ANodeCheck");
        } else {
          alert(result.error);
        }
      });
    } else {
      alert("Write Pond ID first!");
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <h4>Managing Sensors</h4>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>
                    {/*xs="12" sm="6" md="4"> */}
                    <CCard>
                      <CCardHeader>
                        <h5>Add New Node</h5>
                        <div className="card-header-actions"></div>
                      </CCardHeader>
                      <CCardBody>
                        <CForm>
                          <p className="text-muted">
                            Register new node so it can be used for monitoring.
                          </p>
                          <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                              <CInputGroupText>
                                <CIcon name="cil-input" />
                              </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput
                              type="text"
                              placeholder="Insert New ID Node"
                              name="nIDNode"
                              onChange={this.onChange}
                            />
                          </CInputGroup>
                          <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                              <CInputGroupText>
                                <CIcon name="cil-input" />
                              </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput
                              type="text"
                              placeholder="Insert Pond to Put the Node"
                              name="nIDPond1"
                              onChange={this.onChange}
                            />
                          </CInputGroup>
                          <CButton color="success" block onClick={this.addNode}>
                            Add New Node
                          </CButton>
                        </CForm>
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol>
                    <CCard>
                      <CCardHeader>
                        <h5>Add New Pond</h5>
                      </CCardHeader>
                      <CCardBody>
                        <CForm>
                          <p className="text-muted">
                            Register new pond to monitor.
                          </p>
                          <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                              <CInputGroupText>
                                <CIcon name="cil-input" />
                              </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput
                              type="text"
                              placeholder="Insert New Pond ID"
                              name="nIDPond2"
                              onChange={this.onChange}
                            />
                          </CInputGroup>
                          <CButton color="success" block onClick={this.addPond}>
                            Add New Pond
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

export default withRouter(AAdd);
