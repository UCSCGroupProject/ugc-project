import React from 'react'
import { useState, useEffect } from 'react'

import authService from '../services/authService'

// import { AppHeader } from '../components'
import DefaultAppHeader from '../components/header/DefaultAppHeader'

function DefaultLayout(props) {
  // Set user details
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: '',
    actortype: 'university',
  })

  useEffect(() => {
    const user = authService.getCurrentUser()

    if (user !== null) {
      setIsUserLoggedIn(true)
      console.log(user)
      setUserDetails({ username: user.username, actortype: user.type })
    }
  }, [])

  return (
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <DefaultAppHeader userDetails={userDetails} />
      <div>{props.page}</div>
    </div>
  )
}

export default DefaultLayout
