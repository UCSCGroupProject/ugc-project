import React from 'react'
import { useState, useEffect, useRef } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CTable,
  CTableHead,
  CContainer,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CSpinner,
  CAlert,
  CFormCheck,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter, cilCheckAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { toast } from 'react-toastify'

import authService from '../../../services/authService'
import studentValidationService from '../../../services/school/studentValidationService'
import cryptoSignerService from '../../../services/cryptoSignerService'
import validationDocumentService from '../../../services/school/validationDocumentService'

import AppStandardContainer from '../../../components/containers/AppStandardContainer'

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
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')

  const [user, setUser] = useState(authService.getCurrentUser())

  const [documentHeader, setDocumentHeader] = useState({
    id: '',
    schoolId: '',
    schoolName: '',
    schoolAddress: '',
  })

  const [studentRecords, setStudentRecords] = useState([
    {
      id: '',
      stuIndex: '',
      fullName: '',
      nic: '',
      admissionDate: '',
      leaveDate: '',
      validity: '',
    },
  ])

  // const [studentValidationList, setStudentValidationList] = useState([
  //   {
  //     transactionId: '',
  //     index: '',
  //     fullName: '',
  //     nic: '',
  //     dateOfAdmission: '',
  //     dateOfLeave: '',
  //     validity: false,
  //   },
  // ])

  useEffect(() => {
    setLoading(true)

    validationDocumentService.getDocument(user.id).then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data
          setDocumentHeader({
            id: res.payload.id,
            schoolId: res.payload.schoolId,
            schoolName: res.payload.schoolName,
            schoolAddress: res.payload.schoolAddress,
          })

          setStudentRecords(res.payload.studentRecords)
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

    setLoading(false)

    // setLoading(true)
    // setResMessage('')
    // studentValidationService.getStudentValidationList().then(
    //   (res) => {
    //     setLoading(false)
    //     console.log('consoling', res)
    //     setStudentValidationList(res)
    //   },
    //   (error) => {
    //     const res =
    //       (error.response && error.response.data && error.response.data.message) ||
    //       error.message ||
    //       error.toString()
    //     // After recieving the server request
    //     setResMessage(res)
    //     setLoading(false)
    //   },
    // )
    // setLoading(false)
  }, [])

  const updateStudentRecords = (id) => {
    console.log(id)
  }

  const handleSubmit = async (e) => {
    // Sending to the server
    setLoading(true)
    setResMessage('')

    const payload = {
      id: documentHeader.id,
      schoolId: documentHeader.schoolId,
      schoolName: documentHeader.schoolName,
      schoolAddress: documentHeader.schoolAddress,
      studentRecords: studentRecords,
    }

    cryptoSignerService.generate(payload).then(
      (res) => {
        // if (res.type === 'OK') {
        //   toast.success(res.message)
        // } else if (res.type === 'BAD') {
        //   toast.error(res.message)
        // }

        setLoading(false)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()

        // After recieving the server request
        setLoading(false)
        toast.error(res)
      },
    )

    // studentValidationService
    //   .validateAndPublishStudentList(studentValidationList, user.username)
    //   .then(
    //     (res) => {
    //       if (res.type === 'OK') {
    //         toast.success(res.message)
    //       } else if (res.type === 'BAD') {
    //         toast.error(res.message)
    //       }

    //       setLoading(false)
    //     },
    //     (error) => {
    //       const res =
    //         (error.response && error.response.data && error.response.data.message) ||
    //         error.message ||
    //         error.toString()

    //       // After recieving the server request
    //       setLoading(false)
    //       toast.error(res)
    //     },
    //   )
  }

  return (
    <div>
      <AppStandardContainer title="Digital signing">
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
                <CTableHeaderCell>Validity</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {studentRecords.map((item) => (
                <CTableRow key={item.id}>
                  <CTableHeaderCell>{item.id}</CTableHeaderCell>
                  <CTableDataCell>{item.stuIndex}</CTableDataCell>
                  <CTableDataCell>{item.fullName}</CTableDataCell>
                  <CTableDataCell>{item.nic}</CTableDataCell>
                  <CTableDataCell>{item.admissionDate}</CTableDataCell>
                  <CTableDataCell>{item.leaveDate}</CTableDataCell>
                  <CTableDataCell>
                    <CFormCheck value={item.validity} onChange={updateStudentRecords(item.id)} />
                  </CTableDataCell>
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
                  As a authorized indivial in this school, I here by certify above mentioned list is
                  true and valid.
                </span>
              </CCol>
              <CCol md={4}>
                <CButton
                  color="success"
                  type="button"
                  className="text-white"
                  onClick={handleSubmit}
                >
                  <CIcon icon={cilCheckAlt} />
                  <span>
                    {'  '}Validate & Download PDF {loading && <CSpinner size="sm" />}
                  </span>
                </CButton>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </AppStandardContainer>
    </div>
  )
}

export default ValidateStudents
