import React from "react";
import {
  CBadge,
  CCard,
  CButton,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";

const NodeCheck = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showCard, setShowCard] = React.useState(true);

  return (
    <>
      {/* <CRow>
        <CButton color="primary" size="lg" block>
          Check Node Status
        </CButton>
      </CRow> */}

      <div class="my-3"></div>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h3>Node and Sensor Status</h3>
            </CCardHeader>
            <CCardBody>
              <CButton color="primary" size="lg" block>
                Check Node Status
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <div class="my-3"></div>
      <CRow>
        <CCol>
          <CCard color="warning">
            <CCardHeader>
              <h3>All Devices Below Must be Online</h3>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" sm="6" md="4">
                  <CCard>
                    <CCardHeader>
                      Temperature Sensor
                      <div className="card-header-actions">
                        {/* <CBadge color="success" className="float-right">
                          ONLINE
                        </CBadge> */}
                      </div>
                    </CCardHeader>
                    <CCardBody>
                      This sensor does temperature monitoring, it measures
                      temperature of its environment, and converts input data
                      into electronic data to record, monitor, or signal
                      temperature changes.
                      <br />
                      In our apps, it monitors the water temperature of the
                      shrimp pond and sends the data to the controller.
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="12" sm="6" md="4">
                  <CCard>
                    <CCardHeader>
                      Turbidity Sensor
                      <div className="card-header-actions">
                        {/* <CBadge color="danger" className="float-right">
                          OFFLINE
                        </CBadge> */}
                      </div>
                    </CCardHeader>
                    <CCardBody>
                      Turbidity sensors measures the amount of light that is
                      scattered by the suspended solids in the water. <br /> In
                      our apps, it monitors the water's transparency, which
                      caused by the presence of undissolved suspended matter
                      such as shrimp feed, shrimp droppings, or anything else
                      that affects pond's water quality.
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="12" sm="6" md="4">
                  <CCard>
                    <CCardHeader>
                      pH Sensor
                      <div className="card-header-actions">
                        {/* <CBadge color="success" className="float-right">
                          ONLINE
                        </CBadge> */}
                      </div>
                    </CCardHeader>
                    <CCardBody>
                      A pH sensor is one of the most essential tools that used
                      for water quality measurements. It is used for measuring
                      hydrogen-ion activity in water-based solution, which
                      indicates its acidity or alkalinity which expressed as pH.
                      <br /> In our case, the shrimp pond will become more acid
                      there's too many other substances and organisms in the
                      water.
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="12" sm="6" md="4">
                  <CCard>
                    <CCardHeader>
                      Electrical Conductivity (Salinity) Sensor
                      <div className="card-header-actions">
                        {/* <CBadge color="success" className="float-right">
                          ONLINE
                        </CBadge> */}
                      </div>
                    </CCardHeader>
                    <CCardBody>
                      To determine salinity, the most practical method currently
                      used is through electrical conductivity. Salinity sensor
                      measures the electric current through a solution between
                      anodes-katodes in the probe. More salt, which means more
                      electrolite in the solution that causes electric current
                      to easily flows between the electrodes.
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="12" sm="6" md="4">
                  <CCard>
                    <CCardHeader>
                      Dissolved Oxygen Sensor
                      <div className="card-header-actions">
                        {/* <CBadge color="danger" className="float-right">
                          OFFLINE
                        </CBadge> */}
                      </div>
                    </CCardHeader>
                    <CCardBody>
                      As the name says, this sensor measures the dissolved
                      oxygen in the pond. Shrimp needs to maintain its oxygen
                      level. An oxygen level which gets below normal will make
                      shrimp not in the mood to reproduce, or even eat feeds.
                      This condition leds to shrimp mortality in large numbers,
                      which provides enormous losses to the company.
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="12" sm="6" md="4">
                  <CCard>
                    <CCardHeader>
                      Raspberry Pi
                      <div className="card-header-actions">
                        {/* <CBadge color="danger" className="float-right">
                          OFFLINE
                        </CBadge> */}
                      </div>
                    </CCardHeader>
                    <CCardBody>
                      Not just being online, it needs to be connected to a
                      proper network with good connection. It serves as the
                      brains of this application. If this device goes offline,
                      you won't be able to see this webpage.
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* 
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Card with icon
              <div className="card-header-actions">
                <CIcon name="cil-check" className="float-right" />
              </div>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Card with switch
              <div className="card-header-actions">
                <CSwitch
                  className={"float-right mb-0"}
                  color={"info"}
                  defaultChecked
                  size={"sm"}
                  tabIndex="0"
                />
              </div>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </CCardBody>
          </CCard>
        </CCol>  
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Card with label
              <div className="card-header-actions">
                <CBadge shape="pill" color="danger" className="float-right">
                  42
                </CBadge>
              </div>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </>
  );
};

export default NodeCheck;
