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

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

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

  const handleOnDragEnd = (result) => {
    if(!result.destination) return;

    const items = Array.from(orderOfPreferences)
    const [reorderedItems] = items.splice(result.source.index,  1)
    items.splice(result.destination.index, 0, reorderedItems)

    setOrderOfPreferences(items)

    console.log(orderOfPreferences)
  }

  const removeItem = (unicode) => {
    setOrderOfPreferences((current) => current.filter((i) => i.unicode != unicode))
    
    console.log(orderOfPreferences)
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
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                      <Droppable droppableId="characters">
                        {(provided) => (
                          <CTableBody {...provided.droppableProps} ref={provided.innerRef}>
                            {orderOfPreferences.map((item, index) => (
                              <Draggable
                                key={item.unicode}
                                draggableId={item.unicode}
                                index={index}
                              >
                                {(provided2) => (
                                  <CTableRow
                                    {...provided2.draggableProps}
                                    {...provided2.dragHandleProps}
                                    ref={provided2.innerRef}
                                    className="swappable-row"
                                    key={index}
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
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </CTableBody>
                        )}
                      </Droppable>
                    </DragDropContext>
                  </CTable>
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
