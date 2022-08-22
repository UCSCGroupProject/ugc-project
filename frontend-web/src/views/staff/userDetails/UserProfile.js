import React from 'react'

import {
  CCard,
  CCol,
  CCardBody,
  CButton,
  CRow,
  CCardTitle,
} from '@coreui/react'

function UserProfile() {
  return (
    <div>
      <CRow>
        <CCol md={8}>
          <CCard xs>
            <CCardBody>
              <CCardTitle>Work Information</CCardTitle>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CRow>
                    <CCol>Department</CCol>
                    <CCol>Office of the Chairman</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Role</CCol>
                    <CCol>Secretary</CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
          <CCard xs>
            <CCardBody>
              <CCardTitle>Personal Information</CCardTitle>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CRow>
                    <CCol>Title</CCol>
                    <CCol>Mr</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Name with Initials</CCol>
                    <CCol>M. Cauthon</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Full Name</CCol>
                    <CCol>Matrim Cauthon</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Date of Birth</CCol>
                    <CCol>1989-02-06</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Address</CCol>
                    <CCol>No.194, ABC Street, Col 05</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Phone Number</CCol>
                    <CCol>071 3198819</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Land Line</CCol>
                    <CCol>045 2234268</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Gender</CCol>
                    <CCol>Male</CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
          <CCard xs>
            <CCardBody>
              <CCardTitle>Login Information</CCardTitle>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CRow>
                    <CCol>Email</CCol>
                    <CCol>mcauthon89@gmail.com</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Username</CCol>
                    <CCol>mcauthon5</CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={4}>
          <CCard xs>
            <CCardBody>
              <CCardTitle>Actions</CCardTitle>
              <CRow className="py-2 bg-light rounded">
                <CButton color="warning">
                  Edit Privileges
                </CButton>
              </CRow>
              <CRow className="py-2 bg-light rounded">
                <CButton color="success">
                  Send Message
                </CButton>
              </CRow>
              <CRow className="py-2 bg-light rounded">
                <CButton color="danger">
                  Block Account
                </CButton>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default UserProfile
