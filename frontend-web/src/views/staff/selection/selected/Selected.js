import React from 'react'
import { useState } from 'react'
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
  CTabContent,
  CTabPane,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function Selected() {
  const selectedListByCourse = [
    {
      id: 1,
      course: 'Medicine',
      totalIntake: '786',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      course: 'Engineering',
      totalIntake: '865',
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  const selectedListByUniversity = [
    {
      id: 1,
      university: 'University of Colombo',
      totalIntake: '2500',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      university: 'University of Jaffna',
      totalIntake: '1890',
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  const [activeKey, setActiveKey] = useState(1)

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Students selected for courses</CCardHeader>
            <CCardBody>
              <CNav variant="tabs" role="tablist">
                <CNavItem>
                  <CNavLink
                    href="javascript:void(0);"
                    active={activeKey === 1}
                    onClick={() => setActiveKey(1)}
                  >
                    Filter by courses
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="javascript:void(0);"
                    active={activeKey === 2}
                    onClick={() => setActiveKey(2)}
                  >
                    Filter by universities
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane role="tabpanel" aria-labelledby="course-tab" visible={activeKey === 1}>
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
                                    <CTableHeaderCell></CTableHeaderCell>
                                    <CTableHeaderCell>Course</CTableHeaderCell>
                                    <CTableHeaderCell>Total Intake</CTableHeaderCell>
                                    <CTableHeaderCell style={{ width: '15%' }}></CTableHeaderCell>
                                  </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                  {selectedListByCourse.map((item) => (
                                    // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <CTableRow key={item.id}>
                                      <CTableHeaderCell>{item.id}</CTableHeaderCell>
                                      <CTableDataCell>{item.course}</CTableDataCell>
                                      <CTableDataCell>{item.totalIntake}</CTableDataCell>
                                      <CTableDataCell>
                                        <CButton
                                          color="warning"
                                          component="a"
                                          href="#/staff/selected/courses"
                                        >
                                          View Course
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
                </CTabPane>
                <CTabPane
                  role="tabpanel"
                  aria-labelledby="universities-tab"
                  visible={activeKey === 2}
                >
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
                                    <CTableHeaderCell></CTableHeaderCell>
                                    <CTableHeaderCell>University</CTableHeaderCell>
                                    <CTableHeaderCell>Total Intake</CTableHeaderCell>
                                    <CTableHeaderCell style={{ width: '15%' }}></CTableHeaderCell>
                                  </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                  {selectedListByUniversity.map((item) => (
                                    // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <CTableRow key={item.id}>
                                      <CTableHeaderCell>{item.id}</CTableHeaderCell>
                                      <CTableDataCell>{item.university}</CTableDataCell>
                                      <CTableDataCell>{item.totalIntake}</CTableDataCell>
                                      <CTableDataCell>
                                        <CButton
                                          color="warning"
                                          component="a"
                                          href="#/staff/univerityprofile"
                                        >
                                          View University
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
                </CTabPane>
              </CTabContent>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Selected
