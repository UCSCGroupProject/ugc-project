import React from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader } from '@coreui/react'

function AppStandardContainer(props) {
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>{props.title}</CCardHeader>
          <CCardBody>{props.children}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AppStandardContainer
