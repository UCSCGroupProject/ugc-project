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
import { cilFilter, cilDelete, cibAddthis } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function Complaints() {
  const [activeKey, setActiveKey] = useState(1)

  const unreadComplaintsList = [
    {
      id: 1,
      complaintNo: 1526,
      userType: 'Student',
      username: 'mina21',
      date: '2022-05-26',
      time: '13:35',
      issue: 'Applying for courses',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      complaintNo: 1864,
      userType: 'Gov. University',
      username: 'UOJ',
      date: '2022-08-12',
      time: '16:40',
      issue: 'Course update',
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  const closedComplaintsList = [
    {
      id: 1,
      complaintNo: 1526,
      userType: 'Student',
      username: 'nayanaB',
      date: '2022-05-26',
      time: '13:35',
      issue: 'Registration',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      complaintNo: 1864,
      userType: 'Student',
      username: 'amila123',
      date: '2022-08-12',
      time: '16:40',
      issue: 'Student status',
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Complaints</CCardHeader>
            <CCardBody>
              <CNav variant="tabs" role="tablist">
                <CNavItem>
                  <CNavLink
                    href="javascript:void(0);"
                    active={activeKey === 1}
                    onClick={() => setActiveKey(1)}
                  >
                    New/Unread cases
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="javascript:void(0);"
                    active={activeKey === 2}
                    onClick={() => setActiveKey(2)}
                  >
                    Closed cases
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
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
                <CTabPane role="tabpanel" aria-labelledby="unread-tab" visible={activeKey === 1}>
                  <CRow className="m-1">
                    <CTable bordered>
                      <CTableHead color="dark">
                        <CTableRow>
                          <CTableHeaderCell>#</CTableHeaderCell>
                          <CTableHeaderCell>Complaint No.</CTableHeaderCell>
                          <CTableHeaderCell>User</CTableHeaderCell>
                          <CTableHeaderCell>Username</CTableHeaderCell>
                          <CTableHeaderCell>Date</CTableHeaderCell>
                          <CTableHeaderCell>Time</CTableHeaderCell>
                          <CTableHeaderCell>Issue</CTableHeaderCell>
                          <CTableHeaderCell style={{ width: '15%' }}>Action</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {unreadComplaintsList.map((item) => (
                          // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <CTableRow key={item.id}>
                            <CTableDataCell>{item.id}</CTableDataCell>
                            <CTableHeaderCell>{item.complaintNo}</CTableHeaderCell>
                            <CTableDataCell>{item.userType}</CTableDataCell>
                            <CTableDataCell>{item.username}</CTableDataCell>
                            <CTableDataCell>{item.date}</CTableDataCell>
                            <CTableDataCell>{item.time}</CTableDataCell>
                            <CTableDataCell>{item.issue}</CTableDataCell>
                            <CTableDataCell>
                              <CButton color="warning" component="a" href="/staff/complaints/view">
                                View More
                              </CButton>
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  </CRow>
                </CTabPane>
                <CTabPane
                  role="tabpanel"
                  aria-labelledby="closed-tab"
                  visible={activeKey === 2}
                >
                  <CRow className="m-1">
                    <CTable bordered>
                      <CTableHead color="dark">
                        <CTableRow>
                          <CTableHeaderCell>#</CTableHeaderCell>
                          <CTableHeaderCell>Complaint No.</CTableHeaderCell>
                          <CTableHeaderCell>User</CTableHeaderCell>
                          <CTableHeaderCell>Username</CTableHeaderCell>
                          <CTableHeaderCell>Date</CTableHeaderCell>
                          <CTableHeaderCell>Time</CTableHeaderCell>
                          <CTableHeaderCell>Issue</CTableHeaderCell>
                          <CTableHeaderCell style={{ width: '15%' }}>Action</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {closedComplaintsList.map((item) => (
                          // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <CTableRow key={item.id}>
                            <CTableDataCell>{item.id}</CTableDataCell>
                            <CTableHeaderCell>{item.complaintNo}</CTableHeaderCell>
                            <CTableDataCell>{item.userType}</CTableDataCell>
                            <CTableDataCell>{item.username}</CTableDataCell>
                            <CTableDataCell>{item.date}</CTableDataCell>
                            <CTableDataCell>{item.time}</CTableDataCell>
                            <CTableDataCell>{item.issue}</CTableDataCell>
                            <CTableDataCell>
                              <CButton color="warning" component="a" href="#/staff/complaints/view">
                                View More
                              </CButton>
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  </CRow>
                </CTabPane>
              </CTabContent>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Complaints
