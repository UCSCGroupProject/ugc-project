import React from 'react'
import { useState, useEffect } from 'react'
import { AppContent } from '../components/'
import AppHeader from '../components/header/AppHeader'
import AppSidebar from '../components/sidebar/AppSidebar'
import AppFooter from '../components/footer/AppFooter'

import authService from '../services/authService'

function UGCLayout() {
  // Set user details
  const [userDetails, setUserDetails] = useState({
    username: '',
    actortype: '',
  })

  useEffect(() => {
    const user = authService.getCurrentUser()
    console.log(user)

    // Set the role
    if (user !== null) {
      if (user.roles.includes('ROLE_STUDENT')) {
        setUserDetails({ username: user.username, actortype: 'student' })
      }
    }
  }, [])

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader details={userDetails} />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default UGCLayout
