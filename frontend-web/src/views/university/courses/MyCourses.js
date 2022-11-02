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
import { cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useEffect } from 'react'
// import { sassNull } from 'sass'

const MyCourses = () => {
  const [visibleForm1, setVisibleForm1] = useState(false)

  const [visibleForm2, setVisibleForm2] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [allCoursesDataSupportSearch, setAllCoursesDataSupportSearch] = useState([
    {
      id: 5,
      code: '118L',
      name: 'Information System',
      proposed_intakes: '100',
    },
    {
      id: 6,
      code: '102L',
      name: 'Physical Science',
      proposed_intakes: '300',
    },
    {
      id: 7,
      code: '115L',
      name: 'Servay Science',
      proposed_intakes: '60',
    },
    {
      id: 8,
      code: '116L',
      name: 'Engineering(TM)',
      proposed_intakes: '50',
    },
  ])
  const [allCoursesData, setAllCoursesData] = useState([
    {
      id: 1,
      code: '117L',
      name: 'Engineering',
      proposed_intakes: '70',
    },
    {
      id: 2,
      code: '112L',
      name: 'Medicine',
      proposed_intakes: '50',
    },
    {
      id: 3,
      code: '118L',
      name: 'Computer Science',
      proposed_intakes: '200',
    },
    {
      id: 4,
      code: '112L',
      name: 'Dental',
      proposed_intakes: '30',
    },
  ])

  const [allAddCoursesData, setAllAddCoursesData] = useState([
    {
      id: 5,
      code: '118L',
      name: 'Information System',
      proposed_intakes: '100',
    },
    {
      id: 6,
      code: '102L',
      name: 'Physical Science',
      proposed_intakes: '300',
    },
    {
      id: 7,
      code: '115L',
      name: 'Servay Science',
      proposed_intakes: '60',
    },
    {
      id: 8,
      code: '116L',
      name: 'Engineering(TM)',
      proposed_intakes: '50',
    },
  ])

  const addNewCourseFromTable = (item) => {
    let temp = allCoursesData.slice()
    temp.push(item)
    setAllCoursesData(temp)
    let tempForTable = allAddCoursesData.filter((i) => {
      return !(i.id == item.id)
    })
    setAllAddCoursesData(tempForTable)
  }

  const [currentItem, setCurrentItem] = useState(null)

  const [currentItemIndex, setCurrentItemIndex] = useState(null)

  const [validated, setValidated] = useState(false)

  const updatecourse = () => {
    let temp = allCoursesData.slice()
    temp[currentItemIndex] = currentItem
    setAllCoursesData(temp)
  }
  useEffect(() => {
    updatecourse()
  }, [currentItem])

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  const doSearchandFilter = () => {
    let temp = allCoursesDataSupportSearch.slice()
    console.log(temp)
    if (searchText != ' ' || searchText != '') {
      temp = temp.filter(
        (item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.code.toLowerCase().includes(searchText.toLowerCase()),
      )
    }
    setAllCoursesData(temp)
  }

  useEffect(() => {
    doSearchandFilter()
  }, [searchText])

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
                    <CFormInput
                      type="text"
                      name="searchtext"
                      placeholder="Search..."
                      onChange={(e) => {
                        setSearchText(e.target.value)
                      }}
                    />
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
                  <CButton
                    id="myaddpopup"
                    color="success"
                    type="button"
                    className="text-white"
                    onClick={() => {
                      setVisibleForm2(!visibleForm2)
                    }}
                  >
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
                      <CTableHeaderCell>Course Code</CTableHeaderCell>
                      <CTableHeaderCell>Course</CTableHeaderCell>
                      <CTableHeaderCell>Proposed Intake</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {allCoursesData.map((item, index) => (
                      <CTableRow key={item.id}>
                        <CTableDataCell>{index + 1}</CTableDataCell>
                        <CTableDataCell>{item.code}</CTableDataCell>
                        <CTableDataCell>{item.name}</CTableDataCell>
                        <CTableDataCell>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {item.proposed_intakes}
                            <CButton
                              id="editbtn"
                              color="btn btn-primary btn-sm"
                              type="button"
                              className="text-white"
                              onClick={() => {
                                setCurrentItem(item)
                                setCurrentItemIndex(index)
                                setVisibleForm1(!visibleForm1)
                              }}
                            >
                              <CIcon icon={cilPencil} />
                              <span>{'  '}Edit</span>
                            </CButton>
                            <CButton
                              id="deltbtn"
                              color="danger"
                              type="button"
                              className="text-white"
                              onClick={() => {
                                let temp = allCoursesData.slice()
                                temp = temp.filter((item) => item.id != allCoursesData[index].id)
                                setAllCoursesData(temp)
                              }}
                            >
                              <CIcon icon={cilTrash} />
                              <span>{'  '}Delete</span>
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

      {/* pop up form1 for edit course */}
      <CModal scrollable visible={visibleForm1} size="lg" onClose={() => setVisibleForm1(false)}>
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
                  type="text"
                  id="inputunicode"
                  defaultValue={currentItem ? currentItem.code : 'loading...'}
                  feedbackInvalid="Please provide an uni code."
                  disabled
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
                  defaultValue={currentItem ? currentItem.name : 'loading...'}
                  feedbackInvalid="Please provide course name."
                  disabled
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel htmlFor="inputcourse" className="col-sm-3 col-form-label">
                Proposed Intake
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="text"
                  id="inputcourse"
                  defaultValue={currentItem ? currentItem.proposed_intakes : 'loading...'}
                  onChange={(e) => {
                    let temp = currentItem
                    temp.proposed_intakes = e.target.value
                    setCurrentItem(temp)
                  }}
                  feedbackInvalid="Please provide intake amount."
                  required
                />
              </CCol>
            </CRow>

            {/* <CRow className="mb-3">
              <CFormLabel htmlFor="inputdegree" className="col-sm-3 col-form-label">
                Degree
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="text"
                  id="inputdegree"
                  defaultValue={'B.Sc in Engineering'}
                  feedbackInvalid="Please provide degree name."
                  required
                />
              </CCol>
            </CRow> */}

            {/* {/* <CRow className="mb-3">
              <CFormLabel htmlFor="inputcourse" className="col-sm-3 col-form-label">
                Faculty
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="text"
                  id="inputfaculty"
                  defaultValue={currentItem ? currentItem.faculty : 'loading...'}
                  onChange={(e) => {
                    let temp = currentItem
                    temp.courseOfStudy = e.target.value
                    setCurrentItem(temp)
                  }}
                  feedbackInvalid="Please provide faculty name."
                  required
                />
              </CCol>
            </CRow> */}

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
                    {/* <option>Select a Subject</option> */}
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
                    defaultChecked
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
                    <option value="2">Chemistry</option>
                    <option value="1">Combined Mathematics</option>
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
                    defaultChecked
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
                    <option value="3">Physics</option>
                    <option value="1">Combined Mathematics</option>
                    <option value="2">Chemistry</option>
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
                    defaultChecked
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
                {/* <CFormSwitch id="checktest" label="Aptitude Test" /> */}
                <CFormSwitch id="checkOL" label="Require O/L Results" />
              </CCol>
            </CRow>

            {/* <CRow className="mb-3">
              <CFormLabel htmlFor="inputdescrip" className="col-sm-3 col-form-label">
                Description
              </CFormLabel>
              <CCol sm={12}>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  rows="5"
                  defaultValue={'Good Occupation.Highere Salary.'}
                ></CFormTextarea>
              </CCol>
            </CRow> */}
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisibleForm1(false)}>
            Close
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              updatecourse()
              setVisibleForm1(false)
            }}
          >
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>

      {/* pop up form2 for add course */}
      <CModal scrollable visible={visibleForm2} size="lg" onClose={() => setVisibleForm2(false)}>
        <CModalHeader>
          <CModalTitle>Add Courses</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm noValidate validated={validated} onSubmit={handleSubmit}>
            <CRow className="mb-3">
              <CTable bordered>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell>No.</CTableHeaderCell>
                    <CTableHeaderCell>Unicode</CTableHeaderCell>
                    <CTableHeaderCell>Course</CTableHeaderCell>
                    <CTableHeaderCell>Add</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {allAddCoursesData.length == 0 ? <h1>Empty List </h1> : null}
                  {allAddCoursesData.map((item, index) => (
                    <CTableRow key={item.id}>
                      <CTableHeaderCell>{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{item.code}</CTableDataCell>
                      <CTableDataCell>{item.name}</CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="primary"
                          onClick={() => {
                            addNewCourseFromTable(allAddCoursesData[index])
                          }}
                        >
                          {' '}
                          Add{' '}
                        </CButton>
                        {/* <CFormCheck
                          id={item.id}
                          onChange={() => {
                            addNewCourseFromTable(allAddCoursesData[index])
                          }}
                        /> */}
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisibleForm2(false)}>
            Close
          </CButton>
          {/* <CButton
            color="primary"
            onClick={() => {
              updatecourse()
              setVisibleForm2(false)
            }}
          >
            Add to Courses
          </CButton> */}
        </CModalFooter>
      </CModal>
      {/* <CModal scrollable visible={visibleForm2} size="lg" onClose={() => setVisibleForm2(false)}>
        <CModalHeader>
          <CModalTitle>Course Edit</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm noValidate validated={validated} onSubmit={handleSubmit}>
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputunicode" className="col-sm-3 col-form-label">
                Course Code(Uni Code)
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
                  defaultValue={''}
                  feedbackInvalid="Please provide an uni code."
                  required
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputcourse" className="col-sm-3 col-form-label">
                Course Name
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="text"
                  id="inputcourse"
                  defaultValue={''}
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
                Proposed Intake
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="text"
                  id="inputdegree"
                  defaultValue={''}
                  feedbackInvalid="Please provide degree name."
                  required
                />
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisibleForm1(false)}>
            Close
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              updatecourse()
              setVisibleForm1(false)
            }}
          >
            Add Course
          </CButton>
        </CModalFooter>
      </CModal> */}
    </div>
  )
}

export default MyCourses
