import React, { useState } from 'react'
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
  CBadge,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const MyTests = () => {
  const [allTestsData, setAllTestsData] = useState([
    {
      id: 1,
      unicode: '118H',
      courseOfStudy: 'Architecture',
      date: '2022-08-03',
      time: '10:00 AM',
      status: 'Done',
    },
    {
      id: 2,
      unicode: '112A',
      courseOfStudy: 'Fashion Designing',
      date: '2022-08-06',
      time: '01:00 PM',
      status: 'Progress',
    },
    {
      id: 3,
      unicode: '115K',
      courseOfStudy: 'INformation System',
      date: '2022-03-06',
      time: '02:00 PM',
      status: 'Done',
    },
  ])

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Aptitude Test</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="unicode">Unicode</option>
                      <option value="course">Course</option>
                      <option value="course">Date</option>
                      <option value="course">Status</option>
                      {/* <option value="university">University</option> */}
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
                      <CTableHeaderCell>No.</CTableHeaderCell>
                      <CTableHeaderCell>Unicode</CTableHeaderCell>
                      <CTableHeaderCell>Course</CTableHeaderCell>
                      <CTableHeaderCell>Date</CTableHeaderCell>
                      <CTableHeaderCell>Time</CTableHeaderCell>
                      <CTableHeaderCell>Status</CTableHeaderCell>
                      {/* <CTableHeaderCell>University</CTableHeaderCell> */}
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {allTestsData.map((item) => (
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.id}</CTableHeaderCell>
                        <CTableDataCell>{item.unicode}</CTableDataCell>
                        <CTableDataCell>{item.courseOfStudy}</CTableDataCell>
                        <CTableDataCell>{item.date}</CTableDataCell>
                        <CTableDataCell>{item.time}</CTableDataCell>
                        <CTableDataCell>
                          {item.status === 'Progress' && <CBadge color="warning">{item.status}</CBadge>}
                          {item.status === 'Done' && <CBadge color="success">{item.status}</CBadge>}
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

export default MyTests
