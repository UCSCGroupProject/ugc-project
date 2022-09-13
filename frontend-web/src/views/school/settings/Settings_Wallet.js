import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  CNav,
  CNavItem,
  CNavLink,
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CButton,
  CFormTextarea,
} from '@coreui/react'

import { toast } from 'react-toastify'

import schoolService from '../../../services/schoolService'
import authService from '../../../services/authService'

function Settings_Wallet() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState(authService.getCurrentUser())

  const [wallet, setWallet] = useState({
    privateKey: '',
    publicKey: '',
  })

  useEffect(() => {
    setLoading(true)

    schoolService.getKeypair(user.username).then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)
          setWallet(res.payload)
        } else if (res.type === 'BAD') {
          toast.error(res.message)
        }

        setLoading(false)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()

        // After recieving the server request
        setLoading(false)
      },
    )

    setLoading(false)
  }, [])

  return (
    <div>
      <header>
        <CNav variant="tabs">
          <CNavItem>
            <NavLink to="/school/wallet" style={{ textDecoration: 'none' }}>
              <CNavLink active>Wallet</CNavLink>
            </NavLink>
          </CNavItem>
        </CNav>
      </header>
      <CContainer className="bg-white">
        <CRow className="p-2">
          <CCard>
            <CCardBody>
              <CCardTitle>Key pair Details</CCardTitle>
              <hr />
              <CCardText>
                Following keys are your signing keys. If it is necessary download the following keys
                to your local machine and use those whenever required.
              </CCardText>
              <div>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Private key</CFormLabel>
                  </CCol>
                  <CCol md={8}>
                    <CFormTextarea
                      id="privateKey"
                      rows={3}
                      value={wallet.privateKey}
                      text="This is a secret key. Do not distribute this in common public."
                      readOnly
                    />
                  </CCol>
                </CRow>
                <CRow className="my-3 mx-1">
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomUsername">Public key</CFormLabel>
                  </CCol>
                  <CCol md={8}>
                    <CFormTextarea
                      id="publicKey"
                      rows={3}
                      value={wallet.publicKey}
                      text="This is the public key. You can share this to anyone to validate your signature."
                      readOnly
                    />
                  </CCol>
                </CRow>
              </div>
            </CCardBody>
          </CCard>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Settings_Wallet
