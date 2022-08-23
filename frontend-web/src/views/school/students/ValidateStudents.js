import React from 'react'
import { useState, useEffect, useRef } from 'react'
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
  CContainer,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CInputGroup,
  CFormInput,
  CInputGroupText,
  CSpinner,
  CAlert,
  CToast,
  CToastHeader,
  CToastBody,
  CToaster,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter, cilCheckAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import authService from '../../../services/authService'
import studentValidationService from '../../../services/school/studentValidationService'

const studentValidationListData = [
  {
    transactionId: '1',
    index: '1236547',
    fullName: 'L.A.D.D.S. GUNAWARDHANA',
    nic: '199931712165',
    dateOfAdmission: '2011-10-03',
    dateOfLeave: '2015-3-06',
  },
  {
    transactionId: '2',
    index: '9875462',
    fullName: 'D.C. PATHIRAGE',
    nic: '200016548965315',
    dateOfAdmission: '2012-10-08',
    dateOfLeave: '2015-8-16',
  },
]

function ValidateStudents() {
  //Toast related
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (status, title, content) => (
    <CToast className={`bg-fade-${status}`}>
      <CToastHeader closeButton className={`text-white bg-${status}`}>
        <strong className="me-auto">{title}</strong>
        <small>Just now</small>
      </CToastHeader>
      <CToastBody>{content}</CToastBody>
    </CToast>
  )

  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')

  const [studentValidationList, setStudentValidationList] = useState([
    {
      transactionId: '',
      index: '',
      fullName: '',
      nic: '',
      dateOfAdmission: '',
      dateOfLeave: '',
    },
  ])

  useEffect(() => {
    setLoading(true)
    setResMessage('')

    studentValidationService.getStudentValidationList().then(
      (res) => {
        setLoading(false)

        console.log('consoling', res)
        setStudentValidationList(res)
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

    setLoading(false)
  }, [])

  const handleSubmit = async (e) => {
    // Sending to the server
    setLoading(true)
    setResMessage('')

    const user = authService.getCurrentUser()

    studentValidationService
      .validateAndPublishStudentList(studentValidationList, user.username)
      .then(
        (res) => {
          setLoading(false)
          addToast(exampleToast('success', `Published Successfully`, res.message))
        },
        (error) => {
          const res =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()

          // After recieving the server request
          setLoading(false)
          addToast(exampleToast('danger', `Published Failed`, res))
        },
      )
  }

  return (
    <div>
      {/* Toast */}
      <CToaster ref={toaster} push={toast} placement="top-end" />

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Validate student list</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="fullname">Index</option>
                      <option value="fullname">Fullname</option>
                      <option value="nic">NIC</option>
                      <option value="dateOfAdmission">Date of Admission</option>
                      <option value="dateOfLeave">Date of Leave</option>
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
                      <CTableHeaderCell>Id</CTableHeaderCell>
                      <CTableHeaderCell>Index</CTableHeaderCell>
                      <CTableHeaderCell>Fullname</CTableHeaderCell>
                      <CTableHeaderCell>NIC</CTableHeaderCell>
                      <CTableHeaderCell>Date of Admission</CTableHeaderCell>
                      <CTableHeaderCell>Date of Leave</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {studentValidationList.map((item) => (
                      <CTableRow key={item.transactionId}>
                        <CTableHeaderCell>{item.transactionId}</CTableHeaderCell>
                        <CTableDataCell>{item.index}</CTableDataCell>
                        <CTableDataCell>{item.fullName}</CTableDataCell>
                        <CTableDataCell>{item.nic}</CTableDataCell>
                        <CTableDataCell>{item.dateOfAdmission}</CTableDataCell>
                        <CTableDataCell>{item.dateOfLeave}</CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CRow>

              <div className="d-flex flex-row align-items-center">
                <CContainer>
                  {resMessage && (
                    <CAlert color="danger" className="text-center">
                      {resMessage}
                    </CAlert>
                  )}

                  <CRow className="justify-content-center">
                    <CCol md={7}>
                      <span className="text-right">
                        As a authorized indivial in this school, I here by certify above mentioned
                        list is true and valid.
                      </span>
                    </CCol>
                    <CCol md={2}>
                      <CButton
                        color="success"
                        type="button"
                        className="text-white"
                        onClick={handleSubmit}
                      >
                        <CIcon icon={cilCheckAlt} />
                        <span>
                          {'  '}Validate {loading && <CSpinner size="sm" />}
                        </span>
                      </CButton>
                    </CCol>
                  </CRow>
                </CContainer>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default ValidateStudents
