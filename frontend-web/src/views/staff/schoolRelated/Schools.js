import React from 'react'
import { useState, useEffect } from 'react'

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
} from '@coreui/react'

import { toast } from 'react-toastify'

import AppStandardContainer from '../../../components/containers/AppStandardContainer'
import AppFetchDataLoader from '../../../components/loaders/AppFetchDataLoader'

import schoolService from '../../../services/schoolService'


function Schools() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  const [schoolList, setSchoolList] = useState([
    {
      schoolId: '',
      schoolName: '',
      district: '',
    },
  ])

  useEffect(() => {
    setLoading(true)

    schoolService.getAllSchools().then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data
          setSchoolList(res.payload)

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
      {/* Data fetch loader */}
      <AppFetchDataLoader loading={loading} />

      <AppStandardContainer title="School">
        <CRow className="m-1">
          <CTable bordered>
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell>Id</CTableHeaderCell>
                <CTableHeaderCell className="w-100">School name</CTableHeaderCell>
                <CTableHeaderCell>District</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {schoolList.map((item, index) => (
                <CTableRow key={index}>
                  <CTableHeaderCell>{item.schoolId}</CTableHeaderCell>
                  <CTableDataCell className="w-100">{item.schoolName}</CTableDataCell>
                  <CTableDataCell>{item.district}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CRow>
      </AppStandardContainer>
    </div>
  )
}

export default Schools
