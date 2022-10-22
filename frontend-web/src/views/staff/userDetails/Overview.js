import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CChart } from '@coreui/react-chartjs'
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
import uniService from '../../../services/staff/userDetails/uniService'
import schoolService from '../../../services/staff/userDetails/schoolService'

import { toast } from 'react-toastify'
function Overview() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [studentData, setStudentData] = useState([])
  const [universityData, setUniversityData] = useState([])
  const [schoolData, setSchoolData] = useState([])

  //  Get student details
  useEffect(() => {
    setLoading(true)
    studentService.getStudents().then(
      (res) => {
        if (res.type === 'OK') {
          console.log(res.payload)
          setStudentData(res.payload)
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

  //  Get university details
  useEffect(() => {
    setLoading(true)
    uniService.getUniversities().then(
      (res) => {
        if (res.type === 'OK') {
          console.log(res.payload)
          setUniversityData(res.payload)
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

  //  Get school details
  useEffect(() => {
    setLoading(true)
    schoolService.getSchools().then(
      (res) => {
        if (res.type === 'OK') {
          console.log(res.payload)
          setSchoolData(res.payload)
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
      <CCardHeader>User Statistics</CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm={6}>
            <CChart
              className="sm-5"
              type="pie"
              height="500px"
              width="100px"
              data={{
                labels: ['Students', 'Schools', 'Universities'],
                datasets: [
                  {
                    backgroundColor: ['#2eb85c', '#f9b115', '#4BC0C0'],
                    data: [studentData.length, schoolData.length, universityData],
                  },
                ],
              }}
            />
          </CCol>
          <CCol sm={6}>
            <CRow>
              <CCol sm={6}>
                <CWidgetStatsA
                  className="mb-4"
                  color="primary"
                  value={<>{studentData.length + schoolData.length + universityData} </>}
                  title="Users"
                />
                <CWidgetStatsA
                  className="mb-4"
                  color="dark"
                  value={
                    <>
                      {studentData.length}{' '}
                      <span className="fs-6 fw-normal">
                        (
                        {(
                          (studentData.length * 100) /
                          (studentData.length + schoolData.length + universityData)
                        ).toFixed(2)}
                        % )
                      </span>
                    </>
                  }
                  title="Students"
                />
              </CCol>
              <CCol sm={6}>
                <CWidgetStatsA
                  className="mb-4"
                  color="dark"
                  value={
                    <>
                      {schoolData.length}{' '}
                      <span className="fs-6 fw-normal">
                        (
                        {(
                          (schoolData.length * 100) /
                          (studentData.length + schoolData.length + universityData)
                        ).toFixed(2)}
                        % )
                      </span>
                    </>
                  }
                  title="Schools"
                />
                <CWidgetStatsA
                  className="mb-4"
                  color="dark"
                  value={
                    <>
                      {universityData}{' '}
                      <span className="fs-6 fw-normal">
                        (
                        {(
                          (universityData * 100) /
                          (studentData.length + schoolData.length + universityData)
                        ).toFixed(2)}
                        % )
                      </span>
                    </>
                  }
                  title="Universities"
                />
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default Overview
