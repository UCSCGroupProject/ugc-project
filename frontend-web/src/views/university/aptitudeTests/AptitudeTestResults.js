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
import { cilFile } from '@coreui/icons'
import { cilArrowThickFromTop } from '@coreui/icons'
import { cilPencil } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const AptitudeTestResults = () => {
  const [allTestResultsData, setAllTestResultsData] = useState([
    {
      id: '1',
      unicode: '112A',
      courseOfStudy: 'Architecture',
      status: 'Done',
      resultfile: 'archi.csv',
    },
    {
      id: '1',
      unicode: '112A',
      courseOfStudy: 'INformation System',
      status: 'Progress',
      resultfile: 'Is.csv',
    },
    {
      id: '1',
      unicode: '112A',
      courseOfStudy: 'Fashion Designing',
      status: 'Progress',
      resultfile: '',
    },
  ])

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Aptitude Test Results</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="unicode">Unicode</option>
                      <option value="course">Course</option>
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
                      <CTableHeaderCell>Status</CTableHeaderCell>
                      <CTableHeaderCell>File Name</CTableHeaderCell>
                      {/* <CTableHeaderCell>University</CTableHeaderCell> */}
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {allTestResultsData.map((item) => (
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.id}</CTableHeaderCell>
                        <CTableDataCell>{item.unicode}</CTableDataCell>
                        <CTableDataCell>{item.courseOfStudy}</CTableDataCell>
                        <CTableDataCell>{item.status}</CTableDataCell>
                        <CTableDataCell>
                          {item.resultfile ? (
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <div>
                                <CIcon icon={cilFile} />
                                {item.resultfile}
                              </div>
                              <CButton
                                color="btn btn-primary btn-sm"
                                type="button"
                                className="text-white"
                              >
                                <CIcon icon={cilPencil} />
                                <span>{'  '}Edit</span>
                              </CButton>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              -
                              <CButton
                                color="btn btn-primary btn-sm"
                                type="button"
                                className="text-white"
                              >
                                <CIcon icon={cilArrowThickFromTop} />
                                <span>{'  '}Upload</span>
                              </CButton>
                            </div>
                          )}
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

export default AptitudeTestResults
