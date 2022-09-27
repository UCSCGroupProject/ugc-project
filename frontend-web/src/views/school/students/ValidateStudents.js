import React from 'react'
import { useState, useEffect, useRef } from 'react'
import {
  CRow,
  CCol,
  CButton,
  CTable,
  CTableHead,
  CContainer,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CSpinner,
  CFormCheck,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilCloudDownload, cilCheckAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { toast } from 'react-toastify'

import authService from '../../../services/authService'
import cryptoSignerService from '../../../services/crypto-signer/cryptoSignerService'
import validationDocumentService from '../../../services/school/validationDocumentService'

import AppStandardContainer from '../../../components/containers/AppStandardContainer'

function ValidateStudents() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [isDocumentValidated, setIsDocumentValidated] = useState(false)

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

          console.log(res.payload.studentRecords)
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
  }, [])

  const updateStudentRecords = (index) => {
    setIsDocumentValidated(false)

    const newStuRecords = [...studentRecords]
    newStuRecords[index].validity = !newStuRecords[index].validity

    setStudentRecords(newStuRecords)
  }

  const validateDocument = async (e) => {
    setLoading(true)
    setIsDocumentValidated(false)

    let doc = {
      ...documentHeader,
      studentRecords: [...studentRecords],
    }
    console.log(doc)

    validationDocumentService.updateDocument(doc).then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data from fetched data
          setIsDocumentValidated(true)
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
  }

  const handleDownloadPDF = async (e) => {
    cryptoSignerService.generate(user.id).then(
      (res) => {},
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
  }

  return (
    <div>
      <AppStandardContainer title="Digital signing">
        <CRow className="p-1">
          <CRow className="pb-1">
            <CCol md={2}>
              <b>School name</b>
            </CCol>
            <CCol md={10}>{documentHeader.schoolName}</CCol>
          </CRow>
          <CRow className="pb-2">
            <CCol md={2}>
              <b>School address</b>
            </CCol>
            <CCol md={10}>{documentHeader.schoolAddress}</CCol>
          </CRow>
        </CRow>
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
              {studentRecords.map((item, index) => (
                <CTableRow key={index}>
                  <CTableHeaderCell>{item.id}</CTableHeaderCell>
                  <CTableDataCell>{item.stuIndex}</CTableDataCell>
                  <CTableDataCell>{item.fullName}</CTableDataCell>
                  <CTableDataCell>{item.nic}</CTableDataCell>
                  <CTableDataCell>{item.admissionDate}</CTableDataCell>
                  <CTableDataCell>{item.leaveDate}</CTableDataCell>
                  <CTableDataCell>
                    <CFormCheck
                      value={item.validity}
                      checked={item.validity}
                      onClick={() => updateStudentRecords(index)}
                    />
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CRow>

        <div className="d-flex flex-row align-items-center">
          <CContainer>
            {!isDocumentValidated && (
              <CRow className="justify-content-center">
                <CCol md={7}>
                  <span className="text-right">
                    As a authorized indivial in this school, I here by certify above mentioned list
                    is true and valid.
                  </span>
                </CCol>
                <CCol md={4}>
                  <CButton
                    color="success"
                    type="button"
                    className="text-white"
                    onClick={validateDocument}
                  >
                    <CIcon icon={cilCheckAlt} />
                    <span>
                      {'  '}Validate Document {loading && <CSpinner size="sm" />}
                    </span>
                  </CButton>
                </CCol>
              </CRow>
            )}

            {isDocumentValidated && (
              <CRow className="justify-content-center">
                <CCol md={7}>
                  <span className="text-right">Download the validated document to be signed</span>
                </CCol>
                <CCol md={4}>
                  <CButton
                    color="warning"
                    type="button"
                    className="text-white"
                    onClick={handleDownloadPDF}
                  >
                    <CIcon icon={cilCloudDownload} />
                    <span> Download PDF</span>
                  </CButton>
                </CCol>
              </CRow>
            )}
          </CContainer>
        </div>
      </AppStandardContainer>
    </div>
  )
}

export default ValidateStudents
