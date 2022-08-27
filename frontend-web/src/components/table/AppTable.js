import React from 'react'
import { useState, useEffect } from 'react'

import {
  CRow,
  CCol,
  CButton,
  CFormSelect,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CInputGroup,
  CFormInput,
  CInputGroupText,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function AppTable(props) {
  const [tableHeaders, setTableHeaders] = useState([])
  const [tableContent, setTableContent] = useState([])

  // Filter Bar
  const [filterOptions, setFilterOptions] = useState({
    field: 'all',
    order: 'ascending',
  })

  useEffect(() => {
    setTableHeaders(props.tableData.tableHeaders)
    setTableContent(props.tableData.tableContent)
  }, [])

  useEffect(() => {
    console.log(filterOptions.field)
  }, [filterOptions.field])

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
      setTableContent(props.tableData.tableContent)
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

  useEffect(() => {
    console.log(searchText)

    handleSearching()
  }, [searchText])

  const handleSearching = () => {
    const temp = props.tableData.tableContent
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
      setTableContent(temp)
    }
  }

  return (
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
            <CButton color="warning" type="button" className="text-white" onClick={handleSearching}>
              <CIcon icon={cilSearch} />
              <span>{'  '}Search</span>
            </CButton>
          </CInputGroup>
        </CCol>
      </CRow>
      <br />

      <CRow className="m-1">
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
                {props.tableData.tableHeaders.map((headerItem) => (
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
  )
}

export default AppTable
