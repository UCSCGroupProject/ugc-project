import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import { CCard, CCardBody, CCardHeader, CBadge } from '@coreui/react'

function AppCalender() {
  const [date, setDate] = useState(new Date())

  return (
    <CCard className="mb-3">
      <CCardHeader>
        Calendar <CBadge color="success">10</CBadge>
      </CCardHeader>
      <CCardBody>
        <Calendar onChange={setDate} value={date} className="w-100" />
      </CCardBody>
    </CCard>
  )
}

export default AppCalender
