import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
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
import CIcon from '@coreui/icons-react'
import { cilSwapVertical, cilDelete } from '@coreui/icons'

import { v_required } from '../../../utils/validator'

import { toast } from 'react-toastify'

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import AppFetchDataLoader from '../../../components/loaders/AppFetchDataLoader'

import authService from '../../../services/authService'
import universityAdmissionService from '../../../services/student/universityAdmissionService'
import courseService from '../../../services/university/courseService'
import axios from 'axios'

function Step4Page() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate()

  const [user, setUser] = useState(authService.getCurrentUser())
  const [isStudentApppliedForUniversityAdmissions, setIsStudentApppliedForUniversityAdmissions] =
    useState(false)

  // Order of preferences table data
  const [orderOfPreferences, setOrderOfPreferences] = useState([])

  // COURSE AND UNIVERSITY SELECTION
  // Recommended courses data
  const [recommendedCourses, setRecommendedCourses] = useState([])

  useEffect(() => {
    setLoading(true)

    // Getting admissible courses and universities
    universityAdmissionService.getStep2Form(user.username).then(
      (res) => {
        console.log('asasdasdd', res)

        // Payload setting
        const payload = {
          englishResult: res.englishResult,
          mathematicsResult: res.mathematicsResult,
          scienceResult: res.scienceResult,

          firstSubject: res.alSubject1,
          secondSubject: res.alSubject2,
          thirdSubject: res.alSubject3,
        }

        setIsStudentApppliedForUniversityAdmissions(true)

        console.log('asd', payload)

        courseService.getRecommendedDetailedCourseList(payload).then(
          (res) => {
            if (res.type === 'OK') {
              toast.success(res.message)

              // Settings table data from fetched data
              setRecommendedCourses(res.payload)
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

  useEffect(() => {
    setLoading(true)
    console.log('use eff 2 called')

    axios
      .get(
        'http://localhost:8081/api/student/universityAdmission/step4Form?username=' + user.username,
      )
      .then((res) => {
        console.log("rrrrr",res.data.unicodeRecords);
        setOrderOfPreferences(res.data.unicodeRecords)
        setLoading(false)
      })
  }, [])

  const [offeredUniversities, setOfferedUniversities] = useState([
    {
      universityName: '',
      universityUsername: '',
      unicode: '',
    },
  ])

  // University courses and relevant universities
  const [universityCourseForm, setUniversityCourseForm] = useState({
    unicode: '',
    courseName: '',
    universityName: '',
  })

  // Update the form data while input
  const onUniversityCourseUpdateInput = (e) => {
    setUniversityCourseForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const [universityCourseFormError, setUniversityCourseFormErrors] = useState({
    courseNameError: '',
    universityNameError: '',
  })

  useEffect(() => {
    recommendedCourses.forEach((item) => {
      if (item.courseName === universityCourseForm.courseName) {
        setOfferedUniversities(item.offeredUniversities)
      }
    })
  }, [universityCourseForm.courseName])

  useEffect(() => {
    recommendedCourses.forEach((item) => {
      if (item.courseName === universityCourseForm.courseName) {
        let offeredUniversities = item.offeredUniversities

        offeredUniversities.forEach((i) => {
          if (i.universityName == universityCourseForm.universityName) {
            setUniversityCourseForm({
              unicode: i.unicode,
              courseName: universityCourseForm.courseName,
              universityName: universityCourseForm.universityName,
            })
          }
        })
      }
    })
  }, [universityCourseForm.universityName])

  // Validate the data and add to the order of preferences table
  const handleUniversityCourseFormSubmit = async (e) => {
    e.preventDefault()

    // University course Details
    let courseNameError = ''
    let universityNameError = ''

    if (!v_required(universityCourseForm.courseName)) {
      courseNameError = 'Course can not be empty.'
    }

    if (!v_required(universityCourseForm.universityName)) {
      universityNameError = 'University can not be empty.'
    }

    // If errors exist, show errors
    setUniversityCourseFormErrors({
      courseNameError,
      universityNameError,
    })

    console.log(universityCourseFormError)

    // If no errors exist, send to the server
    if (!(courseNameError || universityNameError)) {
      setOrderOfPreferences((prev) => [...prev, universityCourseForm])

      setUniversityCourseForm({
        unicode: '',
        courseNameError: '',
        universityNameError: '',
      })

      console.log(universityCourseForm)
    }
  }

  // ORDER OF PREFERENCE TABLE

  const handleOnDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(orderOfPreferences)
    const [reorderedItems] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItems)

    setOrderOfPreferences(items)

    console.log(orderOfPreferences)
  }

  const removeItem = (unicode) => {
    setOrderOfPreferences((current) => current.filter((i) => i.unicode != unicode))

    console.log(orderOfPreferences)
  }

  // final
  const handleOrderOfPreferencesTableSubmit = async (e) => {
    e.preventDefault()

    if (orderOfPreferences.length === 0) {
      setLoading(true)
      toast.error('Order of Preferences table is empty')
      setLoading(false)
    }

    // If no errors exist, send to the server
    if (orderOfPreferences.length !== 0) {
      console.log('STEP 4 PAGE')

      // Sending to the server
      setLoading(true)

      const user = authService.getCurrentUser()

      // let unicodes = []

      // orderOfPreferences.forEach((item) => {
      //   unicodes.push(item.unicode)
      // })

      universityAdmissionService.step4FormCheckAndSubmit(orderOfPreferences, user.username).then(
        () => {
          setLoading(false)
          toast.success('Send successfully')
          navigate('/student/registration')
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
              {isStudentApppliedForUniversityAdmissions ? (
                <div>
                  <CForm className="row g-3 needs-validation" noValidate>
                    <CCol sm={5}>
                      <CFormSelect
                        label="Course"
                        aria-label="course-select"
                        name="courseName"
                        onChange={onUniversityCourseUpdateInput}
                        value={universityCourseForm.courseName}
                        feedback={universityCourseFormError.courseNameError}
                        invalid={universityCourseFormError.courseNameError ? true : false}
                      >
                        <option selected>Choose...</option>
                        {recommendedCourses.map((item) => (
                          <option value={item.courseName}>{item.courseName}</option>
                        ))}
                      </CFormSelect>
                    </CCol>
                    <CCol sm={5}>
                      <CFormSelect
                        label="University"
                        aria-label="university-select"
                        name="universityName"
                        onChange={onUniversityCourseUpdateInput}
                        value={universityCourseForm.universityName}
                        feedback={universityCourseFormError.universityNameError}
                        invalid={universityCourseFormError.universityNameError ? true : false}
                      >
                        <option selected>Choose...</option>
                        {offeredUniversities.map((item) => (
                          <option value={item.universityName}>{item.universityName}</option>
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
                          <CTableHeaderCell></CTableHeaderCell>
                          <CTableHeaderCell>Unicode</CTableHeaderCell>
                          <CTableHeaderCell>Course</CTableHeaderCell>
                          <CTableHeaderCell>University</CTableHeaderCell>
                          <CTableHeaderCell></CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="characters">
                          {(provided) => (
                            <CTableBody {...provided.droppableProps} ref={provided.innerRef}>
                              {orderOfPreferences.map((item, index) => (
                                <Draggable
                                  key={item.unicode}
                                  draggableId={item.unicode}
                                  index={index}
                                >
                                  {(provided2) => (
                                    <CTableRow
                                      {...provided2.draggableProps}
                                      {...provided2.dragHandleProps}
                                      ref={provided2.innerRef}
                                      className="swappable-row"
                                      key={index}
                                    >
                                      <CTableDataCell className="hoverable-card">
                                        <CIcon icon={cilSwapVertical} customClassName="nav-icon" />
                                      </CTableDataCell>
                                      <CTableDataCell>{item.unicode}</CTableDataCell>
                                      <CTableDataCell>{item.courseName}</CTableDataCell>
                                      <CTableDataCell>{item.universityName}</CTableDataCell>
                                      <CTableDataCell
                                        className="hoverable-card"
                                        onClick={() => removeItem(item.unicode)}
                                      >
                                        <CIcon icon={cilDelete} customClassName="nav-icon" />
                                      </CTableDataCell>
                                    </CTableRow>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </CTableBody>
                          )}
                        </Droppable>
                      </DragDropContext>
                    </CTable>
                    <br />
                    <CRow>
                      <CCol md={4} className="ms-auto">
                        <CButtonGroup size="sm" className="w-100">
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
                              <span>Save</span>
                            )}
                          </CButton>
                        </CButtonGroup>
                      </CCol>
                    </CRow>
                  </CForm>
                </div>
              ) : (
                <div className="text-center my-3">
                  <h2>You haven't enterd G.C.E(O/L) and G.C.E(A/L) results yet!</h2>
                  <p>Please fill the university admission form to access this feature. </p>
                  <NavLink to={`/student/registration/step2`} style={{ textDecoration: 'none' }}>
                    <CButton color="success text-white" type="button" className="p-2">
                      Apply for University Admissions
                    </CButton>
                  </NavLink>
                </div>
              )}
            </CCardBody>
          </CCard>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Step4Page
