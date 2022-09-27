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

import zscoreService from '../../../services/zscoreService'

const headers = [
  { id: 'z_id', name: 'No.', sortable: false },
  { id: 'uni_code', name: 'Uni-Code.', sortable: false },
  { id: 'uni_course', name: 'Course Name', sortable: true },
  { id: 'colombo', name: 'Colombo', sortable: true },
  { id: 'gampaha', name: 'Gampaha', sortable: true },
  { id: 'kalutara', name: 'Kalutara', sortable: true },
  { id: 'matale', name: 'Matale', sortable: true },
  { id: 'kandy', name: 'Kandy', sortable: true },
  { id: 'nuwaraeliya', name: 'Nuwara-Eliya', sortable: true },
  { id: 'galle', name: 'Galle', sortable: true },
  { id: 'matara', name: 'Matara', sortable: true },
  { id: 'hambantota', name: 'Hambantota', sortable: true },
  { id: 'jaffna', name: 'Jaffna', sortable: true },
  { id: 'kilinochchi', name: 'Kilinochchi', sortable: true },
  { id: 'mannar', name: 'Mannat', sortable: true },
  { id: 'mullaitivu', name: 'Mullaitivu', sortable: true },
  { id: 'vavuniya', name: 'Vavuniya', sortable: true },
  { id: 'trincomalee', name: 'Trincomalee', sortable: true },
  { id: 'batticaloa', name: 'Batticaloa', sortable: true },
  { id: 'ampara', name: 'Ampara', sortable: true },
  { id: 'puttalam', name: 'Puttalam', sortable: true },
  { id: 'kurunegala', name: 'Kurunegala', sortable: true },
  { id: 'anuradhapura', name: 'Anuradhapura', sortable: true },
  { id: 'polonnaruwa', name: 'Polonnaruwa', sortable: true },
  { id: 'badulla', name: 'Badulla', sortable: true },
  { id: 'monaragala', name: 'Monaragala', sortable: true },
  { id: 'kegalle', name: 'Kegalle', sortable: true },
  { id: 'ratnapura', name: 'Ratnapura', sortable: true },
]

function StaffZScoreTable() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  const [visible, setVisible] = useState(false)

  const [resMessage, setResMessage] = useState('')
  let navigate = useNavigate()

  // Creating course
  const [addZValueForm, setAddZValueForm] = useState({
    uni_code: '',
    uni_course: '',
    colombo: '',
    gampaha: '',
    kalutara: '',
    matale: '',
    kandy: '',
    nuwaraeliya: '',
    galle: '',
    matara: '',
    hambantota: '',
    jaffna: '',
    kilinochchi: '',
    mannar: '',
    mullaitivu: '',
    vavuniya: '',
    trincomalee: '',
    batticaloa: '',
    ampara: '',
    puttalam: '',
    kurunegala: '',
    anuradhapura: '',
    polonnaruwa: '',
    badulla: '',
    monaragala: '',
    kegalle: '',
    ratnapura: '',
  })

  // Display course
  const [courses, setCourses] = useState([
    {
      id: '',
      courseName: '',
    },
  ])

  const onUpdateInput = (e) => {
    setAddZValueForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // For data errors
  const [addZValueFormErrors, setAddZValueFormErrors] = useState({
    uni_codeError: '',
    uni_courseError: '',
    colomboError: '',
    gampahaError: '',
    kalutaraError: '',
    mataleError: '',
    kandyError: '',
    nuwaraeliyaError: '',
    galleError: '',
    mataraError: '',
    hambantotaError: '',
    jaffnaError: '',
    kilinochchiError: '',
    mannarError: '',
    mullaitivuError: '',
    vavuniyaError: '',
    trincomaleeError: '',
    batticaloaError: '',
    amparaError: '',
    puttalamError: '',
    kurunegalaError: '',
    anuradhapuraError: '',
    polonnaruwaError: '',
    badullaError: '',
    monaragalaError: '',
    kegalleError: '',
    ratnapuraError: '',
  })

  // Validate the data and
  // If valid send to the server
  // else show the errors
  const handleAddZValueFormSubmit = async (e) => {
    e.preventDefault()
    let uni_codeError = ''
    let uni_courseError = ''
    let colomboError = ''
    let gampahaError = ''
    let kalutaraError = ''
    let mataleError = ''
    let kandyError = ''
    let nuwaraeliyaError = ''
    let galleError = ''
    let mataraError = ''
    let hambantotaError = ''
    let jaffnaError = ''
    let kilinochchiError = ''
    let mannarError = ''
    let mullaitivuError = ''
    let vavuniyaError = ''
    let trincomaleeError = ''
    let batticaloaError = ''
    let amparaError = ''
    let puttalamError = ''
    let kurunegalaError = ''
    let anuradhapuraError = ''
    let polonnaruwaError = ''
    let badullaError = ''
    let monaragalaError = ''
    let kegalleError = ''
    let ratnapuraError = ''

    if (!v_required(addZValueForm.uni_code)) {
        uni_codeError = 'uni-code can not be empty.'
    }

    if (!v_required(addZValueForm.uni_course)) {
        uni_courseError = 'Course name can not be empty.'
    }


    // If errors exist, show errors
    setAddZValueFormErrors({
        uni_codeError,
        uni_courseError,
    })

    console.log(addZValueFormErrors)

    // If no errors exist, send to the server
    if (!(uni_codeError || uni_courseError)) {
      console.log('New entry added to the Z-Score table')

      // Sending to the server
      setLoading(true)
      setResMessage('')

      zscoreService.create(addZValueForm).then(
        (res) => {
          

          if (res.type === 'OK') {
            toast.success(res.message)
  
            // Settings table data
          console.log(addZValueForm)
            navigate('/staff/zscoretable')
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

    zscoreService.getZScoreTable().then(
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

  // Display streams
//   useEffect(() => {
//     setLoading(true)

//     courseService.getAllStreamsList().then(
//       (res) => {
//         if (res.type === 'OK') {
//           toast.success(res.message)
//           setStreams(res.payload)
//         } else if (res.type === 'BAD') {
//           toast.error(res.message)
//         }
//         setLoading(false)
//       },
//       (error) => {
//         const res =
//           (error.response && error.response.data && error.response.data.message) ||
//           error.message ||
//           error.toString()

//         // After recieving the server request
//         toast.error(res)
//         setLoading(false)
//       },
//     )
//   }, [])

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
//   const [filterOptions, setFilterOptions] = useState({
//     field: 'all',
//     order: 'ascending',
//   })

  // Update the form data while input
//   const onFilterOptionsUpdateInput = (e) => {
//     setFilterOptions((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleFiltering = (e) => {
//     e.preventDefault()

//     if (filterOptions.field !== 'all') {
//       const sortedTemp = [...tableContent].sort(
//         (a, b) =>
//           a[filterOptions.field]
//             .toString()
//             .localeCompare(b[filterOptions.field].toString(), 'en', { numeric: true }) *
//           (filterOptions.order === 'ascending' ? 1 : -1),
//       )

//       setTableContent(sortedTemp)
//     } else {
//       setTableContent(tableContent)
//     }

//     console.log(filterOptions)
//   }

//   const FilterBar = () => {
//     return (
//       <CInputGroup>
//         <CInputGroupText>Filter By</CInputGroupText>
//         <CFormSelect
//           aria-label="filter-option-1"
//           name="field"
//           onChange={onFilterOptionsUpdateInput}
//           value={filterOptions.field}
//         >
//           <option key="all" value="all">
//             All
//           </option>
//           {tableHeaders.map(
//             (headerItem) =>
//               headerItem.sortable && (
//                 <option key={headerItem.id} value={headerItem.id}>
//                   {headerItem.name}
//                 </option>
//               ),
//           )}
//         </CFormSelect>
//         <CInputGroupText> in </CInputGroupText>
//         <CFormSelect
//           aria-label="filter-option-2"
//           name="order"
//           onChange={onFilterOptionsUpdateInput}
//           value={filterOptions.order}
//         >
//           <option value="ascending">Ascending</option>
//           <option value="descending">Descending</option>
//         </CFormSelect>
//         <CInputGroupText> order </CInputGroupText>
//         <CButton color="warning" type="button" className="text-white" onClick={handleFiltering}>
//           <CIcon icon={cilFilter} />
//           <span>{'  '}Filter</span>
//         </CButton>
//       </CInputGroup>
//     )
//   }

  // Search Bar
//   const [searchText, setSearchOption] = useState('')

  // Update the form data while input
//   const onSearchOptionsUpdateInput = (e) => {
//     setSearchOption(e.target.value)
//   }

//   const handleSearching = () => {
//     const temp = tableContent
//     const searchedTemp = []

//     console.log('called', searchText)

//     if (searchText !== '') {
//       temp.forEach((tableItem) => {
//         for (const headerItem of tableHeaders) {
//           console.log(tableItem['id'], headerItem.id)
//           if (
//             tableItem[headerItem.id].toString().toLowerCase().includes(searchText.toLowerCase())
//           ) {
//             searchedTemp.push(tableItem)
//             break // break statement not working on forEach, hence used for loop
//           }
//         }
//       })

//       setTableContent(searchedTemp)
//     } else {
//       setTableContent(presistentTableContent)
//     }
//   }

  return (
    <div>
      <div style={{ textAlign: 'right' }}>
        <CButton color="success" onClick={() => setVisible(!visible)}>
          <CIcon icon={cibAddthis}></CIcon> Add Z-Values
        </CButton>

        <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Add new z value</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              type="text"
              id="uni_course"
              floatingLabel="Course"
              name="course"
              placeholder="Medicine"
              onChange={onUpdateInput}
              value={addZValueForm.uni_course}
              feedback={addZValueFormErrors.uni_courseError}
              invalid={addZValueFormErrors.uni_courseError ? true : false}
            />
            <br></br>
            {/* <CFormSelect
              name="stream"
              onChange={onUpdateInput}
              value={addCourseForm.stream}
              feedback={addCourseFormErrors.streamError}
              invalid={addCourseFormErrors.streamError ? true : false}
            >
              <option selected>Select stream</option>
              {streams.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.id} - {e.streamName}
                </option>
              ))}
            </CFormSelect> */}
            <br></br>
            <CFormInput
              type="number"
              id="colombo"
              floatingLabel="Colombo"
              name="colombo"
              placeholder="2.0000"
              onChange={onUpdateInput}
              value={addZValueForm.colombo}
            //   feedback={addCourseFormErrors.codeError}
            //   invalid={addCourseFormErrors.codeError ? true : false}
            />
            <br></br>
            <CFormInput
              type="number"
              id="gampaha"
              floatingLabel="Gampaha"
              name="gampaha"
              placeholder="2.0000"
              onChange={onUpdateInput}
              value={addZValueForm.gampaha}
            //   feedback={addCourseFormErrors.codeError}
            //   invalid={addCourseFormErrors.codeError ? true : false}
            />
            <CFormInput
              type="number"
              id="kalutara"
              floatingLabel="Kalutara"
              name="kalutara"
              placeholder="2.0000"
              onChange={onUpdateInput}
              value={addZValueForm.kalutara}
            //   feedback={addCourseFormErrors.codeError}
            //   invalid={addCourseFormErrors.codeError ? true : false}
            />
            <CFormInput
              type="number"
              id="matale"
              floatingLabel="Matale"
              name="matale"
              placeholder="2.0000"
              onChange={onUpdateInput}
              value={addZValueForm.matale}
            //   feedback={addCourseFormErrors.codeError}
            //   invalid={addCourseFormErrors.codeError ? true : false}
            />
            <CFormInput
              type="number"
              id="kandy"
              floatingLabel="Kandy"
              name="kandy"
              placeholder="2.0000"
              onChange={onUpdateInput}
              value={addZValueForm.kandy}
            //   feedback={addCourseFormErrors.codeError}
            //   invalid={addCourseFormErrors.codeError ? true : false}
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
            <CButton color="primary" onClick={handleAddZValueFormSubmit}>
              {loading ? (
                <span>
                  <CSpinner size="sm" /> Adding
                </span>
              ) : (
                <span>Add</span>
              )}
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
      <br></br>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Z-Score Table</CCardHeader>
            <CCardBody>
              <div>
                {/* <CRow className="py-2 bg-light rounded"> */}
                  {/* Filter bar */}
                  {/* <CCol md={6}>
                    <FilterBar />
                  </CCol> */}

                  {/* <CCol md={4} className="ms-auto"> */}
                    {/* Search bar */}
                    {/* <CInputGroup>
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
                            //   className={filterOptions.field === headerItem.id ? 'bg-light ' : ''}
                            >
                              {/* if search text is empty, show default text */}
                              {/* {searchText === '' && <span>{tableItem[headerItem.id]}</span>} */}
                              {/* if search text is not empty, if matching exists highlight else show default */}
                              {/* {searchText !== '' && (
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
                              )} */}
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

export default StaffZScoreTable
