import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import {
  CCard,
  CTable,
  CCol,
  CTableHead,
  CForm,
  CFormInput,
  CFormLabel,
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
  CCardTitle,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter, cilDelete, cibAddthis } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { toast } from 'react-toastify'

import AppFetchDataLoader from '../../../components/loaders/AppFetchDataLoader'

import zscoreService from '../../../services/zscoreService'

const headers = [
    { id: 'id', name: '#', sortable: true },
    { id: 'course', name: 'Course', sortable: true },
    { id: 'uni', name: 'University', sortable: true },
    { id: 'unicode', name: 'Uni - Code', sortable: true },
    { id: 'district', name: 'District', sortable: true },
    { id: 'zscore', name: 'Required minimum Z - Score', sortable: true },
    
]

function ZscoreEdit(){
// For the server side requests and responses
    const [loading, setLoading] = useState(false)
      
    const [visible, setVisible] = useState(false)

    const [resMessage, setResMessage] = useState('')
    let navigate = useNavigate()

    // ADVANCED TABLE
    const [tableHeaders, setTableHeaders] = useState([])
    const [tableContent, setTableContent] = useState([])
    const [presistentTableContent, setPresistentTableContent] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()
    const [id, setId] = useState(searchParams.get('id'))

    // Editing results
    const [editZscoreValueForm, setEditZscoreValueForm] = useState([])

    const [editZscoreValueFormErrors, setEditZscoreValueFormErrors] = useState([])

    useEffect(() => {
    setLoading(true)

        zscoreService.getZscorevalue(id).then(
            (res) => {
            if (res.type === 'OK') {
                setTableHeaders(headers)
                setTableContent(res.payload)
                console.log(res.payload)
                setEditZscoreValueForm(res.payload)
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

const handleEditZscoreValueFormSubmit = async (e) => {
  e.preventDefault()
  let zscoreError = ''
  let courseError = ''
  let uniError = ''
  let unicodeError = ''
  let districtError = ''

  
  setEditZscoreValueFormErrors({
    zscoreError,
    courseError,
    uniError,
    unicodeError,
    districtError
  })

  // If no errors exist, send to the server
  if (
    !(
    zscoreError &&
    courseError &&
    uniError &&
    unicodeError &&
    districtError
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
          navigate('/staff/zscoretable?id='+ id)
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
    {/* <div style={{ textAlign: 'right' }}> */}
      {/* <NavLink to={`/staff/results/al/detailed/edit?id=${id}`}>asd</NavLink> */}
      {/* <CButton color="warning" onClick={() => setVisible(!visible)}>
        <CIcon icon={cibAddthis}></CIcon> Edit Results
      </CButton>
      {editZscoreValueForm && (
        <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Edit Results</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm>
              {editZscoreValueForm.map((item) => (
                <CFormInput
                  type="text"
                  id="age"
                  label={item.course}
                  name="age"
                  onChange={(e) => {
                    const newState = editZscoreValueForm.map((obj) => {
                      if (obj.id === item.id) {
                        return { ...obj, age: e.target.value };
                      }
                      return obj;
                    })
                    setEditZscoreValueForm(newState)
                  }}
                  value={item.age}
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
            <CButton color="primary" onClick={handleEditZscoreValueFormSubmit}>
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
    </div> */}

    <CRow>
      <CCol xs>
        <CCard className="mb-4 text-center">
          <CCardTitle >Edit Z-Score value</CCardTitle>

          <CCardBody>
            <div>
            {/* <CRow className="py-2 bg-light rounded">

                <CCol md={6}>
                  <FilterBar />
                </CCol>

                <CCol md={4} className="ms-auto">

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
              </CRow> */}
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

export default ZscoreEdit