import React from 'react'
import { CTable, CTableBody, CTableRow, CTableDataCell, CTableHeaderCell, CTableHead } from '@coreui/react'

function StaffZScoreTable() {
  return (
    <>
    {/* <div>StaffZScoreTable</div> */}
        <CTable>
          <CTableHead>
              <CTableRow>
                  <CTableHeaderCell scope="col">District / Course</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Course #1</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Course #2</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Course #3</CTableHeaderCell>
              </CTableRow>
          </CTableHead>
          <CTableBody>
              <CTableRow>
                  <CTableHeaderCell scope="row">Colombo</CTableHeaderCell>
                  <CTableDataCell>1.8456</CTableDataCell>
                  <CTableDataCell>1.8456</CTableDataCell>
                  <CTableDataCell>1.8456</CTableDataCell>
              </CTableRow>
              <CTableRow>
                  <CTableHeaderCell scope="row">Gampaha</CTableHeaderCell>
                  <CTableDataCell>1.8456</CTableDataCell>
                  <CTableDataCell>1.8456</CTableDataCell>
                  <CTableDataCell>NA</CTableDataCell>
              </CTableRow>
              <CTableRow>
                  <CTableHeaderCell scope="row">Kandy</CTableHeaderCell>
                  <CTableDataCell>1.8456</CTableDataCell>
                  <CTableDataCell>NA</CTableDataCell>
                  <CTableDataCell>1.8456</CTableDataCell>
              </CTableRow>
          </CTableBody>
        </CTable></>
  )
}

export default StaffZScoreTable