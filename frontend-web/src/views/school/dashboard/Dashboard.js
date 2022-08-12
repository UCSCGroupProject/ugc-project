import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import { CContainer, CRow, CCol, CCard, CCardBody, CCardHeader, CBadge } from '@coreui/react'

function Dashboard() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <CRow>
        <CCol md={8} className="bg-white">
          Content needs to be added
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
