import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
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
  CAlert,
  CSpinner,
} from '@coreui/react'

import { v_required, v_match } from '../../../utils/validator'

import authService from '../../../services/authService'
import universityAdmissionService from '../../../services/student/universityAdmissionService'

function Step3Page() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  const [step3Form, setStep3Form] = useState({
    // School Details
    candidateType: 'School',
    schoolName: '',
    schoolAddress: '',
    schoolAdministrativeDistrict: 'Colombo',
    schoolTelephone: '',
    schoolDateOfAdmission: '',
    alreadyRegisteredAsInternalStudent: 'false',
    alreadyReceivedForeignScholarships: 'false',
  })

  // Update the form data while input
  const onUpdateInput = (e) => {
    setStep3Form((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    const user = authService.getCurrentUser()

    universityAdmissionService.getStep3Form(user.username).then(
      (res) => {
        setLoading(false)
        console.log('RES', res)

        console.log('SETTINGS ADDITIONAL SCHOOLS')
        setAdditionalSchools(res.additionalSchools)

        setStep3Form(res)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()

        // After recieving the server request
        setResMessage(res)
        setLoading(false)
      },
    )
  }, [])

  // For data errors
  const [step3FormErrors, setStep3FormErrors] = useState({
    // Redidence Details
    schoolNameError: '',
    schoolAddressError: '',
    schoolAdministrativeDistrictError: '',
    schoolTelephoneError: '',
    schoolDateOfAdmissionError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleStep3FormSubmit = async (e) => {
    e.preventDefault()

    // Redidence Details
    let schoolNameError = ''
    let schoolAddressError = ''
    let schoolAdministrativeDistrictError = ''
    let schoolTelephoneError = ''
    let schoolDateOfAdmissionError = ''

    if (!v_required(step3Form.schoolName)) {
      schoolNameError = 'School name can not be empty.'
    }

    if (!v_required(step3Form.schoolAddress)) {
      schoolAddressError = 'School address can not be empty.'
    }

    if (!v_required(step3Form.schoolAdministrativeDistrict)) {
      schoolAdministrativeDistrictError = 'School administrative district can not be empty.'
    }

    if (!v_required(step3Form.schoolTelephone)) {
      schoolTelephoneError = 'School telephone can not be empty.'
    }

    if (!v_required(step3Form.schoolDateOfAdmission)) {
      schoolDateOfAdmissionError = 'School date of adimission can not be empty.'
    }

    // If errors exist, show errors
    setStep3FormErrors({
      schoolNameError,
      schoolAddressError,
      schoolAdministrativeDistrictError,
      schoolTelephoneError,
      schoolDateOfAdmissionError,
    })

    console.log(step3FormErrors)

    // If no errors exist, send to the server
    if (
      !(
        schoolNameError ||
        schoolAddressError ||
        schoolAdministrativeDistrictError ||
        schoolTelephoneError ||
        schoolDateOfAdmissionError
      )
    ) {
      console.log('STEP 3 PAGE')
      console.log(step3Form)

      // Sending to the server
      setLoading(true)
      setResMessage('')

      const user = authService.getCurrentUser()

      universityAdmissionService
        .step3FormCheckAndSubmit(step3Form, additionalSchools, user.username)
        .then(
          () => {
            setLoading(false)
            navigate('/student/registration/step4')
          },
          (error) => {
            const res =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString()
            // After recieving the server request
            setResMessage(res)
            setLoading(false)
          },
        )
    }
  }

  const [additionalSchools, setAdditionalSchools] = useState([])

  const [additionalSchoolForm, setAdditionalSchoolForm] = useState({
    additionalSchoolId: 0,
    additionalSchoolDistrict: 'Colombo',
    additionalSchoolName: '',
    additionalSchoolFrom: '',
    additionalSchoolTo: '',
  })

  // Update the form data while input
  const onAdditionalSchoolUpdateInput = (e) => {
    setAdditionalSchoolForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const [additionalSchoolFormErrors, setAdditionalSchoolFormErrors] = useState({
    // Redidence Details
    additionalSchoolDistrictError: '',
    additionalSchoolNameError: '',
    additionalSchoolFromError: '',
    additionalSchoolToError: '',
  })

  const [index, setIndex] = useState(1)

  const incIndex = () => {
    setIndex(index + 1)
  }
  const decIndex = () => {
    setIndex(index - 1)
  }

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleAdditionalSchoolFormSubmit = async (e) => {
    e.preventDefault()

    // Redidence Details
    let additionalSchoolDistrictError = ''
    let additionalSchoolNameError = ''
    let additionalSchoolFromError = ''
    let additionalSchoolToError = ''

    if (!v_required(additionalSchoolForm.additionalSchoolDistrict)) {
      additionalSchoolDistrictError = 'School district can not be empty.'
    }

    if (!v_required(additionalSchoolForm.additionalSchoolName)) {
      additionalSchoolNameError = 'School name can not be empty.'
    }

    if (!v_required(additionalSchoolForm.additionalSchoolFrom)) {
      additionalSchoolFromError = 'Schoolfrom date can not be empty.'
    }

    if (!v_required(additionalSchoolForm.additionalSchoolTo)) {
      additionalSchoolToError = 'School to date can not be empty.'
    }

    // If errors exist, show errors
    setAdditionalSchoolFormErrors({
      additionalSchoolDistrictError,
      additionalSchoolNameError,
      additionalSchoolFromError,
      additionalSchoolToError,
    })

    console.log(additionalSchoolFormErrors)

    // If no errors exist, send to the server
    if (
      !(
        additionalSchoolDistrictError ||
        additionalSchoolNameError ||
        additionalSchoolFromError ||
        additionalSchoolToError
      )
    ) {
      setAdditionalSchoolForm((prev) => ({
        ...prev,
        additionalSchoolId: index,
      }))

      setAdditionalSchools((prev) => [...prev, additionalSchoolForm])

      console.log(additionalSchoolForm)
      incIndex()

      setAdditionalSchoolForm({
        additionalSchoolId: 0,
        additionalSchoolDistrict: 'Colombo',
        additionalSchoolName: '',
        additionalSchoolFrom: '',
        additionalSchoolTo: '',
      })
    }
  }

  const handleAdditionalSchoolFormClear = () => {
    setAdditionalSchools([])
  }

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
                {/* School Details */}
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
                        name="candidateType"
                        id="candidateType_1"
                        value="School"
                        label="School Candidate"
                        onChange={onUpdateInput}
                        checked={step3Form.candidateType === 'School'}
                      />
                      <CFormCheck
                        inline
                        type="radio"
                        name="candidateType"
                        id="candidateType_2"
                        value="Private"
                        label="Private Candidate"
                        onChange={onUpdateInput}
                        checked={step3Form.candidateType === 'Private'}
                      />
                    </div>
                  </CCol>
                  <CCol md={6}>
                    <CFormInput
                      type="text"
                      id="validationSchoolName"
                      label="Name of the School"
                      name="schoolName"
                      onChange={onUpdateInput}
                      value={step3Form.schoolName}
                      feedback={step3FormErrors.schoolNameError}
                      invalid={step3FormErrors.schoolNameError ? true : false}
                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      id="validationSchoolAddress"
                      label="Address of the School"
                      name="schoolAddress"
                      onChange={onUpdateInput}
                      value={step3Form.schoolAddress}
                      feedback={step3FormErrors.schoolAddressError}
                      invalid={step3FormErrors.schoolAddressError ? true : false}
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="Administrative District"
                      aria-label="schoolAdministrativeDistrict-select"
                      name="schoolAdministrativeDistrict"
                      onChange={onUpdateInput}
                      value={step3Form.schoolAdministrativeDistrict}
                      feedback={step3FormErrors.schoolAdministrativeDistrictError}
                      invalid={step3FormErrors.schoolAdministrativeDistrictError ? true : false}
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
                  <CCol md={4}>
                    <CFormInput
                      type="text"
                      id="validationSchoolTelephone"
                      label="School Telephone number"
                      name="schoolTelephone"
                      onChange={onUpdateInput}
                      value={step3Form.schoolTelephone}
                      feedback={step3FormErrors.schoolTelephoneError}
                      invalid={step3FormErrors.schoolTelephoneError ? true : false}
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormInput
                      type="date"
                      id="validationSchoolDateOfAdmission"
                      label="Date of Admission of the Applicant to School"
                      name="schoolDateOfAdmission"
                      onChange={onUpdateInput}
                      value={step3Form.schoolDateOfAdmission}
                      feedback={step3FormErrors.schoolDateOfAdmissionError}
                      invalid={step3FormErrors.schoolDateOfAdmissionError ? true : false}
                    />
                  </CCol>
                </CForm>
              </div>
              <div>
                {/* Additional School Details */}
                <div className="border border-light p-3 row g-3">
                  <CCol md={12}>
                    If you had joined that school on any date after 1st October 2017, give
                    particulars in respect of each School you had attended during the 5 year period
                    prior to that date.
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="District"
                      aria-label="additionalSchoolDistrict-select"
                      name="additionalSchoolDistrict"
                      onChange={onAdditionalSchoolUpdateInput}
                      value={additionalSchoolForm.additionalSchoolDistrict}
                      feedback={additionalSchoolFormErrors.additionalSchoolDistrictError}
                      invalid={additionalSchoolFormErrors.additionalSchoolDistrict ? true : false}
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
                  <CCol md={8}>
                    <CFormInput
                      type="text"
                      id="validationAdditionalSchoolName"
                      label="Name of the School"
                      name="additionalSchoolName"
                      onChange={onAdditionalSchoolUpdateInput}
                      value={additionalSchoolForm.additionalSchoolName}
                      feedback={additionalSchoolFormErrors.additionalSchoolNameError}
                      invalid={additionalSchoolFormErrors.additionalSchoolNameError ? true : false}
                    />
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="date"
                      id="validationAdditionalSchoolFrom"
                      label="From"
                      name="additionalSchoolFrom"
                      onChange={onAdditionalSchoolUpdateInput}
                      value={additionalSchoolForm.additionalSchoolFrom}
                      feedback={additionalSchoolFormErrors.additionalSchoolFromError}
                      invalid={additionalSchoolFormErrors.additionalSchoolFromError ? true : false}
                    />
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="date"
                      id="validationAdditionalSchoolTo"
                      label="To"
                      name="additionalSchoolTo"
                      onChange={onAdditionalSchoolUpdateInput}
                      value={additionalSchoolForm.additionalSchoolTo}
                      feedback={additionalSchoolFormErrors.additionalSchoolToError}
                      invalid={additionalSchoolFormErrors.additionalSchoolToError ? true : false}
                    />
                  </CCol>
                  <CCol md={2}>
                    <CButton
                      color="primary"
                      type="button"
                      className="p-2"
                      className="w-100 mt-3 h-75"
                      onClick={handleAdditionalSchoolFormSubmit}
                    >
                      Add
                    </CButton>
                  </CCol>
                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell>Name of School</CTableHeaderCell>
                        <CTableHeaderCell>Administrative District</CTableHeaderCell>
                        <CTableHeaderCell>From</CTableHeaderCell>
                        <CTableHeaderCell>To</CTableHeaderCell>
                        <CTableHeaderCell>
                          {additionalSchools.length !== 0 && (
                            <CButton
                              color="warning"
                              type="button"
                              className="p-0 float-end"
                              onClick={handleAdditionalSchoolFormClear}
                            >
                              <span className="px-2">Clear Table</span>
                            </CButton>
                          )}
                        </CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {/* {additionalSchools[0].additionalSchoolForm} */}
                      {additionalSchools.map((item) => (
                        <CTableRow id={item.additionalSchoolName}>
                          <CTableHeaderCell>{item.additionalSchoolName}</CTableHeaderCell>
                          <CTableDataCell>{item.additionalSchoolDistrict}</CTableDataCell>
                          <CTableDataCell>{item.additionalSchoolFrom}</CTableDataCell>
                          <CTableDataCell colSpan={2}>{item.additionalSchoolTo}</CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </div>
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
                        name="alreadyRegisteredAsInternalStudent"
                        id="alreadyRegisteredAsInternalStudent_1"
                        value="true"
                        label="Yes"
                        onChange={onUpdateInput}
                        checked={step3Form.alreadyRegisteredAsInternalStudent ? 'true' : 'false'}
                      />
                      <CFormCheck
                        inline
                        type="radio"
                        name="alreadyRegisteredAsInternalStudent"
                        id="alreadyRegisteredAsInternalStudent_2"
                        value="false"
                        label="No"
                        onChange={onUpdateInput}
                        checked={step3Form.alreadyRegisteredAsInternalStudent ? 'true' : 'false'}
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
                        name="alreadyReceivedForeignScholarships"
                        id="alreadyReceivedForeignScholarships_1"
                        value="true"
                        label="Yes"
                        onChange={onUpdateInput}
                        checked={step3Form.alreadyReceivedForeignScholarships ? 'true' : 'false'}
                      />
                      <CFormCheck
                        inline
                        type="radio"
                        name="alreadyReceivedForeignScholarships"
                        id="alreadyReceivedForeignScholarships_2"
                        value="false"
                        label="No"
                        onChange={onUpdateInput}
                        checked={step3Form.alreadyReceivedForeignScholarships ? 'true' : 'false'}
                      />
                    </div>
                  </CCol>
                </CForm>
              </div>
              <br />

              {resMessage && (
                <CAlert color="danger" className="text-center">
                  {resMessage}
                </CAlert>
              )}

              <br />
              <CRow>
                <CCol md={4} className="ms-auto">
                  <CButtonGroup size="sm" className="w-100">
                    <Link to="/" className="btn btn-outline-dark p-2">
                      Cancel
                    </Link>

                    <CButton
                      color="primary"
                      type="button"
                      className="p-2"
                      onClick={handleStep3FormSubmit}
                    >
                      {loading ? (
                        <span>
                          <CSpinner size="sm" /> Validating
                        </span>
                      ) : (
                        <span>Save</span>
                      )}
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
