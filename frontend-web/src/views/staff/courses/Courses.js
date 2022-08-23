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
import { cilFilter, cilDelete, cibAddthis } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import courseService from '../../../services/staff/courseService'

function StaffCourses() {

  const courseList = [
    {
      id: 1,
      course: 'Medicine',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      course: 'Engineering',
      _cellProps: { id: { scope: 'row' } },
    }
  ]

  const courseList2 = courseService.getCourses();
  console.log(courseList2);
  
  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Courses</CCardHeader>
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
                      <CTableHeaderCell>Course</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: "15%" }}>Action</CTableHeaderCell>
                      <CTableHeaderCell style={{ width: "10%" }}> </CTableHeaderCell>
                      <CTableHeaderCell style={{ width: "10%" }}> </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {courseList.map((item) => (
                      // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.id}</CTableHeaderCell>
                        <CTableHeaderCell>{item.course}</CTableHeaderCell>
                        <CTableDataCell><CButton color='warning' component="a" href="/staff/universitycourses">View More</CButton></CTableDataCell>
                        <CTableDataCell><CButton color='warning'>Edit</CButton></CTableDataCell>
                        <CTableDataCell><CButton color='danger'><CIcon icon= {cilDelete}></CIcon></CButton></CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <div style={{textAlign: 'right'}}>
      <CButton color='success'><CIcon icon={cibAddthis}></CIcon> Add Course</CButton>
      </div>

    </div>
  )
}

export default StaffCourses