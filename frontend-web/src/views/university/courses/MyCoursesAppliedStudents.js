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
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'


const MyCoursesAppliedStudents = () => {
  let navigate = useNavigate()

  const [allCoursesData, setAllCoursesData] = useState([
    {
      id: 1,
      unicode: '112A',
      courseOfStudy: 'Medicine',
      appliedAmount: '250'
    },
    {
      id: 2,
      unicode: '112A',
      courseOfStudy: 'Engineering',
      appliedAmount: '400'
    },
    {
      id: 3,
      unicode: '112A',
      courseOfStudy: 'Computer Science',
      appliedAmount: '300'
    },
    {
      id: 4,
      unicode: '115A',
      courseOfStudy: 'Dental',
      appliedAmount: '90',
    },
    {
      id: 5,
      unicode: '118A',
      courseOfStudy: 'Information System',
      appliedAmount: '105',
    },
    {
      id: 3,
      unicode: '113A',
      courseOfStudy: 'Physical Science',
      appliedAmount: '105',
    },
  ])

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Applied Students for Courses</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="unicode">Unicode</option>
                      <option value="course">Course</option>
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
                      <CTableHeaderCell>No.of Applicants</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {allCoursesData.map((item) => (
                      <CTableRow key={item.id} onClick={() => {
                        navigate('/university/courses/appliedstudents/list')
                        // navigate('/student?id=' + item.id)
                      }}>
                        <CTableHeaderCell>{item.id}</CTableHeaderCell>
                        <CTableDataCell>{item.unicode}</CTableDataCell>
                        <CTableDataCell>{item.courseOfStudy}</CTableDataCell>
                        <CTableDataCell>{item.appliedAmount}</CTableDataCell>
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

export default MyCoursesAppliedStudents
