import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader } from '@coreui/react'

import { CChart } from '@coreui/react-chartjs'

const CourseStatistics = () => {
  const [allCoursesStat, setAllCoursesStat] = useState([
    {
      course: 'Medicine',
      appliedAmount: '45',
    },
    {
      course: 'Enginering',
      appliedAmount: '100',
    },
    {
      course: 'Computer Science',
      appliedAmount: '150',
    },
    {
      course: 'Dental',
      appliedAmount: '90',
    },
    {
      course: 'Information System',
      appliedAmount: '105',
    },
    {
      course: 'Physical Science',
      appliedAmount: '105',
    },
    {
      course: 'Servay Science',
      appliedAmount: '100',
    },
    {
      course: 'Engineering(TM)',
      appliedAmount: '50',
    },
  ])

  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>Course Statistics</CCardHeader>
          <CCardBody>
            <CChart
              height={130}
              type="bar"
              data={{
                labels: allCoursesStat.map((item) => item.course),
                datasets: [
                  {
                    label: 'No. of Applied Students',
                    backgroundColor: '#5c2e2f',
                    data: allCoursesStat.map((item) => item.appliedAmount),
                  },
                ],
              }}
              labels="Courses"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CourseStatistics
