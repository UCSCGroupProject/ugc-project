import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CWidgetStatsA,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CRow,
  CContainer,
  CCardTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowTop, cilOptions, cilArrowBottom } from '@coreui/icons'
import { CChartLine, CChartBar, CChart } from '@coreui/react-chartjs'

import authService from '../../../services/authService'

import AppBanner from '../../../components/banner/AppBanner'
import AppCalender from '../../../components/calender/AppCalender'
import AppNotifications from '../../../components/notifications/AppNotifications'

import bannerImg from '../../../assets/images/banners/university_banner.jpg'

const bannerData = {
  img: bannerImg,
  title: 'Explore & Engage',
  desc: 'As a Student you will be having following features.',
  listItems: [
    {
      id: '0',
      content: 'Flexible university admisison',
    },
    {
      id: '1',
      content: 'Course and University details',
    },
    {
      id: '2',
      content: 'Test progress & statistics',
    },
    {
      id: '3',
      content: 'Calender with timelines',
    },
    {
      id: '5',
      content: 'Notifications & Reminders',
    },
  ],
}

const notificationsData = [
  {
    id: '0',
    title: 'Calling all the applicants',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, alias.',
    createdAt: 'Just now',
  },
]

function Dashboard() {
  // Set user details
  const [userDetails, setUserDetails] = useState({
    username: '',
    actorType: 'university',
  })

  useEffect(() => {
    const user = authService.getCurrentUser()

    if (user !== null) {
      console.log(user)
      setUserDetails({ username: user.username, actorType: user.type })
    }
  }, [])

  return (
    <div>
      <CRow>
        <CCol md={8}>
          <h1 className="pb-2 display-6">Hello {userDetails.username}, Welcome</h1>

          {/* Banner */}
          <AppBanner data={bannerData} />
        </CCol>
        <CCol md={4} className="">
          {/* Calendar */}
          <AppCalender />

          {/* Notifications */}
          <AppNotifications notifications={notificationsData} />
        </CCol>
      </CRow>
    </div>
    // <CContainer>
    //   <CRow>
    //     <CCol xs={3}>
    //       <CWidgetStatsA
    //         className="mb-4"
    //         color="primary"
    //         value={
    //           <>
    //             9853{' '}
    //             <span className="fs-6 fw-normal">
    //               (40.9% <CIcon icon={cilArrowTop} />)
    //             </span>
    //           </>
    //         }
    //         title="New Users"
    //         action={
    //           <CDropdown alignment="end">
    //             <CDropdownToggle color="transparent" caret={false} className="p-0">
    //               <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
    //             </CDropdownToggle>
    //             <CDropdownMenu>
    //               <CDropdownItem>
    //                 <NavLink
    //                   to="/staff/useroverview/users"
    //                   style={{ textDecoration: 'none', color: 'inherit' }}
    //                 >
    //                   View Details
    //                 </NavLink>
    //               </CDropdownItem>
    //             </CDropdownMenu>
    //           </CDropdown>
    //         }
    //         chart={
    //           <CChartLine
    //             className="mt-3 mx-3"
    //             style={{ height: '70px' }}
    //             data={{
    //               labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //               datasets: [
    //                 {
    //                   label: 'My First dataset',
    //                   backgroundColor: 'transparent',
    //                   borderColor: 'rgba(255,255,255,.55)',
    //                   pointBackgroundColor: '#321fdb',
    //                   data: [45, 59, 84, 84, 75, 82, 80],
    //                 },
    //               ],
    //             }}
    //             options={{
    //               plugins: {
    //                 legend: {
    //                   display: false,
    //                 },
    //               },
    //               maintainAspectRatio: false,
    //               scales: {
    //                 x: {
    //                   grid: {
    //                     display: false,
    //                     drawBorder: false,
    //                   },
    //                   ticks: {
    //                     display: false,
    //                   },
    //                 },
    //                 y: {
    //                   min: 30,
    //                   max: 89,
    //                   display: false,
    //                   grid: {
    //                     display: false,
    //                   },
    //                   ticks: {
    //                     display: false,
    //                   },
    //                 },
    //               },
    //               elements: {
    //                 line: {
    //                   borderWidth: 1,
    //                   tension: 0.4,
    //                 },
    //                 point: {
    //                   radius: 4,
    //                   hitRadius: 10,
    //                   hoverRadius: 4,
    //                 },
    //               },
    //             }}
    //           />
    //         }
    //       />
    //     </CCol>
    //     <CCol xs={3}>
    //       <CWidgetStatsA
    //         className="mb-4"
    //         color="info"
    //         value={
    //           <>
    //             5000{' '}
    //             <span className="fs-6 fw-normal">
    //               (11.5% <CIcon icon={cilArrowBottom} />)
    //             </span>
    //           </>
    //         }
    //         title="Student Applications"
    //         action={
    //           <CDropdown alignment="end">
    //             <CDropdownToggle color="transparent" caret={false} className="p-0">
    //               <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
    //             </CDropdownToggle>
    //             <CDropdownMenu>
    //               <CDropdownItem>
    //                 <NavLink
    //                   to="/staff/useroverview/users"
    //                   style={{ textDecoration: 'none', color: 'inherit' }}
    //                 >
    //                   View Details
    //                 </NavLink>
    //               </CDropdownItem>
    //             </CDropdownMenu>
    //           </CDropdown>
    //         }
    //         chart={
    //           <CChartLine
    //             className="mt-3 mx-3"
    //             style={{ height: '70px' }}
    //             data={{
    //               labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //               datasets: [
    //                 {
    //                   label: 'My First dataset',
    //                   backgroundColor: 'transparent',
    //                   borderColor: 'rgba(255,255,255,.55)',
    //                   data: [45, 59, 84, 84, 75, 82, 70],
    //                 },
    //               ],
    //             }}
    //             options={{
    //               plugins: {
    //                 legend: {
    //                   display: false,
    //                 },
    //               },
    //               maintainAspectRatio: false,
    //               scales: {
    //                 x: {
    //                   grid: {
    //                     display: false,
    //                     drawBorder: false,
    //                   },
    //                   ticks: {
    //                     display: false,
    //                   },
    //                 },
    //                 y: {
    //                   min: 30,
    //                   max: 89,
    //                   display: false,
    //                   grid: {
    //                     display: false,
    //                   },
    //                   ticks: {
    //                     display: false,
    //                   },
    //                 },
    //               },
    //               elements: {
    //                 line: {
    //                   borderWidth: 1,
    //                   tension: 0.4,
    //                 },
    //                 point: {
    //                   radius: 4,
    //                   hitRadius: 10,
    //                   hoverRadius: 4,
    //                 },
    //               },
    //             }}
    //           />
    //         }
    //       />
    //     </CCol>
    //     <CCol xs={3}>
    //       <CWidgetStatsA
    //         className="mb-4"
    //         color="warning"
    //         value={
    //           <>
    //             1256{' '}
    //             <span className="fs-6 fw-normal">
    //               (31.3% <CIcon icon={cilArrowTop} />)
    //             </span>
    //           </>
    //         }
    //         title="Student Validation Requests"
    //         action={
    //           <CDropdown alignment="end">
    //             <CDropdownToggle color="transparent" caret={false} className="p-0">
    //               <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
    //             </CDropdownToggle>
    //             <CDropdownMenu>
    //               <CDropdownItem>
    //                 <NavLink
    //                   to="/staff/useroverview/users"
    //                   style={{ textDecoration: 'none', color: 'inherit' }}
    //                 >
    //                   View Details
    //                 </NavLink>
    //               </CDropdownItem>
    //             </CDropdownMenu>
    //           </CDropdown>
    //         }
    //         chart={
    //           <CChartLine
    //             className="mt-3 mx-3"
    //             style={{ height: '70px' }}
    //             data={{
    //               labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //               datasets: [
    //                 {
    //                   label: 'My First dataset',
    //                   backgroundColor: 'rgba(255,255,255,.2)',
    //                   borderColor: 'rgba(255,255,255,.55)',
    //                   data: [35, 62, 84, 40, 75, 64, 80],
    //                   fill: true,
    //                 },
    //               ],
    //             }}
    //             options={{
    //               plugins: {
    //                 legend: {
    //                   display: false,
    //                 },
    //               },
    //               maintainAspectRatio: false,
    //               scales: {
    //                 x: {
    //                   grid: {
    //                     display: false,
    //                     drawBorder: false,
    //                   },
    //                   ticks: {
    //                     display: false,
    //                   },
    //                 },
    //                 y: {
    //                   min: 30,
    //                   max: 89,
    //                   display: false,
    //                   grid: {
    //                     display: false,
    //                   },
    //                   ticks: {
    //                     display: false,
    //                   },
    //                 },
    //               },
    //               elements: {
    //                 line: {
    //                   borderWidth: 1,
    //                   tension: 0.4,
    //                 },
    //                 point: {
    //                   radius: 0,
    //                   hitRadius: 10,
    //                   hoverRadius: 4,
    //                 },
    //               },
    //             }}
    //           />
    //         }
    //       />
    //     </CCol>
    //     <CCol xs={3}>
    //       <CWidgetStatsA
    //         className="mb-4"
    //         color="danger"
    //         value={
    //           <>
    //             12{' '}
    //             <span className="fs-6 fw-normal">
    //               (37.9% <CIcon icon={cilArrowTop} />)
    //             </span>
    //           </>
    //         }
    //         title="Aptitude Tests"
    //         action={
    //           <CDropdown alignment="end">
    //             <CDropdownToggle color="transparent" caret={false} className="p-0">
    //               <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
    //             </CDropdownToggle>
    //             <CDropdownMenu>
    //               <CDropdownItem>Action</CDropdownItem>
    //               <CDropdownItem>Another action</CDropdownItem>
    //               <CDropdownItem>Something else here...</CDropdownItem>
    //               <CDropdownItem disabled>Disabled action</CDropdownItem>
    //             </CDropdownMenu>
    //           </CDropdown>
    //         }
    //         chart={
    //           <CChartBar
    //             className="mt-3 mx-3"
    //             style={{ height: '70px' }}
    //             data={{
    //               labels: [
    //                 'January',
    //                 'February',
    //                 'March',
    //                 'April',
    //                 'May',
    //                 'June',
    //                 'July',
    //                 'August',
    //                 'September',
    //                 'October',
    //                 'November',
    //                 'December',
    //                 'January',
    //                 'February',
    //                 'March',
    //                 'April',
    //               ],
    //               datasets: [
    //                 {
    //                   label: 'My First dataset',
    //                   backgroundColor: 'rgba(255,255,255,.2)',
    //                   borderColor: 'rgba(255,255,255,.55)',
    //                   data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
    //                   barPercentage: 0.6,
    //                 },
    //               ],
    //             }}
    //             options={{
    //               maintainAspectRatio: false,
    //               plugins: {
    //                 legend: {
    //                   display: false,
    //                 },
    //               },
    //               scales: {
    //                 x: {
    //                   grid: {
    //                     display: false,
    //                     drawTicks: false,
    //                   },
    //                   ticks: {
    //                     display: false,
    //                   },
    //                 },
    //                 y: {
    //                   grid: {
    //                     display: false,
    //                     drawBorder: false,
    //                     drawTicks: false,
    //                   },
    //                   ticks: {
    //                     display: false,
    //                   },
    //                 },
    //               },
    //             }}
    //           />
    //         }
    //       />
    //     </CCol>
    //   </CRow>
    //   <CRow>
    //     <CCard>
    //       <CCardBody>
    //         <CCardTitle>Users</CCardTitle>
    //         <CChart
    //       type="line"
    //       data={{
    //         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //         datasets: [
    //           {
    //             label: 'Students',
    //             backgroundColor: 'rgba(220, 220, 220, 0.2)',
    //             borderColor: 'rgba(220, 220, 220, 1)',
    //             pointBackgroundColor: 'rgba(220, 220, 220, 1)',
    //             pointBorderColor: '#fff',
    //             data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
    //           },
    //           {
    //             label: 'Schools',
    //             backgroundColor: 'rgba(220, 220, 220, 0.2)',
    //             borderColor: 'rgba(168, 105, 138, 0.8)',
    //             pointBackgroundColor: 'rgba(220, 220, 220, 1)',
    //             pointBorderColor: '#fff',
    //             data: [20, 13, 12, 53, 25, 43, 55, 76, 80],
    //           },
    //           {
    //             label: 'Universities',
    //             backgroundColor: 'rgba(151, 187, 205, 0.2)',
    //             borderColor: 'rgba(151, 187, 205, 1)',
    //             pointBackgroundColor: 'rgba(151, 187, 205, 1)',
    //             pointBorderColor: '#fff',
    //             data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
    //           },
    //         ],
    //       }}
    //     />
    //       </CCardBody>
    //     </CCard>
    //   </CRow>
    // </CContainer>
  )
}

export default Dashboard
