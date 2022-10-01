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

import { toast } from 'react-toastify'
import { cilSearch } from '@coreui/icons'
import { cilFilter, cilArrowRight, cibAddthis } from '@coreui/icons'
import { v_required } from '../../../utils/validator'
import CIcon from '@coreui/icons-react'

import logo from '../../../assets/images/logo-uoc.png'

import universityDetailsService from '../../../services/university/universityDetailsService'
import AppFetchDataLoader from '../../../components/loaders/AppFetchDataLoader'

const headers = [
  { id: 'universityName', name: 'Name', sortable: false },
  { id: 'universityUsername', name: 'Username', sortable: false },
]

function StaffUniversities() {
  const [data, setData] = useState([])
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  const [tableHeaders, setTableHeaders] = useState([])
  const [tableContent, setTableContent] = useState([])
  const [presistentTableContent, setPresistentTableContent] = useState([])

  // Set table data
  const setTableData = (headers, content) => {
    setTableHeaders(headers)
    setTableContent(content)
    setPresistentTableContent(content)
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

  useEffect(() => {
    setLoading(true)

    universityDetailsService.getAllUniversityList().then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data
          setTableData(headers, res.payload)
          console.log(res)
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

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Universities</CCardHeader>
            <CCardBody>
              <CRow className="p-1 bg-white rounded">
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
              </CRow>
              <br />
              <CRow className="m-1">
                {/* Data fetch loader */}
                <AppFetchDataLoader loading={loading} />

                <CTable bordered>
                  <CTableHead color="dark">
                    <CTableRow>
                      <CTableHeaderCell>Id.</CTableHeaderCell>
                      {tableHeaders.map((headerItem) => (
                        <CTableHeaderCell key={headerItem.id}>{headerItem.name}</CTableHeaderCell>
                      ))}
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {tableContent.map((tableItem, id) => (
                      <CTableRow key={tableItem.id}>
                        <CTableDataCell>{id}</CTableDataCell>
                        {tableHeaders.map((headerItem) => (
                          <CTableDataCell>
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
                            <NavLink to={`/staff/university/profile?username=${tableItem.universityUsername}`}>
                              <CIcon icon={cilArrowRight} />
                            </NavLink>
                          </CTableDataCell>
                        }
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default StaffUniversities
