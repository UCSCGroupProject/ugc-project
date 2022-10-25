import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
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
  CForm
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter, cilArrowRight, cibAddthis } from '@coreui/icons'
import { v_required } from '../../../utils/validator'
import CIcon from '@coreui/icons-react'

import { toast } from 'react-toastify'

import AppFetchDataLoader from '../../../components/loaders/AppFetchDataLoader'

import zscoreService from '../../../services/zscoreService'
import zscoreTableService from '../../../services/zscoreTableService'

const headers = [
  { id: 'id', name: '#', sortable: true },
  { id: 'course', name: 'Course', sortable: true },
  { id: 'uni', name: 'University', sortable: true },
  { id: 'first_name', name: 'Uni - Code', sortable: true },
  { id: 'last_name', name: 'District', sortable: true },
  { id: 'age', name: 'Required minimum Z - Score', sortable: true },
  
]

function StaffZScoreTable() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  
  const [visibleUpload, setVisibleUpload] = useState(false)
  const [visibleUploadForm, setVisibleUploadForm] = useState(false)
  const [resMessage, setResMessage] = useState('')
  const [progress, setProgress] = useState(0)
  let navigate = useNavigate()

  // new adding
  const [visible, setVisible] = useState(false)
  const [editZscoreValueForm, setEditZscoreValueForm] = useState([])

  const [editZscoreValueFormErrors, setEditZscoreValueFormErrors] = useState([])
  // const [loading, setLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [id, setID] = useState(searchParams.get('id'))

  // not neccessary
  // useEffect(() => {
  //   setLoading(true)

  //   zscoreService.getZscorevalue(id).then(
  //     (res) => {
  //       if (res.type === 'OK') {
  //         // setTableHeaders(headers)
  //         //setTableContent(res.payload)
  //         console.log(res.payload)
  //         setEditZscoreValueForm(res.payload)
  //         setTableContent((prev) => [...prev, ...res.payload])
  //       } else if (res.type === 'BAD') {
  //         toast.error(res.message)
  //       }

  //       setLoading(false)
  //     },
  //     (error) => {
  //       const res =
  //         (error.response && error.response.data && error.response.data.message) ||
  //         error.message ||
  //         error.toString()

  //       // After recieving the server request
  //       toast.error(res)
  //       setLoading(false)
  //     },
  //   )
  // }, [])
  //

  const handleEditZscoreValueFormSubmit = async (e) =>{
    e.preventDefault()
    let zvalueError = ''

    setEditZscoreValueFormErrors({
      zvalueError
    })

    if(
      !(
        zvalueError
      )
    ) {
      console.log(editZscoreValueForm)

      // Sending to the server
      setLoading(true)
      setResMessage('')

      const payload = {
        id: id,
        results: [
          ...editZscoreValueForm
        ]
      }

      zscoreService.update(payload).then(
        (res) => {
          if (res.type === 'OK') {
            // Settings table data
            console.log(editZscoreValueForm)
            navigate('/staff/zscore')
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
  // end here

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
      console.log('Table imported')

      // Sending to the server
      setLoading(true)
      setResMessage('')

      let currentFile = uploadResultsForm.file[0]
      zscoreService
        .import(currentFile, (e) => {
          setProgress(Math.round((100 * e.loaded) / e.total))
        })
        .then(
          (res) => {
            if (res.type === 'OK') {
              toast.success(res.message)

              // Settings table data
              console.log(uploadResultsForm)
              navigate('/staff/zscore')
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

    zscoreService.getResults().then(
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
            <CCardHeader>Z score Table</CCardHeader>
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
                      <CIcon icon={cibAddthis}></CIcon> Import Z-score table
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
                    <CModalTitle>Import z-score table</CModalTitle>
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
                        <span>Import</span>
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
                            // <CTableDataCell>
                            //   <NavLink to={`/staff/zscoretable?id=${tableItem.id}`}>
                            //   <CButton color="warning">
                            //     <CIcon icon={cibAddthis}></CIcon> Edit
                            //   </CButton></NavLink>
                              
                            // </CTableDataCell>
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

export default StaffZScoreTable
