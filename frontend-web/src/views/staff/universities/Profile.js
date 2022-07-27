import React from 'react'
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CRow,
  CCol,
} from '@coreui/react'
import logo from '../../../assets/images/logo-uoc.png'
function StaffUniversityProfile() {
  const text = ["The University of Colombo (informally Colombo University or UoC) is a public research university located primarily in Colombo, Sri Lanka. It is the oldest institution of modern higher education in Sri Lanka. Specialised in the fields of natural, social, and applied sciences as well as mathematics, computer sciences, and law. It is ranked among the top 10 universities in South Asia.[2] The University of Colombo was founded in 1921 as University College Colombo, affiliated to the University of London. Degrees were issued to its students from 1923 onwards. The university traces its roots to 1870 when the Ceylon Medical School was established.[3] UoC has produced notable alumni in the fields of science, law, economics, business, literature, and politics."]
  return (
    <CCard className="mb-3" >
      <CRow className="g-0">
        <CCol md={4}>
          <CCardImage src={logo} style={{ width: '14rem', height: '18rem' }} />
        </CCol>
        <CCol md={8}>
          <CCardBody>
            <CCardTitle>University of Colombo</CCardTitle>
            <CCardText>
              {text}
            </CCardText>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  )
}

export default StaffUniversityProfile
