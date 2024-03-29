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
                                    <CTableHeaderCell scope="col">Medicine University of Colombo</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Medicine University of Peradeniya</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Medicine University of Kelaniya</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Medicine University of Sri Jayawardenapura</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Medicine University of Jaffna</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Medicine University of Ruhuna</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Medicine University of Moratuwa</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Medicine Eastern University of Sri Lanka</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Medicine Rajarata University of Sri Lanka</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Medicine Sabaragamu University of Sri Lanka</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Medicine Wayamba University of Sri Lanka</CTableHeaderCell>
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
                                    <CTableDataCell>NQC</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NQC</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">Gampaha</CTableHeaderCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NQC</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NQC</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">Kalutara</CTableHeaderCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NQC</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NQC</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">Matale</CTableHeaderCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NQC</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">Kandy</CTableHeaderCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NQC</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NQC</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">Nuwara Eliya</CTableHeaderCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NQC</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>NQC</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
                                    <CTableDataCell>1.8456</CTableDataCell>
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