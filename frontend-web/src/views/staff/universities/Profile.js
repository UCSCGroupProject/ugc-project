import React from 'react'
import {
  CTable,
  CCol,
  CTableHead,
  CButton,
  CTableRow,
  CTableHeaderCell,
  CRow,
  CContainer,
  CImage,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

import uoc_img from '../../../assets/images/university/wall/university_of_colombo_bg.jpg'

function StaffUniversityProfile() {
  
  return (
    <CContainer className="bg-white border rounded-3">
      <CImage src={uoc_img} className="w-100 wall-image mt-3 rounded-top" />
      <div className="p-3 bg-light border">
        <CRow>
          <CCol md={6}>
            <h2>University of Colombo</h2>
            <h6>Colombo, Western Province</h6>
            <a href="www.uoc.lk">
              <b>www.uoc.lk</b>
            </a>
          </CCol>
          <CCol md={6}>
            <div className="py-3">
              The University of Colombo is a public research university located primarily in
              Colombo, Sri Lanka. It is the oldest institution of modern higher education in Sri
              Lanka. Specialised in the fields of natural, social, and applied sciences as well as
              mathematics, computer sciences, and law.
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol md={6}>
            <CRow className="py-2 bg-light rounded"></CRow>
          </CCol>
          <CCol md={6}>
            <CRow className="py-2 bg-light rounded">
              <CButton color="success" style={{ width: '50%' }}>
                Send Message
              </CButton>
              <CButton color="danger" style={{ width: '50%' }}>
                Block Account
              </CButton>
            </CRow>
          </CCol>
        </CRow>
      </div>

      <div>
        <div className="my-3">
          <div className="mb-1">
            <span className="fs-5">Arts Stream</span>
            <CTable align="middle" className="mt-2 border" hover responsive bordered>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Unicode</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Course name</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <strong>0111A</strong>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>Medicine</div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>

          <div className="mb-1">
            <span className="fs-5">Commerce Stream</span>
            <CTable align="middle" className="mt-2 border" hover responsive bordered>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Unicode</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Course name</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <strong>0111A</strong>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>Medicine</div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>

          <div className="mb-1">
            <span className="fs-5">Biological Science Stream</span>
            <CTable align="middle" className="mt-2 border" hover responsive bordered>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Unicode</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Course name</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <strong>0111A</strong>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>Medicine</div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>

          <div className="mb-1">
            <span className="fs-5">Physical Science Stream</span>
            <CTable align="middle" className="mt-2 border" hover responsive bordered>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Unicode</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Course name</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <strong>0111A</strong>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>Medicine</div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>

          <div className="mb-1">
            <span className="fs-5">Engineering Technology Stream</span>
            <CTable align="middle" className="mt-2 border" hover responsive bordered>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Unicode</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Course name</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <strong>0111A</strong>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>Medicine</div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>

          <div className="mb-1">
            <span className="fs-5">Biosystems Technology(BST) Stream</span>
            <CTable align="middle" className="mt-2 border" hover responsive bordered>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Unicode</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Course name</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <strong>0111A</strong>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>Medicine</div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>

          <div className="mb-1">
            <span className="fs-5">Other Stream</span>
            <CTable align="middle" className="mt-2 border" hover responsive bordered>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Unicode</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Course name</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <strong>0111A</strong>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>Medicine</div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>
        </div>
      </div>
    </CContainer>
  )
}

export default StaffUniversityProfile
