import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader} from '@coreui/react'

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
      course: 'Enginering',
      appliedAmount: '100',
    },
    {
      course: 'Enginering',
      appliedAmount: '100',
    },
    {
      course: 'Enginering',
      appliedAmount: '100',
    },
  ])

  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>Course Statistics</CCardHeader>
          <CCardBody>
            {/* <CButton
              onClick={() => {
                setAllCoursesStat([
                  {
                    course: 'Medicine',
                    appliedAmount: '45',
                  },
                  {
                    course: 'Enginering',
                    appliedAmount: '11',
                  },
                  {
                    course: 'Enginering',
                    appliedAmount: '10',
                  },
                ])
              }}
            >
              ok
            </CButton> */}

            <CChart
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
