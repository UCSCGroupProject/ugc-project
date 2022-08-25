import React from 'react'
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

import AppTable from '../../../../components/table/AppTable'

const allCoursesData = [
  {
    id: '1',
    unicode: '112A',
    courseOfStudy: 'Medicine',
    university: 'University of Colombo',
  },
]

function AllCourses() {
  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Courses</CCardHeader>
            <CCardBody>
              <AppTable />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default AllCourses
