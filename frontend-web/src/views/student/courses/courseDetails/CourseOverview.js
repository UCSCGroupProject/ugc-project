import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { toast } from 'react-toastify'

import AppFetchDataLoader from '../../../../components/loaders/AppFetchDataLoader'
import AppStandardContainer from '../../../../components/containers/AppStandardContainer'
import AppStandardCard from '../../../../components/cards/AppStandardCard'
import AppStandardTable from '../../../../components/table/AppStandardTable'

import courseService from '../../../../services/university/courseService'
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

    requiredOLSubjects: [],

    offeredUniversities: [],
  })

  useEffect(() => {
    setLoading(true)

    courseService.getCourseOverview(searchParams.get('courseCode')).then(
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
        <h1 className="display-6">{courseOverview.courseName}</h1>
        <h6>Course code: {courseOverview.courseCode}</h6>
        <h6>Stream: {courseOverview.stream}</h6>
        <h6>Intake amount: {courseOverview.intakeAmount}</h6>
        <hr />
        {/* Required subjects for OL */}
        <div>
          <p class="h4">G.C.E (Ordinary Level) Requirements</p>
          <p>
            The candidates should have fulfilled the G.C.E. (O/L) requirements relevant for the
            courses of study requested, by the deadline given for submission of applications for
            university admission.
          </p>
          <CRow>
            <CCol md={4}>
              <AppStandardCard
                title="Required subjects and results"
                color="bg-fade-success"
                titleStyle="fw-semibold"
              >
                <AppStandardTable
                  hover={true}
                  headers={[
                    { id: 'subjectName', name: 'Subject', width: '100', textAlign: 'text-start' },
                    { id: 'minGrade', name: 'Min Grade', width: '25', textAlign: 'text-center' },
                  ]}
                  content={courseOverview.requiredOLSubjects}
                />
              </AppStandardCard>
            </CCol>
          </CRow>
        </div>
        <hr />
        {/* Required subjects for AL */}
        <div>
          <p class="h4">G.C.E (Advanced Level) Requirements</p>
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
        <hr />
        {/* Offered universities */}
        <div>
          <p class="h4">Offered universities</p>
          <p>This course is offered by following universities mentioned below</p>
          <AppStandardCard
            title="Offered universities and corresponsing unicodes"
            color="bg-fade-primary"
            titleStyle="fw-semibold"
          >
            <AppStandardTable
              hover={true}
              headers={[
                {
                  id: 'universityName',
                  name: 'University name',
                  width: '100',
                  textAlign: 'text-start',
                },
                { id: 'unicode', name: 'Unicode', width: '25', textAlign: 'text-center' },
              ]}
              content={courseOverview.offeredUniversities}
            />
          </AppStandardCard>
        </div>
      </AppStandardContainer>
    </div>
  )
}

export default CourseOverview
