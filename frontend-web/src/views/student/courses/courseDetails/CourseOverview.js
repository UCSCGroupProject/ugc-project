import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { toast } from 'react-toastify'

import AppFetchDataLoader from '../../../../components/loaders/AppFetchDataLoader'
import AppStandardContainer from '../../../../components/containers/AppStandardContainer'
import AppStandardCard from '../../../../components/cards/AppStandardCard'
import AppStandardTable from '../../../../components/table/AppStandardTable'

import unicodeService from '../../../../services/university/unicodeService'
import { CRow, CCol } from '@coreui/react'

function CourseOverview() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  // Request params
  const [searchParams, setSearchParams] = useSearchParams()

  const [courseOverview, setCourseOverview] = useState({
    courseName: '',
    unicodeValue: '',
    universityName: '',
    universityUsername: '',

    requiredFirstSubjects: [],
    requiredSecondSubjects: [],
    requiredThirdSubjects: [],
  })

  useEffect(() => {
    setLoading(true)

    unicodeService.getUniCourse(searchParams.get('unicodeValue')).then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data from fetched data
          setCourseOverview(res.payload)
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
    <div>
      {/* Data fetch loader */}
      <AppFetchDataLoader loading={loading} />
      <AppStandardContainer title="Course Overview">
        <h1 className="display-6">
          <b>{courseOverview.unicodeValue}</b> : {courseOverview.courseName}
        </h1>
        <h6>{courseOverview.universityName}</h6>
        <hr />
        <div>
          <p class="h4">Required subjects</p>
          <p>
            Student must select one subject from each subject groups and must obtained at least the
            specified grade to above, in order to select to the course
          </p>
          <CRow>
            <CCol md={4}>
              <AppStandardCard
                title="Required first subjects"
                color="bg-fade-success"
                titleStyle="fw-semibold"
              >
                <AppStandardTable
                  hover={true}
                  headers={[
                    { id: 'subjectName', name: 'Subject', width: '100', textAlign: 'text-start' },
                    { id: 'minGrade', name: 'Min Grade', width: '25', textAlign: 'text-center' },
                  ]}
                  content={courseOverview.requiredFirstSubjects}
                />
              </AppStandardCard>
            </CCol>
            <CCol md={4}>
              <AppStandardCard
                title="Required second subjects"
                color="bg-fade-warning"
                titleStyle="fw-semibold"
              >
                <AppStandardTable
                  hover={true}
                  headers={[
                    { id: 'subjectName', name: 'Subject', width: '100', textAlign: 'text-start' },
                    { id: 'minGrade', name: 'Min Grade', width: '25', textAlign: 'text-center' },
                  ]}
                  content={courseOverview.requiredSecondSubjects}
                />
              </AppStandardCard>
            </CCol>
            <CCol md={4}>
              <AppStandardCard
                title="Required third subjects"
                color="bg-fade-danger"
                titleStyle="fw-semibold"
              >
                <AppStandardTable
                  hover={true}
                  headers={[
                    { id: 'subjectName', name: 'Subject', width: '100', textAlign: 'text-start' },
                    { id: 'minGrade', name: 'Min Grade', width: '25', textAlign: 'text-center' },
                  ]}
                  content={courseOverview.requiredThirdSubjects}
                />
              </AppStandardCard>
            </CCol>
          </CRow>
        </div>
      </AppStandardContainer>
    </div>
  )
}

export default CourseOverview
