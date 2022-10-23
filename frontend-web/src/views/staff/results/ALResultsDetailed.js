import React from 'react'
import { useState, useEffect } from 'react'
import { v_required } from '../../../utils/validator'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import {
  CCard,
  CTable,
  CCol,
  CTableHead,
  CForm,
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

import alResultsService from '../../../services/staff/alResultsService'

const headers = [
  { id: 'subjectId', name: 'Subject ID', sortable: false },
  { id: 'subjectName', name: 'Name', sortable: true },
  { id: 'grade', name: 'Grade', sortable: true },
]

function ALResultsDetailed() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  const [visible, setVisible] = useState(false)

  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

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

  const [searchParams, setSearchParams] = useSearchParams()
  const [studentID, setstudentID] = useState(searchParams.get('studentId'))

  // Editing results
  const [editResultsForm, setEditResultsForm] = useState([])

  const [editResultsFormErrors, setEditResultsFormErrors] = useState([])

  const onUpdateInput = (e) => {
    setEditResultsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // useEffect(() => {
  //   console.log(tableContent)
  // }, [tableContent])

  useEffect(() => {
    setLoading(true)

    alResultsService.getResultOfStudent(studentID).then(
      (res) => {
        if (res.type === 'OK') {
          setTableHeaders(headers)
          //setTableContent(res.payload)
          console.log(res.payload)
          setEditResultsForm(res.payload)
          setTableContent((prev) => [...prev, ...res.payload])
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

  const handleEditResultsFormSubmit = async (e) => {
    e.preventDefault()
    let firstSubjectError = ''
    let secondSubjectError = ''
    let thirdSubjectError = ''
    let gitError = ''
    let geError = ''
    let cgtError = ''
    // if (!v_required(editResultsForm.firstSubject)) {
    //   firstSubjectError = 'Results can not be empty.'
    // }

    // if (!v_required(editResultsForm.secondSubject)) {
    //   secondSubjectError = 'Results can not be empty.'
    // }

    // if (!v_required(editResultsForm.thirdSubject)) {
    //   thirdSubjectError = 'Results can not be empty.'
    // }

    // if (!v_required(editResultsForm.git)) {
    //   gitError = 'Results can not be empty.'
    // }
    // if (!v_required(editResultsForm.ge)) {
    //   geError = 'Results can not be empty.'
    // }
    // if (!v_required(editResultsForm.cgt)) {
    //   cgtError = 'Results can not be empty.'
    // }

    // if (editResultsForm.firstSubject.match('[ABCSW]') == null) {
    //   firstSubjectError = 'Results not valid'
    // }
    // If errors exist, show errors
    setEditResultsFormErrors({
      firstSubjectError,
      secondSubjectError,
      thirdSubjectError,
      gitError,
      geError,
      cgtError,
    })

    // If no errors exist, send to the server
    if (
      !(
        firstSubjectError &&
        secondSubjectError &&
        thirdSubjectError &&
        gitError &&
        geError &&
        cgtError
      )
    ) {
      console.log(editResultsForm)

      // Sending to the server
      setLoading(true)
      setResMessage('')

      const payload = {
        studentId: studentID,
        results: [
          ...editResultsForm
        ]
      }
      
      alResultsService.update(payload).then(
        (res) => {
          if (res.type === 'OK') {
            // Settings table data
            console.log(editResultsForm)
            navigate('/staff/results/al/detailed?studentId='+ studentID)
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
        {/* <NavLink to={`/staff/results/al/detailed/edit?studentId=${studentID}`}>asd</NavLink> */}
        <CButton color="warning" onClick={() => setVisible(!visible)}>
          <CIcon icon={cibAddthis}></CIcon> Edit Results
        </CButton>
        {editResultsForm && (
          <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
              <CModalTitle>Edit Results</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm>
                {editResultsForm.map((item) => (
                  <CFormInput
                    type="text"
                    id="grade"
                    label={item.subjectName}
                    name="grade"
                    onChange={(e) => {
                      const newState = editResultsForm.map((obj) => {
                        if (obj.subjectId === item.subjectId) {
                          return { ...obj, grade: e.target.value };
                        }
                        return obj;
                      })
                      setEditResultsForm(newState)
                    }}
                    value={item.grade}
                    //feedback={editResultsFormErrors}
                    //invalid={editResultsFormErrors ? true : false}
                  />
                ))}
              </CForm>
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
              <CButton color="primary" onClick={handleEditResultsFormSubmit}>
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
        )}
      </div>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Results</CCardHeader>

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

export default ALResultsDetailed
