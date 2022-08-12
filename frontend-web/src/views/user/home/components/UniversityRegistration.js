import React from 'react'
import { NavLink } from 'react-router-dom'

import { CContainer, CCard, CCardHeader } from '@coreui/react'

function UniversityRegistration() {
  return (
    <CCard className="mb-3">
      <CCardHeader>
        <strong>University Registration 2020/2021</strong>
      </CCardHeader>
      <div className="p-0">
        <NavLink to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <CContainer
            className="border border-bottom-1 dashboard-notification py-3"
            style={{ fontSize: '15px' }}
          >
            1. Instructions to download your Letter of Selection (VERY IMPORTANT)
          </CContainer>
        </NavLink>
        <NavLink to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <CContainer
            className="border border-bottom-1 dashboard-notification py-3"
            style={{ fontSize: '15px' }}
          >
            2. To directly proceed to registration
          </CContainer>
        </NavLink>

        <NavLink to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <CContainer
            className="border border-bottom-1 dashboard-notification py-3"
            style={{ fontSize: '15px' }}
          >
            3. To download the Letter of Selection & proceed to registration
          </CContainer>
        </NavLink>
      </div>
    </CCard>
  )
}

export default UniversityRegistration
