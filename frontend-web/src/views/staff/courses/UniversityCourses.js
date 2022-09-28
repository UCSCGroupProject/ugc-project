import React from 'react'
import { useState, useEffect } from 'react'
import { v_required } from '../../../utils/validator'
import { useSearchParams, useNavigate } from 'react-router-dom'
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
import { cilFilter, cilDelete, cibAddthis } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { toast } from 'react-toastify'

import AppFetchDataLoader from '../../../components/loaders/AppFetchDataLoader'
import courseService from '../../../services/university/courseService'
import unicodeService from '../../../services/university/unicodeService'

const headers = [
  { id: 'id', name: 'No.', sortable: false },
  { id: 'courseName', name: 'Course', sortable: true },
  { id: 'universityName', name: 'University', sortable: true },
  { id: 'unicode', name: 'Unicode', sortable: true },
]



function StaffCourses() {

  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  const [visible, setVisible] = useState(false)

  const [visible2, setVisible2] = useState(false)
  const [deleteCourseId, setDeleteCourseId] = useState(0)

  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const [courseID, setcourseID] = useState(searchParams.get('courseId'))
  
  // Creating course
  const [editCourseForm, setEditCourseForm] = useState({
    id: '',
    name: '',
    stream: '',
    course: '',
    intake: '',
  })

  // Display streams
  const [streams, setStreams] = useState([
    {
      id: '',
      streamName: '',
    },
  ])


  const onUpdateInput = (e) => {
    setEditCourseForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [editCourseFormErrors, setEditCourseFormErrors] = useState({
    nameError: '',
    streamError: '',
    codeError: '',
    intakeError: '',
  })


  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleEditCourseFormSubmit = async (e) => {
    e.preventDefault()
    let nameError = ''
    let streamError = ''
    let codeError = ''
    let intakeError = ''

    if (!v_required(editCourseForm.name)) {
      nameError = 'Course name can not be empty.'
    }

    if (!v_required(editCourseForm.stream)) {
      streamError = 'Stream can not be empty.'
      console.log(editCourseForm.stream)
    }

    if (!v_required(editCourseForm.code)) {
      codeError = 'Course code can not be empty.'
    }

    if (!v_required(editCourseForm.intake)) {
      intakeError = 'Proposed course intake can not be empty.'
    }


    // If errors exist, show errors
    setEditCourseFormErrors({
      nameError,
      streamError,
      codeError,
      intakeError,
    })

    console.log(editCourseFormErrors)

    // If no errors exist, send to the server
    if (!(nameError && streamError && codeError && intakeError)) {
      console.log('Edit course form submitted')

      // Sending to the server
      setLoading(true)
      setResMessage('')

      courseService.update(editCourseForm).then(
        (res) => {
          

          if (res.type === 'OK') {
  
            // Settings table data
          console.log(editCourseForm)
            navigate('/staff/courses')
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
          setResMessage(res) // Remove later
          setLoading(false)
        },
      )
    }
  }
  
  // Display streams
  useEffect(() => {
    setLoading(true)

    courseService.getAllStreamsList().then(
      (res) => {
        if (res.type === 'OK') {
          setStreams(res.payload)
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
  
  // Display details of the course
  const [editCoursePlaceholder, setEditCoursePlaceholder] = useState({
    id: '',
    name: '',
    stream: '',
    course: '',
    intake: '',
  })

  useEffect(() => {
    setLoading(true)

    courseService.getCourseDetails(courseID).then(
      (res) => {
        if (res.type === 'OK') {
          setEditCourseForm(res.payload)
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
  }, [])

  // Get unicode list
  useEffect(() => {
    setLoading(true)

    unicodeService.getUniCourseList(courseID).then(
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

  // Delete course
  const handleDeleteCourse = async () => {
    setLoading(true)
    console.log(deleteCourseId)
    courseService.delete(deleteCourseId).then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)
          console.log(res)
          navigate('/staff/courses')
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

  const onClickDeleteButton = (courseId) => {
    setDeleteCourseId(courseId)
    setVisible2(!visible2)
  }

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
        <CButton color="warning" onClick={() => setVisible(!visible)}>
          <CIcon icon={cibAddthis}></CIcon> Edit Course
        </CButton>
        <CButton color="danger" onClick={() => onClickDeleteButton(editCourseForm.id)}>
          <CIcon icon={cibAddthis}></CIcon> Delete Course
        </CButton>

        <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Edit course</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              type="text"
              id="courseName"
              name="name"
              onChange={onUpdateInput}
              value={editCourseForm.name}
              feedback={editCourseFormErrors.nameError}
            />
            <br></br>
            <CFormSelect
              name="stream"
              onChange={onUpdateInput}
              defaultValue=''
              value={editCourseForm.stream}
              feedback={editCourseFormErrors.streamError}
            >
              <option selected hidden  value=''>Select stream</option>
              {streams.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.id} - {e.streamName}
                </option>
              ))}
            </CFormSelect>
            <br></br>
            <CFormInput
              type="number"
              id="course"
              name="course"
              onChange={onUpdateInput}
              value={editCourseForm.course}
              feedback={editCourseFormErrors.codeError}
            />
            <br></br>
            <CFormInput
              type="number"
              id="intake"
              name="intake"
              onChange={onUpdateInput}
              value={editCourseForm.intake}
              feedback={editCourseFormErrors.intakeError}
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
            <CButton color="primary" onClick={handleEditCourseFormSubmit}>
              {loading ? (
                <span>
                  <CSpinner size="sm" /> Validating
                </span>
              ) : (
                <span>Update</span>
              )}
            </CButton>
          </CModalFooter>
        </CModal>

        {/* Delete school pop up */}
        <CModal
          visible={visible2}
          onClose={() => setVisible2(false)}
          alignment="center"
        >
          <CModalHeader onClose={() => setVisible2(false)}>
            <CModalTitle>Delete Course</CModalTitle>
          </CModalHeader>
          <CModalBody>
            Do you want to delete this course? Please note that this process is not recoverable.
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible2(false)}>
              Close
            </CButton>
            <CButton color="danger" onClick={() => handleDeleteCourse()}>
              Delete
            </CButton>
          </CModalFooter>
        </CModal>

      </div>

      <br></br>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Degree Programmes</CCardHeader>
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