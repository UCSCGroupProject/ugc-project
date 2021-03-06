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

import staffService from '../../services/staffService'

const StaffRegistration = () => {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  // For the Section transitions
  const [sectionIndex, setSectionIndex] = useState(0)

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
  const [staffRoleDetailsForm, setStaffRoleDetailsForm] = useState({
    // Role Details
    officeDept: '',
    role: '',
  })

  // Update the form data while input
  const onUpdateInput = (e) => {
    setStaffRoleDetailsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const [roleSet, setRoleSet] = useState([])

  useEffect(() => {
    switch (staffRoleDetailsForm.officeDept) {
      case 'OC':
        setRoleSet(['Chairman', 'Assistant Secretary'])
        break

      case 'OVC':
        setRoleSet(['Vice-Chairman', 'Senior Assistant Secretary'])
        break

      case 'OS':
        setRoleSet(['Secretary', 'Senior Assistant Secretary'])
        break

      case 'PD':
        setRoleSet(['Senior Assistant Secretary'])
        break

      case 'UAD':
        setRoleSet(['Senior Assistant Secretary', 'Assistant Secretary'])
        break

      case 'AAD':
        setRoleSet(['Deputy Secretary', 'Senior Assistant Secretary', 'Assistant Secretary'])
        break

      case 'MISD':
        setRoleSet(['Statistician', 'Assistant Statistician'])
        break

      default:
        setRoleSet([])
        break
    }
  }, [staffRoleDetailsForm.officeDept])

  // For data errors
  const [staffRoleDetailsFormErrors, setStaffRoleDetailsFormErrors] = useState({
    // Role Details
    officeDeptError: '',
    roleError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleStaffRoleDetailsSubmit = async (e) => {
    e.preventDefault()

    // Role Details
    let officeDeptError = ''
    let roleError = ''

    if (!v_required(staffRoleDetailsForm.officeDept)) {
      officeDeptError = 'Office/Department cannot be empty.'
    }

    if (!v_required(staffRoleDetailsForm.role)) {
      roleError = 'Role cannot be empty.'
    }

    // If errors exist, show errors
    setStaffRoleDetailsFormErrors({
      officeDeptError,
      roleError,
    })

    // If no errors exist, send to the server
    if (!(officeDeptError || roleError)) {
      // Sending to the server
      setLoading(true)
      setResMessage('')
      staffService.staffRoleDetailsFormCheck(staffRoleDetailsForm).then(
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

  const roleDetailsSection = () => {
    return (
      <section>
        <p className="text-medium-emphasis text-center">
          Please choose your department and role in University Grants Commission
        </p>

        <CCard className="p-3 mb-3">
          <CCardSubtitle>Role Details</CCardSubtitle>
          <CCardBody>
            <CRow className="justify-content-center">
              <CCol md={4}>
                <CFormSelect
                  label="Office / Department"
                  aria-label="Default select example"
                  name="officeDept"
                  onChange={onUpdateInput}
                  value={staffRoleDetailsForm.officeDept}
                  feedback={staffRoleDetailsFormErrors.officeDeptError}
                  invalid={staffRoleDetailsFormErrors.officeDeptError ? true : false}
                >
                  <option value="">Choose office</option>
                  <option value="OC">Office of the Chairman</option>
                  <option value="OVC">Office of the Vice-Chairman</option>
                  <option value="OS">Office of the Secretary</option>
                  <option value="PD">Personnel Division</option>
                  <option value="UAD">University Admissions Department</option>
                  <option value="AAD">Academic Affairs Department</option>
                  <option value="MISD">Management Information Systems Division</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormSelect
                  label="Role"
                  aria-label="Default select example"
                  name="role"
                  onChange={onUpdateInput}
                  value={staffRoleDetailsForm.role}
                  feedback={staffRoleDetailsFormErrors.roleError}
                  invalid={staffRoleDetailsFormErrors.roleError ? true : false}
                >
                  <option value="">Choose Role</option>
                  {roleSet.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
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
              <CButton color="dark" variant="outline" type="submit" className="p-2">
                Cancel
              </CButton>
              <CButton
                color="primary"
                type="button"
                className="p-2"
                onClick={handleStaffRoleDetailsSubmit}
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
  const [staffPersonalDetailsForm, setStaffPersonalDetailsForm] = useState({
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
  const [staffPersonalDetailsFormErrors, setStaffPersonalDetailsFormErrors] = useState({
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

    if (!v_required(staffPersonalDetailsForm.title)) {
      titleError = 'Title cannot be empty.'
    }

    if (!v_required(staffPersonalDetailsForm.nameWithInitials)) {
      nameWithInitialsError = 'Name with initials cannot be empty.'
    }

    if (!v_required(staffPersonalDetailsForm.fullName)) {
      fullNameError = 'Full name cannot be empty.'
    }

    if (!v_required(staffPersonalDetailsForm.dob)) {
      dobError = 'Date of birth cannot be empty.'
    }

    if (!v_required(staffPersonalDetailsForm.address)) {
      addressError = 'Address cannot be empty.'
    }

    if (!v_required(staffPersonalDetailsForm.phoneNumber)) {
      phoneNumberError = 'Phone number cannot be empty.'
    }

    if (!v_required(staffPersonalDetailsForm.homeNumber)) {
      homeNumberError = 'Land line cannot be empty.'
    }

    if (!v_required(staffPersonalDetailsForm.gender)) {
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
      staffService.staffPersonalDetailsFormCheck(staffPersonalDetailsForm).then(
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

  const personalDetailsSection = () => {
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
                  value={staffPersonalDetailsForm.title}
                  feedback={staffPersonalDetailsFormErrors.titleError}
                  invalid={staffPersonalDetailsFormErrors.titleError ? true : false}
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
                  value={staffPersonalDetailsForm.nameWithInitials}
                  feedback={staffPersonalDetailsFormErrors.nameWithInitialsError}
                  invalid={staffPersonalDetailsFormErrors.nameWithInitialsError ? true : false}
                />
              </CCol>
              <CCol md={10}>
                <CFormInput
                  type="text"
                  id="validationFullName"
                  label="Full Name (English Block Letters)"
                  name="fullName"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={staffPersonalDetailsForm.fullName}
                  feedback={staffPersonalDetailsFormErrors.fullNameError}
                  invalid={staffPersonalDetailsFormErrors.fullNameError ? true : false}
                />
              </CCol>
              <CCol md={2}>
                <CFormInput
                  type="date"
                  id="validationDob"
                  label="Date of Birth"
                  name="dob"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={staffPersonalDetailsForm.dob}
                  feedback={staffPersonalDetailsFormErrors.dobError}
                  invalid={staffPersonalDetailsFormErrors.dobError ? true : false}
                />
              </CCol>
              <CCol md={12}>
                <CFormInput
                  type="text"
                  id="validationAddress"
                  label="Address"
                  name="address"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={staffPersonalDetailsForm.address}
                  feedback={staffPersonalDetailsFormErrors.addressError}
                  invalid={staffPersonalDetailsFormErrors.addressError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  id="validationPhoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={staffPersonalDetailsForm.phoneNumber}
                  feedback={staffPersonalDetailsFormErrors.phoneNumberError}
                  invalid={staffPersonalDetailsFormErrors.phoneNumberError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  id="validationHomeNumber"
                  label="Land Line"
                  name="homeNumber"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={staffPersonalDetailsForm.homeNumber}
                  feedback={staffPersonalDetailsFormErrors.homeNumberError}
                  invalid={staffPersonalDetailsFormErrors.homeNumberError ? true : false}
                />
              </CCol>
              <CCol md={2}>
                <CFormSelect
                  label="Gender"
                  aria-label="gender-select"
                  name="gender"
                  onChange={onUpdateInputInStaffPersonalDetailsForm}
                  value={staffPersonalDetailsForm.gender}
                  feedback={staffPersonalDetailsFormErrors.genderError}
                  invalid={staffPersonalDetailsFormErrors.genderError ? true : false}
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
  const [staffLoginDetailsForm, setStaffLoginDetailsForm] = useState({
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
    set_pwd_guideline_length(v_min(staffLoginDetailsForm.password, 8))
    set_pwd_guideline_uppercase(v_containsUppercase(staffLoginDetailsForm.password))
    set_pwd_guideline_lowercase(v_containsLowercase(staffLoginDetailsForm.password))
    set_pwd_guideline_number(v_containsNumber(staffLoginDetailsForm.password))
    set_pwd_guideline_specialChar(v_containsSpecialChars(staffLoginDetailsForm.password))
  }, [staffLoginDetailsForm.password])

  // Update the form data while input
  const onUpdateInputInsetStaffLoginDetailsForm = (e) => {
    setStaffLoginDetailsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [staffLoginDetailsFormErrors, setStaffLoginDetailsFormErrors] = useState({
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

    if (!v_required(staffLoginDetailsForm.username)) {
      usernameError = 'Username cannot be empty.'
    }

    if (!v_required(staffLoginDetailsForm.email)) {
      emailError = 'Email cannot be empty.'
    } else if (!v_email(staffLoginDetailsForm.email)) {
      emailError = 'Email is not valid.'
    }

    if (!v_required(staffLoginDetailsForm.password)) {
      passwordError = 'Password cannot be empty.'
    } else if (
      !(pwd_guideline_length,
      pwd_guideline_lowercase,
      pwd_guideline_number,
      pwd_guideline_specialChar)
    ) {
      passwordError = 'Password does not satisfy the following guidelines.'
    } else if (!v_match(staffLoginDetailsForm.password, staffLoginDetailsForm.confirmPassword)) {
      passwordError = 'Passwords are not matching.'
    }

    if (!v_required(staffLoginDetailsForm.confirmPassword)) {
      confirmPasswordError = 'Confirm password cannot be empty.'
    }

    // If errors exist, show errors
    setStaffLoginDetailsFormErrors({
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
      staffService.staffLoginDetailsFormCheck(staffLoginDetailsForm).then(
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
                  value={staffLoginDetailsForm.username}
                  feedback={staffLoginDetailsFormErrors.usernameError}
                  invalid={staffLoginDetailsFormErrors.usernameError ? true : false}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  id="validationEmail"
                  label="Email"
                  name="email"
                  onChange={onUpdateInputInsetStaffLoginDetailsForm}
                  value={staffLoginDetailsForm.email}
                  feedback={staffLoginDetailsFormErrors.emailError}
                  invalid={staffLoginDetailsFormErrors.emailError ? true : false}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="password"
                  id="validationPassword"
                  label="Password"
                  name="password"
                  onChange={onUpdateInputInsetStaffLoginDetailsForm}
                  value={staffLoginDetailsForm.password}
                  feedback={staffLoginDetailsFormErrors.passwordError}
                  invalid={staffLoginDetailsFormErrors.passwordError ? true : false}
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
                  value={staffLoginDetailsForm.confirmPassword}
                  feedback={staffLoginDetailsFormErrors.confirmPasswordError}
                  invalid={staffLoginDetailsFormErrors.confirmPasswordError ? true : false}
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
        role: staffRoleDetailsForm.role,
        officeDept: staffRoleDetailsForm.officeDept,
        title: staffPersonalDetailsForm.title,
        nameWithInitials: staffPersonalDetailsForm.nameWithInitials,
        fullName: staffPersonalDetailsForm.fullName,
        dob: staffPersonalDetailsForm.dob,
        address: staffPersonalDetailsForm.address,
        phoneNumber: staffPersonalDetailsForm.phoneNumber,
        homeNumber: staffPersonalDetailsForm.homeNumber,
        gender: staffPersonalDetailsForm.gender,
        username: staffLoginDetailsForm.username,
        email: staffLoginDetailsForm.email,
        password: staffLoginDetailsForm.password,
      }

      staffService.staffRegister(completeData).then(
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
          Before clicking on the ???Register??? button, carefully read and understand the terms and
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
                  I agree to use this online service only for the purpose of monitoring and carrying out 
                  the tasks that are required of me as part of the functionalities of the university
                  admission process based on the G.C.E. (A/L) Examination, and not for any
                  other purpose.
                </li>
                <li className="mb-3">
                  I am at present a staff member of the University Grants Commission - Sri Lanka. I certify
                  that the details provided by me are my own and do not belong to any other person.
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
                  I am aware that I am not allowed to disclose any confidential information 
                  within this online service without permission of the
                  University Grants Commission.
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
          <CCol md={11}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmitStaff}>
                  <h1 className="text-center">Staff Signup</h1>

                  {/* Sections */}
                  {sectionIndex === 0 && roleDetailsSection()}
                  {sectionIndex === 1 && personalDetailsSection()}
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

export default StaffRegistration
