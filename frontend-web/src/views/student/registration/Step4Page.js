import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
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
} from '@coreui/react'

const courses = ['Medicine', 'Dental Surgery']
const universities = [
  'University of Colombo',
  'University of Peradeniya',
  'University of Sri Jayawardhenepura',
  'University of Kelaniya',
  'University of Jaffna',
  'University of Ruhuna',
  'University of Moratuwa',
  'Eastern University, Sri Lanka',
  'Rajarata University of Sri Lanka',
  'Sabaragamuwa University of Sri Lanka',
  'Wayamba University of Sri Lanka',
]

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
  const getRelevantUniversitiesForCourse = (course) => {
    var universityList = []

    courseData.forEach((item) => {
      if (item.courseOfStudy === course) {
        universityList.push(item.university)
      }
    })

    return universityList
  }

  const getRelevantUnicode = (course, university) => {
    var unicode = ''

    courseData.forEach((item) => {
      if (item.courseOfStudy === course && item.university === university) {
        unicode = item.uniCode
        return
      }
    })

    return unicode
  }

  // Form data
  const [selectedCourse, setSelectedCourse] = useState(courses[0])
  const [selectedUniversity, setSelectedUniversity] = useState(universities[0])

  const [selectableUniList, setSelectableUniList] = useState(
    getRelevantUniversitiesForCourse(courses[0]),
  )

  const [orderOfPreference, setOrderOfPreference] = useState([])

  // Update the form data while input
  const onUpdateSelectedCourse = (e) => {
    setSelectedCourse(e.target.value)
    console.log(e.target.value)

    setSelectableUniList(getRelevantUniversitiesForCourse(e.target.value))
  }

  const onUpdateSelectedUniversity = (e) => {
    setSelectedUniversity(e.target.value)
  }

  const addToOrderOfPreferences = () => {
    setOrderOfPreference((prev) => [
      ...prev,
      {
        id: orderOfPreference.length + 1,
        unicode: getRelevantUnicode(selectedCourse, selectedUniversity),
        courseOfStudy: selectedCourse,
        university: selectedUniversity,
      },
    ])

    console.log(orderOfPreference)
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
                      aria-label="courseSelect"
                      label="Course"
                      name="selectedCourse"
                      onChange={onUpdateSelectedCourse}
                      value={selectedCourse}
                    >
                      {courses.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </CFormSelect>
                  </CCol>
                  <CCol sm={5}>
                    <CFormSelect
                      aria-label="universitySelect"
                      label="University"
                      name="selectedUniversity"
                      onChange={onUpdateSelectedUniversity}
                      value={selectedUniversity}
                    >
                      {selectableUniList.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </CFormSelect>
                  </CCol>
                  <CCol sm={2}>
                    <CButton
                      color="primary"
                      shape="rounded-0"
                      className="w-100 mt-3 h-75"
                      onClick={addToOrderOfPreferences}
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
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {orderOfPreference.map((item) => (
                        <CTableRow key={item.id}>
                          <CTableHeaderCell>{item.id}</CTableHeaderCell>
                          <CTableDataCell>{item.unicode}</CTableDataCell>
                          <CTableDataCell>{item.courseOfStudy}</CTableDataCell>
                          <CTableDataCell>{item.university}</CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>

                  {/* <CRow>
                    <CCol md={3} className="ms-auto">
                      <CButton color="primary" shape="rounded-0" className="w-100 mt-3 h-75">
                        Confirm
                      </CButton>
                    </CCol>
                  </CRow> */}
                </CForm>
              </div>

              {/* {resMessage && (
                <CAlert color="danger" className="text-center">
                  {resMessage}
                </CAlert>
              )} */}

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
                      //   onClick={handleStuNicAndExamFormSubmit}
                    >
                      Save
                      {/* {loading ? (
                        <span>
                          <CSpinner size="sm" /> Validating
                        </span>
                      ) : (
                        <span>Next</span>
                      )} */}
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
