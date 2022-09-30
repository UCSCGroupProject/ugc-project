import React from 'react'

import { CCard, CCardHeader, CCardBody } from '@coreui/react'

function AppStandardCard(props) {
  return (
    <CCard>
      <CCardHeader className={`${props.color} ${props.titleStyle}`}>{props.title}</CCardHeader>
      <CCardBody>{props.children}</CCardBody>
    </CCard>
  )
}

export default AppStandardCard
