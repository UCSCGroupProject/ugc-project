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

import { v_email, v_required, v_inRange, v_match } from '../../utils/validator'

import authService from '../../services/authService'

const Test_Registration = () => {
  // Form details
  const [username, setUsername] = useState('')
  const [isUsernameValid, setIsUsernameValid] = useState(true)
  const [usernameError, setUsernameError] = useState('')

  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [emailError, setEmailError] = useState('')

  const [password, setPassword] = useState('')
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [passwordError, setPasswordError] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('')
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true)
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // init
    setIsUsernameValid(true)
    setUsernameError('')
    setIsEmailValid(true)
    setEmailError('')
    setIsPasswordValid(true)
    setPasswordError('')
    setIsConfirmPasswordValid(true)
    setConfirmPasswordError('')

    if (!v_required(username)) {
      setIsUsernameValid(false)
      setUsernameError('Username can not be empty.')
    } else if (!v_inRange(username, 5, 20)) {
      setIsUsernameValid(false)
      setUsernameError('Username must be 5-20 long.')
    }

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
    } else if(!v_match(password, confirmPassword)){
      setIsPasswordValid(false)
      setPasswordError('Passwords are not matching.')
    }


    if (!v_required(confirmPassword)) {
      setIsConfirmPasswordValid(false)
      setConfirmPasswordError('Confirm password can not be empty.')
    }

    if (!isEmailValid || !isPasswordValid) {
      return
    }

    // all valid then submit
    // loading
    setLoading(true)
    setResMessage('')

    authService.register(username, email, password).then(
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
                      label="Usernmae"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      feedback={usernameError}
                      invalid={!isUsernameValid}
                      //   required
                    />
                  </div>

                  <div className="mb-3">
                    <CFormInput
                      type="text"
                      id="validationServer02"
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
                      id="validationServer03"
                      label="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      feedback={passwordError}
                      invalid={!isPasswordValid}
                      //   valid
                      //   required
                    />
                  </div>

                  <div className="mb-3">
                    <CFormInput
                      type="password"
                      id="validationServer04"
                      label="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      feedback={confirmPasswordError}
                      invalid={!isConfirmPasswordValid}
                      //   valid
                      //   required
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
