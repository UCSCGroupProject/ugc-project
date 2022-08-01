import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
  CSpinner,
  CAlert,
  CCardSubtitle,
  CButtonGroup,
  CFormSelect,
  CFormCheck,
} from '@coreui/react'

import { cilCheckAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import {
  v_required,
  v_min,
  v_match,
  v_email,
  v_containsUppercase,
  v_containsLowercase,
  v_containsNumber,
  v_containsSpecialChars,
} from '../../utils/validator'

import uniService from '../../services/uniService'

const UniRegistration = () => {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  // For the Section transitions
  const [sectionIndex, setSectionIndex] = useState(2)

  const incrementSection = () => {
    setSectionIndex((sectionIndex + 1) % 4)
  }

  const decrementSection = () => {
    setSectionIndex((sectionIndex - 1) % 4)
  }

  /**
   * SECTION 1
   */
  // Form data
  const [uniDetailsForm, setUniDetailsForm] = useState({
    // Role Details
    uniName: '',
    address: '',
    phoneNumber: '',
  })

  // Update the form data while input
  const onUpdateInput = (e) => {
    setUniDetailsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  //const [addressSet, setAddressSet] = useState([])

  // useEffect(() => {
  //   switch (uniDetailsForm.officeDept) {
  //     case 'OC':
  //       setAddressSet(['Chairman', 'Assistant Secretary'])
  //       break

  //     case 'OVC':
  //       setAddressSet(['Vice-Chairman', 'Senior Assistant Secretary'])
  //       break

  //     case 'OS':
  //       setAddressSet(['Secretary', 'Senior Assistant Secretary'])
  //       break

  //     case 'PD':
  //       setAddressSet(['Senior Assistant Secretary'])
  //       break

  //     case 'UAD':
  //       setAddressSet(['Senior Assistant Secretary', 'Assistant Secretary'])
  //       break

  //     case 'AAD':
  //       setAddressSet(['Deputy Secretary', 'Senior Assistant Secretary', 'Assistant Secretary'])
  //       break

  //     case 'MISD':
  //       setAddressSet(['Statistician', 'Assistant Statistician'])
  //       break

  //     default:
  //       setAddressSet([])
  //       break
  //   }
  // }, [uniDetailsForm.officeDept])

  // For data errors
  const [uniDetailsFormErrors, setUniDetailsFormErrors] = useState({
    // Role Details
    uniNameError: '',
    addressError: '',
    phoneNumberError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleUniDetailsSubmit = async (e) => {
    e.preventDefault()

    // Uni Details
    let uniNameError = ''
    let addressError = ''
    let phoneNumberError = ''

    if (!v_required(uniDetailsForm.uniName)) {
      uniNameError = 'University Name cannot be empty.'
    }

    if (!v_required(uniDetailsForm.address)) {
      addressError = 'Address cannot be empty.'
    }

    if (!v_required(uniDetailsForm.phoneNumber)) {
      phoneNumberError = 'Phone Number cannot be empty.'
    }

    // If errors exist, show errors
    setUniDetailsFormErrors({
      uniNameError,
      addressError,
      phoneNumberError,
    })

    // If no errors exist, send to the server
    if (!(uniNameError || addressError || phoneNumberError)) {
      // Sending to the server
      setLoading(true)
      setResMessage('')
      uniService.uniDetailsFormCheck(uniDetailsForm).then(
        () => {
          setLoading(false)
          incrementSection()
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

  const uniDetailsSection = () => {
    return (
      <section>
        <p className="text-medium-emphasis text-center">
          Please enter your university details in here
        </p>

        <CCard className="p-3 mb-3">
          <CCardSubtitle>University Details</CCardSubtitle>
          <CCardBody>
            <CRow className="g-0 needs-validation">
              <CFormInput
                type="text"
                id="validationUniName"
                label="University Name"
                name="uniName"
                onChange={onUpdateInput}
                value={uniDetailsForm.uniName}
                feedback={uniDetailsFormErrors.uniNameError}
                invalid={uniDetailsFormErrors.uniNameError ? true : false}
              >
                {/* <option value="">Choose office</option>
                <option value="OC">Office of the Chairman</option>
                <option value="OVC">Office of the Vice-Chairman</option>
                <option value="OS">Office of the Secretary</option>
                <option value="PD">Personnel Division</option>
                <option value="UAD">University Admissions Department</option>
                <option value="AAD">Academic Affairs Department</option>
                <option value="MISD">Management Information Systems Division</option> */}
              </CFormInput>
            </CRow>
            <CRow className="g-0 needs-validation">
              <CFormInput
                type="text"
                id="validationAddress"
                label="Address"
                name="address"
                onChange={onUpdateInput}
                value={uniDetailsForm.address}
                feedback={uniDetailsFormErrors.addressError}
                invalid={uniDetailsFormErrors.addressError ? true : false}
              >
                {/* <option value="">Choose Role</option>
                {addressSet.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))} */}
              </CFormInput>
            </CRow>

            <CRow className="g-0 needs-validation">
              <CCol md={4}>
                <CFormInput
                  type="text"
                  id="validationPhoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  onChange={onUpdateInput}
                  value={uniDetailsForm.phoneNumber}
                  feedback={uniDetailsFormErrors.phoneNumberError}
                  invalid={uniDetailsFormErrors.phoneNumberError ? true : false}
                >
                  {/* <option value="">Choose Role</option>
                  {addressSet.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))} */}
                </CFormInput>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

        {resMessage && (
          <CAlert color="danger" className="text-center">
            {resMessage}
          </CAlert>
        )}

        <CRow>
          <CCol md={4} className="ms-auto">
            <CButtonGroup size="sm" className="w-100">
              <CButton color="dark" variant="outline" type="submit" className="p-2">
                Cancel
              </CButton>
              <CButton
                color="primary"
                type="button"
                className="p-2"
                onClick={handleUniDetailsSubmit}
              >
                {loading && <CSpinner size="sm" />} Next
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
      </section>
    )
  }

  /**
   * SECTION 2
   */
  // Form data
  const [uniOtherDetailsForm, setStaffPersonalDetailsForm] = useState({
    // Personal Details
    title: '',
    nameWithInitials: '',
    fullName: '',
    dob: '',
    address: '',
    phoneNumber: '',
    homeNumber: '',
    gender: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  // Update the form data while input
  const onUpdateInputInStaffPersonalDetailsForm = (e) => {
    setStaffPersonalDetailsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [uniOtherDetailsFormErrors, setStaffPersonalDetailsFormErrors] = useState({
    // Student Details
    titleError: '',
    nameWithInitialsError: '',
    fullNameError: '',
    dobError: '',
    addressError: '',
    phoneNumberError: '',
    homeNumberError: '',
    genderError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleStaffPersonalDetailsFormSubmit = async (e) => {
    e.preventDefault()

    // Personal Details
    let titleError = ''
    let nameWithInitialsError = ''
    let fullNameError = ''
    let dobError = ''
    let addressError = ''
    let phoneNumberError = ''
    let homeNumberError = ''
    let genderError = ''

    if (!v_required(uniOtherDetailsForm.title)) {
      titleError = 'Title cannot be empty.'
    }

    if (!v_required(uniOtherDetailsForm.nameWithInitials)) {
      nameWithInitialsError = 'Name with initials cannot be empty.'
    }

    if (!v_required(uniOtherDetailsForm.fullName)) {
      fullNameError = 'Full name cannot be empty.'
    }

    if (!v_required(uniOtherDetailsForm.dob)) {
      dobError = 'Date of birth cannot be empty.'
    }

    if (!v_required(uniOtherDetailsForm.address)) {
      addressError = 'Address cannot be empty.'
    }

    if (!v_required(uniOtherDetailsForm.phoneNumber)) {
      phoneNumberError = 'Phone number cannot be empty.'
    }

    if (!v_required(uniOtherDetailsForm.homeNumber)) {
      homeNumberError = 'Land line cannot be empty.'
    }

    if (!v_required(uniOtherDetailsForm.gender)) {
      genderError = 'Gender can not be empty.'
    }

    // If errors exist, show errors
    setStaffPersonalDetailsFormErrors({
      titleError,
      nameWithInitialsError,
      fullNameError,
      dobError,
      addressError,
      phoneNumberError,
      homeNumberError,
      genderError,
    })

    // If no errors exist, send to the server
    if (
      !(
        titleError ||
        nameWithInitialsError ||
        fullNameError ||
        dobError ||
        addressError ||
        phoneNumberError ||
        homeNumberError ||
        genderError
      )
    ) {
      // Sending to the server
      setLoading(true)
      setResMessage('')
      uniService.uniOtherDetailsFormCheck(uniOtherDetailsForm).then(
        () => {
          setLoading(false)
          incrementSection()
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

  const uniOtherDetailsSection = () => {
    return (
      <section>
        <p className="text-medium-emphasis text-center">
          Please enter your personal information in the following sections
        </p>

        <CCard className="p-3 mb-3">
          <CCardSubtitle>Personal Details</CCardSubtitle>
          <CCardBody>
            <CRow className="g-3 needs-validation">
              <CCol md={2}>
                <CFormSelect
                  label="Title"
                  aria-label="title-select"
                  name="title"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={uniOtherDetailsForm.title}
                  feedback={uniOtherDetailsFormErrors.titleError}
                  invalid={uniOtherDetailsFormErrors.titleError ? true : false}
                >
                  <option value="mrs">Mrs.</option>
                  <option value="miss">Miss.</option>
                  <option value="ms">Ms.</option>
                </CFormSelect>
              </CCol>
              <CCol md={10}>
                <CFormInput
                  type="text"
                  id="validationNameWithInitials"
                  label="Name with initials (English Block Letters Eg: BANDARA DPS)"
                  name="nameWithInitials"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={uniOtherDetailsForm.nameWithInitials}
                  feedback={uniOtherDetailsFormErrors.nameWithInitialsError}
                  invalid={uniOtherDetailsFormErrors.nameWithInitialsError ? true : false}
                />
              </CCol>
              <CCol md={10}>
                <CFormInput
                  type="text"
                  id="validationFullName"
                  label="Full Name (English Block Letters)"
                  name="fullName"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={uniOtherDetailsForm.fullName}
                  feedback={uniOtherDetailsFormErrors.fullNameError}
                  invalid={uniOtherDetailsFormErrors.fullNameError ? true : false}
                />
              </CCol>
              <CCol md={2}>
                <CFormInput
                  type="date"
                  id="validationDob"
                  label="Date of Birth"
                  name="dob"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={uniOtherDetailsForm.dob}
                  feedback={uniOtherDetailsFormErrors.dobError}
                  invalid={uniOtherDetailsFormErrors.dobError ? true : false}
                />
              </CCol>
              <CCol md={12}>
                <CFormInput
                  type="text"
                  id="validationAddress"
                  label="Address"
                  name="address"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={uniOtherDetailsForm.address}
                  feedback={uniOtherDetailsFormErrors.addressError}
                  invalid={uniOtherDetailsFormErrors.addressError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  id="validationPhoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={uniOtherDetailsForm.phoneNumber}
                  feedback={uniOtherDetailsFormErrors.phoneNumberError}
                  invalid={uniOtherDetailsFormErrors.phoneNumberError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  id="validationHomeNumber"
                  label="Land Line"
                  name="homeNumber"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={uniOtherDetailsForm.homeNumber}
                  feedback={uniOtherDetailsFormErrors.homeNumberError}
                  invalid={uniOtherDetailsFormErrors.homeNumberError ? true : false}
                />
              </CCol>
              <CCol md={2}>
                <CFormSelect
                  label="Gender"
                  aria-label="gender-select"
                  name="gender"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={uniOtherDetailsForm.gender}
                  feedback={uniOtherDetailsFormErrors.genderError}
                  invalid={uniOtherDetailsFormErrors.genderError ? true : false}
                >
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                </CFormSelect>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

        {resMessage && (
          <CAlert color="danger" className="text-center">
            {resMessage}
          </CAlert>
        )}

        <CRow>
          <CCol md={4} className="ms-auto">
            <CButtonGroup size="sm" className="w-100">
              <CButton
                color="dark"
                variant="outline"
                type="button"
                className="p-2"
                onClick={decrementSection}
              >
                Back
              </CButton>
              <CButton
                color="primary"
                type="button"
                className="p-2"
                onClick={handleStaffPersonalDetailsFormSubmit}
              >
                {loading && <CSpinner size="sm" />} Next
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
      </section>
    )
  }

  /**
   * SECTION 3
   */
  // Form data
  const [uniLoginDetailsForm, setStaffLoginDetailsForm] = useState({
    // Login Details
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // Strong password guidelines
  const [pwd_guideline_length, set_pwd_guideline_length] = useState(false)
  const [pwd_guideline_uppercase, set_pwd_guideline_uppercase] = useState(false)
  const [pwd_guideline_lowercase, set_pwd_guideline_lowercase] = useState(false)
  const [pwd_guideline_number, set_pwd_guideline_number] = useState(false)
  const [pwd_guideline_specialChar, set_pwd_guideline_specialChar] = useState(false)

  useEffect(() => {
    set_pwd_guideline_length(v_min(uniLoginDetailsForm.password, 8))
    set_pwd_guideline_uppercase(v_containsUppercase(uniLoginDetailsForm.password))
    set_pwd_guideline_lowercase(v_containsLowercase(uniLoginDetailsForm.password))
    set_pwd_guideline_number(v_containsNumber(uniLoginDetailsForm.password))
    set_pwd_guideline_specialChar(v_containsSpecialChars(uniLoginDetailsForm.password))
  }, [uniLoginDetailsForm.password])

  // Update the form data while input
  const onUpdateInputInsetStaffLoginDetailsForm = (e) => {
    setStaffLoginDetailsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [uniLoginDetailsFormErrors, setUniLoginDetailsFormErrors] = useState({
    // Login Details
    usernameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleStaffLoginDetailsFormSubmit = async (e) => {
    e.preventDefault()

    // Login Details
    let usernameError = ''
    let emailError = ''
    let passwordError = ''
    let confirmPasswordError = ''

    if (!v_required(uniLoginDetailsForm.username)) {
      usernameError = 'Username cannot be empty.'
    }

    if (!v_required(uniLoginDetailsForm.email)) {
      emailError = 'Email cannot be empty.'
    } else if (!v_email(uniLoginDetailsForm.email)) {
      emailError = 'Email is not valid.'
    }

    if (!v_required(uniLoginDetailsForm.password)) {
      passwordError = 'Password cannot be empty.'
    } else if (
      !(pwd_guideline_length,
      pwd_guideline_lowercase,
      pwd_guideline_number,
      pwd_guideline_specialChar)
    ) {
      passwordError = 'Password does not satisfy the following guidelines.'
    } else if (!v_match(uniLoginDetailsForm.password, uniLoginDetailsForm.confirmPassword)) {
      passwordError = 'Passwords are not matching.'
    }

    if (!v_required(uniLoginDetailsForm.confirmPassword)) {
      confirmPasswordError = 'Confirm password cannot be empty.'
    }

    // If errors exist, show errors
    setUniLoginDetailsFormErrors({
      usernameError,
      emailError,
      passwordError,
      confirmPasswordError,
    })

    // If no errors exist, send to the server
    if (!(usernameError || emailError || passwordError || confirmPasswordError)) {
      // Sending to the server
      setLoading(true)
      setResMessage('')
      uniService.uniLoginDetailsFormCheck(uniLoginDetailsForm).then(
        () => {
          setLoading(false)
          incrementSection()
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

  const loginDetailsSection = () => {
    return (
      <section>
        <p className="text-medium-emphasis text-center">Please enter your login information.</p>

        <CCard className="p-3 mb-3">
          <CCardSubtitle>Login Details</CCardSubtitle>
          <CCardBody>
            <CRow className="g-3 needs-validation">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  id="validationUsername"
                  label="Username"
                  name="username"
                  onChange={onUpdateInputInsetStaffLoginDetailsForm}
                  value={uniLoginDetailsForm.username}
                  feedback={uniLoginDetailsFormErrors.usernameError}
                  invalid={uniLoginDetailsFormErrors.usernameError ? true : false}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  id="validationEmail"
                  label="Email"
                  name="email"
                  onChange={onUpdateInputInsetStaffLoginDetailsForm}
                  value={uniLoginDetailsForm.email}
                  feedback={uniLoginDetailsFormErrors.emailError}
                  invalid={uniLoginDetailsFormErrors.emailError ? true : false}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="password"
                  id="validationPassword"
                  label="Password"
                  name="password"
                  onChange={onUpdateInputInsetStaffLoginDetailsForm}
                  value={uniLoginDetailsForm.password}
                  feedback={uniLoginDetailsFormErrors.passwordError}
                  invalid={uniLoginDetailsFormErrors.passwordError ? true : false}
                />
                <div className="p-2">
                  <div className={pwd_guideline_length ? 'text-success fw-bold' : ''}>
                    {pwd_guideline_length && (
                      <CIcon icon={cilCheckAlt} size="sm" className="me-1" />
                    )}
                    <small>Password contain more than 8 characters.</small>
                  </div>
                  <div className={pwd_guideline_uppercase ? 'text-success fw-bold' : ''}>
                    {pwd_guideline_uppercase && (
                      <CIcon icon={cilCheckAlt} size="sm" className="me-1" />
                    )}
                    <small>Contains an uppercase letter.</small>
                  </div>
                  <div className={pwd_guideline_lowercase ? 'text-success fw-bold' : ''}>
                    {pwd_guideline_lowercase && (
                      <CIcon icon={cilCheckAlt} size="sm" className="me-1" />
                    )}
                    <small>Contains a lowercase letter.</small>
                  </div>
                  <div className={pwd_guideline_number ? 'text-success fw-bold' : ''}>
                    {pwd_guideline_number && (
                      <CIcon icon={cilCheckAlt} size="sm" className="me-1" />
                    )}
                    <small>Contains a number.</small>
                  </div>
                  <div className={pwd_guideline_specialChar ? 'text-success fw-bold' : ''}>
                    {pwd_guideline_specialChar && (
                      <CIcon icon={cilCheckAlt} size="sm" className="me-1" />
                    )}
                    <small>Contains a special character.</small>
                  </div>
                </div>
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="password"
                  id="validationConfirmPassword"
                  label="Confirm Password"
                  name="confirmPassword"
                  onChange={onUpdateInputInsetStaffLoginDetailsForm}
                  value={uniLoginDetailsForm.confirmPassword}
                  feedback={uniLoginDetailsFormErrors.confirmPasswordError}
                  invalid={uniLoginDetailsFormErrors.confirmPasswordError ? true : false}
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

        {resMessage && (
          <CAlert color="danger" className="text-center">
            {resMessage}
          </CAlert>
        )}

        <CRow>
          <CCol md={4} className="ms-auto">
            <CButtonGroup size="sm" className="w-100">
              <CButton
                color="dark"
                variant="outline"
                type="button"
                className="p-2"
                onClick={decrementSection}
              >
                Back
              </CButton>
              <CButton
                color="primary"
                type="button"
                className="p-2"
                onClick={handleStaffLoginDetailsFormSubmit}
              >
                Next
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
      </section>
    )
  }

  /**
   * SECTION 4
   */
  // Form data
  const [agreement, setAgreement] = useState(false)

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleSubmitStaff = async (e) => {
    e.preventDefault()

    if (agreement) {
      // Sending to the server
      setLoading(true)
      setResMessage('')

      let completeData = {
        address: uniDetailsForm.address,
        uniName: uniDetailsForm.uniName,
        title: uniOtherDetailsForm.title,
        nameWithInitials: uniOtherDetailsForm.nameWithInitials,
        fullName: uniOtherDetailsForm.fullName,
        dob: uniOtherDetailsForm.dob,
        // address: uniOtherDetailsForm.address,
        phoneNumber: uniOtherDetailsForm.phoneNumber,
        homeNumber: uniOtherDetailsForm.homeNumber,
        gender: uniOtherDetailsForm.gender,
        username: uniLoginDetailsForm.username,
        email: uniLoginDetailsForm.email,
        password: uniLoginDetailsForm.password,
      }

      uniService.uniRegister(completeData).then(
        () => {
          navigate('/')
          // console.log(authService.getCurrentUser())
          console.log('Registered successfully')
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

  const termsAndConditionsSection = () => {
    return (
      <section>
        <p className="text-medium-emphasis text-center">
          Before clicking on the “Register” button, carefully read and understand the terms and
          conditions for users of this online service.
        </p>

        <CCard className="p-4 mb-3">
          <CCardSubtitle className="text-decoration-underline">
            Terms and Conditions for the users of this online service of University Grants
            Commission
          </CCardSubtitle>
          <CCardBody>
            {/* <CRow className="g-3 needs-validation">

            </CRow> */}
            <div>
              <ol>
                <li className="mb-3">
                  I agree to use this online service only for the purpose of monitoring and carrying
                  out the tasks that are required of me as part of the functionalities of the
                  university admission process based on the G.C.E. (A/L) Examination, and not for
                  any other purpose.
                </li>
                <li className="mb-3">
                  I am at present a staff member of the University Grants Commission - Sri Lanka. I
                  certify that the details provided by me are my own and do not belong to any other
                  person.
                </li>
                <li className="mb-3">
                  I certify that all details provided / will be provided by me in each step of this
                  registration process for this system via online service are true and correct.
                </li>
                <li className="mb-3">
                  I understand and agree that providing any false, misleading, inaccurate or
                  fraudulent information, details, statements at any time or any attempt to alter
                  the content of this website, fraudulent logins to other user accounts or alter the
                  content or data provided by me or anybody else will result in my staff privileges
                  being invalid at any time and I will be subjected to legal actions.
                </li>
                <li className="mb-3">
                  I am aware that I am not allowed to disclose any confidential information within
                  this online service without permission of the University Grants Commission.
                </li>
                <li className="mb-3">
                  By using this online service I do authorize the University Grants Commission to
                  contact me via given email address, mobile phone number, by way of postal letters
                  or any other electronic and non-electronic means of communication.
                </li>
              </ol>
            </div>
          </CCardBody>
          <CFormCheck
            type="checkbox"
            id="invalidCheck"
            label="Agree to terms and conditions"
            name="agreement"
            value={agreement}
            onChange={(e) => setAgreement(!agreement)}
          />
        </CCard>

        {resMessage && (
          <CAlert color="danger" className="text-center">
            {resMessage}
          </CAlert>
        )}

        <CRow>
          <CCol md={4} className="ms-auto">
            <CButtonGroup size="sm" className="w-100">
              <CButton
                color="dark"
                variant="outline"
                type="button"
                className="p-2"
                onClick={decrementSection}
              >
                Back
              </CButton>
              <CButton
                color="primary"
                type="button"
                className="p-2"
                onClick={handleSubmitStaff}
                disabled={!agreement ? true : false}
              >
                {loading && <CSpinner size="sm" />} Register
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
      </section>
    )
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={10}>
            <CCard className="mx-4">
              <CCardBody className="p-5">
                <CForm onSubmit={handleSubmitStaff}>
                  <h1 className="text-center">Government University Signup</h1>

                  {/* Sections */}
                  {sectionIndex === 0 && uniDetailsSection()}
                  {sectionIndex === 1 && uniOtherDetailsSection()}
                  {sectionIndex === 2 && loginDetailsSection()}
                  {sectionIndex === 3 && termsAndConditionsSection()}
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default UniRegistration
