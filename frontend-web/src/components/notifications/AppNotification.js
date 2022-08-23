import React from 'react'
import { CContainer, CRow, CCol } from '@coreui/react'

function AppNotification(props) {
  return (
    <CContainer className="border mb-2 dashboard-notification">
      <CRow className="justify-content-between py-1 bg-light">
        <CCol xs={9}>
          <strong>{props.title}</strong>
        </CCol>
        <CCol xs={3} className="text-right ms-auto">
          <span className="text-muted">{props.createdAt}</span>
        </CCol>
      </CRow>
      <div className="mb-2">{props.content}</div>
    </CContainer>
  )
}

export default AppNotification
