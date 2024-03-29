import React from 'react'
import { CToast, CToastHeader, CToastBody, CToaster } from '@coreui/react'
import { useState, useEffect, useRef } from 'react'
import { AppContent } from '../components/'
import AppHeader from '../components/header/AppHeader'
import AppSidebar from '../components/sidebar/AppSidebar'
import AppFooter from '../components/footer/AppFooter'

import { ToastContainer } from 'react-toastify'

import authService from '../services/authService'

function UGCLayout() {
  //Toast related
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (
    <CToast>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong className="me-auto">CoreUI for React.js</strong>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  )

  // Set user details
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: '',
    actorType: 'staff',
  })

  useEffect(() => {
    const user = authService.getCurrentUser()

    if (user !== null) {
      setIsUserLoggedIn(true)
      console.log(user)
      setUserDetails({ username: user.username, actorType: user.type })
    }
  }, [])

  return (
    <div>
      {isUserLoggedIn && <AppSidebar actorType={userDetails.actorType} />}

      {/* this can be removed */}
      <CToaster ref={toaster} push={toast} placement="top-end" />

      <ToastContainer autoClose={2000} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader userDetails={userDetails} />
        <div className="body flex-grow-1 px-3">
          {/* <CButton onClick={() => addToast(exampleToast)}>Send a toast</CButton> */}
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default UGCLayout
