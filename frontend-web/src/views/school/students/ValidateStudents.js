import React from 'react'
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
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter, cilCheckAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const studentValidationListData = [
  {
    id: '1',
    fullname: 'Dhanushka',
    nic: '200120402367',
    dateOfAdmission: '2010-06-20',
    dateOfLeave: '2012-01-20',
  },
  {
    id: '2',
    fullname: 'Samantha',
    nic: '159753402367',
    dateOfAdmission: '2010-06-20',
    dateOfLeave: '2012-01-20',
  },
  {
    id: '3',
    fullname: 'Ajantha',
    nic: '159852402367',
    dateOfAdmission: '2010-06-20',
    dateOfLeave: '2012-01-20',
  },
  {
    id: '4',
    fullname: 'Priyantha',
    nic: '753951402367',
    dateOfAdmission: '2010-06-20',
    dateOfLeave: '2012-01-20',
  },
]

function ValidateStudents() {
  return (
    <div>
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
                      <CTableHeaderCell>Index</CTableHeaderCell>
                      <CTableHeaderCell>Fullname</CTableHeaderCell>
                      <CTableHeaderCell>NIC</CTableHeaderCell>
                      <CTableHeaderCell>Date of Admission</CTableHeaderCell>
                      <CTableHeaderCell>Date of Leave</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {studentValidationListData.map((item) => (
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.id}</CTableHeaderCell>
                        <CTableDataCell>{item.fullname}</CTableDataCell>
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
                  <CRow className="justify-content-center">
                    <CCol md={7}>
                      <span className="text-right">
                        As a authorized indivial in this school, I here by certify above mentioned
                        list is true and valid.
                      </span>
                    </CCol>
                    <CCol md={2}>
                      <CButton color="success" type="button" className="text-white">
                        <CIcon icon={cilCheckAlt} />
                        <span>{'  '}Validate</span>
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
