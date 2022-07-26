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
} from '@coreui/react'

import uoc_img from '../../../../assets/images/university/wall/university_of_colombo_bg.jpg'
import uoc_logo_img from '../../../../assets/images/university/logo/university_of_colombo_logo.png'

function UniversityProfile() {
  return (
    <CContainer className="bg-white border rounded-3">
      <CImage src={uoc_img} className="w-100 wall-image mt-3 rounded-top" />
      <div>
        <div className="p-3 bg-light border">
          <h2>University of Colombo</h2>
          <h6>Colombo, Western Province</h6>
          <a href="www.uoc.lk">
            <b>www.uoc.lk</b>
          </a>
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
