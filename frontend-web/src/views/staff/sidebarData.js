import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilChartLine, cilDrop, cilSpeedometer } from '@coreui/icons'
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
    name: 'School related',
  },
  {
    component: CNavItem,
    name: 'Schools',
    to: '/staff/school/all',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Student validation',
    to: '',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Send documents',
        to: '/staff/school/validation/send',
      },
      {
        component: CNavItem,
        name: 'Validation documents',
        to: '/staff/school/validation/documents',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Selection',
  },
  {
    component: CNavItem,
    name: 'Applicants',
    to: '/staff/appliedstudents',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Eligible',
    to: '/staff/eligible',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Selection Process',
    to: '/staff/selectionprocess',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Selected Students',
    to: '/staff/selected/filterbyCourse',
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
    component: CNavItem,
    name: 'Send student validation list',
    to: '/staff/validation/status',
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
