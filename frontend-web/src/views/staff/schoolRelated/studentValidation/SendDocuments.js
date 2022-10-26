import React from 'react'
import { useState } from 'react'
import {
  CCard,
  CTable,
  CCol,
  CTableHead,
  CFormInput,
  CCardBody,
  CButton,
  CFormSelect,
  CCardHeader,
  CTableRow,
  CInputGroupText,
  CTableHeaderCell,
  CInputGroup,
  CRow,
  CTableBody,
  CTableDataCell,
  CContainer,
  CAlert,
  CSpinner,
} from '@coreui/react'

import { cilCheckAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { toast } from 'react-toastify'

import validationDocumentService from '../../../../services/school/validationDocumentService'

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

function SendDocuments() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')

  const [studentRecords, setStudentRecords] = useState([
    {
      stuIndex: "1236547",
      fullName: "L.A.D.D.S. GUNAWARDHANA",
      nic: "199931712165",
      admissionDate: "2011-10-03",
      leaveDate: "2015-3-06",
      validity: true
    },
    {
      stuIndex: "9875462",
      fullName: "D.C. PATHIRAGE",
      nic: "200016548965315",
      admissionDate: "2012-10-08",
      leaveDate: "2015-8-16",
      validity: false
    }
  ])

  const handleSubmit = async (e) => {
    e.preventDefault()

    let doc = {
      schoolUsername: "RC",
      studentRecords: [...studentRecords],
      status: false
    }
    console.log(doc)

    validationDocumentService.createDocument(doc).then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data
          // setValidationDocument(res.payload)
          console.log(res.payload)
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

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Requests</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol sm={5}>
                  <CFormSelect
                    label="District"
                    aria-label="placeOfBirth-select"
                    name="pob"
                    // onChange={onUpdateInputInStuDetailsForm}
                    // value={stuDetailsForm.pob}
                    // feedback={stuDetailsFormErrors.pobError}
                    // invalid={stuDetailsFormErrors.pobError ? true : false}
                  >
                    <option value="Colombo">Colombo</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Kalutara">Kalutara</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Matale">Matale</option>
                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                    <option value="Galle">Galle</option>
                    <option value="Matara">Matara</option>
                    <option value="Hambantota">Hambantota</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kilinochchi">Kilinochchi</option>
                    <option value="Mannar">Mannar</option>
                    <option value="Vavuniya">Vavuniya</option>
                    <option value="Mullaitivu">Mullaitivu</option>
                    <option value="Batticaloa">Batticaloa</option>
                    <option value="Ampara">Ampara</option>
                    <option value="Trincomalee">Trincomalee</option>
                    <option value="Kurunegala">Kurunegala</option>
                    <option value="Puttalam">Puttalam</option>
                    <option value="Anuradhapura">Anuradhapura</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Badulla">Badulla</option>
                    <option value="Moneragala">Moneragala</option>
                    <option value="Ratnapura">Ratnapura</option>
                    <option value="Kegalle">Kegalle</option>
                  </CFormSelect>
                </CCol>
                <CCol sm={5}>
                  <CFormSelect
                    label="School"
                    aria-label="placeOfBirth-select"
                    name="pob"
                    // onChange={onUpdateInputInStuDetailsForm}
                    // value={stuDetailsForm.pob}
                    // feedback={stuDetailsFormErrors.pobError}
                    // invalid={stuDetailsFormErrors.pobError ? true : false}
                  >
                    <option value="Royal College">Royal College</option>
                    <option value="Anada College">Ananda College</option>
                  </CFormSelect>
                </CCol>
                <CCol sm={2}>
                  <CButton
                    color="primary"
                    className="w-100 mt-3 h-75"
                    // onClick={handleUniversityCourseFormSubmit}
                  >
                    Get Student List
                  </CButton>
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
                    {studentValidationListData.map((item) => (
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
              <br />

              <div className="d-flex flex-row align-items-center">
                <CContainer>
                  {resMessage && (
                    <CAlert color="info" className="text-center">
                      {resMessage}
                    </CAlert>
                  )}

                  <CRow className="justify-content-center">
                    <CCol md={7}>
                      <span className="text-right">
                        As a authorized indivial in this staff, I here by request to certify above
                        mentioned list from the relavant school.
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
                          {'  '}Send to validate {loading && <CSpinner size="sm" />}
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

export default SendDocuments
