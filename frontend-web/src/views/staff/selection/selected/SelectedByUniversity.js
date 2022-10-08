import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { toast } from 'react-toastify'
import selectionService from '../../../../services/staff/selectionService'
import { cilFilter, cilArrowRight, cilSearch } from '@coreui/icons'


function SelectedByUniversity() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  // For selection data
  const [selectionData, setSelectionData] = useState([
    {
      size: '',
      value0: [
        {
          id: '',
          indexNumber: '',
          selectedCourse: '',
        },
      ],
      value1: '',
      value2: '',
    },
  ])

  const [courses, setCourses] = useState([])

  // Get selected students
  useEffect(() => {
    setLoading(true)

    selectionService.getSelectedStudents().then(
      (res) => {
        if (res.type === 'OK') {
          setSelectionData(res.payload)
          // group by and filter the count of each course
          const uniqueCourses = res.payload.map(function (val) {
            return val['value2'].trim()
          })
          const result = uniqueCourses.reduce(
            (a, c) => ((a[c] = (a[c] || 0) + 1), a),
            Object.create(null),
          )
          const entries = Object.entries(result)
          setCourses((prev) => [...prev, ...entries])
          console.log(courses)
          toast.success(res.message)
        } else if (res.type === 'BAD') {
          toast.error(res.message)
        }

        setLoading(false)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
        // After recieving the server request
        toast.error(res)
        setLoading(false)
      },
    )
  }, [])

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Students selected for courses</CCardHeader>
            <CCardBody>
              <CNav variant="tabs" role="tablist">
                <CNavItem>
                  <NavLink to="/staff/selected/filterbyCourse" style={{ textDecoration: 'none' }}>
                    <CNavLink>Filter By Courses</CNavLink>
                  </NavLink>
                </CNavItem>
                <CNavItem>
                  <NavLink to="#" style={{ textDecoration: 'none' }}>
                    <CNavLink>Filter By Universities</CNavLink>
                  </NavLink>
                </CNavItem>
              </CNav>
              <CRow>
                <div>
                  <CRow>
                    <CCol xs>
                      <CCard className="mb-4">
                        <CCardBody>
                          <CRow className="py-2 bg-light rounded">
                            <CCol md={6}>
                              <CInputGroup>
                                <CInputGroupText>Filter By</CInputGroupText>
                                <CFormSelect aria-label="filterByOption1">
                                  <option value="zscore">Intake</option>
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
                                  <CTableHeaderCell></CTableHeaderCell>
                                  <CTableHeaderCell>University</CTableHeaderCell>
                                  <CTableHeaderCell>Total Intake</CTableHeaderCell>
                                  <CTableHeaderCell style={{ width: '15%' }}></CTableHeaderCell>
                                </CTableRow>
                              </CTableHead>
                              <CTableBody>
                                {courses.map((item) => (
                                  // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                  <CTableRow key={item.id}>
                                    <CTableHeaderCell>{item.id}</CTableHeaderCell>
                                    <CTableDataCell>{item[0]}</CTableDataCell>
                                    <CTableDataCell>{item[1]}</CTableDataCell>
                                    <CTableDataCell>
                                      <CButton
                                        color="warning"
                                        component="a"
                                        href={`/staff/selected/filterbyUniversity/students?university=${item[0]}`}
                                      >
                                        View More
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
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default SelectedByUniversity
