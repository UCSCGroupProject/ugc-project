import React from 'react'

import {
  CCard,
  CTable,
  CCol,
  CTableHead,
  CFormInput,
  CCardBody,
  CButton,
  CFormSelect,
  CCardHeader,
  CTableRow,
  CInputGroupText,
  CTableHeaderCell,
  CInputGroup,
  CRow,
  CTableBody,
  CTableDataCell,
  CCardTitle,
  CCardText,
} from '@coreui/react'

function Complaint() {
  return (
    <div>
      <CRow>
        <CCol md={8}>
          <CCard xs>
            <CCardBody>
              <CCardTitle>Complaint</CCardTitle>
              <CCardText>
                I have created my course preference list for my course application. But everytime I do it,
                when I log in again, the application seems to have not been submitted, as in, I can resubmit it again. 
                So I have rechecked my course preference list and submitted again few times now. 
                I'm worried this will become an issue and I have sent several applications now. It says that we can only
                submit the application once. But my application is not being submitted and I have to resubmit the application again. 
                But I can't seem to make any changes as well. Its just that the button shows the application is available 
                for submission.
              </CCardText>
            </CCardBody>
          </CCard>
          <CCard xs>
            <CCardBody>
              <CCardTitle>Information</CCardTitle>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CRow>
                    <CCol>User </CCol>
                    <CCol>Student</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Username</CCol>
                    <CCol>mcauthon5</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Subject</CCol>
                    <CCol>Apply for courses</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Date</CCol>
                    <CCol>2022-05-26</CCol>
                  </CRow>
                  <CRow>
                    <CCol>Time </CCol>
                    <CCol>13:35</CCol>
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
                <CButton color="warning">Close issue</CButton>
              </CRow>
              <CRow className="py-2 bg-light rounded">
                <CButton color="success">Send a message</CButton>
              </CRow>
              <CRow className="py-2 bg-light rounded">
                <CButton color="info">View Profile</CButton>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Complaint
