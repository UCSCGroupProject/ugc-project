import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CInputGroup,
  CFormInput,
  CButton,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import uoc_img from '../../../../assets/images/university/wall/university_of_colombo_bg.jpg'
import uop_img from '../../../../assets/images/university/wall/university_of_peradeniya_bg.jpg'
import uosj_img from '../../../../assets/images/university/wall/university_of_sri_jayaawardhanapura_bg.jpg'
import uok_img from '../../../../assets/images/university/wall/university_of_kelaniya_bg.jpg'
import uom_img from '../../../../assets/images/university/wall/university_of_moratuwa_bg.jpg'
import uoj_img from '../../../../assets/images/university/wall/university_of_jaffna_bg.png'
import uor_img from '../../../../assets/images/university/wall/university_of_ruhuna_bg.jpg'
import eu_img from '../../../../assets/images/university/wall/esatern_university_bg.jpg'
import seu_img from '../../../../assets/images/university/wall/south_esatern_university_bg.jpg'
import ru_img from '../../../../assets/images/university/wall/rajarata_university_bg.jpg'
import su_img from '../../../../assets/images/university/wall/sabaragamuwa_university_bg.jpg'
import wu_img from '../../../../assets/images/university/wall/wayamba_university_logo.jpg'
import uwu_img from '../../../../assets/images/university/wall/uva_wellassa_university_bg.jpg'
import uvpa_img from '../../../../assets/images/university/wall/university_of_the_visual_&_performing_arts_bg.jpg'
import gwuim_img from '../../../../assets/images/university/wall/gampaha_wickramarachchi_university_of_indigenous_medicine_bg.jpg'
import sc_img from '../../../../assets/images/university/wall/sri_palee_campus_bg.jpg'
import tc_img from '../../../../assets/images/university/wall/trincomalee_campus_bg.jpg'
import vc_img from '../../../../assets/images/university/wall/vavuniya_campus_logo.jpg'
import iim_img from '../../../../assets/images/university/wall/institute_of_ndigenous_medicine_bg.jpg'
import ucsc_img from '../../../../assets/images/university/wall/university_of_colombo_school_of_computing_bg.jpg'
import svias_img from '../../../../assets/images/university/wall/swami_vipulananda_institure_of_aesthetic_studies_bg.jpg'
import rafa_img from '../../../../assets/images/university/wall/ramanathan_academy_of_fine_arts_bg.jpg'

const universityData = [
  {
    id: 1,
    name: 'University of Colombo',
    wall: uoc_img,
  },
  {
    id: 2,
    name: 'University of Peradeniya',
    wall: uop_img,
  },
  {
    id: 3,
    name: 'University of Sri Jayewardenepura',
    wall: uosj_img,
  },
  {
    id: 4,
    name: ' University of Kelaniya',
    wall: uok_img,
  },
  {
    id: 5,
    name: 'University of Moratuwa',
    wall: uom_img,
  },
  {
    id: 6,
    name: ' University of Jaffna',
    wall: uoj_img,
  },
  {
    id: 7,
    name: 'University of Ruhuna',
    wall: uor_img,
  },
  {
    id: 8,
    name: 'Eastern University, Sri Lanka',
    wall: eu_img,
  },
  {
    id: 9,
    name: 'South Eastern University of Sri Lanka',
    wall: seu_img,
  },
  {
    id: 10,
    name: 'Rajarata University of Sri Lanka',
    wall: ru_img,
  },
  {
    id: 11,
    name: ' Sabaragamuwa University of Sri Lanka',
    wall: su_img,
  },
  {
    id: 12,
    name: 'Wayamba University of Sri Lanka',
    wall: wu_img,
  },
  {
    id: 13,
    name: 'Uva Wellassa University of Sri Lanka',
    wall: uwu_img,
  },
  {
    id: 14,
    name: ' University of the Visual & Performing Arts',
    wall: uvpa_img,
  },
  {
    id: 15,
    name: 'The Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka',
    wall: gwuim_img,
  },
  {
    id: 16,
    name: 'Sripalee Campus, University of Colombo',
    wall: sc_img,
  },
  {
    id: 17,
    name: 'Trincomalee Campus, Eastern University, Sri Lanka',
    wall: tc_img,
  },
  {
    id: 18,
    name: 'Vavuniya Campus, University of Jaffna',
    wall: vc_img,
  },
  {
    id: 19,
    name: 'Institute of Indigenous Medicine, University of Colombo',
    wall: iim_img,
  },
  {
    id: 20,
    name: 'University of Colombo School of Computing',
    wall: ucsc_img,
  },
  {
    id: 21,
    name: 'Swami Vipulananda Institute of Aesthetic Studies, Eastern University, Sri Lanka',
    wall: svias_img,
  },
  {
    id: 22,
    name: 'Swami Vipulananda Institute of Aesthetic Studies, Eastern University, Sri Lanka',
    wall: rafa_img,
  },
]

function AllUniversities() {
  return (
    <div>
      <CRow className="p-1 bg-white rounded">
        <CCol md={4} className="ms-auto">
          <CInputGroup>
            <CFormInput type="text" name="phone" placeholder="Search..." />
            <CButton color="warning" type="button" className="text-white">
              <CIcon icon={cilSearch} />
              <span>{'  '}Search</span>
            </CButton>
          </CInputGroup>
        </CCol>
      </CRow>
      <br />

      <CRow xs={{ cols: 1, gutter: 3 }} md={{ cols: 3 }}>
        {universityData.map((item) => (
          <NavLink
            to="/student/university/profile"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <CCol xs key={item.id}>
              <CCard className="h-100 shadow-box">
                <CCardImage height={200} orientation="top" src={item.wall} />
                <CCardBody>
                  <CCardTitle>{item.name}</CCardTitle>
                  {/* <CCardText>temp</CCardText> */}
                </CCardBody>
                {/* <CCardFooter>
                <small className="text-medium-emphasis">Last updated 3 mins ago</small>
              </CCardFooter> */}
              </CCard>
            </CCol>
          </NavLink>
        ))}
      </CRow>
    </div>
  )
}

export default AllUniversities
