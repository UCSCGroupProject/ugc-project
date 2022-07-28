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
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CInputGroup,
  CFormInput,
  CInputGroupText,
  CBadge,
} from '@coreui/react'

import { CChart } from '@coreui/react-chartjs'

function Progress() {
  return (
    <div>
      <CRow>
        <CCol md={5}>
          <CCard className="mb-4">
            <CCardHeader>Aptitude Tests Overall Completeness</CCardHeader>
            <CCardBody>
              <CChart
                className="mx-5"
                type="pie"
                data={{
                  labels: ['Done', 'Upcoming', 'Delayed'],
                  datasets: [
                    {
                      backgroundColor: ['#2eb85c', '#f9b115', '#e55353'],
                      data: [40, 20, 80],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md={5}>
          <CCard className="mb-4">
            <CCardHeader>Aptitude Tests Overall Results</CCardHeader>
            <CCardBody>
              <CChart
                className="mx-5"
                type="pie"
                data={{
                  labels: ['Passed',  'Failed'],
                  datasets: [
                    {
                      backgroundColor: ['#2eb85c','#e55353'],
                      data: [70, 30],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Progress
