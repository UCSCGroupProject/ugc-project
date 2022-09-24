import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilDrop } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Students',
  },
  {
    component: CNavItem,
    name: 'Validate student list',
    to: 'school/students/validate',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Digital signing',
  },
  {
    component: CNavItem,
    name: 'Digital Signing',
    to: '/school/signing/sign',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Upload document',
    to: '/school/signing/upload',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
]

export default _nav
