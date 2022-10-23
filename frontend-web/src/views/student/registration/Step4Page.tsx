import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  CNav,
  CNavItem,
  CNavLink,
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CFormInput,
  CFormSelect,
  CButton,
  CForm,
  CFormCheck,
  CButtonGroup,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CAlert,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSwapVertical, cilDelete } from '@coreui/icons'

function Step4Page() {
  const [orderOfPreferences, setOrderOfPreferences] = useState([
    {
      unicode: '001A',
      courseName: 'Medicine',
      universityName: 'University of Colombo',
    },
    {
      unicode: '002B',
      courseName: 'Dental Surgery',
      universityName: 'University of Peradeniya',
    },
    {
      unicode: '001M',
      courseName: 'Medicine',
      universityName: 'Wayamba University of Sri Lanka',
    },
  ])

  const removeItem = (unicode) => {
    setOrderOfPreferences((current) => current.filter((i) => i.unicode != unicode))
  }

  // const [fruitItems, setFruitItems] = useState(['Apple', 'Mango', 'Banana'])

  // Save reference for dragItem and dragOverItem
  const dragItem = useRef<any>(null)
  const dragOverItem = useRef<any>(null)

  // const handle drag sorting
  const handleSort = () => {
    // duplicate items
    let _orderOfPreferences = [...orderOfPreferences]

    // remove and save the dragged item content
    const draggedItemContent = _orderOfPreferences.splice(dragItem.current, 1)[0]

    // switch the position
    _orderOfPreferences.splice(dragOverItem.current, 0, draggedItemContent)

    // rest the position ref
    dragItem.current = null
    dragOverItem.current = null

    // update the actual array
    setOrderOfPreferences(_orderOfPreferences)

    console.log(orderOfPreferences)
  }

  // const handleSort = () => {
  //   // duplicate items
  //   let _fruitItems = [...fruitItems]

  //   // remove and save the dragged item content
  //   const draggedItemContent = _fruitItems.splice(dragItem.current, 1)[0]

  //   // switch the position
  //   _fruitItems.splice(dragOverItem.current, 0, draggedItemContent)

  //   // rest the position ref
  //   dragItem.current = null
  //   dragOverItem.current = null

  //   // update the actual array
  //   setFruitItems(_fruitItems)

  //   console.log(fruitItems)
  // }

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('drag end')
  }

  return (
    <div>
      <header>
        <CNav variant="tabs">
          <CNavItem>
            <NavLink to="/student/registration/step1" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 1</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step2" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 2</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step3" style={{ textDecoration: 'none' }}>
              <CNavLink>Step 3</CNavLink>
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink to="/student/registration/step4" style={{ textDecoration: 'none' }}>
              <CNavLink active>Step 4</CNavLink>
            </NavLink>
          </CNavItem>
        </CNav>
      </header>
      <CContainer className="bg-white">
        <CRow className="p-2">
          <CCard className="p-2">
            <CCardBody>
              {/* Order of Preference for Courses Study and Universities */}
              <CCardTitle>Order of Preference for Courses Study and Universities</CCardTitle>
              <hr />
              <div>
                <CForm className="row g-3 needs-validation" noValidate>
                  <CCol sm={5}>
                    <CFormSelect label="Course" aria-label="course-select" name="course">
                      <option selected>Choose...</option>
                    </CFormSelect>
                  </CCol>
                  <CCol sm={5}>
                    <CFormSelect
                      label="University"
                      aria-label="university-select"
                      name="university"
                    >
                      <option selected>Choose...</option>
                    </CFormSelect>
                  </CCol>
                  <CCol sm={2}>
                    <CButton color="primary" className="w-100 mt-3 h-75">
                      Add
                    </CButton>
                  </CCol>

                  <CTable bordered>
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell>Unicode</CTableHeaderCell>
                        <CTableHeaderCell>Course</CTableHeaderCell>
                        <CTableHeaderCell>University</CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {/* {orderOfPreferences.map((item, index) => (
                        <CTableRow
                          className="hoverable-row"
                          key={index}
                          draggable
                          onDragStart={(e) => (dragItem.current = index)}
                          onDragEnter={(e) => (dragOverItem.current = index)}
                          onDragEnd={handleSort}
                          onDragOver={(e) => e.preventDefault()}
                        >
                          <CTableDataCell className="hoverable-card">
                            <CIcon icon={cilSwapVertical} customClassName="nav-icon" />
                          </CTableDataCell>
                          <CTableDataCell>{item.unicode}</CTableDataCell>
                          <CTableDataCell>{item.courseName}</CTableDataCell>
                          <CTableDataCell>{item.universityName}</CTableDataCell>
                          <CTableDataCell
                            className="hoverable-card"
                            onClick={() => removeItem(item.unicode)}
                          >
                            <CIcon icon={cilDelete} customClassName="nav-icon" />
                          </CTableDataCell>
                        </CTableRow>
                      ))} */}
                    </CTableBody>
                  </CTable>

                  {/* {fruitItems.map((item, index) => (
                    <div
                      key={index}
                      draggable
                      onDragStart={(e) => (dragItem.current = index)}
                      onDragEnter={(e) => (dragOverItem.current = index)}
                      onDragEnd={handleSort}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      {item}
                    </div>
                  ))} */}
                </CForm>
              </div>
            </CCardBody>
          </CCard>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Step4Page
