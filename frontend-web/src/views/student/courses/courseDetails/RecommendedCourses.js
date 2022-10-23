import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { toast } from 'react-toastify'

import AppFetchDataLoader from '../../../../components/loaders/AppFetchDataLoader'

import AppStandardContainer from '../../../../components/containers/AppStandardContainer'
import AppStandardTable from '../../../../components/table/AppStandardTable'
import AppStandardCard from '../../../../components/cards/AppStandardCard'

import authService from '../../../../services/authService'
import courseService from '../../../../services/university/courseService'
import universityAdmissionService from '../../../../services/student/universityAdmissionService'

const headers = [
  { id: 'id', name: 'No.', sortable: false },
  { id: 'name', name: 'Course', sortable: true },
  { id: 'stream', name: 'Stream', sortable: true },
  { id: 'course', name: 'Course code', sortable: true },
  { id: 'intake', name: 'Intake', sortable: true },
]

function RecommendedCourses() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [isStudentApppliedForUniversityAdmissions, setIsStudentApppliedForUniversityAdmissions] =
    useState(false)

  const [user, setUser] = useState(authService.getCurrentUser())

  const [olSubjectDetails, setOlSubjectDetails] = useState({
    englishResult: 'S',
    mathematicsResult: 'C',
    scienceResult: '',
  })

  const [alSubjectDetails, setAlSubjectDetails] = useState({
    alSubject1: 'asd',
    alSubject2: 'fsd',
    alSubject3: 'hfgh',
  })

  useEffect(() => {
    setLoading(true)

    universityAdmissionService.getStep2Form(user.username).then(
      (res) => {
        console.log('asasdasdd', res)

        setOlSubjectDetails({
          englishResult: res.englishResult,
          mathematicsResult: res.mathematicsResult,
          scienceResult: res.scienceResult,
        })

        setAlSubjectDetails({
          alSubject1: res.alSubject1,
          alSubject2: res.alSubject2,
          alSubject3: res.alSubject3,
        })

        // Payload setting
        const payload = {
          englishResult: res.englishResult,
          mathematicsResult: res.mathematicsResult,
          scienceResult: res.scienceResult,

          firstSubject: res.alSubject1,
          secondSubject: res.alSubject2,
          thirdSubject: res.alSubject3,
        }

        setIsStudentApppliedForUniversityAdmissions(true)

        console.log('asd', payload)

        courseService.getRecommendedCourseList(payload).then(
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
    <AppStandardContainer title="Recommended Courses">
      {isStudentApppliedForUniversityAdmissions ? (
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
              Note that following recommendations are filtered based on your G.C.E(O/L) subject
              results and G.C.E(A/L) subjects.
            </p>

            <div>
              <CRow>
                <CCol md={6}>
                  <AppStandardCard
                    title="G.C.E (O/L) Subjects and results"
                    color="bg-fade-success"
                    titleStyle="fw-semibold"
                  >
                    <CTable>
                      <CTableHead>
                        <CTableRow color="dark">
                          <CTableHeaderCell scope="col">Subject</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Grade</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        <CTableRow>
                          <CTableHeaderCell scope="row">English</CTableHeaderCell>
                          <CTableDataCell>
                            {olSubjectDetails.englishResult !== ''
                              ? olSubjectDetails.englishResult
                              : '---'}
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                          <CTableHeaderCell scope="row">Mathematics</CTableHeaderCell>
                          <CTableDataCell>
                            {olSubjectDetails.mathematicsResult !== ''
                              ? olSubjectDetails.mathematicsResult
                              : '---'}
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                          <CTableHeaderCell scope="row">Science</CTableHeaderCell>
                          <CTableDataCell>
                            {olSubjectDetails.scienceResult !== ''
                              ? olSubjectDetails.scienceResult
                              : '---'}
                          </CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    </CTable>
                  </AppStandardCard>
                </CCol>

                <CCol md={6}>
                  <AppStandardCard
                    title="G.C.E (A/L) Subjects"
                    color="bg-fade-warning"
                    titleStyle="fw-semibold"
                  >
                    <CListGroup>
                      <CListGroupItem>{alSubjectDetails.alSubject1}</CListGroupItem>
                      <CListGroupItem>{alSubjectDetails.alSubject2}</CListGroupItem>
                      <CListGroupItem>{alSubjectDetails.alSubject3}</CListGroupItem>
                    </CListGroup>
                  </AppStandardCard>
                </CCol>
              </CRow>
            </div>

            <p></p>
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

export default RecommendedCourses
