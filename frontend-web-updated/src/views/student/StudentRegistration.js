import React from 'react'
import { useState, useEffect } from 'react'
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

const StudentRegistration = () => {
  const [sectionIndex, setSectionIndex] = useState(0)

  const incrementSection = () => {
    setSectionIndex((sectionIndex + 1) % 3)

    console.log('FIRST SECTION')
    console.log(stuNicAndExamForm)
    console.log('SECOND SECTION')
    console.log(stuDetailsForm)
    console.log('THIRD SECTION')
    console.log(stuLoginDetailsForm)
  }

  const decrementSection = () => {
    setSectionIndex((sectionIndex - 1) % 3)

    console.log('FIRST SECTION')
    console.log(stuNicAndExamForm)
    console.log('SECOND SECTION')
    console.log(stuDetailsForm)
    console.log('THIRD SECTION')
    console.log(stuLoginDetailsForm)
  }

  /**
   * SECTION 1
   */
  // Form data
  const [stuNicAndExamForm, setStuNicAndExamForm] = useState({
    // NIC Details
    nic: '',
    confirmNic: '',
    nicDateOfIssue: '',
    // Exam details
    indexNo: '',
    usedIDType: '',
    usedIDNo: '',
    usedIDDateOfIssue: '',
    usedIDCopy: '',
  })

  // Update the form data while input
  const onUpdateInput = (e) => {
    setStuNicAndExamForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [stuNicAndExamFormErrors, setStuNicAndExamFormErrors] = useState({
    // NIC Details
    nicError: '',
    confirmNicError: '',
    nicDateOfIssueError: '',
    // Exam details
    indexNoError: '',
    usedIDTypeError: '',
    usedIDNoError: '',
    usedIDDateOfIssueError: '',
    usedIDCopyError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleStuNicAndExamFormSubmit = async (e) => {
    e.preventDefault()

    // NIC Details
    let nicError = ''
    let confirmNicError = ''
    let nicDateOfIssueError = ''
    // Exam details
    let indexNoError = ''
    let usedIDTypeError = ''
    let usedIDNoError = ''
    let usedIDDateOfIssueError = ''
    let usedIDCopyError = ''

    if (!v_required(stuNicAndExamForm.nic)) {
      nicError = 'NIC can not be empty.'
    } else if (!v_match(stuNicAndExamForm.nic, stuNicAndExamForm.confirmNic)) {
      nicError = 'NICs are not matching.'
    }

    if (!v_required(stuNicAndExamForm.confirmNic)) {
      confirmNicError = 'Confirm NIC can not be empty.'
    }

    if (!v_required(stuNicAndExamForm.nicDateOfIssue)) {
      nicDateOfIssueError = 'NIC date of issue can not be empty.'
    }

    if (!v_required(stuNicAndExamForm.indexNo)) {
      indexNoError = 'Index number can not be empty.'
    }

    if (!v_required(stuNicAndExamForm.usedIDType)) {
      usedIDTypeError = 'Used ID type can not be empty.'
    }

    if (!v_required(stuNicAndExamForm.usedIDNo)) {
      usedIDNoError = 'Used ID number can not be empty.'
    }

    if (!v_required(stuNicAndExamForm.usedIDDateOfIssue)) {
      usedIDDateOfIssueError = 'Used ID date of issue can not be empty.'
    }

    if (!v_required(stuNicAndExamForm.usedIDCopy)) {
      usedIDCopyError = 'Used ID copy can not be empty.'
    }

    // If errors exist, show errors
    setStuNicAndExamFormErrors({
      nicError,
      confirmNicError,
      nicDateOfIssueError,
      indexNoError,
      usedIDTypeError,
      usedIDNoError,
      usedIDDateOfIssueError,
      usedIDCopyError,
    })

    // If no errors exist, send to the server
    if (
      !(
        nicError ||
        confirmNicError ||
        nicDateOfIssueError ||
        indexNoError ||
        usedIDTypeError ||
        usedIDNoError ||
        usedIDDateOfIssueError ||
        usedIDCopyError
      )
    ) {
      // // Sending to the server
      // setLoading(true)
      // setResMessage('')
      // authService.login(loginForm.email, loginForm.password).then(
      //   () => {
      //     navigate('/')
      //     console.log(authService.getCurrentUser())
      //   },
      //   (error) => {
      //     const res =
      //       (error.response && error.response.data && error.response.data.message) ||
      //       error.message ||
      //       error.toString()
      //     // After recieving the server request
      //     setResMessage(res)
      //     setLoading(false)
      //   },
      // )
      incrementSection()
    }
  }

  const nicAndExamDetailsSection = () => {
    return (
      <section>
        <p className="text-medium-emphasis text-center">
          Please enter your NIC and G.C.E(A/L) related information
        </p>

        <CCard className="p-3 mb-3">
          <CCardSubtitle>NIC Details</CCardSubtitle>
          <CCardBody>
            <CRow>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  id="validationNic"
                  label="NIC Number"
                  name="nic"
                  onChange={onUpdateInput}
                  value={stuNicAndExamForm.nic}
                  feedback={stuNicAndExamFormErrors.nicError}
                  invalid={stuNicAndExamFormErrors.nicError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  id="validationConfirmNic"
                  label="Retype NIC Number"
                  name="confirmNic"
                  onChange={onUpdateInput}
                  value={stuNicAndExamForm.confirmNic}
                  feedback={stuNicAndExamFormErrors.confirmNicError}
                  invalid={stuNicAndExamFormErrors.confirmNicError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="date"
                  id="validationDateOfIssue"
                  label="NIC Date of Issue"
                  name="nicDateOfIssue"
                  onChange={onUpdateInput}
                  value={stuNicAndExamForm.nicDateOfIssue}
                  feedback={stuNicAndExamFormErrors.nicDateOfIssueError}
                  invalid={stuNicAndExamFormErrors.nicDateOfIssueError ? true : false}
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

        <CCard className="p-3 mb-3">
          <CCardSubtitle>Details of G.C.E. (A/L) October 2020</CCardSubtitle>
          <CCardBody>
            <CRow className="g-3 needs-validation">
              <CCol md={4}>
                <CFormInput
                  type="text"
                  id="validationIndexNo"
                  label="Index Number"
                  name="indexNo"
                  onChange={onUpdateInput}
                  value={stuNicAndExamForm.indexNo}
                  feedback={stuNicAndExamFormErrors.indexNoError}
                  invalid={stuNicAndExamFormErrors.indexNoError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormSelect
                  label="ID type used at the G.C.E (A/l)"
                  aria-label="Default select example"
                  name="usedIDType"
                  onChange={onUpdateInput}
                  value={stuNicAndExamForm.usedIDType}
                  feedback={stuNicAndExamFormErrors.usedIDTypeError}
                  invalid={stuNicAndExamFormErrors.usedIDTypeError ? true : false}
                >
                  <option value="NIC">National Identity Card (NIC)</option>
                  <option value="PIC">Postal Identity Card (PIC)</option>
                  <option value="DL">Driving License (DL)</option>
                  <option value="SLPP">Sri Lankan Passport (SLPP)</option>
                  <option value="FPP">Foreign Passport (FPP)</option>
                  <option value="CP">Certified Photographs (CP)</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  id="validationCustomUsedIDNo"
                  label="ID Number used at the G.C.E (A/L)"
                  name="usedIDNo"
                  onChange={onUpdateInput}
                  value={stuNicAndExamForm.usedIDNo}
                  feedback={stuNicAndExamFormErrors.usedIDNoError}
                  invalid={stuNicAndExamFormErrors.usedIDNoError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="date"
                  id="validationCustomUsedIDDateOfIssue"
                  label="Date of issue of ID used at the G.C.E (A/L)"
                  name="usedIDDateOfIssue"
                  onChange={onUpdateInput}
                  value={stuNicAndExamForm.usedIDDateOfIssue}
                  feedback={stuNicAndExamFormErrors.usedIDDateOfIssueError}
                  invalid={stuNicAndExamFormErrors.usedIDDateOfIssueError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="file"
                  id="validationCustomUsedIDCopy"
                  label="Scanned copy of ID (One copy only)"
                  name="usedIDCopy"
                  onChange={onUpdateInput}
                  // value={stuRegForm.usedIDCopy}
                  feedback={stuNicAndExamFormErrors.usedIDCopyError}
                  invalid={stuNicAndExamFormErrors.usedIDCopyError ? true : false}
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

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
                onClick={handleStuNicAndExamFormSubmit}
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
   * SECTION 2
   */
  // Form data
  const [stuDetailsForm, setDetailsForm] = useState({
    // Student Details
    title: '',
    nameWithInitials: '',
    fullName: '',
    dob: '',
    pob: '',
    civilStatus: '',
    gender: '',
  })

  // Update the form data while input
  const onUpdateInputInStuDetailsForm = (e) => {
    setDetailsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [stuDetailsFormErrors, setStuDetailsFormErrors] = useState({
    // Student Details
    titleError: '',
    nameWithInitialsError: '',
    fullNameError: '',
    dobError: '',
    pobError: '',
    civilStatusError: '',
    genderError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleStuDetailsFormSubmit = async (e) => {
    e.preventDefault()

    // Student Details
    let titleError = ''
    let nameWithInitialsError = ''
    let fullNameError = ''
    let dobError = ''
    let pobError = ''
    let civilStatusError = ''
    let genderError = ''

    if (!v_required(stuDetailsForm.title)) {
      titleError = 'Title can not be empty.'
    }

    if (!v_required(stuDetailsForm.nameWithInitials)) {
      nameWithInitialsError = 'Name with initials can not be empty.'
    }

    if (!v_required(stuDetailsForm.fullName)) {
      fullNameError = 'Full name can not be empty.'
    }

    if (!v_required(stuDetailsForm.dob)) {
      dobError = 'Date of birth can not be empty.'
    }

    if (!v_required(stuDetailsForm.pob)) {
      pobError = 'Place of birth can not be empty.'
    }

    if (!v_required(stuDetailsForm.civilStatus)) {
      civilStatusError = 'Civil status can not be empty.'
    }

    if (!v_required(stuDetailsForm.gender)) {
      genderError = 'Gender can not be empty.'
    }

    // If errors exist, show errors
    setStuDetailsFormErrors({
      titleError,
      nameWithInitialsError,
      fullNameError,
      dobError,
      pobError,
      civilStatusError,
      genderError,
    })

    // If no errors exist, send to the server
    if (
      !(
        titleError ||
        nameWithInitialsError ||
        fullNameError ||
        dobError ||
        pobError ||
        civilStatusError ||
        genderError
      )
    ) {
      // // Sending to the server
      // setLoading(true)
      // setResMessage('')
      // authService.login(loginForm.email, loginForm.password).then(
      //   () => {
      //     navigate('/')
      //     console.log(authService.getCurrentUser())
      //   },
      //   (error) => {
      //     const res =
      //       (error.response && error.response.data && error.response.data.message) ||
      //       error.message ||
      //       error.toString()
      //     // After recieving the server request
      //     setResMessage(res)
      //     setLoading(false)
      //   },
      // )
      incrementSection()
    }
  }

  const studentDetailsSection = () => {
    return (
      <section>
        <p className="text-medium-emphasis text-center">
          Please enter your student information in the following sections
        </p>

        <CCard className="p-3 mb-3">
          <CCardSubtitle>Student Details</CCardSubtitle>
          <CCardBody>
            <CRow className="g-3 needs-validation">
              <CCol md={2}>
                <CFormSelect
                  label="Title"
                  aria-label="title-select"
                  name="title"
                  onChange={onUpdateInputInStuDetailsForm}
                  value={stuDetailsForm.title}
                  feedback={stuDetailsFormErrors.titleError}
                  invalid={stuDetailsFormErrors.titleError ? true : false}
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
                  label="Name of the Applicant with initials (English Block Letters Eg: BANDARA DPS)"
                  name="nameWithInitials"
                  onChange={onUpdateInputInStuDetailsForm}
                  value={stuDetailsForm.nameWithInitials}
                  feedback={stuDetailsFormErrors.nameWithInitialsError}
                  invalid={stuDetailsFormErrors.nameWithInitialsError ? true : false}
                />
              </CCol>
              <CCol md={12}>
                <CFormInput
                  type="text"
                  id="validationFullName"
                  label="Applicant’s Full Name (English Block Letters)"
                  name="fullName"
                  onChange={onUpdateInputInStuDetailsForm}
                  value={stuDetailsForm.fullName}
                  feedback={stuDetailsFormErrors.fullNameError}
                  invalid={stuDetailsFormErrors.fullNameError ? true : false}
                />
              </CCol>
              <CCol md={3}>
                <CFormInput
                  type="date"
                  id="validationDob"
                  label="Date of Birth"
                  name="dob"
                  onChange={onUpdateInputInStuDetailsForm}
                  value={stuDetailsForm.dob}
                  feedback={stuDetailsFormErrors.dobError}
                  invalid={stuDetailsFormErrors.dobError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormSelect
                  label="Place of Birth (District)"
                  aria-label="placeOfBirth-select"
                  name="pob"
                  onChange={onUpdateInputInStuDetailsForm}
                  value={stuDetailsForm.pob}
                  feedback={stuDetailsFormErrors.pobError}
                  invalid={stuDetailsFormErrors.pobError ? true : false}
                >
                  <option>01 - Colombo</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </CCol>
              <CCol md={3}>
                <CFormSelect
                  label="Civil Status"
                  aria-label="civilStatus-select"
                  name="civilStatus"
                  onChange={onUpdateInputInStuDetailsForm}
                  value={stuDetailsForm.civilStatus}
                  feedback={stuDetailsFormErrors.civilStatusError}
                  invalid={stuDetailsFormErrors.civilStatusError ? true : false}
                >
                  <option value="0">Unmarried</option>
                  <option value="1">Married</option>
                </CFormSelect>
              </CCol>
              <CCol md={2}>
                <CFormSelect
                  label="Gender"
                  aria-label="gender-select"
                  name="gender"
                  onChange={onUpdateInputInStuDetailsForm}
                  value={stuDetailsForm.gender}
                  feedback={stuDetailsFormErrors.genderError}
                  invalid={stuDetailsFormErrors.genderError ? true : false}
                >
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                </CFormSelect>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

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
                onClick={handleStuDetailsFormSubmit}
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
   * SECTION 3
   */
  // Form data
  const [stuLoginDetailsForm, setStuLoginDetailsForm] = useState({
    // Login Details
    email: '',
    phone: '',
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
    set_pwd_guideline_length(v_min(stuLoginDetailsForm.password, 8))
    set_pwd_guideline_uppercase(v_containsUppercase(stuLoginDetailsForm.password))
    set_pwd_guideline_lowercase(v_containsLowercase(stuLoginDetailsForm.password))
    set_pwd_guideline_number(v_containsNumber(stuLoginDetailsForm.password))
    set_pwd_guideline_specialChar(v_containsSpecialChars(stuLoginDetailsForm.password))
  }, [stuLoginDetailsForm.password])

  // Update the form data while input
  const onUpdateInputInsetStuLoginDetailsForm = (e) => {
    setStuLoginDetailsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [stuLoginDetailsFormErrors, setStuLoginDetailsFormErrors] = useState({
    // Login Details
    emailError: '',
    phoneError: '',
    passwordError: '',
    confirmPasswordError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleStuLoginDetailsFormSubmit = async (e) => {
    e.preventDefault()

    // Student Details
    let emailError = ''
    let phoneError = ''
    let passwordError = ''
    let confirmPasswordError = ''

    if (!v_required(stuLoginDetailsForm.email)) {
      emailError = 'Email can not be empty.'
    } else if (!v_email(stuLoginDetailsForm.email)) {
      emailError = 'Email is not valid.'
    }

    if (!v_required(stuLoginDetailsForm.phone)) {
      phoneError = 'Phone can not be empty.'
    }

    if (!v_required(stuLoginDetailsForm.password)) {
      passwordError = 'Password can not be empty.'
    } else if (
      !(pwd_guideline_length,
      pwd_guideline_lowercase,
      pwd_guideline_number,
      pwd_guideline_specialChar)
    ) {
      passwordError = 'Password does not stasfy the following guidelines.'
    } else if (!v_match(stuLoginDetailsForm.password, stuLoginDetailsForm.confirmPassword)) {
      passwordError = 'Passwords are not matching.'
    }

    if (!v_required(stuLoginDetailsForm.confirmPassword)) {
      confirmPasswordError = 'Confirm password can not be empty.'
    }

    // If errors exist, show errors
    setStuLoginDetailsFormErrors({
      emailError,
      phoneError,
      passwordError,
      confirmPasswordError,
    })

    // If no errors exist, send to the server
    if (!(emailError || phoneError || passwordError || confirmPasswordError)) {
      // // Sending to the server
      // setLoading(true)
      // setResMessage('')
      // authService.login(loginForm.email, loginForm.password).then(
      //   () => {
      //     navigate('/')
      //     console.log(authService.getCurrentUser())
      //   },
      //   (error) => {
      //     const res =
      //       (error.response && error.response.data && error.response.data.message) ||
      //       error.message ||
      //       error.toString()
      //     // After recieving the server request
      //     setResMessage(res)
      //     setLoading(false)
      //   },
      // )
      incrementSection()
    }
  }

  const loginDetailsSection = () => {
    return (
      <section>
        <p className="text-medium-emphasis text-center">
          Please enter your login information as well.
        </p>

        <CCard className="p-3 mb-3">
          <CCardSubtitle>Login Details</CCardSubtitle>
          <CCardBody>
            <CRow className="g-3 needs-validation">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  id="validationEmail"
                  label="Email"
                  name="email"
                  onChange={onUpdateInputInsetStuLoginDetailsForm}
                  value={stuLoginDetailsForm.email}
                  feedback={stuLoginDetailsFormErrors.emailError}
                  invalid={stuLoginDetailsFormErrors.emailError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormInput
                  type="text"
                  id="validationMobilePhoneNumber"
                  label="Mobile phone number"
                  name="phone"
                  onChange={onUpdateInputInsetStuLoginDetailsForm}
                  value={stuLoginDetailsForm.phone}
                  feedback={stuLoginDetailsFormErrors.phoneError}
                  invalid={stuLoginDetailsFormErrors.phoneError ? true : false}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="password"
                  id="validationPassword"
                  label="Password"
                  name="password"
                  onChange={onUpdateInputInsetStuLoginDetailsForm}
                  value={stuLoginDetailsForm.password}
                  feedback={stuLoginDetailsFormErrors.passwordError}
                  invalid={stuLoginDetailsFormErrors.passwordError ? true : false}
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
                  onChange={onUpdateInputInsetStuLoginDetailsForm}
                  value={stuLoginDetailsForm.confirmPassword}
                  feedback={stuLoginDetailsFormErrors.confirmPasswordError}
                  invalid={stuLoginDetailsFormErrors.confirmPasswordError ? true : false}
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

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
                onClick={handleStuLoginDetailsFormSubmit}
              >
                Next
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
      </section>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={11}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1 className="text-center">Student Signup</h1>

                  {/* Sections */}
                  {sectionIndex === 0 && nicAndExamDetailsSection()}
                  {sectionIndex === 1 && studentDetailsSection()}
                  {sectionIndex === 2 && loginDetailsSection()}
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default StudentRegistration
