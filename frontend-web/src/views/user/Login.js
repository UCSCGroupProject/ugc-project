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

import { v_email, v_required } from '../../utils/validator'

import authService from '../../services/authService'

const Login = () => {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  // Form data
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })

  // Update the form data while input
  const onUpdateInput = (e) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [loginFormErrors, setLoginFormErrors] = useState({
    emailError: '',
    passwordError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleSubmit = async (e) => {
    e.preventDefault()

    let emailError = ''
    let passwordError = ''

    if (!v_required(loginForm.email)) {
      emailError = 'Email can not be empty.'
    } else if (!v_email(loginForm.email)) {
      emailError = 'Email is not valid.'
    }

    if (!v_required(loginForm.password)) {
      passwordError = 'Password can not be empty.'
    }

    // If errors exist, show errors
    setLoginFormErrors({ emailError, passwordError })

    // If no errors exist, send to the server
    if (!(emailError || passwordError)) {
      // Sending to the server
      setLoading(true)
      setResMessage('')

      authService.login(loginForm.email, loginForm.password).then(
        () => {
          navigate('/')
          console.log(authService.getCurrentUser())
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
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={7} lg={6} xl={5}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1 className="text-center">Login</h1>
                  <p className="text-medium-emphasis text-center">Please enter your credentials</p>

                  {resMessage && (
                    <CAlert color="info" className="text-center">
                      {resMessage}
                    </CAlert>
                  )}

                  <div className="mb-3">
                    <CFormInput
                      type="text"
                      id="validationServer01"
                      label="Email"
                      name="email"
                      onChange={onUpdateInput}
                      value={loginForm.email}
                      feedback={loginFormErrors.emailError}
                      invalid={loginFormErrors.emailError ? true : false}
                    />
                  </div>

                  <div className="mb-3">
                    <CFormInput
                      type="password"
                      id="validationServer02"
                      label="Password"
                      name="password"
                      onChange={onUpdateInput}
                      value={loginForm.password}
                      feedback={loginFormErrors.passwordError}
                      invalid={loginFormErrors.passwordError ? true : false}
                    />
                  </div>

                  <div className="d-grid">
                    <CButton color="success" size="lg" type="submit">
                      <div className="text-white">
                        {loading && <CSpinner size="sm" />}
                        Login
                      </div>
                    </CButton>
                  </div>

                  <div className="m-4 text-center">
                    <Link to="/forgotpassword">Forgot password?</Link>
                  </div>
                  <div className="mb-4 text-center">
                    <Link to="/studentregister">Create an account?</Link>
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

export default Login
