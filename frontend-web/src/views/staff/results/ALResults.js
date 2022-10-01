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

import alResultsService from '../../../services/staff/alResultsService'

const headers = [
  { id: 'id', name: 'No.', sortable: false },
  { id: 'name', name: 'Name', sortable: false },
  { id: 'indexNumber', name: 'Index Number', sortable: false },
  { id: 'zscore', name: 'Z Score', sortable: true },
  { id: 'stream', name: 'Stream', sortable: false },
  { id: 'district', name: 'District', sortable: false },
  { id: 'school', name: 'School', sortable: false },
  { id: 'districtRank', name: 'District Rank', sortable: true },
  { id: 'islandRank', name: 'Island Rank', sortable: true },
  { id: 'studentStatus', name: 'Status', sortable: false },
  { id: 'passOrFail', name: 'P/F', sortable: false },
]

function ALResults() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  const [visibleUpload, setVisibleUpload] = useState(false)
  const [visibleUploadForm, setVisibleUploadForm] = useState(false)
  const [resMessage, setResMessage] = useState('')
  const [progress, setProgress] = useState(0)
  let navigate = useNavigate()

  // Creating course
  const [uploadResultsForm, setUploadResultsForm] = useState({
    file: undefined,
  })

  const onUpdateInput = (e) => {
    setUploadResultsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.files,
    }))
  }

  const [uploadResultsFormErrors, setUploadResultsFormErrors] = useState({
    fileError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleUploadResultsFormSubmit = async (e) => {
    e.preventDefault()
    let fileError = ''

    if (!v_required(uploadResultsForm.file)) {
      fileError = 'File can not be empty.'
    }

    // If errors exist, show errors
    setUploadResultsFormErrors({
      fileError,
    })

    console.log(uploadResultsFormErrors)

    // If no errors exist, send to the server
    if (!fileError) {
      console.log('Results Uploaded')

      // Sending to the server
      setLoading(true)
      setResMessage('')

      let currentFile = uploadResultsForm.file[0]
      alResultsService
        .upload(currentFile, (e) => {
          setProgress(Math.round((100 * e.loaded) / e.total))
        })
        .then(
          (res) => {
            if (res.type === 'OK') {
              toast.success(res.message)

              // Settings table data
              console.log(uploadResultsForm)
              navigate('/staff/results/al')
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

  useEffect(() => {
    setLoading(true)

    alResultsService.getResults().then(
      (res) => {
        if (res.type === 'OK') {
          if (res.payload.length == 0) {
            setVisibleUpload(!visibleUpload)
          } else {
            toast.success(res.message)
            // Settings table data from fetched data
            setTableData(headers, res.payload)
          }
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
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>A Level Examination Results</CCardHeader>
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
                {visibleUpload && (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CButton
                      color="success"
                      onClick={() => setVisibleUploadForm(!visibleUploadForm)}
                    >
                      <CIcon icon={cibAddthis}></CIcon> Upload A/L Results
                    </CButton>
                  </div>
                )}

                <CModal
                  alignment="center"
                  scrollable
                  visible={visibleUploadForm}
                  onClose={() => setVisibleUploadForm(false)}
                >
                  <CModalHeader>
                    <CModalTitle>Upload Results</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    <CFormInput type="file" id="file" name="file" onChange={onUpdateInput} />
                  </CModalBody>

                  <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisibleUploadForm(false)}>
                      Close
                    </CButton>
                    <CButton color="primary" onClick={handleUploadResultsFormSubmit}>
                      {loading ? (
                        <span>
                          <CSpinner size="sm" /> Validating
                        </span>
                      ) : (
                        <span>Upload</span>
                      )}
                    </CButton>
                  </CModalFooter>
                </CModal>

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
                              <NavLink to={`/staff/results/al/detailed?studentId=${tableItem.id}`}>
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

export default ALResults
