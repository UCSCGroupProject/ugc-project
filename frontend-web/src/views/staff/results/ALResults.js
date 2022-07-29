import React from 'react'
import { NavLink } from 'react-router-dom'
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

function ALResults() {
  const ALResults = [
    {
      id: 1,
      name: 'B.F.Ilma',
      zscore: '1.5492',
      stream: 'Physical Science',
      district: 'Colombo',
      school: "St Paul's Girls' School, Milagiriya",
      islandRank: "50",
      districtRank: "20",
      status: 'Government',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      name: 'K.N.Perera',
      zscore: '1.8043',
      stream: 'Biological Science',
      district: 'Ratnapura',
      school: 'Lyceum International School, Ratnapura',
      islandRank: "55",
      districtRank: "25",
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
            <CCardHeader>A/L Results</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                <CCol md={6}>
                  <CInputGroup>
                    <CInputGroupText>Filter By</CInputGroupText>
                    <CFormSelect aria-label="filterByOption1">
                      <option value="all">All</option>
                      <option value="course">Z Score</option>
                      <option value="university">Stream</option>
                      <option value="zscore">District</option>
                      <option value="school">School</option>
                      <option value="school">District Rank</option>
                      <option value="school">Island Rank</option>
                      <option value="school">Status</option>
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
                      <CTableHeaderCell>Z Score</CTableHeaderCell>
                      <CTableHeaderCell>Stream</CTableHeaderCell>
                      <CTableHeaderCell>District</CTableHeaderCell>
                      <CTableHeaderCell>School</CTableHeaderCell>
                      <CTableHeaderCell>District Rank</CTableHeaderCell>
                      <CTableHeaderCell>Island Rank</CTableHeaderCell>
                      <CTableHeaderCell>Status</CTableHeaderCell>
                      <CTableHeaderCell></CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {ALResults.map((item) => (
                      // <NavLink to="/staff/univerityprofile" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <CTableRow key={item.id}>
                        <CTableHeaderCell>{item.name}</CTableHeaderCell>
                        <CTableDataCell>{item.zscore}</CTableDataCell>
                        <CTableDataCell>{item.stream}</CTableDataCell>
                        <CTableDataCell>{item.district}</CTableDataCell>
                        <CTableDataCell>{item.school}</CTableDataCell>
                        <CTableDataCell>{item.districtRank}</CTableDataCell>
                        <CTableDataCell>{item.islandRank}</CTableDataCell>
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

export default ALResults
