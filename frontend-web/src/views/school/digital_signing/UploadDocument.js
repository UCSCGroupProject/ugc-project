import React from 'react'
import { useState, useEffect } from 'react'

import { CProgress, CProgressBar, CFormInput, CButton, CSpinner, CRow, CCol } from '@coreui/react'

import fileManagerService from '../../../services/file-manager/fileManagerService'
import authService from '../../../services/authService'
import validationDocumentService from '../../../services/school/validationDocumentService'
import uploadedDocumentService from '../../../services/school/uploadedDocumentService'

import AppStandardContainer from '../../../components/containers/AppStandardContainer'

import { toast } from 'react-toastify'

function UploadDocument() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(authService.getCurrentUser())

  const [documentId, setDocumentId] = useState()
  const [progress, setProgress] = useState(0)
  const [isUploadedSuccessful, setIsUploadedSuccessful] = useState(false)

  const [isDocumentAlreadyUploaded, setIsDocumentAlreadyUploaded] = useState(false)

  useEffect(() => {
    setLoading(true)

    validationDocumentService.getDocument(user.id).then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data
          setDocumentId(res.payload.id)

          // Check if document already exists
          uploadedDocumentService.isUploadDocumentExist(res.payload.id).then((res) => {
            console.log('exitance', res)
            setIsDocumentAlreadyUploaded(res)
          })
        } else if (res.type === 'BAD') {
          toast.error(res.message)
        }

        setLoading(false)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
        // After recieving the server request
        toast.error(res)
        setLoading(false)
      },
    )

    setLoading(false)
  }, [])

  /* PDF UPLOADING */
  // Form data
  const [fileForm, setFileForm] = useState({
    // Validation document
    selectedFile: undefined,
  })

  // Update the form data while input
  const onUpdateInput = (e) => {
    setFileForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.files,
    }))
  }

  const upload = () => {
    setLoading(true)
    setIsUploadedSuccessful(false)

    let currentFile = fileForm.selectedFile[0]

    fileManagerService
      .uploadFile(currentFile, (e) => {
        setProgress(Math.round((100 * e.loaded) / e.total))
      })
      .then(
        (res) => {
          if (res.type === 'OK') {
            toast.success(res.message)

            // update the school UploadedDocument as well
            uploadedDocumentService.uploadDocument(documentId, res.payload.id).then((res) => {
              if (res.type === 'OK') {
                toast.success(res.message)
                setIsUploadedSuccessful(true)
                setIsDocumentAlreadyUploaded(true)
              } else if (res.type === 'BAD') {
                toast.error(res.message)
              }
            })
          } else if (res.type === 'BAD') {
            toast.error(res.message)
          }

          setLoading(false)
        },
        (error) => {
          const res =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
          // After recieving the server request
          toast.error(res)
          setLoading(false)
        },
      )
  }

  const removeUpload = () => {
    uploadedDocumentService.deleteUploadDocument(documentId).then(
      (res) => {
        // if uploaded document is removed then remove file as well
        fileManagerService.deleteFile(res).then((res) => {
          if (res.type === 'OK') {
            toast.success(res.message)
            setIsDocumentAlreadyUploaded(false)
          } else if (res.type === 'BAD') {
            toast.error(res.message)
          }
        })
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
        // After recieving the server request
        toast.error(res)
        setLoading(false)
      },
    )
  }

  const PDFAlreadyUploadedArea = (
    <div>
      <h6>
        Previously uploaded student validation document exists. If you want to change the file,
        please reupload it.
      </h6>
      <br />
      <center>
        <CButton color="warning" type="button" className="p-2" onClick={removeUpload}>
          Re-upload Document
        </CButton>
      </center>
    </div>
  )

  const PDFUploadingArea = (
    <div>
      {/* PDF uploading progress */}
      {loading && (
        <CRow>
          <CCol md={11}>
            <CProgress className="mb-3">
              <CProgressBar color="primary" variant="striped" animated value={progress} />
            </CProgress>
          </CCol>
          <CCol md={1}> {progress}%</CCol>
        </CRow>
      )}

      {/* For PDF uploading */}
      {isUploadedSuccessful && (
        <CRow>
          <CCol md={11}>
            <CProgress className="mb-3">
              <CProgressBar color="success" value={100} />
            </CProgress>
          </CCol>
          <CCol md={1}> 100%</CCol>
        </CRow>
      )}

      <CFormInput
        type="file"
        id="validationCustomUsedIDCopy"
        label="Make sure you have digitally signed the document before upload"
        name="selectedFile"
        onChange={onUpdateInput}
        // value={validationDocumentForm.document}
        // feedback={validationDocumentFormErrors.documentError}
        // invalid={validationDocumentFormErrors.documentError ? true : false}
      />

      <br />
      <CButton
        color="primary"
        type="button"
        className="p-2"
        onClick={upload}
        disabled={!fileForm.selectedFile || loading}
      >
        {loading ? (
          <span>
            <CSpinner size="sm" /> Uploading
          </span>
        ) : (
          <span>Upload</span>
        )}
      </CButton>
    </div>
  )

  return (
    <div>
      <AppStandardContainer title="Upload signed document">
        {isDocumentAlreadyUploaded ? PDFAlreadyUploadedArea : PDFUploadingArea}
      </AppStandardContainer>
    </div>
  )
}

export default UploadDocument
