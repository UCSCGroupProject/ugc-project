import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CLink,
  CTable,
  CCol,
  CNavLink,
  CNavItem,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CRow,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'
import logo from '../../../assets/images/logo-uoc.png'
function StaffUniversities() {
  {
    /* <CNav><CNavItem><CNavLink  href="/staff/univerityprofile" active/></CNavItem></CNav> */
  }
  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'name',
      label: 'Name',
      _props: { scope: 'col' },
    },
    {
      key: 'logo',
      label: '',
      _props: { scope: 'col' },
    },
  ]

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

  {
    /* <NavLink
            to="/staff/univerityprofile"
            style={{ textDecoration: 'none', color: 'inherit' }}
          > */
  }

  
  return (
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
            <CTableRow key={item.id} >
              <CTableHeaderCell>{item.id}</CTableHeaderCell>
              <CTableDataCell>{item.name}</CTableDataCell>
              <CTableDataCell>{item.logo}</CTableDataCell>
            </CTableRow>
          
        ))}
      </CTableBody>
    </CTable>
  )
}

export default StaffUniversities
