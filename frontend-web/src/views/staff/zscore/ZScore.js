import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
  CSpinner,
  CAlert,
} from '@coreui/react'


function StaffZScore() {
  return (
    <><div>StaffZScore</div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <CButton color="primary" size="lg" type="button" variant="outline" href="#/staff/zscoretable">
            2021 - Latest
        </CButton>
        <CButton color="primary" size="lg" type="button" variant="outline" href="#/staff/zscoretable">
            2020
        </CButton>
        <CButton color="primary" size="lg" type="button" variant="outline" href="#/staff/zscoretable">
            2019
        </CButton>
      </div>
    </>
  )
}

export default StaffZScore