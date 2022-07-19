import React from 'react'
import { useState } from 'react'
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
} from '@coreui/react'

import { v_email, v_required, v_inRange, v_min, v_match } from '../../utils/validator'

import authService from '../../services/authService'

const Test_Registration = () => {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  // Form data
  const [testRegistrationForm, setTestRegistrationForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // Update the form data while input
  const onUpdateTestRegistrationFormInput = (e) => {
    setTestRegistrationForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [testRegistrationFormErrors, setTestRegistrationFormErrors] = useState({
    usernameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleSubmit = async (e) => {
    e.preventDefault()

    let usernameError = ''
    let emailError = ''
    let passwordError = ''
    let confirmPasswordError = ''

    if (!v_required(testRegistrationForm.username)) {
      usernameError = 'Username can not be empty.'
    } else if (!v_inRange(testRegistrationForm.username, 5, 20)) {
      usernameError = 'Username must be 5-20 long.'
    }

    if (!v_required(testRegistrationForm.email)) {
      emailError = 'Email can not be empty.'
    } else if (!v_email(testRegistrationForm.email)) {
      emailError = 'Email is not valid.'
    }

    if (!v_required(testRegistrationForm.password)) {
      passwordError = 'Password can not be empty.'
    } else if (!v_min(testRegistrationForm.password, 10)) {
      passwordError = 'Password must be at least 10 characters long.'
    } else if (!v_match(testRegistrationForm.password, testRegistrationForm.confirmPassword)) {
      passwordError = 'Passwords are not matching.'
    }

    if (!v_required(testRegistrationForm.confirmPassword)) {
      confirmPasswordError = 'Confirm Password can not be empty.'
    }

    // If errors exist, show errors
    setTestRegistrationFormErrors({
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

      authService
        .register(
          testRegistrationForm.username,
          testRegistrationForm.email,
          testRegistrationForm.password,
        )
        .then(
          () => {
            navigate('/login')
          },
          (error) => {
            const res =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString()

            setResMessage(res)

            // loading
            setLoading(false)
          },
        )
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1 className="text-center">Test Registration</h1>
                  <p className="text-medium-emphasis text-center">
                    Please fill the following details
                  </p>

                  {resMessage && (
                    <CAlert color="info" className="text-center">
                      {resMessage}
                    </CAlert>
                  )}

                  <div className="mb-3">
                    <CFormInput
                      type="text"
                      id="validationServer01"
                      label="Username"
                      name="username"
                      onChange={onUpdateTestRegistrationFormInput}
                      value={testRegistrationForm.username}
                      feedback={testRegistrationFormErrors.usernameError}
                      invalid={testRegistrationFormErrors.usernameError ? true : false}
                    />
                  </div>

                  <div className="mb-3">
                    <CFormInput
                      type="text"
                      id="validationServer02"
                      label="Email"
                      name="email"
                      onChange={onUpdateTestRegistrationFormInput}
                      value={testRegistrationForm.email}
                      feedback={testRegistrationFormErrors.emailError}
                      invalid={testRegistrationFormErrors.emailError ? true : false}
                    />
                  </div>

                  <div className="mb-3">
                    <CFormInput
                      type="password"
                      id="validationServer03"
                      label="Password"
                      name="password"
                      onChange={onUpdateTestRegistrationFormInput}
                      value={testRegistrationForm.password}
                      feedback={testRegistrationFormErrors.passwordError}
                      invalid={testRegistrationFormErrors.passwordError ? true : false}
                    />
                  </div>

                  <div className="mb-3">
                    <CFormInput
                      type="password"
                      id="validationServer04"
                      label="Confirm Password"
                      name="confirmPassword"
                      onChange={onUpdateTestRegistrationFormInput}
                      value={testRegistrationForm.confirmPassword}
                      feedback={testRegistrationFormErrors.confirmPasswordError}
                      invalid={testRegistrationFormErrors.confirmPasswordError ? true : false}
                    />
                  </div>

                  <div className="d-grid">
                    <CButton color="success" size="lg" type="submit" disabled={loading}>
                      <div className="text-white">{loading && <CSpinner size="sm" />} Signup</div>
                    </CButton>
                  </div>

                  <div className="m-4 text-center">
                    <Link to="/forgotpassword">Forgot password?</Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Test_Registration
