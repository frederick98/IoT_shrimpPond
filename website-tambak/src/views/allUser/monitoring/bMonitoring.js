import React, { Component } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import NodeData from "../../../services/nodeData";

class Monitoring extends Component {
  constructor() {
    super();
  }

  state = { seconds: 1 };

  componentDidMount() {
    //this.updateTimer = setInterval(() => this.loadNewData(), 10000);

    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        {/* <div className="container">
          <NodeData />
        </div> */}
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>Arduino Sensor Node 1</CCardHeader>
              <CCardBody>
                <div>
                  <NodeData idNode="node1" />
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
                <div>
                  <NodeData idNode="node2" />
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default Monitoring;
