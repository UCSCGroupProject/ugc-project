import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowTop, cilOptions, cilArrowBottom } from '@coreui/icons'
import { CChartLine } from '@coreui/react-chartjs'
import studentService from '../../../services/staff/userDetails/studentService'
import { toast } from 'react-toastify'
function Overview() {

   // For the server side requests and responses
   const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    studentService.getStudents().then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)
          console.log(res.payload)
        } else if (res.type === 'BAD') {
          toast.error(res.message)
        }

        setLoading(false)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()

        // After recieving the server request
        toast.error(res)
        setLoading(false)
      },
    )
  }, [])

  return (
    <CCard className="mb-4">
      <CCardHeader>User Statisticss</CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm={6}>
            <CWidgetStatsA
              className="mb-4"
              color="primary"
              value={
                <>
                  19853{' '}
                  <span className="fs-6 fw-normal">
                    (40.9% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title="Users"
              action={
                <CDropdown alignment="end">
                  <CDropdownToggle color="transparent" caret={false} className="p-0">
                    <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>
                      <NavLink
                        to="/staff/useroverview/users"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        View Details
                      </NavLink>
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              }
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '100px' }}
                  data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: '#321fdb',
                        data: [45, 59, 84, 84, 75, 82, 80],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
          <CCol sm={6}>
            <CWidgetStatsA
              className="mb-4"
              color="info"
              value={
                <>
                  15026{' '}
                  <span className="fs-6 fw-normal">
                    (67.9% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title="Students"
              action={
                <CDropdown alignment="end">
                  <CDropdownToggle color="transparent" caret={false} className="p-0">
                    <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>
                      <NavLink
                        to="/staff/useroverview/students"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        View Details
                      </NavLink>
                    </CDropdownItem>
                    <CDropdownItem>
                      <NavLink
                        to="/staff/useroverview/governmentstudents"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        View Government Students
                      </NavLink>
                    </CDropdownItem>
                    <CDropdownItem>
                      <NavLink
                        to="/staff/useroverview/privatestudents"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        View Private Students
                      </NavLink>
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              }
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '100px' }}
                  data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: '#39f',
                        data: [40, 58, 69, 67, 74, 72, 81],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 19,
                        max: 109,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm={6}>
            <CWidgetStatsA
              className="mb-4"
              color="dark"
              value={
                <>
                  246{' '}
                  <span className="fs-6 fw-normal">
                    (13.9% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title="Schools"
              action={
                <CDropdown alignment="end">
                  <CDropdownToggle color="transparent" caret={false} className="p-0">
                    <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>
                      <NavLink
                        to=""
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        View Details
                      </NavLink>
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              }
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '100px' }}
                  data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: '#321fdb',
                        data: [45, 59, 84, 84, 75, 82, 80],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
          <CCol sm={6}>
            <CWidgetStatsA
              className="mb-4"
              color="success"
              value={
                <>
                  17{' '}
                  <span className="fs-6 fw-normal">
                    (10.9% <CIcon icon={cilArrowBottom} />)
                  </span>
                </>
              }
              title="Universities"
              action={
                <CDropdown alignment="end">
                  <CDropdownToggle color="transparent" caret={false} className="p-0">
                    <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>View More</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              }
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '100px' }}
                  data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: '#39f',
                        data: [40, 58, 69, 85, 74, 72, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 19,
                        max: 109,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default Overview
