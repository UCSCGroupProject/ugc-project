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
import { cilFilter} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function StatusValidation() {
  const courseList = [
    {
      id: 1,
      name: 'B.F.Ilma',
      status: 'Government',
      school: "St. Paul's Girls' School, Milagiriya",
      district: 'Colombo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      name: 'K.N.Perera',
      status: 'Private',
      school: 'Lyceum International School, Ratnapura',
      district: 'Ratnapura',
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Requests</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="course">Course</option>
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
                      <CTableHeaderCell>#</CTableHeaderCell>
                      <CTableHeaderCell>Name</CTableHeaderCell>
                      <CTableHeaderCell>Status</CTableHeaderCell>
                      <CTableHeaderCell>School</CTableHeaderCell>
                      <CTableHeaderCell>District</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: '15%' }}>Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {courseList.map((item) => (
                      // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.id}</CTableHeaderCell>
                        <CTableDataCell>{item.name}</CTableDataCell>
                        <CTableDataCell>{item.status}</CTableDataCell>
                        <CTableDataCell>{item.school}</CTableDataCell>
                        <CTableDataCell>{item.district}</CTableDataCell>
                        <CTableDataCell>
                          <CButton color="warning" component="a" href="">
                            Validate
                          </CButton>
                        </CTableDataCell>
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

export default StatusValidation
