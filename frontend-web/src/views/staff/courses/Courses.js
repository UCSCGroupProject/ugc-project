import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  CCard,
  CTable,
  CCol,
  CTableHead,
  CFormInput,
  CCardBody,
  CSpinner,
  CButton,
  CFormSelect,
  CCardHeader,
  CTableRow,
  CInputGroupText,
  CTableHeaderCell,
  CInputGroup,
  CRow,
  CTableBody,
  CAlert,
  CTableDataCell,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter, cilArrowRight, cibAddthis } from '@coreui/icons'
import { v_required } from '../../../utils/validator'
import CIcon from '@coreui/icons-react'

import { toast } from 'react-toastify'

import AppFetchDataLoader from '../../../components/loaders/AppFetchDataLoader'

import courseService from '../../../services/university/courseService'

const headers = [
  { id: 'id', name: 'No.', sortable: false },
  { id: 'name', name: 'No.', sortable: false },
  { id: 'stream', name: 'Course', sortable: true },
  { id: 'course', name: 'Stream', sortable: true },
  { id: 'intake', name: 'Intake', sortable: true },
]

function StaffCourses() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  const [visible, setVisible] = useState(false)

  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  // Creating course
  const [addCourseForm, setAddCourseForm] = useState({
    name: '',
    stream: '',
    code: '',
    intake: '',
  })

  const onUpdateInput = (e) => {
    setAddCourseForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [addCourseFormErrors, setAddCourseFormErrors] = useState({
    nameError: '',
    streamError: '',
    codeError: '',
    intakeError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleAddCourseFormSubmit = async (e) => {
    e.preventDefault()
    let nameError = ''
    let streamError = ''
    let codeError = ''
    let intakeError = ''

    if (!v_required(addCourseForm.name)) {
      nameError = 'Course name can not be empty.'
    }

    if (!v_required(addCourseForm.stream)) {
      streamError = 'Stream can not be empty.'
    }

    if (!v_required(addCourseForm.code)) {
      codeError = 'Course code can not be empty.'
    }

    if (!v_required(addCourseForm.intake)) {
      intakeError = 'Proposed course intake can not be empty.'
    }

    // If errors exist, show errors
    setAddCourseFormErrors({
      nameError,
      streamError,
      codeError,
      intakeError,
    })

    console.log(addCourseFormErrors)

    // If no errors exist, send to the server
    if (!(nameError || streamError || codeError || intakeError)) {
      console.log('Add course form submitted')

      // Sending to the server
      setLoading(true)
      setResMessage('')

      courseService.create(addCourseForm).then(
        () => {
          console.log(addCourseForm)
          setLoading(false)
          navigate('/staff/courses')
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

  useEffect(() => {
    setLoading(true)

    courseService.getAllCourseList().then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)
          // Settings table data from fetched data
          setTableData(headers, res.payload)
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
  }, [])

  // ADVANCED TABLE
  const [tableHeaders, setTableHeaders] = useState([])
  const [tableContent, setTableContent] = useState([])
  const [presistentTableContent, setPresistentTableContent] = useState([])

  // Set table data
  const setTableData = (headers, content) => {
    setTableHeaders(headers)
    setTableContent(content)
    setPresistentTableContent(content)
  }

  // Filter Bar
  const [filterOptions, setFilterOptions] = useState({
    field: 'all',
    order: 'ascending',
  })

  // Update the form data while input
  const onFilterOptionsUpdateInput = (e) => {
    setFilterOptions((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleFiltering = (e) => {
    e.preventDefault()

    if (filterOptions.field !== 'all') {
      const sortedTemp = [...tableContent].sort(
        (a, b) =>
          a[filterOptions.field]
            .toString()
            .localeCompare(b[filterOptions.field].toString(), 'en', { numeric: true }) *
          (filterOptions.order === 'ascending' ? 1 : -1),
      )

      setTableContent(sortedTemp)
    } else {
      setTableContent(tableContent)
    }

    console.log(filterOptions)
  }

  const FilterBar = () => {
    return (
      <CInputGroup>
        <CInputGroupText>Filter By</CInputGroupText>
        <CFormSelect
          aria-label="filter-option-1"
          name="field"
          onChange={onFilterOptionsUpdateInput}
          value={filterOptions.field}
        >
          <option key="all" value="all">
            All
          </option>
          {tableHeaders.map(
            (headerItem) =>
              headerItem.sortable && (
                <option key={headerItem.id} value={headerItem.id}>
                  {headerItem.name}
                </option>
              ),
          )}
        </CFormSelect>
        <CInputGroupText> in </CInputGroupText>
        <CFormSelect
          aria-label="filter-option-2"
          name="order"
          onChange={onFilterOptionsUpdateInput}
          value={filterOptions.order}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </CFormSelect>
        <CInputGroupText> order </CInputGroupText>
        <CButton color="warning" type="button" className="text-white" onClick={handleFiltering}>
          <CIcon icon={cilFilter} />
          <span>{'  '}Filter</span>
        </CButton>
      </CInputGroup>
    )
  }

  // Search Bar
  const [searchText, setSearchOption] = useState('')

  // Update the form data while input
  const onSearchOptionsUpdateInput = (e) => {
    setSearchOption(e.target.value)
  }

  const handleSearching = () => {
    const temp = tableContent
    const searchedTemp = []

    console.log('called', searchText)

    if (searchText !== '') {
      temp.forEach((tableItem) => {
        for (const headerItem of tableHeaders) {
          console.log(tableItem['id'], headerItem.id)
          if (
            tableItem[headerItem.id].toString().toLowerCase().includes(searchText.toLowerCase())
          ) {
            searchedTemp.push(tableItem)
            break // break statement not working on forEach, hence used for loop
          }
        }
      })

      setTableContent(searchedTemp)
    } else {
      setTableContent(presistentTableContent)
    }
  }

  return (
    <div>
      <div style={{ textAlign: 'right' }}>
        <CButton color="success" onClick={() => setVisible(!visible)}>
          <CIcon icon={cibAddthis}></CIcon> Add Course
        </CButton>

        <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Create a course</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              type="text"
              id="courseName"
              floatingLabel="Name"
              name="name"
              placeholder="Medicine"
              onChange={onUpdateInput}
              value={addCourseForm.name}
              feedback={addCourseFormErrors.nameError}
              invalid={addCourseFormErrors.nameError ? true : false}
            />
            <br></br>
            <CFormInput
              type="text"
              id="i"
              floatingLabel="Stream"
              name="stream"
              placeholder="Biological Science"
              onChange={onUpdateInput}
              value={addCourseForm.stream}
              feedback={addCourseFormErrors.streamError}
              invalid={addCourseFormErrors.streamError ? true : false}
            />
            <br></br>
            <CFormInput
              type="text"
              id="code"
              floatingLabel="Course Code"
              name="code"
              placeholder="001"
              onChange={onUpdateInput}
              value={addCourseForm.code}
              feedback={addCourseFormErrors.codeError}
              invalid={addCourseFormErrors.codeError ? true : false}
            />
            <br></br>
            <CFormInput
              type="text"
              id="intake"
              floatingLabel="Proposed Intake"
              name="intake"
              placeholder="1864"
              onChange={onUpdateInput}
              value={addCourseForm.intake}
              feedback={addCourseFormErrors.intakeError}
              invalid={addCourseFormErrors.intakeError ? true : false}
            />
            {resMessage && (
            <CAlert color="danger" className="text-center">
              {resMessage}
            </CAlert>
          )}
          
          </CModalBody>
          

          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary" onClick={handleAddCourseFormSubmit}>
              {loading ? (
                <span>
                  <CSpinner size="sm" /> Validating
                </span>
              ) : (
                <span>Create</span>
              )}
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
      <br></br>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Courses provided under UGC</CCardHeader>
            <CCardBody>
              <div>
                <CRow className="py-2 bg-light rounded">
                  {/* Filter bar */}
                  <CCol md={6}>
                    <FilterBar />
                  </CCol>

                  <CCol md={4} className="ms-auto">
                    {/* Search bar */}
                    <CInputGroup>
                      <CFormInput
                        type="text"
                        id="searchBarInput"
                        placeholder="Search..."
                        name="searchText"
                        onChange={onSearchOptionsUpdateInput}
                        value={searchText}
                        foc
                      />
                      <CButton
                        color="warning"
                        type="button"
                        className="text-white"
                        onClick={handleSearching}
                      >
                        <CIcon icon={cilSearch} />
                        <span>{'  '}Search</span>
                      </CButton>
                    </CInputGroup>
                  </CCol>
                </CRow>
                <br />

                <CRow className="m-1">
                  {/* Data fetch loader */}
                  <AppFetchDataLoader loading={loading} />

                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        {tableHeaders.map((headerItem) => (
                          <CTableHeaderCell key={headerItem.id}>{headerItem.name}</CTableHeaderCell>
                        ))}
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {tableContent.map((tableItem) => (
                        <CTableRow key={tableItem.id}>
                          {tableHeaders.map((headerItem) => (
                            <CTableDataCell
                              key={tableItem.id + headerItem.id}
                              className={filterOptions.field === headerItem.id ? 'bg-light ' : ''}
                            >
                              {/* if search text is empty, show default text */}
                              {searchText === '' && <span>{tableItem[headerItem.id]}</span>}
                              {/* if search text is not empty, if matching exists highlight else show default */}
                              {searchText !== '' && (
                                <span
                                  className={
                                    tableItem[headerItem.id]
                                      .toString()
                                      .toLowerCase()
                                      .includes(searchText.toLowerCase())
                                      ? 'bg-highlight-warning'
                                      : ''
                                  }
                                >
                                  {tableItem[headerItem.id]}
                                </span>
                              )}
                            </CTableDataCell>
                          ))}
                          {
                            <CTableDataCell>
                              <NavLink to={`/staff/courses/detailed?courseId=${tableItem.id}`}>
                                <CIcon icon={cilArrowRight} />
                              </NavLink>
                            </CTableDataCell>
                          }
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CRow>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default StaffCourses
