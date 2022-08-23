import React from 'react'
import { useState } from 'react'
import {
  CCard,
  CTable,
  CCol,
  CTableHead,
  CFormInput,
  CCardBody,
  CButton,
  CWidgetStatsB,
  CFormSelect,
  CCardHeader,
  CTableRow,
  CInputGroupText,
  CTableHeaderCell,
  CInputGroup,
  CRow,
  CTableBody,
  CTableDataCell,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CContainer,
  CCollapse,
} from '@coreui/react'

function SelectionProcess() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CContainer>
        <CRow></CRow>
        <CRow>
          <CCol xs={2}></CCol>
          <CCol xs={8}>
            <CButton size="lg" color="warning" onClick={() => setVisible(!visible)}>
              Run Selection Process
            </CButton>
            <CCard className="mt-3">
              <CCardBody>
                <CWidgetStatsB
                  className="mb-3"
                  progress={{ color: 'success', value: 100 }}
                  text="Selection of top 40%"
                  title="Merit Selection"
                  value="100.0%"
                />
                <CWidgetStatsB
                  className="mb-3"
                  progress={{ color: 'warning', value: 75 }}
                  text="Selection of remaining 55% under 25 districts "
                  title="District Quota Selection"
                  value="75.1%"
                />
                <CWidgetStatsB
                  className="mb-3"
                  progress={{ color: 'warning', value: 0 }}
                  text="Selection of remaining 5% under 16 districts "
                  title="Educationally Disadvantaged Selection"
                  value="0%"
                />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs={2}></CCol>
        </CRow>
        <CRow></CRow>
      </CContainer>
    </>
  )
}

export default SelectionProcess
