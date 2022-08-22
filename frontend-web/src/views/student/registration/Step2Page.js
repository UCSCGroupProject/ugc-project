import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import {
  CNav,
  CNavItem,
  CNavLink,
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CFormInput,
  CFormSelect,
  CButton,
  CForm,
  CFormCheck,
  CButtonGroup,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CAlert,
  CSpinner,
} from '@coreui/react'

import { v_required } from '../../../utils/validator'

import authService from '../../../services/authService'
import universityAdmissionService from '../../../services/student/universityAdmissionService'

function Step2Page() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  const [step2Form, setStep2Form] = useState({
    // OL Results
    olCategory: 'localOL',
    olYear: '2016',
    olIndex: '',
    olNameUsed: '',
    olResultsAcceptance: 'true',
    //AL Results
    alAdministrativeDistrictTaken: 'Colombo',
    alAdministrativeDistrictConsidered: 'Colombo',
    alResultsAcceptance: 'true',
  })

  // Update the form data while input
  const onUpdateInput = (e) => {
    setStep2Form((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    setLoading(true)

    const user = authService.getCurrentUser()

    universityAdmissionService.getStep2Form(user.username).then(
      (res) => {
        setLoading(false)
        setStep2Form(res)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()

        // After recieving the server request
        // setResMessage(res)
        console.log(res)
        setLoading(false)
      },
    )
  }, [])

  // For data errors
  const [step2FormErrors, setStep2FormErrors] = useState({
    // OL Results
    olCategoryError: '',
    olYearError: '',
    olIndexError: '',
    olNameUsedError: '',
    //AL Results
    alAdministrativeDistrictTakenError: '',
    alAdministrativeDistrictConsideredError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleStep2FormSubmit = async (e) => {
    e.preventDefault()

    // OL Results
    let olCategoryError = ''
    let olYearError = ''
    let olIndexError = ''
    let olNameUsedError = ''
    //AL Results
    let alAdministrativeDistrictTakenError = ''
    let alAdministrativeDistrictConsideredError = ''

    console.log(step2Form)

    if (!v_required(step2Form.olCategory)) {
      olCategoryError = 'OL category can not be empty.'
    }

    if (!v_required(step2Form.olYear)) {
      olYearError = 'OL Year can not be empty.'
    }

    if (!v_required(step2Form.olIndex)) {
      olIndexError = 'OL Index can not be empty.'
    }

    if (!v_required(step2Form.olNameUsed)) {
      olNameUsedError = 'OL name used can not be empty.'
    }

    if (!v_required(step2Form.alAdministrativeDistrictTaken)) {
      alAdministrativeDistrictTakenError = 'Administrative district taken can not be empty.'
    }

    if (!v_required(step2Form.alAdministrativeDistrictConsidered)) {
      alAdministrativeDistrictConsideredError =
        'Administrative district considered can not be empty.'
    }

    // If errors exist, show errors
    setStep2FormErrors({
      olCategoryError,
      olYearError,
      olIndexError,
      olNameUsedError,
      alAdministrativeDistrictTakenError,
      alAdministrativeDistrictConsideredError,
    })

    console.log(step2FormErrors)

    // If no errors exist, send to the server
    if (
      !(
        olCategoryError ||
        olYearError ||
        olIndexError ||
        olNameUsedError ||
        alAdministrativeDistrictTakenError ||
        alAdministrativeDistrictConsideredError
      )
    ) {
      console.log('STEP 2 PAGE')
      console.log(step2Form)

      // Sending to the server
      setLoading(true)
      setResMessage('')

      const user = authService.getCurrentUser()

      universityAdmissionService.step2FormCheckAndSubmit(step2Form, user.username).then(
        () => {
          setLoading(false)
          navigate('/student/registration/step3')
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
    <div>
      <header>
        <CNav variant="tabs">
          <CNavItem>
            <NavLink to="/student/registration/step1" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 1</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step2" style={{ textDecoration: 'none' }}>
              <CNavLink active>Step 2</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step3" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 3</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step4" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 4</CNavLink>
            </NavLink>
          </CNavItem>
        </CNav>
      </header>
      <CContainer className="bg-white">
        <CRow className="p-2">
          <CCard className="p-2">
            <CCardBody>
              {/* G.C.E. (O/L) Results */}
              <CCardTitle>G.C.E. (O/L) Results</CCardTitle>
              <hr />
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol md={4}>
                    <CFormSelect
                      label="Category of G.C.E. (O/L)"
                      aria-label="OLCategory-select"
                      name="olCategory"
                      onChange={onUpdateInput}
                      value={step2Form.olCategory}
                      feedback={step2FormErrors.olCategoryError}
                      invalid={step2FormErrors.olCategoryError ? true : false}
                    >
                      <option value="localOL">Local G.C.E. (O/l)</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="Year"
                      aria-label="OLYear-select"
                      name="olYear"
                      onChange={onUpdateInput}
                      value={step2Form.olYear}
                      feedback={step2FormErrors.olYearError}
                      invalid={step2FormErrors.olYearError ? true : false}
                    >
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={4}>
                    <CFormInput
                      type="text"
                      id="validationOLIndex"
                      label="Index number"
                      name="olIndex"
                      onChange={onUpdateInput}
                      value={step2Form.olIndex}
                      feedback={step2FormErrors.olIndexError}
                      invalid={step2FormErrors.olIndexError ? true : false}
                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      type="text"
                      id="validationOLIndex"
                      label="Named used in G.C.E.(O/L) Examination"
                      name="olNameUsed"
                      onChange={onUpdateInput}
                      value={step2Form.olNameUsed}
                      feedback={step2FormErrors.olNameUsedError}
                      invalid={step2FormErrors.olNameUsedError ? true : false}
                    />
                  </CCol>
                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell>Year</CTableHeaderCell>
                        <CTableHeaderCell>Index Number</CTableHeaderCell>
                        <CTableHeaderCell>English</CTableHeaderCell>
                        <CTableHeaderCell>Maths</CTableHeaderCell>
                        <CTableHeaderCell>Science</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell>2016</CTableHeaderCell>
                        <CTableDataCell>1300724</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                      </CTableRow>
                    </CTableBody>
                  </CTable>
                  <CCol md={5}>
                    Above results {'  '}
                    <CFormCheck
                      inline
                      type="radio"
                      name="olResultsAcceptance"
                      id="olResultsAcceptance_1"
                      value="true"
                      label="Accept"
                      onChange={onUpdateInput}
                      checked={step2Form.olResultsAcceptance === 'true' ? true : false}
                    />
                    <CFormCheck
                      inline
                      type="radio"
                      name="olResultsAcceptance"
                      id="olResultsAcceptance_2"
                      value="false"
                      label="Change"
                      onChange={onUpdateInput}
                      checked={step2Form.olResultsAcceptance === 'false' ? true : false}
                    />
                  </CCol>
                </CForm>
              </div>
              <br />
              <br />

              {/* G.C.E. (A/L) Results */}
              <CCardTitle>G.C.E. (A/L) Results</CCardTitle>
              <hr />
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol md={4}>
                    <CFormSelect
                      label="Administrative District from which G.C.E. (A/L) was taken"
                      aria-label="ALAdministrativeDistrictTaken-select"
                      name="alAdministrativeDistrictTaken"
                      onChange={onUpdateInput}
                      value={step2Form.alAdministrativeDistrictTaken}
                      feedback={step2FormErrors.alAdministrativeDistrictTakenError}
                      invalid={step2FormErrors.alAdministrativeDistrictTakenError ? true : false}
                    >
                      <option value="Colombo">Local G.C.E. (O/l)</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={5}>
                    <CFormSelect
                      label="From which administrative district should you be considered ?"
                      aria-label="ALAdministrativeDistrictConsidered-select"
                      name="alAdministrativeDistrictConsidered"
                      onChange={onUpdateInput}
                      value={step2Form.alAdministrativeDistrictConsidered}
                      feedback={step2FormErrors.alAdministrativeDistrictConsideredError}
                      invalid={
                        step2FormErrors.alAdministrativeDistrictConsideredError ? true : false
                      }
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
                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell>Year</CTableHeaderCell>
                        <CTableHeaderCell>Index Number</CTableHeaderCell>
                        <CTableHeaderCell>Physics</CTableHeaderCell>
                        <CTableHeaderCell>Chemistry</CTableHeaderCell>
                        <CTableHeaderCell>Biology</CTableHeaderCell>
                        <CTableHeaderCell>Medium</CTableHeaderCell>
                        <CTableHeaderCell>Common General Test</CTableHeaderCell>
                        <CTableHeaderCell>General English</CTableHeaderCell>
                        <CTableHeaderCell>Z-Score</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell>2016</CTableHeaderCell>
                        <CTableDataCell>1300724</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>Sinhala</CTableDataCell>
                        <CTableDataCell>40</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>2.0665</CTableDataCell>
                      </CTableRow>
                      {/* {allCoursesData.map((item) => (
                        <CTableRow key={item.id}>
                          <CTableHeaderCell>{item.id}</CTableHeaderCell>
                          <CTableDataCell>{item.unicode}</CTableDataCell>
                          <CTableDataCell>{item.courseOfStudy}</CTableDataCell>
                          <CTableDataCell>{item.university}</CTableDataCell>
                        </CTableRow>
                      ))} */}
                    </CTableBody>
                  </CTable>
                  <CCol md={5}>
                    Above results {'  '}
                    <CFormCheck
                      inline
                      type="radio"
                      name="alResultsAcceptance"
                      id="alResultsAcceptance_1"
                      value="true"
                      label="Accept"
                      onChange={onUpdateInput}
                      checked={step2Form.alResultsAcceptance === 'true' ? true : false}
                    />
                    <CFormCheck
                      inline
                      type="radio"
                      name="alResultsAcceptance"
                      id="alResultsAcceptance_2"
                      value="false"
                      label="Change"
                      onChange={onUpdateInput}
                      checked={step2Form.alResultsAcceptance === 'false' ? true : false}
                    />
                  </CCol>
                  <CCardText>Particulars of G.C.E (A/L)Examination - Previous Attempts</CCardText>
                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell>Year</CTableHeaderCell>
                        <CTableHeaderCell>Index Number</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Subjects</CTableHeaderCell>
                        <CTableHeaderCell>Medium</CTableHeaderCell>
                        <CTableHeaderCell>Common General Test</CTableHeaderCell>
                        <CTableHeaderCell>General English</CTableHeaderCell>
                        <CTableHeaderCell>Z-Score</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell>2016</CTableHeaderCell>
                        <CTableDataCell>1300724</CTableDataCell>
                        <CTableDataCell>
                          <CTable bordered>
                            <CTableHead color="light">
                              <CTableRow>
                                <CTableHeaderCell className="text-center">Physics</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">
                                  Chemistry
                                </CTableHeaderCell>
                                <CTableHeaderCell className="text-center">Biology</CTableHeaderCell>
                              </CTableRow>
                            </CTableHead>
                            <CTableRow>
                              <CTableDataCell className="text-center">A</CTableDataCell>
                              <CTableDataCell className="text-center">A</CTableDataCell>
                              <CTableDataCell className="text-center">A</CTableDataCell>
                            </CTableRow>
                          </CTable>
                        </CTableDataCell>
                        {/* <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell> */}
                        <CTableDataCell>Sinhala</CTableDataCell>
                        <CTableDataCell>40</CTableDataCell>
                        <CTableDataCell>A</CTableDataCell>
                        <CTableDataCell>2.0665</CTableDataCell>
                      </CTableRow>
                      {/* {allCoursesData.map((item) => (
                        <CTableRow key={item.id}>
                          <CTableHeaderCell>{item.id}</CTableHeaderCell>
                          <CTableDataCell>{item.unicode}</CTableDataCell>
                          <CTableDataCell>{item.courseOfStudy}</CTableDataCell>
                          <CTableDataCell>{item.university}</CTableDataCell>
                        </CTableRow>
                      ))} */}
                    </CTableBody>
                  </CTable>
                </CForm>
              </div>
              <br />
              <br />

              {resMessage && (
                <CAlert color="danger" className="text-center">
                  {resMessage}
                </CAlert>
              )}

              <br />
              <CRow>
                <CCol md={4} className="ms-auto">
                  <CButtonGroup size="sm" className="w-100">
                    <Link to="/" className="btn btn-outline-dark p-2">
                      Cancel
                    </Link>

                    <CButton
                      color="primary"
                      type="button"
                      className="p-2"
                      onClick={handleStep2FormSubmit}
                    >
                      {loading ? (
                        <span>
                          <CSpinner size="sm" /> Validating
                        </span>
                      ) : (
                        <span>Save</span>
                      )}
                    </CButton>
                  </CButtonGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Step2Page
