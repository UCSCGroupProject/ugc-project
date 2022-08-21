import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import {
  CNav,
  CNavItem,
  CNavLink,
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CFormInput,
  CFormSelect,
  CButton,
  CForm,
  CFormCheck,
  CButtonGroup,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CAlert,
  CSpinner,
} from '@coreui/react'

import { v_required } from '../../../utils/validator'

import authService from '../../../services/authService'
import universityAdmissionService from '../../../services/student/universityAdmissionService'

const courseData = [
  {
    courseOfStudy: 'Medicine',
    university: 'University of Colombo',
    uniCode: '001A',
  },
  {
    courseOfStudy: 'Medicine',
    university: 'University of Peradeniya',
    uniCode: '001B',
  },
  {
    courseOfStudy: 'Medicine',
    university: 'University of Sri Jayawardhenepura',
    uniCode: '001C',
  },
  {
    courseOfStudy: 'Medicine',
    university: 'University of Kelaniya',
    uniCode: '001D',
  },
  {
    courseOfStudy: 'Medicine',
    university: 'University of Jaffna',
    uniCode: '001E',
  },
  {
    courseOfStudy: 'Medicine',
    university: 'University of Ruhuna',
    uniCode: '001F',
  },
  {
    courseOfStudy: 'Medicine',
    university: 'University of Moratuwa',
    uniCode: '001G',
  },
  {
    courseOfStudy: 'Medicine',
    university: 'Eastern University, Sri Lanka',
    uniCode: '001H',
  },
  {
    courseOfStudy: 'Medicine',
    university: 'Rajarata University of Sri Lanka',
    uniCode: '001K',
  },
  {
    courseOfStudy: 'Medicine',
    university: 'Sabaragamuwa University of Sri Lanka',
    uniCode: '001L',
  },
  {
    courseOfStudy: 'Medicine',
    university: 'Wayamba University of Sri Lanka',
    uniCode: '001M',
  },
  {
    courseOfStudy: 'Dental Surgery',
    university: 'University of Peradeniya',
    uniCode: '002B',
  },
  {
    courseOfStudy: 'Dental Surgery',
    university: 'University of Sri Jayawardhenepura',
    uniCode: '002C',
  },
]

function Step4Page() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  const [universityCourses, setUniversityCourses] = useState([])

  const [universityCourseForm, setUniversityCourseForm] = useState({
    course: '',
    university: '',
  })

  // Update the form data while input
  const onUniversityCourseUpdateInput = (e) => {
    setUniversityCourseForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const [universityCourseFormError, setUniversityCourseFormErrors] = useState({
    courseError: '',
    universityError: '',
  })

  const [index, setIndex] = useState(1)

  const incIndex = () => {
    setIndex(index + 1)
  }
  const decIndex = () => {
    setIndex(index - 1)
  }

  const [selectableCourseList, setSelectableCourseList] = useState([])

  useEffect(() => {
    // Course Data setup
    var temp = []

    courseData.forEach((item) => {
      if (!temp.includes(item.courseOfStudy)) {
        temp.push(item.courseOfStudy)
      }
    })

    setSelectableCourseList(temp)

    // Order of Preferences Table setup
    const user = authService.getCurrentUser()

    universityAdmissionService.getStep4Form(user.username).then(
      (res) => {
        setLoading(false)

        setIndex(0)

        let unicodeList = res.unicodes

        unicodeList.forEach((u) => {
          // Find the course data
          courseData.forEach((courseUniItem) => {
            if (courseUniItem.uniCode === u) {
              setUniversityCourses((prev) => [
                ...prev,
                {
                  recordId: index,
                  unicode: courseUniItem.uniCode,
                  course: courseUniItem.courseOfStudy,
                  university: courseUniItem.university,
                },
              ])
            }
          })
        })
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()

        // After recieving the server request
        setResMessage(res)
        setLoading(false)
      },
    )
  }, [])

  const [selectableUniversityList, setSelectableUniversityList] = useState([])

  useEffect(() => {
    var temp = []

    courseData.forEach((item) => {
      if (item.courseOfStudy === universityCourseForm.course) {
        temp.push(item.university)
      }
    })

    setSelectableUniversityList(temp)
  }, [universityCourseForm.course])

  // Validate the data and add to the order of preferences table
  const handleUniversityCourseFormSubmit = async (e) => {
    e.preventDefault()

    // University course Details
    let courseError = ''
    let universityError = ''

    if (!v_required(universityCourseForm.course)) {
      courseError = 'Course can not be empty.'
    }

    if (!v_required(universityCourseForm.university)) {
      universityError = 'University can not be empty.'
    }

    // If errors exist, show errors
    setUniversityCourseFormErrors({
      courseError,
      universityError,
    })

    console.log(universityCourseFormError)

    // If no errors exist, send to the server
    if (!(courseError || universityError)) {
      var unicode = ''

      courseData.forEach((item) => {
        if (
          item.courseOfStudy === universityCourseForm.course &&
          item.university === universityCourseForm.university
        ) {
          unicode = item.uniCode
        }
      })

      setUniversityCourses((prev) => [
        ...prev,
        {
          recordId: index,
          unicode: unicode,
          course: universityCourseForm.course,
          university: universityCourseForm.university,
        },
      ])

      incIndex()
    }
  }

  const handleUniversityCourseTableClear = () => {
    setUniversityCourses([])
  }

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleOrderOfPreferencesTableSubmit = async (e) => {
    e.preventDefault()

    if (universityCourses.length === 0) {
      setLoading(true)
      setResMessage('Order of Preferences table is empty')
      setLoading(false)
    }

    // If no errors exist, send to the server
    if (universityCourses.length !== 0) {
      console.log('STEP 4 PAGE')

      // Sending to the server
      setLoading(true)
      setResMessage('')

      const user = authService.getCurrentUser()

      let unicodes = []

      universityCourses.forEach((item) => {
        unicodes.push(item.unicode)
      })

      universityAdmissionService.step4FormCheckAndSubmit(unicodes, user.username).then(
        () => {
          console.log(universityCourses)
          setLoading(false)
          navigate('/student/registration')
        },
        (error) => {
          const res =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
          // After recieving the server request
          setResMessage(res)
          setLoading(false)
        },
      )
    }
  }

  return (
    <div>
      <header>
        <CNav variant="tabs">
          <CNavItem>
            <NavLink to="/student/registration/step1" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 1</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step2" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 2</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step3" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 3</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step4" style={{ textDecoration: 'none' }}>
              <CNavLink active>Step 4</CNavLink>
            </NavLink>
          </CNavItem>
        </CNav>
      </header>
      <CContainer className="bg-white">
        <CRow className="p-2">
          <CCard className="p-2">
            <CCardBody>
              {/* Order of Preference for Courses Study and Universities */}
              <CCardTitle>Order of Preference for Courses Study and Universities</CCardTitle>
              <hr />
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol sm={5}>
                    <CFormSelect
                      label="Course"
                      aria-label="course-select"
                      name="course"
                      onChange={onUniversityCourseUpdateInput}
                      value={universityCourseForm.course}
                      feedback={universityCourseFormError.courseError}
                      invalid={universityCourseFormError.courseError ? true : false}
                    >
                      <option selected>Choose...</option>
                      {selectableCourseList.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </CFormSelect>
                  </CCol>
                  <CCol sm={5}>
                    <CFormSelect
                      label="University"
                      aria-label="university-select"
                      name="university"
                      onChange={onUniversityCourseUpdateInput}
                      value={universityCourseForm.university}
                      feedback={universityCourseFormError.universityError}
                      invalid={universityCourseFormError.universityError ? true : false}
                    >
                      <option selected>Choose...</option>
                      {selectableUniversityList.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </CFormSelect>
                  </CCol>
                  <CCol sm={2}>
                    <CButton
                      color="primary"
                      className="w-100 mt-3 h-75"
                      onClick={handleUniversityCourseFormSubmit}
                    >
                      Add
                    </CButton>
                  </CCol>

                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell>No.</CTableHeaderCell>
                        <CTableHeaderCell>Unicode</CTableHeaderCell>
                        <CTableHeaderCell>Course</CTableHeaderCell>
                        <CTableHeaderCell>University</CTableHeaderCell>
                        <CTableHeaderCell>
                          {universityCourses.length !== 0 && (
                            <CButton
                              color="warning"
                              type="button"
                              className="p-0 float-end"
                              onClick={handleUniversityCourseTableClear}
                            >
                              <span className="px-2">Clear Table</span>
                            </CButton>
                          )}
                        </CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {universityCourses.map((item) => (
                        <CTableRow key={item.recordId}>
                          <CTableHeaderCell>{item.recordId}</CTableHeaderCell>
                          <CTableDataCell>{item.unicode}</CTableDataCell>
                          <CTableDataCell>{item.course}</CTableDataCell>
                          <CTableDataCell colSpan={2}>{item.university}</CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CForm>
              </div>

              {resMessage && (
                <CAlert color="danger" className="text-center">
                  {resMessage}
                </CAlert>
              )}

              <br />
              <CRow>
                <CCol md={4} className="ms-auto">
                  <CButtonGroup size="sm" className="w-100">
                    {/* <CButton color="dark" variant="outline" type="submit" className="p-2">
                Cancel
              </CButton> */}
                    <Link to="/" className="btn btn-outline-dark p-2">
                      Cancel
                    </Link>

                    <CButton
                      color="primary"
                      type="button"
                      className="p-2"
                      onClick={handleOrderOfPreferencesTableSubmit}
                    >
                      {loading ? (
                        <span>
                          <CSpinner size="sm" /> Validating
                        </span>
                      ) : (
                        <span>Next</span>
                      )}
                    </CButton>
                  </CButtonGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Step4Page
