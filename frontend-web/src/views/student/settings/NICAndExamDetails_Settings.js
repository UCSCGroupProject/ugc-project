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

function NICAndExamDetails_Settings() {
  return (
    <div>
      <header>
        <CNav variant="tabs">
          <CNavItem>
            <NavLink to="/student/settings/nicandexamdetails" style={{ textDecoration: 'none' }} >
              <CNavLink active>NIC and Exam details</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/settings/studentdetails" style={{ textDecoration: 'none' }}>
              <CNavLink>Student details</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/settings/logindetails" style={{ textDecoration: 'none' }}>
              <CNavLink>Login details</CNavLink>
            </NavLink>
          </CNavItem>
        </CNav>
      </header>
      <CContainer className="bg-white">
        <CRow className="p-2">
          <CCard>
            <CCardBody>
              <CCardTitle>NIC Details</CCardTitle>
              <hr />
              <CCardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </CCardText>
              <div>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">NIC Number</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="text"
                      id="validationNic"
                      //   label="NIC Number"
                      name="nic"
                      //   onChange={onUpdateInput}
                      //   value={stuNicAndExamForm.nic}
                      //   feedback={stuNicAndExamFormErrors.nicError}
                      feedback="error"
                      // invalid={stuNicAndExamFormErrors.nicError ? true : false}
                      invalid={true}
                    />
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Retype NIC Number</CFormLabel>
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
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">NIC Date of Issue</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="date"
                      id="validationDateOfIssue"
                      //   label="NIC Date of Issue"
                      name="nicDateOfIssue"
                      //   onChange={onUpdateInput}
                      //   value={stuNicAndExamForm.nicDateOfIssue}
                      //   feedback={stuNicAndExamFormErrors.nicDateOfIssueError}
                      //   invalid={stuNicAndExamFormErrors.nicDateOfIssueError ? true : false}
                    />
                  </CCol>
                </CRow>
              </div>
              <br />
              <br />

              {/* Exam details */}
              <CCardTitle>Details of G.C.E. (A/L) October 2020</CCardTitle>
              <hr />
              <CCardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </CCardText>
              <div>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Index Number</CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="text"
                      id="validationIndexNo"
                      name="indexNo"
                      //   onChange={onUpdateInput}
                      //   value={stuNicAndExamForm.indexNo}
                      //   feedback={stuNicAndExamFormErrors.indexNoError}
                      //   invalid={stuNicAndExamFormErrors.indexNoError ? true : false}
                    />
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">
                      ID type used at the G.C.E (A/l)
                    </CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormSelect
                      aria-label="Default select example"
                      name="usedIDType"
                      //   onChange={onUpdateInput}
                      //   value={stuNicAndExamForm.usedIDType}
                      //   feedback={stuNicAndExamFormErrors.usedIDTypeError}
                      //   invalid={stuNicAndExamFormErrors.usedIDTypeError ? true : false}
                    >
                      <option value="NIC">National Identity Card (NIC)</option>
                      <option value="PIC">Postal Identity Card (PIC)</option>
                      <option value="DL">Driving License (DL)</option>
                      <option value="SLPP">Sri Lankan Passport (SLPP)</option>
                      <option value="FPP">Foreign Passport (FPP)</option>
                      <option value="CP">Certified Photographs (CP)</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">
                      ID Number used at the G.C.E (A/L)
                    </CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="text"
                      id="validationCustomUsedIDNo"
                      name="usedIDNo"
                      //   onChange={onUpdateInput}
                      //   value={stuNicAndExamForm.usedIDNo}
                      //   feedback={stuNicAndExamFormErrors.usedIDNoError}
                      //   invalid={stuNicAndExamFormErrors.usedIDNoError ? true : false}
                    />
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">
                      Date of issue of ID used at the G.C.E (A/L)
                    </CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="date"
                      id="validationCustomUsedIDDateOfIssue"
                      name="usedIDDateOfIssue"
                      //   onChange={onUpdateInput}
                      //   value={stuNicAndExamForm.usedIDDateOfIssue}
                      //   feedback={stuNicAndExamFormErrors.usedIDDateOfIssueError}
                      //   invalid={stuNicAndExamFormErrors.usedIDDateOfIssueError ? true : false}
                    />
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">
                      Scanned copy of ID (One copy only)
                    </CFormLabel>
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="file"
                      id="validationCustomUsedIDCopy"
                      name="usedIDCopy"
                      //   onChange={onUpdateInput}
                      // value={stuRegForm.usedIDCopy}
                      //   feedback={stuNicAndExamFormErrors.usedIDCopyError}
                      //   invalid={stuNicAndExamFormErrors.usedIDCopyError ? true : false}
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

export default NICAndExamDetails_Settings
