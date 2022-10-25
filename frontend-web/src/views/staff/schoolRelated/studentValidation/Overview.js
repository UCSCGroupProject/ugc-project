import React from 'react'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

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
  CModal,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CForm,
  CFormInput,
  CFormSelect,
  CBadge,
} from '@coreui/react'

import { toast } from 'react-toastify'

import CIcon from '@coreui/icons-react'
import { cilCloudDownload } from '@coreui/icons'

import AppStandardContainer from '../../../../components/containers/AppStandardContainer'

import validationDocumentService from '../../../../services/school/validationDocumentService'
import fileManagerService from '../../../../services/file-manager/fileManagerService'

function Overview() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  // Request params
  const [searchParams, setSearchParams] = useSearchParams()

  const [reviewSchoolId, setReviewSchoolId] = useState(0)

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
    console.log(reviewSchoolId)

    setLoading(true)

    validationDocumentService.getDocument(searchParams.get('schoolUsername')).then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data
          setDocumentHeader({
            id: res.payload.id,
            schoolId: res.payload.schoolId,
            schoolName: res.payload.schoolName,
            schoolUsername: res.payload.schoolUsername,
            schoolAddress: res.payload.schoolAddress,
          })

          setStudentRecords(res.payload.studentRecords)

          console.log(res.payload)
        } else if (res.type === 'BAD') {
          toast.error(res.message)

          setDocumentHeader({})
          setStudentRecords([])
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

        setDocumentHeader({})
        setStudentRecords([])

        setLoading(false)
      },
    )

    setLoading(false)
  }, [])

  const handleDownloadSignedDocument = () => {
    fileManagerService.downloadFile(searchParams.get('fileId'))
  }

  return (
    <div>
      <AppStandardContainer title="Overview">
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
                    <CFormCheck value={item.validity} checked={item.validity} />
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>

          <CRow className="justify-content-center">
            <CCol md={7}>
              <span className="text-right">Download the digitally signed document</span>
            </CCol>
            <CCol md={4}>
              <CButton
                id="downloadPDFBtn"
                color="warning"
                type="button"
                className="text-white"
                onClick={() => handleDownloadSignedDocument()}
              >
                <CIcon icon={cilCloudDownload} />
                <span> Download PDF</span>
              </CButton>
            </CCol>
          </CRow>
        </CRow>
      </AppStandardContainer>
    </div>
  )
}

export default Overview
