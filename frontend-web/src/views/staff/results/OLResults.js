import React from 'react'
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
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter,cibAddthis } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function OLResults() {

  const OLResults = [
    {
      id: 1,
      name: 'B.F.Ilma',
      district: 'Colombo',
      school: "St Paul's Girls' School, Milagiriya",
      rank: '50',
      status: 'Government',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      name: 'K.N.Perera',
      district: 'Ratnapura',
      school: 'Lyceum International School, Ratnapura',
      rank: '1520',
      status: 'Private',
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CInputGroup style={{ width: '20%' }}>
          <CInputGroupText>Select Year</CInputGroupText>
          <CFormSelect aria-label="filterByOption1">
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </CFormSelect>
        </CInputGroup>
      </div>

      <br></br>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>O/L Results</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="zscore">District</option>
                      <option value="school">School</option>
                      <option value="school">Rank</option>
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
                      <CTableHeaderCell>Name</CTableHeaderCell>
                      <CTableHeaderCell>District</CTableHeaderCell>
                      <CTableHeaderCell>School</CTableHeaderCell>
                      <CTableHeaderCell>Rank</CTableHeaderCell>
                      <CTableHeaderCell>Status</CTableHeaderCell>
                      <CTableHeaderCell></CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {OLResults.map((item) => (
                      // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.name}</CTableHeaderCell>
                        <CTableDataCell>{item.district}</CTableDataCell>
                        <CTableDataCell>{item.school}</CTableDataCell>
                        <CTableDataCell>{item.rank}</CTableDataCell>
                        <CTableDataCell>{item.status}</CTableDataCell>
                        <CTableDataCell>
                          <CButton color="warning">Edit</CButton>
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

      <div style={{textAlign: 'right'}}>
      <CButton color='success'><CIcon icon={cibAddthis}></CIcon> Add Results</CButton>
      </div>
      
    </div>
  )
}

export default OLResults