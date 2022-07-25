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

function StudentDetails_Settings() {
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
              <CNavLink active>Student details</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/login_details_settings" style={{ textDecoration: 'none' }}>
              <CNavLink>Login details</CNavLink>
            </NavLink>
          </CNavItem>
        </CNav>
      </header>
      <CContainer className="bg-white">
        <CRow className="p-2">
          <CCard>
            <CCardBody>
              <CCardTitle>Student Details</CCardTitle>
              <hr />
              <CCardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </CCardText>
              <div>
                <CRow className="my-3 mx-1">
                  <CCol md={2}>
                    <CFormSelect
                      label="Title"
                      aria-label="title-select"
                      name="title"
                      // onChange={onUpdateInputInStuDetailsForm}
                      // value={stuDetailsForm.title}
                      // feedback={stuDetailsFormErrors.titleError}
                      // invalid={stuDetailsFormErrors.titleError ? true : false}
                    >
                      <option value="mrs">Mrs.</option>
                      <option value="miss">Miss.</option>
                      <option value="ms">Ms.</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={7}>
                    <CFormInput
                      type="text"
                      id="validationNameWithInitials"
                      label="Name of the Applicant with initials (English Block Letters Eg: BANDARA DPS)"
                      className="text-uppercase"
                      name="nameWithInitials"
                      // onChange={onUpdateInputInStuDetailsForm}
                      // value={stuDetailsForm.nameWithInitials}
                      // feedback={stuDetailsFormErrors.nameWithInitialsError}
                      // invalid={stuDetailsFormErrors.nameWithInitialsError ? true : false}
                    />
                  </CCol>
                </CRow>
                <CRow className="mt-3 mb-4 mx-1">
                  <CCol md={9}>
                    <CFormInput
                      type="text"
                      id="validationFullName"
                      label="Applicant’s Full Name (English Block Letters)"
                      className="text-uppercase"
                      name="fullName"
                      // onChange={onUpdateInputInStuDetailsForm}
                      // value={stuDetailsForm.fullName}
                      // feedback={stuDetailsFormErrors.fullNameError}
                      // invalid={stuDetailsFormErrors.fullNameError ? true : false}
                    />
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Date of Birth</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="date"
                      id="validationDob"
                      name="dob"
                      // onChange={onUpdateInputInStuDetailsForm}
                      // value={stuDetailsForm.dob}
                      // feedback={stuDetailsFormErrors.dobError}
                      // invalid={stuDetailsFormErrors.dobError ? true : false}
                    />
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">
                      Place of Birth (District)
                    </CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormSelect
                      aria-label="placeOfBirth-select"
                      name="pob"
                      // onChange={onUpdateInputInStuDetailsForm}
                      // value={stuDetailsForm.pob}
                      // feedback={stuDetailsFormErrors.pobError}
                      // invalid={stuDetailsFormErrors.pobError ? true : false}
                    >
                      <option value="Colombo">Colombo</option>
                      <option value="Gampaha">Gampaha</option>
                      <option value="Kalutara">Kalutara</option>
                      <option value="Kandy">Kandy</option>
                      <option value="Matale">Matale</option>
                      <option value="Nuwara Eliya">Nuwara Eliya</option>
                      <option value="Galle">Galle</option>
                      <option value="Matara">Matara</option>
                      <option value="Hambantota">Hambantota</option>
                      <option value="Jaffna">Jaffna</option>
                      <option value="Kilinochchi">Kilinochchi</option>
                      <option value="Mannar">Mannar</option>
                      <option value="Vavuniya">Vavuniya</option>
                      <option value="Mullaitivu">Mullaitivu</option>
                      <option value="Batticaloa">Batticaloa</option>
                      <option value="Ampara">Ampara</option>
                      <option value="Trincomalee">Trincomalee</option>
                      <option value="Kurunegala">Kurunegala</option>
                      <option value="Puttalam">Puttalam</option>
                      <option value="Anuradhapura">Anuradhapura</option>
                      <option value="Polonnaruwa">Polonnaruwa</option>
                      <option value="Badulla">Badulla</option>
                      <option value="Moneragala">Moneragala</option>
                      <option value="Ratnapura">Ratnapura</option>
                      <option value="Kegalle">Kegalle</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Civil Status</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormSelect
                      aria-label="civilStatus-select"
                      name="civilStatus"
                      // onChange={onUpdateInputInStuDetailsForm}
                      // value={stuDetailsForm.civilStatus}
                      // feedback={stuDetailsFormErrors.civilStatusError}
                      // invalid={stuDetailsFormErrors.civilStatusError ? true : false}
                    >
                      <option value="unmarried">Unmarried</option>
                      <option value="married">Married</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Gender</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormSelect
                      aria-label="gender-select"
                      name="gender"
                      // onChange={onUpdateInputInStuDetailsForm}
                      // value={stuDetailsForm.gender}
                      // feedback={stuDetailsFormErrors.genderError}
                      // invalid={stuDetailsFormErrors.genderError ? true : false}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Phone number</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="text"
                      id="validationConfirmNic"
                      //   label="Retype NIC Number"
                      name="confirmNic"
                      //   onChange={onUpdateInput}
                      //   value={stuNicAndExamForm.confirmNic}
                      //   feedback={stuNicAndExamFormErrors.confirmNicError}
                      //   invalid={stuNicAndExamFormErrors.confirmNicError ? true : false}
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

export default StudentDetails_Settings
