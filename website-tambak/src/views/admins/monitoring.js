import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CDataTable,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import usersData from "../users/UsersData";

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
  "Turbidity (MTU)",
  "pH",
  "Salinity (ppt)",
  "DO",
];

const Monitoring = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Arduino Sensor Node 1</CCardHeader>
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
};

export default Monitoring;
