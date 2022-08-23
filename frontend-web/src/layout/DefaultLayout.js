import React from 'react'
import { useState, useEffect } from 'react'


import authService from '../services/authService'

// import { AppHeader } from '../components'
import DefaultAppHeader from '../components/header/DefaultAppHeader'

function DefaultLayout(props) {
  // Set user details
  const [userDetails, setUserDetails] = useState({
    username: '',
    actorType: 'university',
  })

  useEffect(() => {
    const user = authService.getCurrentUser()

    if (user !== null) {
      console.log(user)
      setUserDetails({ username: user.username, actorType: user.type })
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
