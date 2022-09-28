import React from 'react'
import { useState, useEffect } from 'react'

import {
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CBadge,
} from '@coreui/react'

import { toast } from 'react-toastify'

import AppStandardContainer from '../../../../components/containers/AppStandardContainer'
import uploadedDocumentService from '../../../../services/school/uploadedDocumentService'
import { NavLink } from 'react-router-dom'

function ValidationDocuments() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [validationDocuments, setValidationDocument] = useState([
    {
      schoolId: null,
      schoolName: '',
      districtName: '',
      documentId: null,
      status: null,
      fileId: null,
    },
  ])

  useEffect(() => {
    setLoading(true)

    uploadedDocumentService.getDocuments().then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data
          setValidationDocument(res.payload)
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

    setLoading(false)
  }, [])

  return (
    <div>
      <AppStandardContainer title="Student Validation">
        <CRow className="m-1">
          <CTable bordered>
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell>Id</CTableHeaderCell>
                <CTableHeaderCell className="w-100">School name</CTableHeaderCell>
                <CTableHeaderCell>District</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {validationDocuments.map((item, index) => (
                <CTableRow key={index}>
                  <CTableHeaderCell>{item.schoolId}</CTableHeaderCell>
                  <CTableDataCell className="w-100">{item.schoolName}</CTableDataCell>
                  <CTableDataCell>{item.districtName}</CTableDataCell>
                  <CTableDataCell>
                    {item.status === 'Validated' && (
                      <CBadge color="success" shape="rounded-pill">
                        {item.status}
                      </CBadge>
                    )}
                    {item.status === 'Pending' && (
                      <CBadge color="warning" shape="rounded-pill">
                        {item.status}
                      </CBadge>
                    )}
                    {item.status === null && (
                      <CBadge color="danger" shape="rounded-pill">
                        Not validated
                      </CBadge>
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {item.status !== null && (
                      <NavLink
                        to={
                          '/staff/school/validation/documents/overview?schoolId=' +
                          item.schoolId +
                          '&fileId=' +
                          item.fileId
                        }
                      >
                        Review
                      </NavLink>
                    )}
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CRow>
      </AppStandardContainer>
    </div>
  )
}

export default ValidationDocuments
