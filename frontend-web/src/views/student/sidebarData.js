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
    to: '/student/dashboard',
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
    name: 'Apply',
    to: '/student/courses/apply',
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
        to: '/student/university/all',
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
    ],
  },
  {
    component: CNavGroup,
    name: 'Progress',
    to: '',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Upcoming Tests',
        to: '/student/aptitudetests/upcoming',
      },
      {
        component: CNavItem,
        name: 'Ongoing Tests',
        to: '/student/aptitudetests/ongoing',
      },
      {
        component: CNavItem,
        name: 'Delayed Tests',
        to: '/student/aptitudetests/delayed',
      },
    ],
  },
]

export default _nav
