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
  CCardText,
  CFormInput,
  CFormSelect,
  CButton,
  CForm,
  CFormCheck,
  CButtonGroup,
} from '@coreui/react'

function Step1Page() {
  return (
    <div>
      <header>
        <CNav variant="tabs">
          <CNavItem>
            <NavLink to="/student/registration/step1" style={{ textDecoration: 'none' }}>
              <CNavLink active>Step 1</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step2" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 2</CNavLink>
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
          <CCard>
            <CCardBody>
              {/* Residence Details */}
              <CCardTitle>Residence Details</CCardTitle>
              <hr />
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Permanent Address of Residence"
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
                  <CCol md={3}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Fixed Telephone Number"
                      required
                    />
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="date"
                      id="validationDob"
                      label="Since when you have been residing at the above address?"
                      name="dob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.dob}
                      //   feedback={stuDetailsFormErrors.dobError}
                      //   invalid={stuDetailsFormErrors.dobError ? true : false}
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="Race"
                      aria-label="placeOfBirth-select"
                      name="pob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.pob}
                      //   feedback={stuDetailsFormErrors.pobError}
                      //   invalid={stuDetailsFormErrors.pobError ? true : false}
                    >
                      <option value="Colombo">Sinhala</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="Religion"
                      aria-label="placeOfBirth-select"
                      name="pob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.pob}
                      //   feedback={stuDetailsFormErrors.pobError}
                      //   invalid={stuDetailsFormErrors.pobError ? true : false}
                    >
                      <option value="Colombo">Buddhism</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="Citizen by descent"
                      aria-label="placeOfBirth-select"
                      name="pob"
                      //   onChange={onUpdateInputInStuDetailsForm}
                      //   value={stuDetailsForm.pob}
                      //   feedback={stuDetailsFormErrors.pobError}
                      //   invalid={stuDetailsFormErrors.pobError ? true : false}
                    >
                      <option value="Colombo">Yes</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Contact Address"
                      required
                    />
                  </CCol>
                  <CCol md={3}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Postal Code"
                      required
                    />
                  </CCol>
                </CForm>
              </div>
              <br />
              <br />

              {/* Parent/Guardin Details */}
              <CCardTitle>Parent/Guardian Details</CCardTitle>
              <hr />
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Father's Fullname"
                      required
                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Mother's Fullname"
                      required
                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Guardian's Fullname"
                      required
                    />
                  </CCol>
                </CForm>
              </div>
              <br />
              <br />

              {/* Contact Person Details */}
              <CCardTitle>Contact Person Details</CCardTitle>
              <hr />
              <CCardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </CCardText>
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol md={12}>
                    Who is your contact person generally?{' '}
                    <CFormCheck
                      button={{ color: 'primary', variant: 'outline' }}
                      type="radio"
                      name="options-outlined"
                      id="1"
                      autoComplete="off"
                      label="Father"
                      defaultChecked
                    />
                    {'   '}
                    <CFormCheck
                      button={{ color: 'primary', variant: 'outline' }}
                      type="radio"
                      name="options-outlined"
                      id="2"
                      autoComplete="off"
                      label="Mother"
                    />
                    {'   '}
                    <CFormCheck
                      button={{ color: 'primary', variant: 'outline' }}
                      type="radio"
                      name="options-outlined"
                      id="3"
                      autoComplete="off"
                      label="Guardian"
                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Address of Father/Mother/Guardian"
                      required
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Fixed telephone of Father/Mother/Guardian"
                      required
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormInput
                      type="text"
                      defaultValue="Mark"
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      label="Mobile of Father/Mother/Guardian"
                      required
                    />
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

export default Step1Page
