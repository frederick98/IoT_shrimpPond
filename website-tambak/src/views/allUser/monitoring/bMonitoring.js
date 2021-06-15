import React, { Component } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import NodeData from "../../../services/nodeData";
import { Profile } from "src/services/profile";

class Monitoring extends Component {
  constructor() {
    super();
  }

  state = { seconds: 1, nodes: [] };

  componentDidMount() {
    //this.updateTimer = setInterval(() => this.loadNewData(), 10000);
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 10000);

    this.calc();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  calc() {
    Profile("calc", this.state).then((result) => {
      let responseJson = result;
      this.setState({ nodes: responseJson });
      console.log(this.state.nodes);
    });
  }

  render() {
    return (
      <div id="calc">
        {this.state.nodes.map((data) => (
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>Arduino Sensor Node {data.idNode}</CCardHeader>
                <CCardBody>
                  <div>
                    <NodeData idNode={data.idNode} />
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        ))}
      </div>
    );
  }
}

export default Monitoring;
