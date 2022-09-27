import React from 'react'
import { useState, useEffect } from 'react'

import {
  CRow,
  CCol,
  CButton,
  CTable,
  CTableHead,
  CContainer,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CSpinner,
  CFormCheck,
  CModal,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CForm,
  CFormInput,
  CFormSelect,
} from '@coreui/react'

import { toast } from 'react-toastify'

import AppStandardContainer from '../../../components/containers/AppStandardContainer'
import AppFetchDataLoader from '../../../components/loaders/AppFetchDataLoader'

import defaultSchoolService from '../../../services/school/defaultSchoolService'

import { v_required } from '../../../utils/validator'

function Schools() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  const [schoolList, setSchoolList] = useState([
    {
      schoolId: '',
      schoolName: '',
      districtName: '',
    },
  ])

  useEffect(() => {
    setLoading(true)

    defaultSchoolService.getAllSchools().then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data
          setSchoolList(res.payload)

          console.log(res.payload)
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

  // ADD SCHOOL POPUP
  const [visible_addSchoolPopup, setVisible_addSchoolPopup] = useState(false)

  const [schoolForm, setSchoolForm] = useState({
    schoolName: '',
    districtName: 'Colombo',
  })

  // Update the form data while input
  const onUpdateInput = (e) => {
    setSchoolForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const [schoolFormErrors, setSchoolFormErrors] = useState({
    schoolNameError: '',
    districtNameError: '',
  })

  const handleAddSchool = async (e) => {
    e.preventDefault()

    let schoolNameError = ''
    let districtNameError = ''

    if (!v_required(schoolForm.schoolName)) {
      schoolNameError = 'Name can not be empty.'
    }

    if (!v_required(schoolForm.districtName)) {
      districtNameError = 'District can not be empty.'
    }

    // If errors exist, show errors
    setSchoolFormErrors({
      schoolNameError,
      districtNameError,
    })

    // If no errors exist, send to the server
    if (!(schoolNameError || districtNameError)) {
      // Sending to the server
      setLoading(true)

      const payload = {
        schoolName: schoolForm.schoolName,
        districtName: schoolForm.districtName,
      }

      // for testing only
      // setCollection((prev) => [...prev, payload]);
      setVisible_addSchoolPopup(false)

      defaultSchoolService.createSchool(payload).then(
        (res) => {
          if (res.type === 'OK') {
            toast.success(res.message)
            console.log(res)
            // setSchoolList((prev) => ({ ...prev, ...payload }))
            window.location.reload()
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
  }

  // Edit school popup
  const [visible_editSchoolPopup, setVisible_editSchoolPopup] = useState(false)
  const [editSchoolId, setEditSchoolId] = useState(0)

  const onClickEditButton = (schooolId) => {
    setEditSchoolId(schooolId)
    setVisible_editSchoolPopup(!visible_editSchoolPopup)
    console.log(schooolId)
  }

  const [editSchoolForm, setEditSchoolForm] = useState({
    schoolName: '',
    districtName: 'Colombo',
  })

  // Update the form data while input
  const onUpdateEditSchool = (e) => {
    setEditSchoolForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const [editSchoolFormErrors, setEditSchoolFormErrors] = useState({
    schoolNameError: '',
    districtNameError: '',
  })

  const handleEditSchool = async (e) => {
    e.preventDefault()

    let schoolNameError = ''
    let districtNameError = ''

    if (!v_required(editSchoolForm.schoolName)) {
      schoolNameError = 'Name can not be empty.'
    }

    if (!v_required(editSchoolForm.districtName)) {
      districtNameError = 'District can not be empty.'
    }

    // If errors exist, show errors
    setEditSchoolFormErrors({
      schoolNameError,
      districtNameError,
    })

    // If no errors exist, send to the server
    if (!(schoolNameError || districtNameError)) {
      // Sending to the server
      setLoading(true)

      const payload = {
        schoolName: editSchoolForm.schoolName,
        districtName: editSchoolForm.districtName,
      }

      // for testing only
      // setCollection((prev) => [...prev, payload]);
      setVisible_editSchoolPopup(false)

      defaultSchoolService.updateSchool(editSchoolId, payload).then(
        (res) => {
          if (res.type === 'OK') {
            toast.success(res.message)
            console.log(res)
            // setSchoolList((prev) => ({ ...prev, ...payload }))
            window.location.reload()
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
  }

  // DELETE SCHOOL POPUP
  const [visible_deleteSchoolPopup, setVisible_deleteSchoolPopup] = useState(false)
  const [deleteSchoolId, setDeleteSchoolId] = useState(0)

  const onClickDeleteButton = (schooolId) => {
    setDeleteSchoolId(schooolId)
    setVisible_deleteSchoolPopup(!visible_deleteSchoolPopup)
    console.log(schooolId)
  }

  const handleDeleteSchool = async () => {
    setLoading(true)

    defaultSchoolService.deleteSchool(deleteSchoolId).then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)
          console.log(res)
          // setSchoolList((prev) => ({ ...prev, ...payload }))
          window.location.reload()
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

  return (
    <div>
      {/* Data fetch loader */}
      <AppFetchDataLoader loading={loading} />

      <AppStandardContainer title="School">
        <CButton color="success" onClick={() => setVisible_addSchoolPopup(!visible_addSchoolPopup)}>
          Add School
        </CButton>

        {/* Adding school pop up */}
        <CModal visible={visible_addSchoolPopup} onClose={() => setVisible_addSchoolPopup(false)}>
          <CModalHeader onClose={() => setVisible_addSchoolPopup(false)}>
            <CModalTitle>Add School</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm className="row g-3">
              <CCol md={12}>
                <CFormInput
                  type="text"
                  id="validationServer01"
                  name="schoolName"
                  label="School Name"
                  onChange={onUpdateInput}
                  value={schoolForm.schoolName}
                  feedback={schoolFormErrors.schoolNameError}
                  invalid={schoolFormErrors.schoolNameError ? true : false}
                />
              </CCol>
              <CCol md={12}>
                <CFormSelect
                  label="District"
                  aria-label="district-select"
                  name="districtName"
                  onChange={onUpdateInput}
                  value={schoolForm.districtName}
                  feedback={schoolFormErrors.districtNameError}
                  invalid={schoolFormErrors.districtNameError ? true : false}
                >
                  <option value="Colombo">Colombo</option>
                  <option value="Gampaha">Gampaha</option>
                  <option value="Kalutara">Kalutara</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Matale">Matale</option>
                  <option value="Nuwara Eliya">Nuwara Eliya</option>
                  <option value="Galle">Galle</option>
                  <option value="Matara">Matara</option>
                  <option value="Hambantota">Hambantota</option>
                  <option value="Jaffna">Jaffna</option>
                  <option value="Kilinochchi">Kilinochchi</option>
                  <option value="Mannar">Mannar</option>
                  <option value="Vavuniya">Vavuniya</option>
                  <option value="Mullaitivu">Mullaitivu</option>
                  <option value="Batticaloa">Batticaloa</option>
                  <option value="Ampara">Ampara</option>
                  <option value="Trincomalee">Trincomalee</option>
                  <option value="Kurunegala">Kurunegala</option>
                  <option value="Puttalam">Puttalam</option>
                  <option value="Anuradhapura">Anuradhapura</option>
                  <option value="Polonnaruwa">Polonnaruwa</option>
                  <option value="Badulla">Badulla</option>
                  <option value="Moneragala">Moneragala</option>
                  <option value="Ratnapura">Ratnapura</option>
                  <option value="Kegalle">Kegalle</option>
                </CFormSelect>
              </CCol>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible_addSchoolPopup(false)}>
              Close
            </CButton>
            <CButton color="primary" onClick={handleAddSchool}>
              Save changes
            </CButton>
          </CModalFooter>
        </CModal>

        {/* Edit school pop up */}
        <CModal visible={visible_editSchoolPopup} onClose={() => setVisible_editSchoolPopup(false)}>
          <CModalHeader onClose={() => setVisible_editSchoolPopup(false)}>
            <CModalTitle>Edit School</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm className="row g-3">
              <CCol md={12}>
                <CFormInput
                  type="text"
                  id="validationServer01"
                  name="schoolName"
                  label="School Name"
                  onChange={onUpdateEditSchool}
                  value={editSchoolForm.schoolName}
                  feedback={editSchoolFormErrors.schoolNameError}
                  invalid={editSchoolFormErrors.schoolNameError ? true : false}
                />
              </CCol>
              <CCol md={12}>
                <CFormSelect
                  label="District"
                  aria-label="district-select"
                  name="districtName"
                  onChange={onUpdateEditSchool}
                  value={editSchoolForm.districtName}
                  feedback={editSchoolFormErrors.districtNameError}
                  invalid={editSchoolFormErrors.districtNameError ? true : false}
                >
                  <option value="Colombo">Colombo</option>
                  <option value="Gampaha">Gampaha</option>
                  <option value="Kalutara">Kalutara</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Matale">Matale</option>
                  <option value="Nuwara Eliya">Nuwara Eliya</option>
                  <option value="Galle">Galle</option>
                  <option value="Matara">Matara</option>
                  <option value="Hambantota">Hambantota</option>
                  <option value="Jaffna">Jaffna</option>
                  <option value="Kilinochchi">Kilinochchi</option>
                  <option value="Mannar">Mannar</option>
                  <option value="Vavuniya">Vavuniya</option>
                  <option value="Mullaitivu">Mullaitivu</option>
                  <option value="Batticaloa">Batticaloa</option>
                  <option value="Ampara">Ampara</option>
                  <option value="Trincomalee">Trincomalee</option>
                  <option value="Kurunegala">Kurunegala</option>
                  <option value="Puttalam">Puttalam</option>
                  <option value="Anuradhapura">Anuradhapura</option>
                  <option value="Polonnaruwa">Polonnaruwa</option>
                  <option value="Badulla">Badulla</option>
                  <option value="Moneragala">Moneragala</option>
                  <option value="Ratnapura">Ratnapura</option>
                  <option value="Kegalle">Kegalle</option>
                </CFormSelect>
              </CCol>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible_editSchoolPopup(false)}>
              Close
            </CButton>
            <CButton color="primary" onClick={handleEditSchool}>
              Update changes
            </CButton>
          </CModalFooter>
        </CModal>

        {/* Delete school pop up */}
        <CModal
          visible={visible_deleteSchoolPopup}
          onClose={() => setVisible_deleteSchoolPopup(false)}
        >
          <CModalHeader onClose={() => setVisible_deleteSchoolPopup(false)}>
            <CModalTitle>Delete School</CModalTitle>
          </CModalHeader>
          <CModalBody>
            Do you want to delete this school? Please note that this process is not recoverable.
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible_deleteSchoolPopup(false)}>
              Close
            </CButton>
            <CButton color="danger" onClick={() => handleDeleteSchool()}>
              Delete
            </CButton>
          </CModalFooter>
        </CModal>

        <CRow className="m-1">
          <CTable bordered>
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell>Id</CTableHeaderCell>
                <CTableHeaderCell className="w-100">School name</CTableHeaderCell>
                <CTableHeaderCell>District</CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {schoolList.map((item, index) => (
                <CTableRow key={index}>
                  <CTableHeaderCell>{item.schoolId}</CTableHeaderCell>
                  <CTableDataCell className="w-100">{item.schoolName}</CTableDataCell>
                  <CTableDataCell>{item.districtName}</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="warning" onClick={() => onClickEditButton(item.schoolId)}>
                      Edit
                    </CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="danger" onClick={() => onClickDeleteButton(item.schoolId)}>
                      Delete
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CRow>
      </AppStandardContainer>
    </div>
  )
}

export default Schools
