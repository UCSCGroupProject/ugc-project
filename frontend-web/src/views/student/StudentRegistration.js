import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  CInputGroup,
  CFormLabel,
  CFormFeedback,
  CInputGroupText,
} from '@coreui/react'

import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { cilCheckAlt, cilTask } from '@coreui/icons'
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

import studentService from '../../services/studentService'
import otpService from '../../services/otpService'
import emailService from '../../services/emailService'

const StudentRegistration = () => {
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

  // Password Show/Hide toggler
  const [showPassword, setShowPassword] = useState(true)
  const [showConfirmPassword, setShowConfirmPassword] = useState(true)

  const onEyeClick = () => {
    setShowPassword(!showPassword)
  }
  const onEyeClickOnConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
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
    usedIDType: 'NIC',
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
      console.log('FIRST SECTION')
      console.log(stuNicAndExamForm)

      // Sending to the server
      setLoading(true)
      setResMessage('')
      studentService.stuNicAndExamFormCheck(stuNicAndExamForm).then(
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

        {resMessage && (
          <CAlert color="danger" className="text-center">
            {resMessage}
          </CAlert>
        )}

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
                onClick={handleStuNicAndExamFormSubmit}
              >
                {loading ? (
                  <span>
                    <CSpinner size="sm" /> Validating
                  </span>
                ) : (
                  <span>Next</span>
                )}
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
    title: 'mrs',
    nameWithInitials: '',
    fullName: '',
    dob: '',
    pob: 'Colombo',
    civilStatus: 'unmarried',
    gender: 'male',
    phone: '',
  })

  const [isPhoneValid, setIsPhoneValid] = useState(false)

  useEffect(() => {
    if (stuDetailsForm.phone.length >= 10) {
      setIsPhoneValid(true)
    } else {
      setIsPhoneValid(false)
    }
  }, [stuDetailsForm.phone])

  // OTP validation
  const [otpState, setOtpState] = useState({
    enteredOtp: '',
    isSendOtp: false,
    isEnteredOtpValid: false,
  })

  const [enteredOtpError, setEnteredOtpError] = useState('')

  const [isSendingOTP, setIsSendingOTP] = useState(false)
  const [isValidatingOTP, setIsValidatingOTP] = useState(false)

  const onUpdateOtp = (e) => {
    setOtpState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Send OTP to the given phone number
  const handleSendOTP = () => {
    setOtpState((prev) => ({
      ...prev,
      isSendOtp: false,
    }))

    // Sending to the server
    setIsSendingOTP(true)
    setResMessage('')

    otpService.sendOtp(stuDetailsForm.phone).then(
      () => {
        setOtpState((prev) => ({
          ...prev,
          isSendOtp: true,
        }))
        // After recieving the server request
        setIsSendingOTP(false)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
        setResMessage(res)
        setIsSendingOTP(false)
      },
    )
  }

  // Validate the OTP
  const handleValidateOTP = () => {
    setOtpState((prev) => ({
      ...prev,
      isEnteredOtpValid: false,
    }))

    // Sending to the server
    setIsValidatingOTP(true)
    setResMessage('')
    setEnteredOtpError('')

    otpService.validateOtp(stuDetailsForm.phone, otpState.enteredOtp).then(
      (res) => {
        console.log(res)
        if (res) {
          setOtpState((prev) => ({
            ...prev,
            isEnteredOtpValid: true,
          }))
        } else {
          setEnteredOtpError('Entered OTP is not valid.')
        }

        // After recieving the server request
        setIsValidatingOTP(false)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
        setResMessage(res)
        setIsValidatingOTP(false)
      },
    )
  }

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
    phoneError: '',
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
    let phoneError = ''

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

    if (!v_required(stuDetailsForm.phone)) {
      phoneError = 'Phone can not be empty.'
    } else if (!otpState.isEnteredOtpValid) {
      phoneError = 'Phone number should be validated using OTP.'
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
      phoneError,
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
        genderError ||
        phoneError
      )
    ) {
      console.log('SECOND SECTION')
      console.log(stuDetailsForm)

      // Sending to the server
      setLoading(true)
      setResMessage('')
      studentService.stuDetailsFormCheck(stuDetailsForm).then(
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
                  className="text-uppercase"
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
                  className="text-uppercase"
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
                <CFormSelect
                  label="Civil Status"
                  aria-label="civilStatus-select"
                  name="civilStatus"
                  onChange={onUpdateInputInStuDetailsForm}
                  value={stuDetailsForm.civilStatus}
                  feedback={stuDetailsFormErrors.civilStatusError}
                  invalid={stuDetailsFormErrors.civilStatusError ? true : false}
                >
                  <option value="unmarried">Unmarried</option>
                  <option value="married">Married</option>
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
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustomUsername">Phone number</CFormLabel>
                <CInputGroup className="has-validation">
                  {/* <CInputGroupText>@</CInputGroupText> */}
                  <CFormInput
                    type="text"
                    id="validationMobilePhoneNumber"
                    name="phone"
                    onChange={onUpdateInputInStuDetailsForm}
                    value={stuDetailsForm.phone}
                    // feedback={stuDetailsFormErrors.phoneError}
                    invalid={stuDetailsFormErrors.phoneError ? true : false}
                    disabled={otpState.isEnteredOtpValid}
                  />
                  {otpState.isEnteredOtpValid && (
                    <CInputGroupText className="bg-success text-white">
                      <CIcon icon={cilTask} size="lg" className="mx-2 my-1" />
                    </CInputGroupText>
                  )}
                  {!otpState.isEnteredOtpValid && (
                    <CButton
                      color="warning"
                      type="button"
                      className="p-2 text-white"
                      // onClick={handleOtpSend}
                      onClick={handleSendOTP}
                      disabled={!isPhoneValid || isSendingOTP}
                    >
                      {isSendingOTP ? (
                        <span>
                          <CSpinner size="sm" /> {'Sending'}
                        </span>
                      ) : (
                        <span>Send OTP</span>
                      )}
                    </CButton>
                  )}
                  <CFormFeedback invalid>{stuDetailsFormErrors.phoneError}</CFormFeedback>
                </CInputGroup>
              </CCol>
              {otpState.isSendOtp && (
                <CCol md={3}>
                  <CFormLabel htmlFor="validationCustomUsername">OTP</CFormLabel>
                  <CInputGroup className="has-validation">
                    <CFormInput
                      type="text"
                      id="validationOTP"
                      name="enteredOtp"
                      onChange={onUpdateOtp}
                      value={otpState.enteredOtp}
                      // feedback="asd"
                      invalid={enteredOtpError ? true : false}
                      disabled={otpState.isEnteredOtpValid}
                    />
                    {otpState.isEnteredOtpValid && (
                      <CInputGroupText className="bg-success text-white">
                        <CIcon icon={cilTask} size="lg" className="mx-2 my-1" />
                      </CInputGroupText>
                    )}

                    {!otpState.isEnteredOtpValid && (
                      <CButton
                        color="info"
                        type="button"
                        className="p-2 text-white"
                        onClick={handleValidateOTP}
                      >
                        {isValidatingOTP && <CSpinner size="sm" />} Verify OTP
                      </CButton>
                    )}
                    <CFormFeedback invalid>{enteredOtpError}</CFormFeedback>
                  </CInputGroup>
                </CCol>
              )}
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
                onClick={handleStuDetailsFormSubmit}
              >
                {loading ? (
                  <span>
                    <CSpinner size="sm" /> Validating
                  </span>
                ) : (
                  <span>Next</span>
                )}
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
    username: '',
    email: '',
    role: [],
    password: '',
    confirmPassword: '',
  })

  const [isEmailValid, setIsEmailValid] = useState(false)

  useEffect(() => {
    if (v_email(stuLoginDetailsForm.email)) {
      setIsEmailValid(true)
    } else {
      setIsEmailValid(false)
    }
  }, [stuLoginDetailsForm.email])

  // Email code validation
  const [codeState, setCodeState] = useState({
    enteredCode: '',
    isSendCode: false,
    isEnteredCodeValid: false,
  })

  const [enteredCodeError, setEnteredCodeError] = useState('')

  const [isSendingCode, setIsSendingCode] = useState(false)
  const [isValidatingCode, setIsValidatingCode] = useState(false)

  const onUpdateCode = (e) => {
    setCodeState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Send Code to the given email
  const handleSendCode = () => {
    setCodeState((prev) => ({
      ...prev,
      isSendCode: false,
    }))

    // Sending to the server
    setIsSendingCode(true)
    setResMessage('')

    emailService.sendCode(stuLoginDetailsForm.email).then(
      () => {
        setCodeState((prev) => ({
          ...prev,
          isSendCode: true,
        }))
        // After recieving the server request
        setIsSendingCode(false)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
        setResMessage(res)
        setIsSendingCode(false)
      },
    )
  }

  // Validate the Code
  const handleValidateCode = () => {
    setCodeState((prev) => ({
      ...prev,
      isEnteredCodeValid: false,
    }))

    // Sending to the server
    setIsValidatingCode(true)
    setResMessage('')
    setEnteredCodeError('')

    emailService.validateCode(stuLoginDetailsForm.email, codeState.enteredCode).then(
      (res) => {
        console.log(res)
        if (res) {
          setCodeState((prev) => ({
            ...prev,
            isEnteredCodeValid: true,
          }))
        } else {
          setEnteredCodeError('Entered OTP is not valid.')
        }

        // After recieving the server request
        setIsValidatingCode(false)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
        setResMessage(res)
        setIsValidatingCode(false)
      },
    )
  }

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
    usernameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleStuLoginDetailsFormSubmit = async (e) => {
    e.preventDefault()

    // Student Details
    let usernameError = ''
    let emailError = ''
    let passwordError = ''
    let confirmPasswordError = ''

    if (!v_required(stuLoginDetailsForm.username)) {
      usernameError = 'Username can not be empty.'
    }

    if (!v_required(stuLoginDetailsForm.email)) {
      emailError = 'Email can not be empty.'
    } else if (!v_email(stuLoginDetailsForm.email)) {
      emailError = 'Email is not valid.'
    } else if (!codeState.isEnteredCodeValid) {
      emailError = 'Email should be validated using Code.'
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
      usernameError,
      emailError,
      passwordError,
      confirmPasswordError,
    })

    // If no errors exist, send to the server
    if (!(usernameError || emailError || passwordError || confirmPasswordError)) {
      console.log('THIRD SECTION')
      console.log(stuLoginDetailsForm)

      // Sending to the server
      setLoading(true)
      setResMessage('')
      studentService.loginDetailsFormCheck(stuLoginDetailsForm).then(
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
        <p className="text-medium-emphasis text-center">
          Please enter your login information as well.
        </p>

        <CCard className="p-3 mb-3">
          <CCardSubtitle>Login Details</CCardSubtitle>
          <CCardBody>
            <CRow className="g-3 needs-validation">
              <CCol md={4}>
                <CFormInput
                  type="text"
                  id="validationMobilePhoneNumber"
                  label="Username"
                  name="username"
                  onChange={onUpdateInputInsetStuLoginDetailsForm}
                  value={stuLoginDetailsForm.username}
                  feedback={stuLoginDetailsFormErrors.usernameError}
                  invalid={stuLoginDetailsFormErrors.usernameError ? true : false}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationEmail">Email</CFormLabel>
                <CInputGroup className="has-validation">
                  {/* <CInputGroupText>@</CInputGroupText> */}
                  <CFormInput
                    type="text"
                    id="validationEmail"
                    name="email"
                    onChange={onUpdateInputInsetStuLoginDetailsForm}
                    value={stuLoginDetailsForm.email}
                    // feedback={stuDetailsFormErrors.phoneError}
                    invalid={stuLoginDetailsFormErrors.emailError ? true : false}
                    disabled={codeState.isEnteredCodeValid}
                  />
                  {codeState.isEnteredCodeValid && (
                    <CInputGroupText className="bg-success text-white">
                      <CIcon icon={cilTask} size="lg" className="mx-2 my-1" />
                    </CInputGroupText>
                  )}
                  {!codeState.isEnteredCodeValid && (
                    <CButton
                      color="warning"
                      type="button"
                      className="p-2 text-white"
                      // onClick={handleOtpSend}
                      onClick={handleSendCode}
                      disabled={!isEmailValid || isSendingCode}
                    >
                      {isSendingCode ? (
                        <span>
                          <CSpinner size="sm" /> {'Sending'}
                        </span>
                      ) : (
                        <span>Send Code</span>
                      )}
                    </CButton>
                  )}
                  <CFormFeedback invalid>{stuLoginDetailsFormErrors.emailError}</CFormFeedback>
                </CInputGroup>
              </CCol>
              {codeState.isSendCode && (
                <CCol md={3}>
                  <CFormLabel htmlFor="validationVerificationCode">Verification Code</CFormLabel>
                  <CInputGroup className="has-validation">
                    <CFormInput
                      type="text"
                      id="validationCode"
                      name="enteredCode"
                      onChange={onUpdateCode}
                      value={codeState.enteredCode}
                      // feedback="asd"
                      invalid={enteredCodeError ? true : false}
                      disabled={codeState.isEnteredCodeValid}
                    />
                    {codeState.isEnteredCodeValid && (
                      <CInputGroupText className="bg-success text-white">
                        <CIcon icon={cilTask} size="lg" className="mx-2 my-1" />
                      </CInputGroupText>
                    )}

                    {!codeState.isEnteredCodeValid && (
                      <CButton
                        color="info"
                        type="button"
                        className="p-2 text-white"
                        onClick={handleValidateCode}
                      >
                        {isValidatingCode && <CSpinner size="sm" />} Verify OTP
                      </CButton>
                    )}
                    <CFormFeedback invalid>{enteredCodeError}</CFormFeedback>
                  </CInputGroup>
                </CCol>
              )}
              {/* above new */}
              <CCol md={6}>
                <CFormLabel htmlFor="validationPassword">Password</CFormLabel>
                <CInputGroup>
                  <CFormInput
                    type={showPassword ? 'password' : 'text'}
                    id="validationPassword"
                    // label="Password"
                    name="password"
                    onChange={onUpdateInputInsetStuLoginDetailsForm}
                    value={stuLoginDetailsForm.password}
                    // feedback={stuLoginDetailsFormErrors.passwordError}
                    invalid={stuLoginDetailsFormErrors.passwordError ? true : false}
                  />
                  <CInputGroupText onClick={onEyeClick}>
                    {showPassword ? <FaEye className="fs-4" /> : <FaEyeSlash className="fs-4" />}
                  </CInputGroupText>
                  <CFormFeedback invalid>{stuLoginDetailsFormErrors.passwordError}</CFormFeedback>
                </CInputGroup>
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
                <CFormLabel htmlFor="validationConfirmPassword">Confirm Password</CFormLabel>
                <CInputGroup>
                  <CFormInput
                    type={showConfirmPassword ? 'password' : 'text'}
                    id="validationConfirmPassword"
                    // label="Confirm Password"
                    name="confirmPassword"
                    onChange={onUpdateInputInsetStuLoginDetailsForm}
                    value={stuLoginDetailsForm.confirmPassword}
                    // feedback={stuLoginDetailsFormErrors.confirmPasswordError}
                    invalid={stuLoginDetailsFormErrors.confirmPasswordError ? true : false}
                  />
                  <CInputGroupText onClick={onEyeClickOnConfirmPassword}>
                    {showConfirmPassword ? (
                      <FaEye className="fs-4" />
                    ) : (
                      <FaEyeSlash className="fs-4" />
                    )}
                  </CInputGroupText>
                  <CFormFeedback invalid>
                    {stuLoginDetailsFormErrors.confirmPasswordError}
                  </CFormFeedback>
                </CInputGroup>
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
                onClick={handleStuLoginDetailsFormSubmit}
              >
                {loading ? (
                  <span>
                    <CSpinner size="sm" /> Validating
                  </span>
                ) : (
                  <span>Next</span>
                )}
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
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (agreement) {
      // Sending to the server
      setLoading(true)
      setResMessage('')

      let completeData = {
        nic: stuNicAndExamForm.nic,
        nicDateOfIssue: stuNicAndExamForm.nicDateOfIssue,
        indexNo: stuNicAndExamForm.indexNo,
        usedIDType: stuNicAndExamForm.usedIDType,
        usedIDNo: stuNicAndExamForm.usedIDNo,
        usedIDDateOfIssue: stuNicAndExamForm.usedIDDateOfIssue,
        usedIDCopy: stuNicAndExamForm.usedIDCopy,
        title: stuDetailsForm.title,
        nameWithInitials: stuDetailsForm.nameWithInitials,
        fullName: stuDetailsForm.fullName,
        dob: stuDetailsForm.dob,
        pob: stuDetailsForm.pob,
        civilStatus: stuDetailsForm.civilStatus,
        gender: stuDetailsForm.gender,
        phone: stuDetailsForm.phone,
        username: stuLoginDetailsForm.username,
        email: stuLoginDetailsForm.email,
        role: stuLoginDetailsForm.role,
        password: stuLoginDetailsForm.password,
      }

      studentService.studentRegister(completeData).then(
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
                  I agree to use this online service only for the purpose of applying for university
                  admission based on the G.C.E. (A/L) Examination, held in year 2020 and not for any
                  other purpose.
                </li>
                <li className="mb-3">
                  I am a candidate sat for the G.C.E. (A/L) Examination held in year 2020. I certify
                  that the Index Number, National Identity Card Number and email address provided by
                  me are my own and not belong to any other person.
                </li>
                <li className="mb-3">
                  I certify that all details provided / will be provided by me in the registration
                  and in each step of this application process for university admission via online
                  service are true and correct.
                </li>
                <li className="mb-3">
                  I understand and agree that providing any false, misleading, inaccurate or
                  fraudulent information, details, statements at any time or any attempt to alter
                  the content of this website, fraudulent logins to other user accounts or alter the
                  content or data provided by me or anybody else will result in my university
                  admission invalid at any time and I will be subjected to legal actions.
                </li>
                <li className="mb-3">
                  I am aware that I am not allowed to change any information provided by me after
                  submission of my application through this online service without permission of the
                  University Grants Commission.
                </li>
                <li className="mb-3">
                  By using this online service I do authorize the University Grants Commission to
                  contact me via given email address, mobile phone number, by way of postal letters
                  or any other electronic and non-electronic means of communication.
                </li>
                <li className="mb-3">
                  I am well aware that submission of application for university admission through
                  this online service is only for the purpose of authenticating my details and my
                  electronic application will not be considered for university admission until I
                  submit the duly signed printed application form along with the necessary
                  supporting documents to the University Grants Commission on or before the last
                  date for submission of applications as pronounced by press notices
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
                onClick={handleSubmit}
                disabled={!agreement ? true : false}
              >
                {loading ? (
                  <span>
                    <CSpinner size="sm" /> Finalizing
                  </span>
                ) : (
                  <span>Register</span>
                )}
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
      </section>
    )
  }

  return (
    // <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
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
                  {sectionIndex === 3 && termsAndConditionsSection()}
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    // </div>
  )
}

export default StudentRegistration
