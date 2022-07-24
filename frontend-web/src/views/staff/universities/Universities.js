import React from 'react'
import {
  CTable,
  CButton,
} from '@coreui/react'

function StaffUniversities() {

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
      key: 'show',
      label: 'action',
      _style: { width: '10%' },
      _props: { color: 'primary', className: 'fw-semibold' },
    },
  ]

  const items = [
    {
      id: 1,
      class: 'university',
      name: 'University of Colombo',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      class: 'university',
      name: 'Eastern University',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      class: 'university',
      name: 'University of Jaffna',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 4,
      class: 'university',
      name: 'University of Kelaniya',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 5,
      class: 'university',
      name: 'University of Moratuwa',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 6,
      class: 'university',
      name: 'Open University',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 7,
      class: 'university',
      name: 'University of Peradeniya',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 8,
      class: 'university',
      name: 'Rajarata University',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 9,
      class: 'university',
      name: 'University of Ruhuna',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 10,
      class: 'university',
      name: 'Sabaragamuwa University',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 11,
      class: 'university',
      name: 'South Eastern University',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 12,
      class: 'university',
      name: 'University of Sri Jayewardenepura',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 13,
      class: 'university',
      name: 'Uva Wellassa University',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 14,
      class: 'university',
      name: 'University of the Visual and Performing Arts',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 15,
      class: 'university',
      name: 'Wayamba University',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 16,
      class: 'university',
      name: 'Gampaha Wickramarachchi University',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 17,
      class: 'university',
      name: 'University of Vavuniya',
      show: <CButton>view Profile</CButton>,
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return <CTable responsive="md" captionTop="List of universities" columns={columns} 
  items={items} tableHeadProps={{ color: 'dark' }}/>
}

export default StaffUniversities