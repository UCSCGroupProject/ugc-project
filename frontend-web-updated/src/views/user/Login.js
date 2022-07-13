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
  // Form details
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [emailError, setEmailError] = useState('')

  const [password, setPassword] = useState('')
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [passwordError, setPasswordError] = useState('')

  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(emailError)

    // init
    setIsEmailValid(true)
    setEmailError('')
    setIsPasswordValid(true)
    setPasswordError('')

    if (!v_required(email)) {
      setIsEmailValid(false)
      setEmailError('Email can not be empty.')
    } else if (!v_email(email)) {
      setIsEmailValid(false)
      setEmailError('Enter a valid email.')
    }

    if (!v_required(password)) {
      setIsPasswordValid(false)
      setPasswordError('Password can not be empty.')
    }

    if (!isEmailValid || !isPasswordValid) {
      return
    }

    // all valid then submit
    // loading
    setLoading(true)
    setResMessage('')

    authService.login(email, password).then(
      () => {
        navigate('/')
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

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      feedback={emailError}
                      invalid={!isEmailValid}
                      //   required
                    />
                  </div>

                  <div className="mb-3">
                    <CFormInput
                      type="password"
                      id="validationServer01"
                      label="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      feedback={passwordError}
                      invalid={!isPasswordValid}
                      //   valid
                      //   required
                    />
                  </div>

                  <div className="d-grid">
                    <CButton color="success" size="lg" type="submit" disabled={loading}>
                      <div className="text-white">
                        {loading && <CSpinner size="sm" />}
                        Login
                      </div>
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

export default Login
