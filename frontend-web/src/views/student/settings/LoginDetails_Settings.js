import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CNav,
  CNavItem,
  CNavLink,
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CButton,
} from '@coreui/react'

function LoginDetails_Settings() {
  return (
    <div>
      <header>
        <CNav variant="tabs">
          <CNavItem>
            <NavLink to="/student/nic_and_exam_details_settings" style={{ textDecoration: 'none' }}>
              <CNavLink>NIC and Exam details</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/student_details_settings" style={{ textDecoration: 'none' }}>
              <CNavLink>Student details</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/login_details_settings" style={{ textDecoration: 'none' }}>
              <CNavLink active>Login details</CNavLink>
            </NavLink>
          </CNavItem>
        </CNav>
      </header>
      <CContainer className="bg-white">
        <CRow className="p-2">
          <CCard>
            <CCardBody>
              <CCardTitle>Login Details</CCardTitle>
              <hr />
              <CCardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </CCardText>
              <div>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="text"
                      id="validationMobilePhoneNumber"
                      name="username"
                      // onChange={onUpdateInputInsetStuLoginDetailsForm}
                      // value={stuLoginDetailsForm.username}
                      // feedback={stuLoginDetailsFormErrors.usernameError}
                      // invalid={stuLoginDetailsFormErrors.usernameError ? true : false}
                    />
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Email</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="text"
                      id="validationMobilePhoneNumber"
                      name="email"
                      // onChange={onUpdateInputInsetStuLoginDetailsForm}
                      // value={stuLoginDetailsForm.username}
                      // feedback={stuLoginDetailsFormErrors.usernameError}
                      // invalid={stuLoginDetailsFormErrors.usernameError ? true : false}
                    />
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Old Password</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="text"
                      id="validationMobilePhoneNumber"
                      name="oldPassword"
                      // onChange={onUpdateInputInsetStuLoginDetailsForm}
                      // value={stuLoginDetailsForm.username}
                      // feedback={stuLoginDetailsFormErrors.usernameError}
                      // invalid={stuLoginDetailsFormErrors.usernameError ? true : false}
                    />
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">New Password</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="text"
                      id="validationMobilePhoneNumber"
                      name="newPassword"
                      // onChange={onUpdateInputInsetStuLoginDetailsForm}
                      // value={stuLoginDetailsForm.username}
                      // feedback={stuLoginDetailsFormErrors.usernameError}
                      // invalid={stuLoginDetailsFormErrors.usernameError ? true : false}
                    />
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Confirm New Password</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="text"
                      id="validationMobilePhoneNumber"
                      name="confirmNewPassword"
                      // onChange={onUpdateInputInsetStuLoginDetailsForm}
                      // value={stuLoginDetailsForm.username}
                      // feedback={stuLoginDetailsFormErrors.usernameError}
                      // invalid={stuLoginDetailsFormErrors.usernameError ? true : false}
                    />
                  </CCol>
                </CRow>
              </div>

              <CRow className="my-5 mx-1">
                <CCol md={4}></CCol>
                <CCol md={5}>
                  <CButton
                    color="primary"
                    type="button"
                    className="p-2 w-50 "
                    //   onClick={handleStuNicAndExamFormSubmit}
                  >
                    {/* {loading ? (
                        <span>
                          <CSpinner size="sm" /> Validating
                        </span>
                      ) : (
                        <span>Next</span>
                      )} */}
                    Save
                  </CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CRow>
      </CContainer>
    </div>
  )
}

export default LoginDetails_Settings
