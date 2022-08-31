import React from 'react'
import { useState, useEffect } from 'react'
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
import ou_img from '../../../../assets/images/university/wall/open_university_bg.jpg'
import sc_img from '../../../../assets/images/university/wall/sri_palee_campus_bg.jpg'
import tc_img from '../../../../assets/images/university/wall/trincomalee_campus_bg.jpg'
import vc_img from '../../../../assets/images/university/wall/vavuniya_campus_bg.jpg'
import iim_img from '../../../../assets/images/university/wall/institute_of_indigenous_medicine_bg.jpg'
import ucsc_img from '../../../../assets/images/university/wall/university_of_colombo_school_of_computing_bg.jpg'
import svias_img from '../../../../assets/images/university/wall/swami_vipulananda_institure_of_aesthetic_studies_bg.jpg'
import rafa_img from '../../../../assets/images/university/wall/ramanathan_academy_of_fine_arts_bg.jpg'

import { toast } from 'react-toastify'
import universityDetailsService from '../../../../services/university/universityDetailsService'

let uniWallImagesDict = {
  CMB: uoc_img,
  PDN: uop_img,
  SJP: uosj_img,
  KLN: uok_img,
  MRT: uom_img,
  UJA: uoj_img,
  RUH: uor_img,
  EUSL: eu_img,
  SEUSL: seu_img,
  RUSL: ru_img,
  SUSL: su_img,
  WUSL: wu_img,
  UWU: uwu_img,
  UVPA: uvpa_img,
  GWUIM: gwuim_img,
  OUSL: ou_img,
  IIM: iim_img,
  UCSC: ucsc_img,
  SVIAS: svias_img,
  RAFA: rafa_img,
  SP: sc_img,
  TRINCO: tc_img,
  VAV: vc_img,
}

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
  const [data, setData] = useState([])

  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    universityDetailsService.getAllUniversityList().then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data
          setData(res.payload)
          console.log(data)
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
        {data.map((item) => (
          <NavLink
            to={`/student/university/profile?username=${item.universityUsername}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <CCol xs key={item.universityUsername}>
              <CCard className="h-100 shadow-box">
                <CCardImage
                  height={200}
                  orientation="top"
                  src={uniWallImagesDict[item.universityUsername]}
                />
                <CCardBody>
                  <CCardTitle className="fs-6">{item.universityName}</CCardTitle>
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
