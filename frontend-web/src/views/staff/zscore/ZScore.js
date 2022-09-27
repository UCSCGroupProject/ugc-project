import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CSpinner,
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

import {
  v_required,
} from '../../../utils/validator'

import zscoreService from '../../../services/zscoreService'

function StaffZScore() {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  const [zscoreImportForm, setZscoreImportForm] = useState({
    importFile: '',
  })

  const onUpdateInput = (e) => {
    setZscoreImportForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [zscoreImportFormErrors, setZscoreImportFormErrors] = useState({
    importFileError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleZscoreImportFormSubmit = async (e) => {
    e.preventDefault()

    let importFileError = ''

    if (!v_required(zscoreImportForm.importFile)) {
      importFileError = 'Please choose .csv format file'
    }

    // If errors exist, show errors
    setZscoreImportFormErrors({
      importFileError
    })

    // If no errors exist, send to the server
    if (
      !(
        importFileError
      )

      ) {
        // console.log('FIRST SECTION')
        console.log(zscoreImportForm)
  
        // Sending to the server
        setLoading(true)
        setResMessage('')
        zscoreService.zscoreImportFormCheck(zscoreImportForm).then(
          () => {
            setLoading(false)
          },
          (error) => {
            const res =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString()
            // After recieving the server request
            setResMessage(res)
            setLoading(false)
          },
        )
      }
    }


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
                      <CFormInput 
                        type="file" 
                        onChange={(e)=>this.handleFile(e)} 
                        size="sm" id="formFileSm" 
                        label="Choose your file to import as Z-score table" 
                        feedback={zscoreImportFormErrors.importFileError}
                        invalid={zscoreImportFormErrors.importFileError ? true : false}
                      />
                    </div><br />
                    {/* <div><CFormInput type="text" size="sm" label="Save as" text="Please enter the year of Z-score table" aria-label="sm input example"/></div> */}
                    {/* <div><CFormCheck id="flexCheckChecked" label="Latest Z-table" /></div> */}
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                      Close
                    </CButton>
                    <CButton
                      color="success"
                      onClick={handleZscoreImportFormSubmit}
                    >
                      {loading ? (
                        <span>
                          <CSpinner size="sm" /> Importing
                        </span>
                        ) : (
                        <span>Import</span>
                      )}
                    </CButton>
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