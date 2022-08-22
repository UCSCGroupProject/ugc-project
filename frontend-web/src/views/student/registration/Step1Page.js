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
  CButtonGroup,
  CAlert,
  CSpinner,
} from '@coreui/react'

import { v_required, v_match } from '../../../utils/validator'

import universityAdmissionService from '../../../services/student/universityAdmissionService'
import authService from '../../../services/authService'

function Step1Page() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  const [step1Form, setStep1Form] = useState({
    // Redidence Details
    permanentAddress: '',
    administrativeDistrict: 'Colombo',
    fixedTelephone: '',
    residenceStartLivingDate: '',
    race: 'Sinhala',
    religion: 'Buddhism',
    citizenByDescent: 'Yes',
    contactAddress: '',
    postalCode: '',
    // Parent/Guardian details
    fatherFullname: '',
    motherFullname: '',
    guardianFullname: '',
    // Contact person details
    contactPersonType: 'Father',
    contactPersonAddress: '',
    contactPersonFixedTelephone: '',
    contactPersonMobile: '',
  })

  // Update the form data while input
  const onUpdateInput = (e) => {
    setStep1Form((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    setLoading(true)

    const user = authService.getCurrentUser()

    universityAdmissionService.getStep1Form(user.username).then(
      (res) => {
        setLoading(false)
        setStep1Form(res)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()

        // After recieving the server request
        // setResMessage(res)
        console.log(res)
        setLoading(false)
      },
    )
  }, [])

  const [contactPersonTypeText, setContactPersonTypeText] = useState('Father')

  useEffect(() => {
    setContactPersonTypeText(step1Form.contactPersonType)
  }, [step1Form.contactPersonType])

  // For data errors
  const [step1FormErrors, setStep1FormErrors] = useState({
    // Redidence Details
    permanentAddressError: '',
    administrativeDistrictError: '',
    fixedTelephoneError: '',
    residenceStartLivingDateError: '',
    raceError: '',
    religionError: '',
    citizenByDescentError: '',
    contactAddressError: '',
    postalCodeError: '',
    // Parent/Guardian details
    fatherFullnameError: '',
    motherFullnameError: '',
    guardianFullnameError: '',
    // Contact person details
    contactPersonTypeError: '',
    contactPersonAddressError: '',
    contactPersonFixedTelephoneError: '',
    contactPersonMobileError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleStep1FormSubmit = async (e) => {
    e.preventDefault()

    // Redidence Details
    let permanentAddressError = ''
    let administrativeDistrictError = ''
    let fixedTelephoneError = ''
    let residenceStartLivingDateError = ''
    let raceError = ''
    let religionError = ''
    let citizenByDescentError = ''
    let contactAddressError = ''
    let postalCodeError = ''
    // Parent/Guardian details
    let fatherFullnameError = ''
    let motherFullnameError = ''
    let guardianFullnameError = ''
    // Contact person details
    let contactPersonTypeError = ''
    let contactPersonAddressError = ''
    let contactPersonFixedTelephoneError = ''
    let contactPersonMobileError = ''

    if (!v_required(step1Form.permanentAddress)) {
      permanentAddressError = 'Permanent address can not be empty.'
    }

    if (!v_required(step1Form.administrativeDistrict)) {
      administrativeDistrictError = 'Administrative district can not be empty.'
    }

    if (!v_required(step1Form.fixedTelephone)) {
      fixedTelephoneError = 'Fixed telephone can not be empty.'
    }

    if (!v_required(step1Form.residenceStartLivingDate)) {
      residenceStartLivingDateError = 'Residence start livind date can not be empty.'
    }

    if (!v_required(step1Form.race)) {
      raceError = 'Race can not be empty.'
    }

    if (!v_required(step1Form.religion)) {
      religionError = 'Religion can not be empty.'
    }

    if (!v_required(step1Form.citizenByDescent)) {
      citizenByDescentError = 'Citizen by descent can not be empty.'
    }

    if (!v_required(step1Form.contactAddress)) {
      contactAddressError = 'Contact address can not be empty.'
    }

    if (!v_required(step1Form.postalCode)) {
      postalCodeError = 'Postal code can not be empty.'
    }

    if (!v_required(step1Form.fatherFullname)) {
      fatherFullnameError = 'Fathers fullname can not be empty.'
    }

    if (!v_required(step1Form.motherFullname)) {
      motherFullnameError = 'Mothers fullname can not be empty.'
    }

    if (v_match(step1Form.fatherFullname, step1Form.motherFullname)) {
      motherFullnameError = 'Father and mother names cant be same.'
    }

    if (!v_required(step1Form.guardianFullname)) {
      guardianFullnameError = 'Guardian fullname can not be empty.'
    }

    if (!v_required(step1Form.contactPersonType)) {
      contactPersonTypeError = 'Contact person type can not be empty.'
    }

    if (!v_required(step1Form.contactPersonAddress)) {
      contactPersonAddressError = 'Contact person address can not be empty.'
    }

    if (!v_required(step1Form.contactPersonFixedTelephone)) {
      contactPersonFixedTelephoneError = 'Contact person fixed telephone can not be empty.'
    }

    if (!v_required(step1Form.contactPersonMobile)) {
      contactPersonMobileError = 'Contact person mobile can not be empty.'
    }

    // If errors exist, show errors
    setStep1FormErrors({
      permanentAddressError,
      administrativeDistrictError,
      fixedTelephoneError,
      residenceStartLivingDateError,
      raceError,
      religionError,
      citizenByDescentError,
      contactAddressError,
      postalCodeError,
      fatherFullnameError,
      motherFullnameError,
      guardianFullnameError,
      contactPersonTypeError,
      contactPersonAddressError,
      contactPersonFixedTelephoneError,
      contactPersonMobileError,
    })

    console.log(step1FormErrors)

    // If no errors exist, send to the server
    if (
      !(
        permanentAddressError ||
        administrativeDistrictError ||
        fixedTelephoneError ||
        residenceStartLivingDateError ||
        raceError ||
        religionError ||
        citizenByDescentError ||
        contactAddressError ||
        postalCodeError ||
        fatherFullnameError ||
        motherFullnameError ||
        guardianFullnameError ||
        contactPersonTypeError ||
        contactPersonAddressError ||
        contactPersonFixedTelephoneError ||
        contactPersonMobileError
      )
    ) {
      console.log('STEP 1 PAGE')

      // Sending to the server
      setLoading(true)
      setResMessage('')

      const user = authService.getCurrentUser()

      universityAdmissionService.step1FormCheckAndSubmit(step1Form, user.username).then(
        () => {
          console.log(step1Form)
          setLoading(false)
          navigate('/student/registration/step2')
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
                <CForm className="row g-3">
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      id="validationPermanentAddress"
                      label="Permananet Address of Residence"
                      name="permanentAddress"
                      onChange={onUpdateInput}
                      value={step1Form.permanentAddress}
                      feedback={step1FormErrors.permanentAddressError}
                      invalid={step1FormErrors.permanentAddressError ? true : false}
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="Administrative District"
                      aria-label="placeOfBirth-select"
                      name="administrativeDistrict"
                      onChange={onUpdateInput}
                      value={step1Form.administrativeDistrict}
                      feedback={step1FormErrors.administrativeDistrictError}
                      invalid={step1FormErrors.administrativeDistrictError ? true : false}
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
                      id="validationFixedPhoneNumber"
                      label="Fixed Phone number"
                      name="fixedTelephone"
                      onChange={onUpdateInput}
                      value={step1Form.fixedTelephone}
                      feedback={step1FormErrors.fixedTelephoneError}
                      invalid={step1FormErrors.fixedTelephoneError ? true : false}
                    />
                  </CCol>
                  <CCol md={5}>
                    <CFormInput
                      type="date"
                      id="validationResidenceStartLivingDate"
                      label="Since when you have been residing at the above address?"
                      name="residenceStartLivingDate"
                      onChange={onUpdateInput}
                      value={step1Form.residenceStartLivingDate}
                      feedback={step1FormErrors.residenceStartLivingDateError}
                      invalid={step1FormErrors.residenceStartLivingDateError ? true : false}
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="Race"
                      aria-label="race-select"
                      name="race"
                      onChange={onUpdateInput}
                      value={step1Form.race}
                      feedback={step1FormErrors.raceError}
                      invalid={step1FormErrors.raceError ? true : false}
                    >
                      <option value="Colombo">Sinhala</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="Religion"
                      aria-label="religion-select"
                      name="religion"
                      onChange={onUpdateInput}
                      value={step1Form.religion}
                      feedback={step1FormErrors.religionError}
                      invalid={step1FormErrors.religionError ? true : false}
                    >
                      <option value="Colombo">Buddhism</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="Citizen by descent"
                      aria-label="citizenByDescent-select"
                      name="citizenByDescent"
                      onChange={onUpdateInput}
                      value={step1Form.citizenByDescent}
                      feedback={step1FormErrors.citizenByDescentError}
                      invalid={step1FormErrors.citizenByDescentError ? true : false}
                    >
                      <option value="Colombo">Yes</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      id="validationContactAddress"
                      label="Contact Address"
                      name="contactAddress"
                      onChange={onUpdateInput}
                      value={step1Form.contactAddress}
                      feedback={step1FormErrors.contactAddressError}
                      invalid={step1FormErrors.contactAddressError ? true : false}
                    />
                  </CCol>
                  <CCol md={3}>
                    <CFormInput
                      type="text"
                      id="validationPostalCode"
                      label="Postal Code"
                      name="postalCode"
                      onChange={onUpdateInput}
                      value={step1Form.postalCode}
                      feedback={step1FormErrors.postalCodeError}
                      invalid={step1FormErrors.postalCodeError ? true : false}
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
                      id="validationFatherFullname"
                      label="Father's Fullname"
                      name="fatherFullname"
                      onChange={onUpdateInput}
                      value={step1Form.fatherFullname}
                      feedback={step1FormErrors.fatherFullnameError}
                      invalid={step1FormErrors.fatherFullnameError ? true : false}
                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      id="validationMotherFullname"
                      label="Mother's Fullname"
                      name="motherFullname"
                      onChange={onUpdateInput}
                      value={step1Form.motherFullname}
                      feedback={step1FormErrors.motherFullnameError}
                      invalid={step1FormErrors.motherFullnameError ? true : false}
                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      id="validationGuardianFullname"
                      label="Guardian's Fullname"
                      name="guardianFullname"
                      onChange={onUpdateInput}
                      value={step1Form.guardianFullname}
                      feedback={step1FormErrors.guardianFullnameError}
                      invalid={step1FormErrors.guardianFullnameError ? true : false}
                    />
                  </CCol>
                </CForm>
              </div>
              <br />
              <br />

              {/* Contact Person Details */}
              <CCardTitle>Contact Person Details</CCardTitle>
              <hr />
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol md={12}>
                    Who is your contact person generally?{' '}
                    <CFormCheck
                      button={{ color: 'primary', variant: 'outline' }}
                      type="radio"
                      name="contactPersonType"
                      id="1"
                      label="Father"
                      value="Father"
                      onChange={onUpdateInput}
                      checked={step1Form.contactPersonType === 'Father'}
                      defaultChecked
                    />
                    {'   '}
                    <CFormCheck
                      button={{ color: 'primary', variant: 'outline' }}
                      type="radio"
                      name="contactPersonType"
                      id="2"
                      label="Mother"
                      value="Mother"
                      onChange={onUpdateInput}
                      checked={step1Form.contactPersonType === 'Mother'}
                    />
                    {'   '}
                    <CFormCheck
                      button={{ color: 'primary', variant: 'outline' }}
                      type="radio"
                      name="contactPersonType"
                      id="3"
                      label="Guardian"
                      value="Guardian"
                      onChange={onUpdateInput}
                      checked={step1Form.contactPersonType === 'Guardian'}
                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      id="validationContactPersonAddress"
                      label={`Address of ${contactPersonTypeText}`}
                      name="contactPersonAddress"
                      onChange={onUpdateInput}
                      value={step1Form.contactPersonAddress}
                      feedback={step1FormErrors.contactPersonAddressError}
                      invalid={step1FormErrors.contactPersonAddressError ? true : false}
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormInput
                      type="text"
                      id="validationContactPersonFixedTelephone"
                      label={`Fixed telephone of ${contactPersonTypeText}`}
                      name="contactPersonFixedTelephone"
                      onChange={onUpdateInput}
                      value={step1Form.contactPersonFixedTelephone}
                      feedback={step1FormErrors.contactPersonFixedTelephoneError}
                      invalid={step1FormErrors.contactPersonFixedTelephoneError ? true : false}
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormInput
                      type="text"
                      id="validationContactPersonMobile"
                      label={`Mobile number of ${contactPersonTypeText}`}
                      name="contactPersonMobile"
                      onChange={onUpdateInput}
                      value={step1Form.contactPersonMobile}
                      feedback={step1FormErrors.contactPersonMobileError}
                      invalid={step1FormErrors.contactPersonMobileError ? true : false}
                    />
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
                      onClick={handleStep1FormSubmit}
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

export default Step1Page
