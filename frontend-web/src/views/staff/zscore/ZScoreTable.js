import React from 'react'
import { CTable, CTableBody, CTableRow, CTableDataCell, CTableHeaderCell, CTableHead, CCardHeader, CCard, CRow, CCol, CCardBody } from '@coreui/react'

function StaffZScoreTable() {
  return (
    <>
    <div>
        <CRow>
            <CCol xs>
                <CCard className="mb-4">
                    <CCardHeader>Z- Score Table</CCardHeader>
                    <CCardBody>
                        <CTable bordered>
                            <CTableHead color='dark'>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">District \ Course</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Course #1</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Course #2</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Course #3</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Course #4</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Course #5</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Course #6</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Course #7</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Course #8</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">Colombo</CTableHeaderCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NA</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">Gampaha</CTableHeaderCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NA</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NA</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">Kandy</CTableHeaderCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NA</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NA</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">Galle</CTableHeaderCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NA</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">Ratnapura</CTableHeaderCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NA</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NA</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">Matara</CTableHeaderCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NA</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NA</CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                    
                </CCard>
            </CCol>
        </CRow>
        
    </div>
    </>
  )
}

export default StaffZScoreTable