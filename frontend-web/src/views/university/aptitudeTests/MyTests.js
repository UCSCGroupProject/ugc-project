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
  CBadge,
  CModalTitle,
  CModal,
  CModalHeader,
  CModalBody,
  CForm,
  CFormLabel,
  CFormCheck,
  CFormSwitch,
  CFormTextarea,
  CModalFooter,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import { cilPencil } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const MyTests = () => {
  const [visible, setVisible] = useState(false)

  const [allTestsData, setAllTestsData] = useState([
    {
      id: 1,
      unicode: '118H',
      courseOfStudy: 'Architecture',
      date: '2022-08-03',
      time: '10:00 AM',
      status: 'Done',
    },
    {
      id: 2,
      unicode: '112A',
      courseOfStudy: 'Fashion Designing',
      date: '2022-08-06',
      time: '01:00 PM',
      status: 'Progress',
    },
    {
      id: 3,
      unicode: '115K',
      courseOfStudy: 'Information System',
      date: '2022-03-06',
      time: '02:00 PM',
      status: 'Done',
    },
  ])

  const updatetest = () => {
    let temp = allTestsData.slice()
    temp[currentItemIndex] = currentItem
    setAllTestsData(temp)
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
            <CCardHeader>All Aptitude Test</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="unicode">Unicode</option>
                      <option value="course">Course</option>
                      <option value="course">Date</option>
                      <option value="course">Status</option>
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
                    <CFormInput type="text" name="phone" placeholder="Search..." />
                    <CButton color="warning" type="button" className="text-white">
                      <CIcon icon={cilSearch} />
                      <span>{'  '}Search</span>
                    </CButton>
                  </CInputGroup>
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
                      <CTableHeaderCell>Date</CTableHeaderCell>
                      <CTableHeaderCell>Time</CTableHeaderCell>
                      <CTableHeaderCell>Status</CTableHeaderCell>
                      {/* <CTableHeaderCell>University</CTableHeaderCell> */}
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {allTestsData.map((item,index) => (
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.id}</CTableHeaderCell>
                        <CTableDataCell>{item.unicode}</CTableDataCell>
                        <CTableDataCell>{item.courseOfStudy}</CTableDataCell>
                        <CTableDataCell>{item.date}</CTableDataCell>
                        <CTableDataCell>{item.time}</CTableDataCell>
                        
                        <CTableDataCell>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {item.status === 'Progress' && <CBadge color="warning">{item.status}</CBadge>}
                            {item.status === 'Done' && <CBadge color="success">{item.status}</CBadge>}
                        
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

      {/* pop up form */}
      <CModal scrollable visible={visible} size="lg" onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Aptitude Test Edit</CModalTitle>
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
              <CFormLabel htmlFor="inputdate" className="col-sm-3 col-form-label">
                Date
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="text"
                  id="inputdate"
                  defaultValue={currentItem ? currentItem.date : 'loading...'}
                  onChange={(e) => {
                    let temp = currentItem
                    temp.date = e.target.value
                    setCurrentItem(temp)
                  }}
                  feedbackInvalid="Please provide vaid date."
                  required
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel htmlFor="inputtime" className="col-sm-3 col-form-label">
                Time
              </CFormLabel>
              <CCol sm={12}>
                <CFormInput
                  type="text"
                  id="inputtime"
                  defaultValue={currentItem ? currentItem.time : 'loading...'}
                  onChange={(e) => {
                    let temp = currentItem
                    temp.time = e.target.value
                    setCurrentItem(temp)
                  }}
                  feedbackInvalid="Please provide valid time."
                  required
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel htmlFor="inputdescrip" className="col-sm-3 col-form-label">
                Description
              </CFormLabel>
              <CCol sm={12}>
                <CFormTextarea
                  id="inputdescrip"
                  rows="5"
                  defaultValue={'Good Occupation.Highere Salary.'}
                ></CFormTextarea>
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
              updatetest()
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

export default MyTests
