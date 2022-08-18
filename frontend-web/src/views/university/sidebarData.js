import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBank,
  cilSpreadsheet,
  cilChartLine,
  cilLibrary,
  cilDrop,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/university/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Courses',
  },
  {
    component: CNavItem,
    name: 'My Courses',
    to: '/university/courses/my',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Course Details',
    to: '',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    items: [
      {                                                                                                                                                                                                                                                                                                                                                                                                                                              
        component: CNavItem,
        name: 'Applied Students',
        to: '/university/courses/appliedstudents',
      },
      {
        component: CNavItem,
        name: 'Statistics',
        to: '/university/courses/statistics',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Aptitude Tests',
  },
  {
    component: CNavItem,
    name: 'My Tests',
    to: '/university/aptitudetests/my',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Test details',
    to: '',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Applied Students',
        to: '/university/aptitudetests/appliedstudents',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/university/aptitudetests/progress',
      },
      {
        component: CNavItem,
        name: 'Test Results',
        to: '/university/aptitudetests/results',
      },
    ],
  },
]

export default _nav
