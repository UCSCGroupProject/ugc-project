import React from 'react'
import { useState, useEffect } from 'react'
import { CRow, CCol } from '@coreui/react'

import { toast } from 'react-toastify'

import authService from '../../../services/authService'

import AppBanner from '../../../components/banner/AppBanner'
import AppCalender from '../../../components/calender/AppCalender'
import AppNotifications from '../../../components/notifications/AppNotifications'

import bannerImg from '../../../assets/images/banners/school_banner.jpg'

const bannerData = {
  img: bannerImg,
  title: 'Explore & Engage',
  desc: 'As a Student you will be having following features.',
  listItems: [
    {
      id: '0',
      content: 'Flexible university admisison',
    },
    {
      id: '1',
      content: 'Course and University details',
    },
    {
      id: '2',
      content: 'Test progress & statistics',
    },
    {
      id: '3',
      content: 'Calender with timelines',
    },
    {
      id: '5',
      content: 'Notifications & Reminders',
    },
  ],
}

const notificationsData = [
  {
    id: '0',
    title: 'Calling all the applicants',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, alias.',
    createdAt: 'Just now',
  },
]

function Dashboard() {
  // Set user details
  // const [userDetails, setUserDetails] = useState({
  //   username: '',
  //   actorType: 'university',
  // })

  // useEffect(() => {
  //   const user = authService.getCurrentUser()

  //   if (user !== null) {
  //     console.log(user)
  //     setUserDetails({ username: user.username, actorType: user.type })
  //   }
  // }, [])

  const [user, setUser] = useState(authService.getCurrentUser())

  useEffect(() => {
    if (user != null) {
      toast.success('Welcome, ' + user.username)
    }
  }, [])

  return (
    <div>
      <CRow>
        <CCol md={8}>
          {/* Banner */}
          <AppBanner data={bannerData} />
        </CCol>
        <CCol md={4} className="">
          {/* Calendar */}
          <AppCalender />

          {/* Notifications */}
          <AppNotifications notifications={notificationsData} />
        </CCol>
      </CRow>
    </div>
  )
}

export default Dashboard
