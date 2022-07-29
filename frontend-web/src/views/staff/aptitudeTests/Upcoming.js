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
  CBadge,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function UpcomingAptitudeTests() {

  const upcomingTests = [
    {
      id: '1',
      apptitudeTest: 'IS apptitude test',
      course: 'Information Systems',
      university: 'University of Colombo School of Computing',
      examDate: '07/08/2022',
      examTime: '10.00 a.m',
      status: 'Upcoming',
    },
    {
      id: '2',
      apptitudeTest: 'Architecting exam',
      course: 'Architecture',
      university: 'University of Moratuwa',
      examDate: '07/10/2022',
      examTime: '12.00 a.m',
      status: 'Done',
    },
    {
      id: '3',
      apptitudeTest: 'Chemical test',
      course: 'Medicine',
      university: 'University of Colombo',
      examDate: '14/11/2022',
      examTime: '10.00 a.m',
      status: 'Delayed',
    },
  ]

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Upcoming Aptitude Tests</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
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
                      <CTableHeaderCell>No.</CTableHeaderCell>
                      <CTableHeaderCell>Apptitude Test</CTableHeaderCell>
                      <CTableHeaderCell>Course</CTableHeaderCell>
                      <CTableHeaderCell>University</CTableHeaderCell>
                      <CTableHeaderCell>Exam Date</CTableHeaderCell>
                      <CTableHeaderCell>Exam Time</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {upcomingTests.map((item) => (
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.id}</CTableHeaderCell>
                        <CTableHeaderCell>{item.apptitudeTest}</CTableHeaderCell>
                        <CTableDataCell>{item.course}</CTableDataCell>
                        <CTableDataCell>{item.university}</CTableDataCell>
                        <CTableDataCell>{item.examDate}</CTableDataCell>
                        <CTableDataCell>{item.examTime}</CTableDataCell>
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

export default UpcomingAptitudeTests