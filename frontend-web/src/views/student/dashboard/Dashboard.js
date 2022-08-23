import React from 'react'
import { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardTitle,
  CCardText,
  CButton,
  CBadge,
  CWidgetStatsB,
  CWidgetStatsF,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

import { cilChartPie } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import authService from '../../../services/authService'

import student_banner from '../../../assets/images/dashboard/student_banner.png'

function Dashboard() {
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

  const [date, setDate] = useState(new Date())

  return (
    <div>
      <CRow>
        <CCol md={8}>
          <h1 class="display-6">Hello {userDetails.username}, Welcome</h1>
          <br />
          <div>
            <CCard style={{ width: '100%' }}>
              <CCardBody>
                <CRow>
                  <CCol md={4}>
                    <CCardImage orientation="top" src={student_banner} />
                  </CCol>
                  <CCol md={8}>
                    <CCardTitle>Explore & Engage</CCardTitle>
                    <p className="mb-1">
                      As a <strong>Student</strong> you will be having following features.
                    </p>
                    <CListGroup flush>
                      <CListGroupItem>Flexible university admisison</CListGroupItem>
                      <CListGroupItem>Course and University details</CListGroupItem>
                      <CListGroupItem>Test progress & statistics</CListGroupItem>
                      <CListGroupItem>Calender with timelines</CListGroupItem>
                      <CListGroupItem>Notifications & Reminders</CListGroupItem>
                    </CListGroup>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </div>
          <br />
          <div>
            <CRow>
              <CCol md={6}>
                <CWidgetStatsB
                  className="mb-3"
                  progress={{ color: 'success', value: 25 }}
                  text="You have to complete the Step 2"
                  title="University Admission progress"
                  value="25%"
                />
              </CCol>
              <CCol md={6}>
                <CWidgetStatsF
                  className="mb-3"
                  color="warning"
                  icon={<CIcon icon={cilChartPie} height={24} />}
                  title="Coming Soon "
                  value="LATEST FEATURES"
                />
              </CCol>
            </CRow>
          </div>
        </CCol>
        <CCol md={4} className="">
          {/* Calendar */}
          <CCard className="mb-3">
            <CCardHeader>
              Calendar <CBadge color="success">10</CBadge>
            </CCardHeader>
            <CCardBody>
              <Calendar onChange={setDate} value={date} className="w-100" />
            </CCardBody>
          </CCard>

          {/* Notifications */}
          <CCard className="mb-3">
            <CCardHeader>
              Notifications <CBadge color="warning">10</CBadge>
            </CCardHeader>
            {/* <CCardBody> */}
            <div className="p-1">
              <CContainer className="border mb-2 dashboard-notification">
                <CRow className="justify-content-between py-1 bg-light">
                  <CCol xs={9}>
                    <strong>Calling all the applicants</strong>
                  </CCol>
                  <CCol xs={3} className="text-right ms-auto">
                    <span className="text-muted"> 1 day ago</span>
                  </CCol>
                </CRow>
                <div className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, alias.
                </div>
              </CContainer>
              <CContainer className="border mb-2 dashboard-notification">
                <CRow className="justify-content-between py-1 bg-light">
                  <CCol xs={9}>
                    <strong>Calling all the applicants</strong>
                  </CCol>
                  <CCol xs={3} className="text-right ms-auto">
                    <span className="text-muted"> 1 day ago</span>
                  </CCol>
                </CRow>
                <div className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, alias.
                </div>
              </CContainer>
            </div>

            {/* </CCardBody> */}
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Dashboard
