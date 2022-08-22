import React from 'react'
import {
  CCard,
  CTable,
  CCol,
  CTableHead,
  CFormInput,
  CCardBody,
  CButton,
  CFormSelect,
  CCardHeader,
  CTableRow,
  CInputGroupText,
  CTableHeaderCell,
  CInputGroup,
  CRow,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function Eligible() {

  const eligibleList = [
    {
      id: 1,
      unicode: '112A',
      course: 'Medicine',
      totalIntake: '850',
      appliedCount: '2432',
      eligibleCount: '1256',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 1,
      unicode: '112A',
      course: 'Engineering',
      totalIntake: '870',
      appliedCount: '3450',
      eligibleCount: '1344',
      _cellProps: { id: { scope: 'row' } },
    }
  ]

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Students eligible for courses</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="course">Course</option>
                      <option value="university">University</option>
                      <option value="zscore">Intake</option>
                      <option value="school">Eligible Count</option>
                    </CFormSelect>
                    <CInputGroupText> in </CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="ascending">Ascending</option>
                      <option value="descending">Descending</option>
                    </CFormSelect>
                    <CInputGroupText> order </CInputGroupText>
                    <CButton color="warning" type="button" className="text-white">
                      <CIcon icon={cilFilter} />
                      <span>{'  '}Filter</span>
                    </CButton>
                  </CInputGroup>
                </CCol>
                <CCol md={4} className="ms-auto">
                  <CInputGroup>
                    <CFormInput type="text" name="phone" placeholder="Search..." />
                    <CButton color="warning" type="button" className="text-white">
                      <CIcon icon={cilSearch} />
                      <span>{'  '}Search</span>
                    </CButton>
                  </CInputGroup>
                </CCol>
              </CRow>
              <br />
              <CRow className="m-1">
                <CTable bordered>
                  <CTableHead color="dark">
                    <CTableRow>
                      <CTableHeaderCell>Unicode</CTableHeaderCell>
                      <CTableHeaderCell>Course</CTableHeaderCell>
                      <CTableHeaderCell>Total Intake</CTableHeaderCell>
                      <CTableHeaderCell>No. of Applicants</CTableHeaderCell>
                      <CTableHeaderCell>No. of Eligible Students</CTableHeaderCell>
                      <CTableHeaderCell></CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {eligibleList.map((item) => (
                      // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.unicode}</CTableHeaderCell>
                        <CTableDataCell>{item.course}</CTableDataCell>
                        <CTableDataCell>{item.totalIntake}</CTableDataCell>
                        <CTableDataCell>{item.appliedCount}</CTableDataCell>
                        <CTableDataCell>{item.eligibleCount}</CTableDataCell>
                        <CTableDataCell><CButton color='warning' component="a" href="#/staff/eligible/courses">View More</CButton></CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Eligible