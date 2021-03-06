import React, {useState} from 'react'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
  CContainer,
  CRow,
  CCol,
  CButtonGroup,
} from '@coreui/react'

function StaffZScore() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <CButton color="primary" className="me-md-2" onClick={() => setVisible(!visible)}>
          Add Table
        </CButton>
        <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Import Z-Score Table</CModalTitle>
          </CModalHeader>
          <CModalBody>       
            <div>
              <CFormInput type="file" size="sm" id="formFileSm" label="Choose your file to import as Z-score table" />
            </div>
            <div><CFormInput type="text" size="sm" label="Save as" text="Please enter the year of Z-score table" aria-label="sm input example"/></div>
            {/* <div><CFormCheck id="flexCheckChecked" label="Latest Z-table" /></div> */}
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary">Import</CButton>
          </CModalFooter>
        </CModal>
      </div>

      <div className="d-grid gap-3 col-6 mx-auto">
        
        <CButtonGroup>
          <CButton color="primary" size="lg" type="button" variant="outline" href="#/staff/zscoretable">
              2021 - Latest
          </CButton>
          <CButton color="dark" size="lg" type="button" variant="outline">
              Delete
          </CButton>
        </CButtonGroup>
          
        <CButtonGroup>
          <CButton color="primary" size="lg" type="button" variant="outline" href="#/staff/zscoretable">
              2020
          </CButton>
          <CButton color="dark" size="lg" type="button" variant="outline">
                Delete
          </CButton>
        </CButtonGroup>
        
        <CButtonGroup>
          <CButton color="primary" size="lg" type="button" variant="outline" href="#/staff/zscoretable">
              2019
          </CButton>
          <CButton color="dark" size="lg" type="button" variant="outline">
                Delete
          </CButton>
        </CButtonGroup>
        
      </div>
    </>
  )
}

export default StaffZScore