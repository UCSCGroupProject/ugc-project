import React, { useState } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CFormSelect,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CInputGroup,
  CFormInput,
  CInputGroupText,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormLabel,
  CFormCheck,
  CFormTextarea,
  CFormSwitch,
} from '@coreui/react'

import { cilPlus, cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import { cilPencil } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const MyCourses = () => {
  const [visible, setVisible] = useState(false)

  const [allCoursesData, setAllCoursesData] = useState([
    {
      id: 1,
      unicode: '117N',
      courseOfStudy: 'Engineering',
    },
    {
      id: 2,
      unicode: '112A',
      courseOfStudy: 'Medicine',
    },
  ])

  const updatecourse = () => {
    let temp = allCoursesData.slice()
    temp[currentItemIndex] = currentItem
    setAllCoursesData(temp)
  }

  const [currentItem, setCurrentItem] = useState(null)

  const [currentItemIndex, setCurrentItemIndex] = useState(null)

  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Courses</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="unicode">Unicode</option>
                      <option value="course">Course</option>
                      {/* <option value="university">University</option> */}
                    </CFormSelect>
                    <CInputGroupText> in </CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="ascending">Ascending</option>
                      <option value="descending">Descending</option>
                    </CFormSelect>
                    <CInputGroupText> order </CInputGroupText>
                    <CButton color="warning" type="button" className="text-white">
                      <CIcon icon={cilFilter} />
                      <span>{'  '}Filter</span>
                    </CButton>
                  </CInputGroup>
                </CCol>
                <CCol md={4} className="ms-auto">
                  <CInputGroup>
                    <CFormInput type="text" name="searchtext" placeholder="Search..." />
                    <CButton color="warning" type="button" className="text-white">
                      <CIcon icon={cilSearch} />
                      <span>{'  '}Search</span>
                    </CButton>
                  </CInputGroup>
                </CCol>
              </CRow>
              <br />

              <CRow className="m-1">
                <CCol md={4}>
                  <CButton color="success" type="button" className="text-white">
                    <CIcon icon={cilPlus} />
                    <span>{'  '}ADD COURSE</span>
                  </CButton>
                </CCol>
              </CRow>
              <br />

              <CRow className="m-1">
                <CTable bordered>
                  <CTableHead color="dark">
                    <CTableRow>
                      <CTableHeaderCell>No.</CTableHeaderCell>
                      <CTableHeaderCell>Unicode</CTableHeaderCell>
                      <CTableHeaderCell>Course</CTableHeaderCell>
                      {/* <CTableHeaderCell>University</CTableHeaderCell> */}
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {allCoursesData.map((item, index) => (
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.id}</CTableHeaderCell>
                        <CTableDataCell>{item.unicode}</CTableDataCell>
                        <CTableDataCell>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {item.courseOfStudy}
                            <CButton
                              id="mypopup"
                              color="btn btn-primary btn-sm"
                              type="button"
                              className="text-white"
                              onClick={() => {
                                setCurrentItem(item)
                                setCurrentItemIndex(index)
                                setVisible(!visible)
                              }}
                            >
                              <CIcon icon={cilPencil} />
                              <span>{'  '}Edit</span>
                            </CButton>
                          </div>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CModal scrollable visible={visible} size="lg" onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Course Edit</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm noValidate validated={validated} onSubmit={handleSubmit}>
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputunicode" className="col-sm-3 col-form-label">
                Uni Code
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  onChange={(e) => {
                    let temp = currentItem
                    temp.unicode = e.target.value
                    setCurrentItem(temp)
                  }}
                  type="text"
                  id="inputunicode"
                  defaultValue={currentItem ? currentItem.unicode : 'loading...'}
                  feedbackInvalid="Please provide an uni code."
                  required
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputcourse" className="col-sm-3 col-form-label">
                Course
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="text"
                  id="inputcourse"
                  defaultValue={currentItem ? currentItem.courseOfStudy : 'loading...'}
                  onChange={(e) => {
                    let temp = currentItem
                    temp.courseOfStudy = e.target.value
                    setCurrentItem(temp)
                  }}
                  feedbackInvalid="Please provide course name."
                  required
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputdegree" className="col-sm-3 col-form-label">
                Degree
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="text"
                  id="inputdegree"
                  feedbackInvalid="Please provide degree name."
                  required
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputreq" className="col-sm-3 col-form-label">
                Requirements
              </CFormLabel>
              <CRow>
                <CCol sm={6}>
                  <CFormSelect
                    size="sm"
                    className="mb-2"
                    aria-label="Small select example"
                    feedbackInvalid="Please provide requirements."
                    required
                  >
                    <option>Select a Subject</option>
                    <option value="1">Combined Mathematics</option>
                    <option value="2">Chemistry</option>
                    <option value="3">Physics</option>
                    <option value="4">ICT</option>
                    <option value="5">Bio Science</option>
                    <option value="6">Agriculture</option>
                  </CFormSelect>
                </CCol>
                <CCol sm={6}>
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq1"
                    id="radioreq1"
                    value="option1"
                    label="A"
                    defaultChecked
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq1"
                    id="radioreq2"
                    value="option2"
                    label="B"
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq1"
                    id="radioreq3"
                    value="option3"
                    label="C"
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq1"
                    id="radioreq4"
                    value="option4"
                    label="S"
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq1"
                    id="radioreq5"
                    value="option5"
                    label="F"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol sm={6}>
                  <CFormSelect size="sm" className="mb-2" aria-label="Small select example">
                    <option>Select a Subject</option>
                    <option value="1">Combined Mathematics</option>
                    <option value="2">Chemistry</option>
                    <option value="3">Physics</option>
                    <option value="4">ICT</option>
                    <option value="5">Bio Science</option>
                    <option value="6">Agriculture</option>
                  </CFormSelect>
                </CCol>
                <CCol sm={6}>
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq2"
                    id="radioreq1"
                    value="option1"
                    label="A"
                    defaultChecked
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq2"
                    id="radioreq2"
                    value="option2"
                    label="B"
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq2"
                    id="radioreq3"
                    value="option3"
                    label="C"
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq2"
                    id="radioreq4"
                    value="option4"
                    label="S"
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq2"
                    id="radioreq5"
                    value="option5"
                    label="F"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol sm={6}>
                  <CFormSelect size="sm" className="mb-2" aria-label="Small select example">
                    <option>Select a Subject</option>
                    <option value="1">Combined Mathematics</option>
                    <option value="2">Chemistry</option>
                    <option value="3">Physics</option>
                    <option value="4">ICT</option>
                    <option value="5">Bio Science</option>
                    <option value="6">Agriculture</option>
                  </CFormSelect>
                </CCol>
                <CCol sm={6}>
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq3"
                    id="radioreq1"
                    value="option1"
                    label="A"
                    defaultChecked
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq3"
                    id="radioreq2"
                    value="option2"
                    label="B"
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq3"
                    id="radioreq3"
                    value="option3"
                    label="C"
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq3"
                    id="radioreq4"
                    value="option4"
                    label="S"
                  />
                  <CFormCheck
                    inline
                    type="radio"
                    name="radioresultreq3"
                    id="radioreq5"
                    value="option5"
                    label="F"
                  />
                </CCol>
              </CRow>
            </CRow>

            <CRow className="mb-3">
              <CCol sm={12}>
                <CFormSwitch id="checktest" label="Aptitude Test" />
                <CFormSwitch id="checkOL" label="Require O/L Results" />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel htmlFor="inputdescrip" className="col-sm-3 col-form-label">
                Description
              </CFormLabel>
              <CCol sm={12}>
                <CFormTextarea id="exampleFormControlTextarea1" rows="5"></CFormTextarea>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              updatecourse()
              setVisible(false)
            }}
          >
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default MyCourses
