import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Staff views

// Student views
const Stu_Dashboard = React.lazy(() => import('./views/student/dashboard/Dashboard'))

// University views

// User views

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/student/dashboard', name: 'Student Dashboard', element: Stu_Dashboard },
]

export default routes
