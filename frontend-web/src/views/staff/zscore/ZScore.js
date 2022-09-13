import React, {useState} from 'react'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CButtonGroup,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText
} from '@coreui/react'

import { cibAddthis } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function StaffZScore() {
  const [visible, setVisible] = useState(false)
  return (
    <>
    <div>
      <CRow>
        <CCol xs>
          <CCard className='mb-4'>
            <CCardHeader>Z-Score Tables</CCardHeader>
            <CCardBody>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      
                <CButton color="success" className="me-md-2" onClick={() => setVisible(!visible)}>
                  <CIcon icon={cibAddthis}></CIcon> Import Table
                </CButton>
                <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
                  <CModalHeader>
                    <CModalTitle>Import Z-Score Table</CModalTitle>
                  </CModalHeader>
                  <CModalBody>       
                    <div>
                      <CFormInput type="file" onChange={(e)=>this.handleFile(e)} size="sm" id="formFileSm" label="Choose your file to import as Z-score table" />
                    </div><br />
                    <div><CFormInput type="text" size="sm" label="Save as" text="Please enter the year of Z-score table" aria-label="sm input example"/></div>
                    {/* <div><CFormCheck id="flexCheckChecked" label="Latest Z-table" /></div> */}
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                      Close
                    </CButton>
                    <CButton color="success">Import</CButton>
                  </CModalFooter>
                </CModal>
              </div>

              <br></br>

              <div >
                <CRow xs={{ cols: 3, gutter: 4 }} md={{ cols: 3 }}>
                  <CCol xs>
                    <CCard  className="h-100" style={{width: '18rem' }}>
                      <CCardBody>
                        <CCardTitle className="fs-1 text-center">2021</CCardTitle>
                        <CRow>
                          <CCol md={6}>
                            <CButton color="warning" href="/staff/zscoretable"> View Table</CButton>
                          </CCol>
                          <CCol md={4} className="ms-auto">
                            <CButton color="danger" href="#"> Delete </CButton>
                          </CCol>
                        </CRow>
                      </CCardBody>
                    </CCard>
                  </CCol>

                  <CCol xs>
                    <CCard className="h-100" style={{width: '18rem'}}>
                      <CCardBody>
                        <CCardTitle className="fs-1 text-center">2020</CCardTitle>
                          <CRow>
                            <CCol md={6}>
                              <CButton color="warning" href="/staff/zscoretable"> View Table</CButton>
                            </CCol>
                            <CCol md={4} className="ms-auto">
                              <CButton color="danger" href="#"> Delete </CButton>
                            </CCol>
                          </CRow>
                      </CCardBody>
                    </CCard>
                  </CCol>

                  <CCol xs>
                    <CCard className="h-100" style={{width: '18rem'}}>
                      <CCardBody>
                        <CCardTitle className="fs-1 text-center">2019</CCardTitle>
                          <CRow>
                            <CCol md={6}>
                              <CButton color="warning" href="/staff/zscoretable"> View Table</CButton>
                            </CCol>
                            <CCol md={4} className="ms-auto">
                              <CButton color="danger" href="#"> Delete </CButton>
                            </CCol>
                          </CRow>
                      </CCardBody>
                    </CCard>
                  </CCol>

                </CRow>
                
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
      
    </>
  )
}

export default StaffZScore