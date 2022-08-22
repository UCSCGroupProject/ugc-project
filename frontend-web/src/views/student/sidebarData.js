import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBank, cilSpreadsheet, cilLibrary, cilDrop } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/student/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    component: CNavTitle,
    name: 'Registration',
  },
  {
    component: CNavItem,
    name: 'University Admission',
    to: '/student/registration',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Courses',
  },
  {
    component: CNavGroup,
    name: 'Course Details',
    to: '',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'My Courses',
        to: '/student/courses/my',
      },
      {
        component: CNavItem,
        name: 'Recommended Courses',
        to: '/student/courses/recomended',
      },
      {
        component: CNavItem,
        name: 'All Courses',
        to: '/student/courses/all',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'University',
  },
  {
    component: CNavGroup,
    name: 'University Details',
    to: '',
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Universities',
        to: '/student/university',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Aptitude Tests',
  },
  {
    component: CNavGroup,
    name: 'Test details',
    to: '',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'My Tests',
        to: '/student/aptitudetests/my',
      },
      {
        component: CNavItem,
        name: 'Results',
        to: '/student/aptitudetests/results',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/student/aptitudetests/progress',
      },
    ],
  },
]

export default _nav
