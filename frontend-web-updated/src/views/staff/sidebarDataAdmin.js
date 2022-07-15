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
    to: '/staff/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Manage Staff',
  },
  {
    component: CNavItem,
    name: 'Authorize Registration',
    to: '/admin/staffregistration',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Staff Privileges',
    to: '/admin/privileges',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Course Details',
  },
  {
    component: CNavItem,
    name: 'Courses',
    to: '/staff/courses',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Results',
  },
  {
    component: CNavItem,
    name: 'A/L Results',
    to: '/staff/results/al',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ZScore Tables',
    to: '/staff/zscore',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'O/L Results',
    to: '/staff/results/ol',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Selection',
  },
  {
    component: CNavItem,
    name: 'Selected Students',
    to: '/staff/selectedstudents',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Applied Students',
    to: '/staff/appliedstudents',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Eligible Students',
    to: '/staff/eligiblestudents',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Aptitude Tests',
  },
  {
    component: CNavItem,
    name: 'Upcoming Tests',
    to: '/staff/aptitudetests/upcoming',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Completed Tests',
    to: '/staff/aptitudetests/completed',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'University',
  },
  {
    component: CNavGroup,
    name: 'University Details',
    to: '',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Universities',
        to: '/staff/universities',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Overview',
  },
  {
    component: CNavGroup,
    name: 'User Details',
    to: '',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User Overview',
        to: '/staff/useroverview',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Validation',
  },
  {
    component: CNavGroup,
    name: 'Validation Requests',
    to: '',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Student Status',
        to: '/staff/validation/status',
      },
      {
        component: CNavItem,
        name: 'Student Achievements',
        to: '/staff/validation/achievement',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Analytics',
  },
  {
    component: CNavItem,
    name: 'System Analytics',
    to: '/staff/analytics',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Complaints',
  },
  {
    component: CNavItem,
    name: 'User complaints',
    to: '/staff/complaints',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
]

export default _nav
