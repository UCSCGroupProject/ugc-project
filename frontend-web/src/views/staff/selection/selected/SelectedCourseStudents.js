import React from 'react'
import { useState, useEffect } from 'react'
import {
  CCard,
  CTable,
  CCol,
  CTableHead,
  CFormInput,
  CCardBody,
  CButton,
  CCardHeader,
  CTableRow,
  CTableHeaderCell,
  CInputGroup,
  CRow,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { toast } from 'react-toastify'
import selectionService from '../../../../services/staff/selectionService'
import {  cilSearch } from '@coreui/icons'
import { useSearchParams } from 'react-router-dom'

function SelectedCourseStudents() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const [universityID, setUniversityID] = useState(searchParams.get('university'))
  const [courseID, setCourseID] = useState(searchParams.get('course'))

  // For selection data
  const [selectionData, setSelectionData] = useState([])

  // Get selected students
  useEffect(() => {
    setLoading(true)
    console.log(courseID)
    selectionService.getSelectedStudents().then(
      (res) => {
        if (res.type === 'OK') {
          // group by and filter the count of each course
          const uniqueCourses = res.payload.filter(
            (course) => course.value2 == universityID && course.value1 == courseID,
          )

          setSelectionData(uniqueCourses)
          console.log(selectionData)
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
            <CCardHeader>Students selected for {courseID} in {universityID}</CCardHeader>
            <CCardBody>
              <CRow>
                <div>
                  <CRow>
                    <CCol xs>
                      <CCard className="mb-4">
                        <CCardBody>
                          <CRow className="py-2 bg-light rounded">
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
                                </CTableRow>
                              </CTableHead>
                              <CTableBody>
                                {selectionData.map((item) => (
                                  // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                  <CTableRow key={item.id}>
                                    <CTableDataCell>{item[`value0`][`indexNumber`]}</CTableDataCell>
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

export default SelectedCourseStudents
