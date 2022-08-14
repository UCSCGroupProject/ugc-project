import React from 'react'
import { NavLink, Link } from 'react-router-dom'
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
  CFormInput,
  CFormSelect,
  CButton,
  CForm,
  CFormCheck,
  CCardText,
  CButtonGroup,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
} from '@coreui/react'

function Step3Page() {
  return (
    <div>
      <header>
        <CNav variant="tabs">
          <CNavItem>
            <NavLink to="/student/registration/step1" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 1</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step2" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 2</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step3" style={{ textDecoration: 'none' }}>
              <CNavLink active>Step 3</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step4" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 4</CNavLink>
            </NavLink>
          </CNavItem>
        </CNav>
      </header>
      <CContainer className="bg-white">
        <CRow className="p-2">
          <CCard className="p-2">
            <CCardBody>
              {/* School Details */}
              <CCardTitle>School Details</CCardTitle>
              <hr />
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol md={12}>
                    <p>
                      State whether you have sat the G.C.E (A/L) Examination, 2020 as a School or
                      Private Candidate?
                    </p>
                    <div>
                      <CFormCheck
                        inline
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineCheckbox1"
                        value="option1"
                        label="School Candidate"
                        defaultChecked
                      />
                      <CFormCheck
                        inline
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineCheckbox2"
                        value="option2"
                        label="Private Candidate"
                      />
                    </div>
                  </CCol>
                  <CCol md={6}>
                    <CFormSelect
                      label="Name of the School"
                      aria-label="placeOfBirth-select"
                      name="pob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.pob}
                      //   feedback={stuDetailsFormErrors.pobError}
                      //   invalid={stuDetailsFormErrors.pobError ? true : false}
                    >
                      <option value="Colombo">2016</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Address of the School"
                      required
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="Administrative District"
                      aria-label="placeOfBirth-select"
                      name="pob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.pob}
                      //   feedback={stuDetailsFormErrors.pobError}
                      //   invalid={stuDetailsFormErrors.pobError ? true : false}
                    >
                      <option value="Colombo">2016</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={4}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="School Telephone number"
                      required
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormInput
                      type="date"
                      id="validationDob"
                      label="Date of Admission of the Applicant to School"
                      name="dob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.dob}
                      //   feedback={stuDetailsFormErrors.dobError}
                      //   invalid={stuDetailsFormErrors.dobError ? true : false}
                    />
                  </CCol>
                  <hr />
                  <CCol md={12}>
                    If you had joined that school on any date adter 1st October 2017, give
                    particulars in respect of each School you had attended during the 5 year period
                    prior to that date.
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="District"
                      aria-label="placeOfBirth-select"
                      name="pob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.pob}
                      //   feedback={stuDetailsFormErrors.pobError}
                      //   invalid={stuDetailsFormErrors.pobError ? true : false}
                    >
                      <option value="Colombo">2016</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={6}>
                    <CFormSelect
                      label="Name of the School"
                      aria-label="placeOfBirth-select"
                      name="pob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.pob}
                      //   feedback={stuDetailsFormErrors.pobError}
                      //   invalid={stuDetailsFormErrors.pobError ? true : false}
                    >
                      <option value="Colombo">2016</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={4}>
                    <CFormInput
                      type="date"
                      id="validationDob"
                      label="From"
                      name="dob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.dob}
                      //   feedback={stuDetailsFormErrors.dobError}
                      //   invalid={stuDetailsFormErrors.dobError ? true : false}
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormInput
                      type="date"
                      id="validationDob"
                      label="To"
                      name="dob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.dob}
                      //   feedback={stuDetailsFormErrors.dobError}
                      //   invalid={stuDetailsFormErrors.dobError ? true : false}
                    />
                  </CCol>
                  <CCol md={12}>
                    <CButton
                      color="primary"
                      type="button"
                      className="p-2"
                      //   onClick={handleStuNicAndExamFormSubmit}
                    >
                      Add
                      {/* {loading ? (
                        <span>
                          <CSpinner size="sm" /> Validating
                        </span>
                      ) : (
                        <span>Next</span>
                      )} */}
                    </CButton>
                  </CCol>
                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell>Name of School</CTableHeaderCell>
                        <CTableHeaderCell>Administrative District</CTableHeaderCell>
                        <CTableHeaderCell>From</CTableHeaderCell>
                        <CTableHeaderCell>To</CTableHeaderCell>
                        <CTableHeaderCell>Remove</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell>Hanwella Rajasinghe Central College</CTableHeaderCell>
                        <CTableDataCell>Colombo</CTableDataCell>
                        <CTableDataCell>2015-08-07</CTableDataCell>
                        <CTableDataCell>2017-05-14</CTableDataCell>
                        <CTableDataCell>
                          <strong className="text-danger">Delete</strong>
                        </CTableDataCell>
                      </CTableRow>
                      {/* {allCoursesData.map((item) => (
                        <CTableRow key={item.id}>
                          <CTableHeaderCell>{item.id}</CTableHeaderCell>
                          <CTableDataCell>{item.unicode}</CTableDataCell>
                          <CTableDataCell>{item.courseOfStudy}</CTableDataCell>
                          <CTableDataCell>{item.university}</CTableDataCell>
                        </CTableRow>
                      ))} */}
                    </CTableBody>
                  </CTable>
                </CForm>
              </div>
              <br />
              <br />

              {/* Other Details */}
              <CCardTitle>Other Details</CCardTitle>
              <hr />
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol md={12}>
                    <p>
                      Were/ Are you registered at any time as an internal student of any institution
                      mentioned in Section 1.7 of the University Admissions Handbook?
                    </p>
                    <div>
                      <CFormCheck
                        inline
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineCheckbox1"
                        value="option1"
                        label="Yes"
                        defaultChecked
                      />
                      <CFormCheck
                        inline
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineCheckbox2"
                        value="option2"
                        label="No"
                      />
                    </div>
                  </CCol>
                  <CCol md={12}>
                    <p>
                      Have you received a foreign scholarship channelled through the Office of the
                      Ministry of Higher Education to follow a cuorse at First Degree level at any
                      time?
                    </p>
                    <div>
                      <CFormCheck
                        inline
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineCheckbox1"
                        value="option1"
                        label="Yes"
                        defaultChecked
                      />
                      <CFormCheck
                        inline
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineCheckbox2"
                        value="option2"
                        label="No"
                      />
                    </div>
                  </CCol>
                </CForm>
              </div>
              <br />

              {/* {resMessage && (
                <CAlert color="danger" className="text-center">
                  {resMessage}
                </CAlert>
              )} */}

              <br />
              <CRow>
                <CCol md={4} className="ms-auto">
                  <CButtonGroup size="sm" className="w-100">
                    {/* <CButton color="dark" variant="outline" type="submit" className="p-2">
                Cancel
              </CButton> */}
                    <Link to="/" className="btn btn-outline-dark p-2">
                      Cancel
                    </Link>

                    <CButton
                      color="primary"
                      type="button"
                      className="p-2"
                      //   onClick={handleStuNicAndExamFormSubmit}
                    >
                      Save
                      {/* {loading ? (
                        <span>
                          <CSpinner size="sm" /> Validating
                        </span>
                      ) : (
                        <span>Next</span>
                      )} */}
                    </CButton>
                  </CButtonGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Step3Page
