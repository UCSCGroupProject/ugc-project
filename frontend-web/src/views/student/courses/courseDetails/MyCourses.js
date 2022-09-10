import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CFormSelect,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CInputGroup,
  CFormInput,
  CInputGroupText,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { toast } from 'react-toastify'

import unicodeService from '../../../../services/university/unicodeService'

function MyCourses() {
  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>My Courses</CCardHeader>
            <CCardBody>
              <div className="text-center my-3">
                <h2>You haven't selected order of preferences yet!</h2>
                <p>Please fill the university admission form to access this feature. </p>
                <NavLink to={`/student/registration`} style={{ textDecoration: 'none' }}>
                  <CButton color="success text-white" type="button" className="p-2">
                    Apply for University Admissions
                  </CButton>
                </NavLink>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default MyCourses
