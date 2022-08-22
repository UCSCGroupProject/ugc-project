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

function AppliedStudents() {

  const appliedStudentsList = [
    {
      id: 1,
      indexNumber: '1162667',
      nameWithInitials: 'B.F.Ilma',
      stream: 'Physical Science',
      zscore: '1.5247',
      district: "Colombo",
      school: "St.Paul's Girls' School, Milagiriya",
      status: 'Government',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      indexNumber: '1124623',
      nameWithInitials: 'K.N.Perera',
      stream: 'Biological Science',
      zscore: '1.8447',
      district: "Ratnapura",
      school: "Lyceum International School, Ratnapura",
      status: 'Private',
      _cellProps: { id: { scope: 'row' } },
    }
  ]
  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Applicants of degree programmes</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="zscore">ZScore</option>
                      <option value="school">School</option>
                      <option value="district">District</option>
                      <option value="stream">Stream</option>
                      <option value="course">Course</option>
                      <option value="university">University</option>
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
                      <CTableHeaderCell>Index Number</CTableHeaderCell>
                      <CTableHeaderCell>Name</CTableHeaderCell>
                      <CTableHeaderCell>Stream</CTableHeaderCell>
                      <CTableHeaderCell>Z Score</CTableHeaderCell>
                      <CTableHeaderCell>District</CTableHeaderCell>
                      <CTableHeaderCell>School</CTableHeaderCell>
                      <CTableHeaderCell>Status</CTableHeaderCell>

                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {appliedStudentsList.map((item) => (
                      // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.indexNumber}</CTableHeaderCell>
                        <CTableDataCell>{item.nameWithInitials}</CTableDataCell>
                        <CTableDataCell>{item.stream}</CTableDataCell>
                        <CTableDataCell>{item.zscore}</CTableDataCell>
                        <CTableDataCell>{item.district}</CTableDataCell>
                        <CTableDataCell>{item.school}</CTableDataCell>
                        <CTableDataCell>{item.status}</CTableDataCell>
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

export default AppliedStudents