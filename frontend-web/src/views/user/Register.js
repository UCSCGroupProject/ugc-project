import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CCardImage,
  CCardTitle,
  CRow,
  CCardText,
  CNavLink,
} from '@coreui/react'

import wall_student from '../../../src/assets/images/register/wall_student.jpg'
import wall_university from '../../../src/assets/images/register/wall_university.jpg'
import wall_staff from '../../../src/assets/images/register/wall_staff.jpg'
import wall_school from '../../../src/assets/images/register/wall_school.jpg'

const data = [
  {
    id: 1,
    name: 'Student',
    img: wall_student,
    to: '/register/student',
  },
  {
    id: 1,
    name: 'University',
    img: wall_university,
    to: '/register/university',
  },
  {
    id: 1,
    name: 'Staff',
    img: wall_staff,
    to: '/register/staff',
  },
  {
    id: 1,
    name: 'School',
    img: wall_school,
    to: '/register/school',
  },
]

function Register() {
  return (
    <div className="bg-light  d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <h1 className="text-center">Sign up</h1>
                <p className="text-medium-emphasis text-center">Who are you?</p>

                <CContainer>
                  <CRow className="g-3">
                    {data.map((item) => (
                      <CCol md={3} key={item.id}>
                        <CNavLink to={item.to} component={NavLink}>
                          <CCard className="hoverable-card">
                            <CCardImage orientation="top" height={170} src={item.img} />
                            <CCardBody>
                              <CCardTitle className="text-center">{item.name}</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </CCardText>
                            </CCardBody>
                          </CCard>
                        </CNavLink>
                      </CCol>
                    ))}
                  </CRow>
                </CContainer>
                <br />
                <hr />

                <div className="my-4 text-center">
                  Already have an account? <NavLink to="/login">Login</NavLink>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
