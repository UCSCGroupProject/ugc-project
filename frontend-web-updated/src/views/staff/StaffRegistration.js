import React from "react";
import { useState, useEffect } from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CRow,
    CSpinner,
    CAlert,
    CCardSubtitle,
    CButtonGroup,
    CFormSelect,
  } from '@coreui/react'
  
  import { cilCheckAlt } from '@coreui/icons'
  import CIcon from '@coreui/icons-react'
  
  import {
    v_required,
    v_min,
    v_match,
    v_email,
    v_containsUppercase,
    v_containsLowercase,
    v_containsNumber,
    v_containsSpecialChars,
  } from '../../utils/validator'
  
  const StaffRegistration = () => {
    const [sectionIndex, setSectionIndex] = useState(0)

    const incrementSection = () => {
        setSectionIndex((sectionIndex + 1) % 3)
    
        console.log('FIRST SECTION')
        console.log(staffRoleDetailsForm)
        // console.log('SECOND SECTION')
        // console.log(staffPersonalDetailsForm)
        // console.log('THIRD SECTION')
        // console.log(staffLoginDetailsForm)
    }

      const decrementSection = () => {
        setSectionIndex((sectionIndex - 1) % 3)
    
        console.log('FIRST SECTION')
        console.log(staffRoleDetailsForm)
        // console.log('SECOND SECTION')
        // console.log(staffPersonalDetailsForm)
        // console.log('THIRD SECTION')
        // console.log(staffLoginDetailsForm)
    }

    /**
   * SECTION 1
   */
  // Form data
  const [staffRoleDetailsForm, setStaffRoleDetailsForm] = useState({
    // Role Details
    office_dept: '',
    role: '',
  })



  // Update the form data while input
  const onUpdateInput = (e) => {
    setStaffRoleDetailsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const [roleSet, setRoleSet] = useState([]);

  useEffect(() => {
    switch(staffRoleDetailsForm.office_dept){
      case "OC":
        setRoleSet(["Chairman", "Assistant Secretary"])
        break;

        case "OVC":
          setRoleSet(["Vice-Chairman", "Senior Assistant Secretary"])
        break;

        case "OS":
          setRoleSet(["Secretary", "Senior Assistant Secretary"])
        break;

        case "PD":
          setRoleSet(["Senior Assistant Secretary"])
        break;

        case "UAD":
          setRoleSet(["Senior Assistant Secretary", "Assistant Secretary", ])
        break;

        case "AAD":
          setRoleSet(["Deputy Secretary", "Senior Assistant Secretary", "Assistant Secretary", ])
        break;

        case "MISD":
          setRoleSet(["Statistician", "Assistant Statistician",])
        break;

        default:
          setRoleSet([])
          break;
    }
  }, [staffRoleDetailsForm.office_dept])
  
  // For data errors
  const [staffRoleDetailsFormErrors, setStaffRoleDetailsFormErrors] = useState({
    // Role Details
    office_deptError: '',
    roleError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleStaffRoleDetailsSubmit = async (e) => {
    e.preventDefault()

    // Role Details
    let office_deptError = ''
    let roleError = ''

    if (!v_required(staffRoleDetailsForm.office_dept)) {
        office_deptError = 'Office/Department cannot be empty.'
    }

    if (!v_required(staffRoleDetailsForm.role)) {
        roleError = 'Role cannot be empty.'
    }

    // If errors exist, show errors
    setStaffRoleDetailsFormErrors({
      office_deptError,
      roleError,
    })

    // If no errors exist, send to the server
    if (
      !(
        office_deptError ||
        roleError
      )
    ) {
      // // Sending to the server
      // setLoading(true)
      // setResMessage('')
      // authService.login(loginForm.email, loginForm.password).then(
      //   () => {
      //     navigate('/')
      //     console.log(authService.getCurrentUser())
      //   },
      //   (error) => {
      //     const res =
      //       (error.response && error.response.data && error.response.data.message) ||
      //       error.message ||
      //       error.toString()
      //     // After recieving the server request
      //     setResMessage(res)
      //     setLoading(false)
      //   },
      // )
      incrementSection()
    }
  }

  const roleDetailsSection = () => {
    return (
      <section>
        <p className="text-medium-emphasis text-center">
          Please choose your department and role in University Grants Commission
        </p>

        <CCard className="p-3 mb-3">
          <CCardSubtitle>Role Details</CCardSubtitle>
          <CCardBody>
            <CRow className="justify-content-center">
              <CCol md={4}>
                <CFormSelect
                    label="Office / Department"
                    aria-label="Default select example"
                    name="office_dept"
                    onChange={onUpdateInput}
                    value={staffRoleDetailsForm.office_dept}
                    feedback={staffRoleDetailsFormErrors.office_deptError}
                    invalid={staffRoleDetailsFormErrors.office_deptError ? true : false}
                    >
                    <option value="">Choose</option>
                    <option value="OC">Office of the Chairman</option>
                    <option value="OVC">Office of the Vice-Chairman</option>
                    <option value="OS">Office of the Secretary</option>
                    <option value="PD">Personnel Division</option>
                    <option value="UAD">University Admissions Department</option>
                    <option value="AAD">Academic Affairs Department</option>
                    <option value="MISD">Management Information Systems Division</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormSelect
                  
                  label="Role"
                  aria-label="Default select example"
                  name="role"
                  onChange={onUpdateInput}
                  value={staffRoleDetailsForm.role}
                  feedback={staffRoleDetailsFormErrors.roleError}
                  invalid={staffRoleDetailsFormErrors.roleError ? true : false}
                >
                  {roleSet.map(item => <option key={item} value={item}>{item}</option>)}
                </CFormSelect>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>

        <CRow>
          <CCol md={4} className="ms-auto">
            <CButtonGroup size="sm" className="w-100">
              <CButton color="dark" variant="outline" type="submit" className="p-2">
                Cancel
              </CButton>
              <CButton
                color="primary"
                type="button"
                className="p-2"
                onClick={handleStaffRoleDetailsSubmit}
              >
                Next
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
      </section>
    )
  }

  /**
   * SECTION 2
   */
  // Form data

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={11}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1 className="text-center">Staff Signup</h1>

                  {/* Sections */}
                  {sectionIndex === 0 && roleDetailsSection()}
                  {/* {sectionIndex === 1 && studentDetailsSection()}
                  {sectionIndex === 2 && loginDetailsSection()} */}
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
  }

  export default StaffRegistration