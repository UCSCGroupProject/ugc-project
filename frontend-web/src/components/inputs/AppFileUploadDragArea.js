import React from 'react'
import { useState } from 'react'
import { CForm, CFormLabel, CFormInput, CButton, CSpinner } from '@coreui/react'

import './AppFileUploadDragArea.css'

import { cilImage } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { v_required } from '../../utils/validator'

import fileManagerService from '../../services/file-manager/fileManagerService'

function AppFileUploadDragArea() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')

  // Form data
  const [validationDocumentForm, setValidationDocumentForm] = useState({
    // Validation document
    document: '',
  })

  // Update the form data while input
  const onUpdateInput = (e) => {
    setValidationDocumentForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [validationDocumentFormErrors, setValidationDocumentFormErrors] = useState({
    // Validation document
    documentError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleValidationFormSubmit = async (e) => {
    e.preventDefault()

    // Validation document
    let documentError = ''

    if (!v_required(validationDocumentForm.document)) {
      documentError = 'Validation document can not be empty.'
    }

    // If errors exist, show errors
    setValidationDocumentFormErrors({
      documentError,
    })

    // If no errors exist, send to the server
    if (!documentError) {
      // Sending to the server
      setLoading(true)
      setResMessage('')
      fileManagerService.uploadFile(validationDocumentForm.document).then(
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
    <div className="mb-3">
      <CForm>
        <div className="mb-3">
          <CFormInput
            type="file"
            id="validationCustomUsedIDCopy"
            label="Make sure you have digitally signed the document before upload"
            name="document"
            onChange={onUpdateInput}
            value={validationDocumentForm.document}
            feedback={validationDocumentFormErrors.documentError}
            invalid={validationDocumentFormErrors.documentError ? true : false}
          />
        </div>
        <CButton color="primary" type="button" className="p-2" onClick={handleValidationFormSubmit}>
          {loading ? (
            <span>
              <CSpinner size="sm" /> Validating
            </span>
          ) : (
            <span>Next</span>
          )}
        </CButton>
      </CForm>
    </div>
  )
}

export default AppFileUploadDragArea
