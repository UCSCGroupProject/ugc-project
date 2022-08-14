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
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
  CFormInput,
  CFormSelect,
  CButton,
  CForm,
  CFormCheck,
  CButtonGroup,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
} from '@coreui/react'

function Step2Page() {
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
              <CNavLink active>Step 2</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step3" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 3</CNavLink>
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
              {/* G.C.E. (O/L) Results */}
              <CCardTitle>G.C.E. (O/L) Results</CCardTitle>
              <hr />
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol md={4}>
                    <CFormSelect
                      label="Category og G.C.E. (O/L)"
                      aria-label="placeOfBirth-select"
                      name="pob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.pob}
                      //   feedback={stuDetailsFormErrors.pobError}
                      //   invalid={stuDetailsFormErrors.pobError ? true : false}
                    >
                      <option value="Colombo">Local G.C.E. (O/l)</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="Year"
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
                      label="Index Number"
                      required
                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Named used in G.C.E.(O/L) Examination"
                      required
                    />
                  </CCol>
                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell>Year</CTableHeaderCell>
                        <CTableHeaderCell>Index Number</CTableHeaderCell>
                        <CTableHeaderCell>English</CTableHeaderCell>
                        <CTableHeaderCell>Maths</CTableHeaderCell>
                        <CTableHeaderCell>Science</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell>2016</CTableHeaderCell>
                        <CTableDataCell>1300724</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
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
                  <CCol md={5}>
                    Above results {'  '}
                    <CFormCheck
                      inline
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineCheckbox1"
                      value="option1"
                      label="Accept"
                      defaultChecked
                    />
                    <CFormCheck
                      inline
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineCheckbox2"
                      value="option2"
                      label="Change"
                    />
                  </CCol>
                </CForm>
              </div>
              <br />
              <br />

              {/* G.C.E. (A/L) Results */}
              <CCardTitle>G.C.E. (A/L) Results</CCardTitle>
              <hr />
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol md={4}>
                    <CFormSelect
                      label="Administrative District from which G.C.E. (A/L) was taken"
                      aria-label="placeOfBirth-select"
                      name="pob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.pob}
                      //   feedback={stuDetailsFormErrors.pobError}
                      //   invalid={stuDetailsFormErrors.pobError ? true : false}
                    >
                      <option value="Colombo">Local G.C.E. (O/l)</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={5}>
                    <CFormSelect
                      label="From which administrative district should you be considered ?"
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
                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell>Year</CTableHeaderCell>
                        <CTableHeaderCell>Index Number</CTableHeaderCell>
                        <CTableHeaderCell>Physics</CTableHeaderCell>
                        <CTableHeaderCell>Chemistry</CTableHeaderCell>
                        <CTableHeaderCell>Biology</CTableHeaderCell>
                        <CTableHeaderCell>Medium</CTableHeaderCell>
                        <CTableHeaderCell>Common General Test</CTableHeaderCell>
                        <CTableHeaderCell>General English</CTableHeaderCell>
                        <CTableHeaderCell>Z-Score</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell>2016</CTableHeaderCell>
                        <CTableDataCell>1300724</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>Sinhala</CTableDataCell>
                        <CTableDataCell>40</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>2.0665</CTableDataCell>
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
                  <CCol md={5}>
                    Above results {'  '}
                    <CFormCheck
                      inline
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineCheckbox1"
                      value="option1"
                      label="Accept"
                      defaultChecked
                    />
                    <CFormCheck
                      inline
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineCheckbox2"
                      value="option2"
                      label="Change"
                    />
                  </CCol>
                  <CCardText>Particulars of G.C.E (A/L)Examination - Previous Attempts</CCardText>
                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell>Year</CTableHeaderCell>
                        <CTableHeaderCell>Index Number</CTableHeaderCell>
                        <CTableHeaderCell>Physics</CTableHeaderCell>
                        <CTableHeaderCell>Chemistry</CTableHeaderCell>
                        <CTableHeaderCell>Biology</CTableHeaderCell>
                        <CTableHeaderCell>Medium</CTableHeaderCell>
                        <CTableHeaderCell>Common General Test</CTableHeaderCell>
                        <CTableHeaderCell>General English</CTableHeaderCell>
                        <CTableHeaderCell>Z-Score</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell>2016</CTableHeaderCell>
                        <CTableDataCell>1300724</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>Sinhala</CTableDataCell>
                        <CTableDataCell>40</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>2.0665</CTableDataCell>
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

export default Step2Page
