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
  CInputGroup,
  CInputGroupText,
  CFormLabel,
  CFormFeedback,
} from '@coreui/react'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { cilCheckAlt, cilTask } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import {
  v_email,
  v_required,
  v_min,
  v_match,
  v_containsUppercase,
  v_containsLowercase,
  v_containsNumber,
  v_containsSpecialChars,
} from '../../utils/validator'

import emailService from '../../services/emailService'
import authService from '../../services/authService'

const ForgotPassword = () => {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  // For the Section transitions
  const [sectionIndex, setSectionIndex] = useState(0)

  // Password Show/Hide toggler
  const [showPassword, setShowPassword] = useState(true)
  const [showConfirmPassword, setShowConfirmPassword] = useState(true)

  const onEyeClick = () => {
    setShowPassword(!showPassword)
  }
  const onEyeClickOnConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  // FIRST SECTION
  const [emailVerificationForm, setEmailVerificationForm] = useState({
    email: '',
  })

  const [isEmailValid, setIsEmailValid] = useState(false)

  useEffect(() => {
    if (v_email(emailVerificationForm.email)) {
      setIsEmailValid(true)
    } else {
      setIsEmailValid(false)
    }
  }, [emailVerificationForm.email])

  // Update the form data while input
  const onUpdateInputInEmailVerificationForm = (e) => {
    setEmailVerificationForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [emailVerificationFormErrors, setEmailVerificationFormErrors] = useState({
    phoneError: '',
  })

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

    emailService.sendCode(emailVerificationForm.email).then(
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

    emailService.validateCode(emailVerificationForm.email, codeState.enteredCode).then(
      (res) => {
        console.log(res)
        if (res) {
          setCodeState((prev) => ({
            ...prev,
            isEnteredCodeValid: true,
          }))
          setSectionIndex(1)
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

  const emailVerificationSection = () => {
    return (
      <div>
        <h1 className="text-center">Email Verification</h1>
        <p className="text-medium-emphasis text-center pt-1">
          Please enter your email to send a recovery code for verification.
        </p>

        <div className="mb-3">
          <CRow className="gap-3">
            <CCol md={12}>
              <CFormLabel htmlFor="validationEmail">Email</CFormLabel>
              <CInputGroup className="has-validation">
                {/* <CInputGroupText>@</CInputGroupText> */}
                <CFormInput
                  type="text"
                  id="validationEmail"
                  name="email"
                  onChange={onUpdateInputInEmailVerificationForm}
                  value={emailVerificationForm.email}
                  // feedback={stuDetailsFormErrors.phoneError}
                  invalid={emailVerificationFormErrors.emailError ? true : false}
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
                <CFormFeedback invalid>{emailVerificationFormErrors.emailError}</CFormFeedback>
              </CInputGroup>
            </CCol>
            {codeState.isSendCode && (
              <CCol md={12}>
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
          </CRow>
        </div>

        {resMessage && (
          <CAlert color="danger" className="text-center">
            {resMessage}
          </CAlert>
        )}
      </div>
    )
  }

  // SECOND SECTION
  const [userCreateNewPasswordForm, setUserCreateNewPasswordForm] = useState({
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
    set_pwd_guideline_length(v_min(userCreateNewPasswordForm.password, 8))
    set_pwd_guideline_uppercase(v_containsUppercase(userCreateNewPasswordForm.password))
    set_pwd_guideline_lowercase(v_containsLowercase(userCreateNewPasswordForm.password))
    set_pwd_guideline_number(v_containsNumber(userCreateNewPasswordForm.password))
    set_pwd_guideline_specialChar(v_containsSpecialChars(userCreateNewPasswordForm.password))
  }, [userCreateNewPasswordForm.password])

  // Update the form data while input
  const onUpdateCreateNewPasswordForm = (e) => {
    setUserCreateNewPasswordForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [userCreateNewPasswordFormErrors, setUserCreateNewPasswordFormErrors] = useState({
    passwordError: '',
    confirmPasswordError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleUserCreateNewPasswordFormSubmit = async (e) => {
    e.preventDefault()

    // Form Details
    let passwordError = ''
    let confirmPasswordError = ''

    if (!v_required(userCreateNewPasswordForm.password)) {
      passwordError = 'Password can not be empty.'
    } else if (
      !(pwd_guideline_length,
      pwd_guideline_lowercase,
      pwd_guideline_number,
      pwd_guideline_specialChar)
    ) {
      passwordError = 'Password does not stasfy the following guidelines.'
    } else if (
      !v_match(userCreateNewPasswordForm.password, userCreateNewPasswordForm.confirmPassword)
    ) {
      passwordError = 'Passwords are not matching.'
    }

    if (!v_required(userCreateNewPasswordForm.confirmPassword)) {
      confirmPasswordError = 'Confirm password can not be empty.'
    }

    // If errors exist, show errors
    setUserCreateNewPasswordFormErrors({
      passwordError,
      confirmPasswordError,
    })

    // If no errors exist, send to the server
    if (!(passwordError || confirmPasswordError)) {
      console.log('FOURTH SECTION')
      console.log(userCreateNewPasswordForm)

      // Sending to the server
      setLoading(true)
      setResMessage('')
      authService
        .passwordReset(emailVerificationForm.email, userCreateNewPasswordForm.password)
        .then(
          () => {
            setLoading(false)
            navigate('/login')
            console.log('Password changed successfully')
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

  const createNewPasswordSection = () => {
    return (
      <div>
        <h1 className="text-center">Create new password</h1>
        <p className="text-medium-emphasis text-center pt-1">
          Your new password must be different from previously used password.
        </p>

        <div className="mb-3">
          <CFormLabel htmlFor="validationPassword">Enter New Password</CFormLabel>
          <CInputGroup>
            <CFormInput
              type={showPassword ? 'password' : 'text'}
              id="validationPassword"
              // label="Password"
              name="password"
              onChange={onUpdateCreateNewPasswordForm}
              value={userCreateNewPasswordForm.password}
              // feedback={userCreateNewPasswordFormErrors.passwordError}
              invalid={userCreateNewPasswordFormErrors.passwordError ? true : false}
            />
            <CInputGroupText onClick={onEyeClick}>
              {showPassword ? <FaEye className="fs-4" /> : <FaEyeSlash className="fs-4" />}
            </CInputGroupText>
            <CFormFeedback invalid>
              {userCreateNewPasswordFormErrors.passwordError}
            </CFormFeedback>
          </CInputGroup>

          <div className="p-2 mb-2">
            <div className={pwd_guideline_length ? 'text-success fw-bold' : ''}>
              {pwd_guideline_length && <CIcon icon={cilCheckAlt} size="sm" className="me-1" />}
              <small>Password contain more than 8 characters.</small>
            </div>
            <div className={pwd_guideline_uppercase ? 'text-success fw-bold' : ''}>
              {pwd_guideline_uppercase && <CIcon icon={cilCheckAlt} size="sm" className="me-1" />}
              <small>Contains an uppercase letter.</small>
            </div>
            <div className={pwd_guideline_lowercase ? 'text-success fw-bold' : ''}>
              {pwd_guideline_lowercase && <CIcon icon={cilCheckAlt} size="sm" className="me-1" />}
              <small>Contains a lowercase letter.</small>
            </div>
            <div className={pwd_guideline_number ? 'text-success fw-bold' : ''}>
              {pwd_guideline_number && <CIcon icon={cilCheckAlt} size="sm" className="me-1" />}
              <small>Contains a number.</small>
            </div>
            <div className={pwd_guideline_specialChar ? 'text-success fw-bold' : ''}>
              {pwd_guideline_specialChar && <CIcon icon={cilCheckAlt} size="sm" className="me-1" />}
              <small>Contains a special character.</small>
            </div>
          </div>

          <CFormLabel htmlFor="validationConfirmPassword">Confirm New Password</CFormLabel>
          <CInputGroup>
            <CFormInput
              type={showConfirmPassword ? 'password' : 'text'}
              id="validationConfirmPassword"
              // label="Confirm New Password"
              name="confirmPassword"
              onChange={onUpdateCreateNewPasswordForm}
              value={userCreateNewPasswordForm.confirmPassword}
              // feedback={userCreateNewPasswordFormErrors.confirmPasswordError}
              invalid={userCreateNewPasswordFormErrors.confirmPasswordError ? true : false}
            />
            <CInputGroupText onClick={onEyeClickOnConfirmPassword}>
              {showConfirmPassword ? <FaEye className="fs-4" /> : <FaEyeSlash className="fs-4" />}
            </CInputGroupText>
            <CFormFeedback invalid>
              {userCreateNewPasswordFormErrors.confirmPasswordError}
            </CFormFeedback>
          </CInputGroup>
        </div>

        {resMessage && (
          <CAlert color="danger" className="text-center">
            {resMessage}
          </CAlert>
        )}

        <div className="d-grid">
          <CButton
            color="success"
            size="md"
            type="submit"
            className="py-2"
            onClick={handleUserCreateNewPasswordFormSubmit}
          >
            <div className="text-white">{loading && <CSpinner size="sm" />} Confirm</div>
          </CButton>
        </div>
      </div>
    )
  }

  return (
    // <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={7} lg={6} xl={5}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  {/* Sections */}
                  {sectionIndex === 0 && emailVerificationSection()}
                  {sectionIndex === 1 && createNewPasswordSection()}

                  <div className="my-4 text-center">
                    Don't have an account? <Link to="/studentregister">Sign up now</Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    // </div>
  )
}

export default ForgotPassword
