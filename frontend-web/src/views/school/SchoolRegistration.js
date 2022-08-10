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

import schoolService from '../../services/schoolService'
import otpService from '../../services/otpService'
import emailService from '../../services/emailService'

const SchoolRegistration = () => {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  // For the Section transitions
  const [sectionIndex, setSectionIndex] = useState(0)

  const incrementSection = () => {
    setSectionIndex((sectionIndex + 1) % 3)
  }

  const decrementSection = () => {
    setSectionIndex((sectionIndex - 1) % 3)
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
  const [schoolDetailsForm, setSchoolDetailsForm] = useState({
    // Role Details
    name: '',
    address: '',
    distrct: '',
    phone: '',
  })

  const [isPhoneValid, setIsPhoneValid] = useState(false)

  useEffect(() => {
    if (schoolDetailsForm.phone.length >= 10) {
      setIsPhoneValid(true)
    } else {
      setIsPhoneValid(false)
    }
  }, [schoolDetailsForm.phone])

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

    otpService.sendOtp(schoolDetailsForm.phone).then(
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

    otpService.validateOtp(schoolDetailsForm.phone, otpState.enteredOtp).then(
      (res) => {
        console.log(otpState.enteredOtp)
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
  const onUpdateInputInSchoolDetailsForm = (e) => {
    setSchoolDetailsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [schoolDetailsFormErrors, setSchoolDetailsFormErrors] = useState({
    // Role Details
    nameError: '',
    addressError: '',
    distrctError: '',
    phoneError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleSchoolDetailsSubmit = async (e) => {
    e.preventDefault()

    // School Details errors
    let nameError = ''
    let addressError = ''
    let distrctError = ''
    let phoneError = ''

    if (!v_required(schoolDetailsForm.name)) {
      nameError = 'School Name cannot be empty.'
    }

    if (!v_required(schoolDetailsForm.address)) {
      addressError = 'Address cannot be empty.'
    }

    if (!v_required(schoolDetailsForm.distrct)) {
      distrctError = 'Distrct cannot be empty.'
    }

    if (!v_required(schoolDetailsForm.phone)) {
      phoneError = 'Phone Number cannot be empty.'
    } else if (!otpState.isEnteredOtpValid) {
      phoneError = 'Phone number should be validated using OTP.'
    }

    // If errors exist, show errors
    setSchoolDetailsFormErrors({
      nameError,
      addressError,
      distrctError,
      phoneError,
    })

    // If no errors exist, send to the server
    if (!(nameError || addressError || distrctError || phoneError)) {
      // Sending to the server
      setLoading(true)
      setResMessage('')
      schoolService.schoolDetailsFormCheck(schoolDetailsForm).then(
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

  const schoolDetailsSection = () => {
    return (
      <section>
        <p className="text-medium-emphasis text-center">Please enter your school details in here</p>

        <CCard className="p-3 mb-3">
          <CCardSubtitle>School Details</CCardSubtitle>
          <CCardBody>
            <CRow className="g-3 needs-validation">
              <CCol md={12}>
                <CFormInput
                  type="text"
                  id="validationSchoolName"
                  label="School Name"
                  name="name"
                  onChange={onUpdateInputInSchoolDetailsForm}
                  value={schoolDetailsForm.name}
                  feedback={schoolDetailsFormErrors.nameError}
                  invalid={schoolDetailsFormErrors.nameError ? true : false}
                ></CFormInput>
              </CCol>
              <CCol md={8}>
                <CFormInput
                  type="text"
                  id="validationAddress"
                  label="Address"
                  name="address"
                  onChange={onUpdateInputInSchoolDetailsForm}
                  value={schoolDetailsForm.address}
                  feedback={schoolDetailsFormErrors.addressError}
                  invalid={schoolDetailsFormErrors.addressError ? true : false}
                ></CFormInput>
              </CCol>
              <CCol md={4}>
                <CFormSelect
                  label="District"
                  aria-label="distrct-select"
                  name="distrct"
                  onChange={onUpdateInputInSchoolDetailsForm}
                  value={schoolDetailsForm.distrct}
                  feedback={schoolDetailsFormErrors.distrctError}
                  invalid={schoolDetailsFormErrors.distrctError ? true : false}
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
                <CFormLabel htmlFor="validationCustomUsername">Phone number</CFormLabel>
                <CInputGroup className="has-validation">
                  {/* <CInputGroupText>@</CInputGroupText> */}
                  <CFormInput
                    type="text"
                    id="validationMobilePhoneNumber"
                    name="phone"
                    onChange={onUpdateInputInSchoolDetailsForm}
                    value={schoolDetailsForm.phone}
                    // feedback={stuDetailsFormErrors.phoneError}
                    invalid={schoolDetailsFormErrors.phoneError ? true : false}
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
                  <CFormFeedback invalid>{schoolDetailsFormErrors.phoneError}</CFormFeedback>
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
              <CButton color="dark" variant="outline" type="submit" className="p-2">
                Cancel
              </CButton>
              <CButton
                color="primary"
                type="button"
                className="p-2"
                onClick={handleSchoolDetailsSubmit}
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
  const [schoolLoginDetailsForm, setSchoolLoginDetailsForm] = useState({
    // Login Details
    username: '',
    email: '',
    role: [],
    password: '',
    confirmPassword: '',
  })

  const [isEmailValid, setIsEmailValid] = useState(false)

  useEffect(() => {
    if (v_email(schoolLoginDetailsForm.email)) {
      setIsEmailValid(true)
    } else {
      setIsEmailValid(false)
    }
  }, [schoolLoginDetailsForm.email])

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

    emailService.sendCode(schoolLoginDetailsForm.email).then(
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

    console.log(codeState.enteredCode)

    emailService.validateCode(schoolLoginDetailsForm.email, codeState.enteredCode).then(
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
    set_pwd_guideline_length(v_min(schoolLoginDetailsForm.password, 8))
    set_pwd_guideline_uppercase(v_containsUppercase(schoolLoginDetailsForm.password))
    set_pwd_guideline_lowercase(v_containsLowercase(schoolLoginDetailsForm.password))
    set_pwd_guideline_number(v_containsNumber(schoolLoginDetailsForm.password))
    set_pwd_guideline_specialChar(v_containsSpecialChars(schoolLoginDetailsForm.password))
  }, [schoolLoginDetailsForm.password])

  // Update the form data while input
  const onUpdateInputInsetSchoolLoginDetailsForm = (e) => {
    setSchoolLoginDetailsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [schoolLoginDetailsFormErrors, setSchoolLoginDetailsFormErrors] = useState({
    // Login Details
    usernameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleSchoolLoginDetailsFormSubmit = async (e) => {
    e.preventDefault()

    // School Details
    let usernameError = ''
    let emailError = ''
    let passwordError = ''
    let confirmPasswordError = ''

    if (!v_required(schoolLoginDetailsForm.username)) {
      usernameError = 'Username can not be empty.'
    }

    if (!v_required(schoolLoginDetailsForm.email)) {
      emailError = 'Email can not be empty.'
    } else if (!v_email(schoolLoginDetailsForm.email)) {
      emailError = 'Email is not valid.'
    } else if (!codeState.isEnteredCodeValid) {
      emailError = 'Email should be validated using Code.'
    }

    if (!v_required(schoolLoginDetailsForm.password)) {
      passwordError = 'Password can not be empty.'
    } else if (
      !(pwd_guideline_length,
      pwd_guideline_lowercase,
      pwd_guideline_number,
      pwd_guideline_specialChar)
    ) {
      passwordError = 'Password does not stasfy the following guidelines.'
    } else if (!v_match(schoolLoginDetailsForm.password, schoolLoginDetailsForm.confirmPassword)) {
      passwordError = 'Passwords are not matching.'
    }

    if (!v_required(schoolLoginDetailsForm.confirmPassword)) {
      confirmPasswordError = 'Confirm password can not be empty.'
    }

    // If errors exist, show errors
    setSchoolLoginDetailsFormErrors({
      usernameError,
      emailError,
      passwordError,
      confirmPasswordError,
    })

    // If no errors exist, send to the server
    if (!(usernameError || emailError || passwordError || confirmPasswordError)) {
      console.log('THIRD SECTION')
      console.log(schoolLoginDetailsForm)

      // Sending to the server
      setLoading(true)
      setResMessage('')
      schoolService.loginDetailsFormCheck(schoolLoginDetailsForm).then(
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
                  onChange={onUpdateInputInsetSchoolLoginDetailsForm}
                  value={schoolLoginDetailsForm.username}
                  feedback={schoolLoginDetailsFormErrors.usernameError}
                  invalid={schoolLoginDetailsFormErrors.usernameError ? true : false}
                />
              </CCol>
              {/* below new */}
              <CCol md={4}>
                <CFormLabel htmlFor="validationEmail">Email</CFormLabel>
                <CInputGroup className="has-validation">
                  {/* <CInputGroupText>@</CInputGroupText> */}
                  <CFormInput
                    type="text"
                    id="validationEmail"
                    name="email"
                    onChange={onUpdateInputInsetSchoolLoginDetailsForm}
                    value={schoolLoginDetailsForm.email}
                    // feedback={stuDetailsFormErrors.phoneError}
                    invalid={schoolLoginDetailsFormErrors.emailError ? true : false}
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
                  <CFormFeedback invalid>{schoolLoginDetailsFormErrors.emailError}</CFormFeedback>
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
                    onChange={onUpdateInputInsetSchoolLoginDetailsForm}
                    value={schoolLoginDetailsForm.password}
                    // feedback={schoolLoginDetailsFormErrors.passwordError}
                    invalid={schoolLoginDetailsFormErrors.passwordError ? true : false}
                  />
                  <CInputGroupText onClick={onEyeClick}>
                    {showPassword ? <FaEye className="fs-4" /> : <FaEyeSlash className="fs-4" />}
                  </CInputGroupText>
                  <CFormFeedback invalid>
                    {schoolLoginDetailsFormErrors.passwordError}
                  </CFormFeedback>
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
                    onChange={onUpdateInputInsetSchoolLoginDetailsForm}
                    value={schoolLoginDetailsForm.confirmPassword}
                    // feedback={schoolLoginDetailsFormErrors.confirmPasswordError}
                    invalid={schoolLoginDetailsFormErrors.confirmPasswordError ? true : false}
                  />
                  <CInputGroupText onClick={onEyeClickOnConfirmPassword}>
                    {showConfirmPassword ? (
                      <FaEye className="fs-4" />
                    ) : (
                      <FaEyeSlash className="fs-4" />
                    )}
                  </CInputGroupText>
                  <CFormFeedback invalid>
                    {schoolLoginDetailsFormErrors.confirmPasswordError}
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
                onClick={handleSchoolLoginDetailsFormSubmit}
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
  const handleSubmitSchool = async (e) => {
    e.preventDefault()

    if (agreement) {
      // Sending to the server
      setLoading(true)
      setResMessage('')

      let completeData = {
        name: schoolDetailsForm.name,
        address: schoolDetailsForm.address,
        district: schoolDetailsForm.district,
        phone: schoolDetailsForm.phone,

        username: schoolLoginDetailsForm.username,
        email: schoolLoginDetailsForm.email,
        password: schoolLoginDetailsForm.password,
      }

      schoolService.schoolRegister(completeData).then(
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
                onClick={handleSubmitSchool}
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
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={10}>
            <CCard className="mx-4">
              <CCardBody className="p-5">
                <CForm onSubmit={handleSubmitSchool}>
                  <h1 className="text-center">School Signup</h1>

                  {/* Sections */}
                  {sectionIndex === 0 && schoolDetailsSection()}
                  {sectionIndex === 1 && loginDetailsSection()}
                  {sectionIndex === 2 && termsAndConditionsSection()}
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default SchoolRegistration
