import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CInputGroup,
  CFormInput,
  CInputGroupText,
  CFormSelect,
  CButton,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { toast } from 'react-toastify'

import AppFetchDataLoader from '../../../../components/loaders/AppFetchDataLoader'

import AppStandardContainer from '../../../../components/containers/AppStandardContainer'

import authService from '../../../../services/authService'
import universityAdmissionService from '../../../../services/student/universityAdmissionService'

const headers = [
  { id: 'unicode', name: 'Unicode', sortable: true },
  { id: 'courseName', name: 'Course', sortable: true },
  { id: 'universityName', name: 'University', sortable: true },
]

function MyCourses() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [isOrderOfPreferencesExists, setIsOrderOfPreferencesExists] = useState(false)

  const [user, setUser] = useState(authService.getCurrentUser)

  useEffect(() => {
    setLoading(true)
    setIsOrderOfPreferencesExists(false)

    axios
      .get(
        'http://localhost:8081/api/student/universityAdmission/step4Form?username=' + user.username,
      )
      .then((res) => {
        if (res.data.unicodeRecords !== null) {
          setIsOrderOfPreferencesExists(true)
        }
        setTableData(headers, res.data.unicodeRecords)
        setLoading(false)
      })
  }, [])

  const onClickUniversiyCourseRecord = (courseCode) => {
    navigate('/student/courses/overview?courseCode=' + courseCode)
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

  // useEffect(() => {
  //   console.log(searchText)

  //   handleSearching()
  // }, [searchText])

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
    <AppStandardContainer title="All Courses">
      {isOrderOfPreferencesExists ? (
        <div>
          {/* Data fetch loader */}
          <AppFetchDataLoader loading={loading} />
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
            <p>
              Following courses list is consist of order of preferences you've selected at the{' '}
              <b>University Admissions(Step 4)</b>.
            </p>
            <p>
              If you want to
              <NavLink to={`/student/registration/step4`}><b> Change order if preferences </b></NavLink>
              click on the link.
            </p>
            <CTable hover responsive bordered>
              <CTableHead color="dark">
                <CTableRow>
                  {tableHeaders.map((headerItem) => (
                    <CTableHeaderCell key={headerItem.id}>{headerItem.name}</CTableHeaderCell>
                  ))}
                  <CTableHeaderCell></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {tableContent.map((tableItem) => (
                  <CTableRow
                    key={tableItem.id}
                    onClick={() => onClickUniversiyCourseRecord(tableItem.course)}
                  >
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
      ) : (
        <div className="text-center my-3">
          <h2>You haven't selected order of preferences yet!</h2>
          <p>Please fill the university admission form to access this feature. </p>
          <NavLink to={`/student/registration`} style={{ textDecoration: 'none' }}>
            <CButton color="success text-white" type="button" className="p-2">
              Apply for University Admissions
            </CButton>
          </NavLink>
        </div>
      )}
    </AppStandardContainer>
  )
}

export default MyCourses
