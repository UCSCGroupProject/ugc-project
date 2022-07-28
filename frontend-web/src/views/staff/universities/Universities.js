import React from 'react'
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
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import logo from '../../../assets/images/logo-uoc.png'
function StaffUniversities() {

  const universityDetails = [
    {
      id: 1,
      class: 'university',
      name: 'University of Colombo',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      class: 'university',
      name: 'Eastern University',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      class: 'university',
      name: 'University of Jaffna',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 4,
      class: 'university',
      name: 'University of Kelaniya',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 5,
      class: 'university',
      name: 'University of Moratuwa',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 6,
      class: 'university',
      name: 'Open University',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 7,
      class: 'university',
      name: 'University of Peradeniya',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 8,
      class: 'university',
      name: 'Rajarata University',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 9,
      class: 'university',
      name: 'University of Ruhuna',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 10,
      class: 'university',
      name: 'Sabaragamuwa University',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 11,
      class: 'university',
      name: 'South Eastern University',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 12,
      class: 'university',
      name: 'University of Sri Jayewardenepura',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 13,
      class: 'university',
      name: 'Uva Wellassa University',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 14,
      class: 'university',
      name: 'University of the Visual and Performing Arts',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 15,
      class: 'university',
      name: 'Wayamba University',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 16,
      class: 'university',
      name: 'Gampaha Wickramarachchi University',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 17,
      class: 'university',
      name: 'University of Vavuniya',
      logo: <img src={logo} width={30} height={35} alt=""></img>,
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Universities</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="unicode">Unicode</option>
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
                      <CTableHeaderCell>Id</CTableHeaderCell>
                      <CTableHeaderCell>Name</CTableHeaderCell>
                      <CTableHeaderCell>Logo</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {universityDetails.map((item) => (
                      // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.id}</CTableHeaderCell>
                        <CTableDataCell>{item.name}</CTableDataCell>
                        <CTableDataCell>{item.logo}</CTableDataCell>
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

export default StaffUniversities
