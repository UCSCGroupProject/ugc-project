import React from 'react'
import {
  CContainer,
  CImage,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CRow,
  CCol,
} from '@coreui/react'

import uoc_img from '../../../../assets/images/university/wall/university_of_colombo_bg.jpg'
import uoc_logo_img from '../../../../assets/images/university/logo/university_of_colombo_logo.png'

function UniversityProfile() {
  return (
    <CContainer className="bg-white border rounded-3">
      <CImage src={uoc_img} className="w-100 wall-image mt-3 rounded-top" />
      <div>
        <div className="p-3 bg-light border">
          <CRow>
            <CCol md={6}>
              <CRow>
                <CCol md="auto">
                  <CImage src={uoc_logo_img} height={50} className="mt-1" />
                </CCol>
                <CCol md="auto">
                  <h2>University of Colombo</h2>
                  <h6>Colombo, Western Province</h6>
                  <a href="www.uoc.lk">
                    <b>www.uoc.lk</b>
                  </a>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={6}>
              <div className="py-2">
                The University of Colombo is a public research university located primarily in
                Colombo, Sri Lanka. It is the oldest institution of modern higher education in Sri
                Lanka. Specialised in the fields of natural, social, and applied sciences as well as
                mathematics, computer sciences, and law.
              </div>
            </CCol>
          </CRow>
        </div>
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

export default UniversityProfile
