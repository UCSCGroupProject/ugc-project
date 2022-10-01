import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CContainer,
  CImage,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CRow,
  CCol,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CCard,
  CCardHeader,
  CCardBody,
} from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'

import { useSearchParams } from 'react-router-dom'

import { FaPhone, FaWifi, FaAt } from 'react-icons/fa'

import { toast } from 'react-toastify'

import AppFetchDataLoader from '../../../../components/loaders/AppFetchDataLoader'

import universityDetailsService from '../../../../services/university/universityDetailsService'

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

import uoc_logo_img from '../../../../assets/images/university/logo/university_of_colombo_logo.png'
import uop_logo_img from '../../../../assets/images/university/logo/university_of_peradeniya_logo.png'
import uosj_logo_img from '../../../../assets/images/university/logo/university_of_sri_jayaawardhanapura_logo.png'
import uok_logo_img from '../../../../assets/images/university/logo/university_of_kelaniya_logo.png'
import uom_logo_img from '../../../../assets/images/university/logo/university_of_moratuwa_logo.png'
import uoj_logo_img from '../../../../assets/images/university/logo/university_of_jaffna_logo.png'
import uor_logo_img from '../../../../assets/images/university/logo/university_of_ruhuna_logo.png'
import eu_logo_img from '../../../../assets/images/university/logo/esatern_university_logo.png'
import seu_logo_img from '../../../../assets/images/university/logo/south_esatern_university_logo.png'
import ru_logo_img from '../../../../assets/images/university/logo/rajarata_university_logo.png'
import su_logo_img from '../../../../assets/images/university/logo/sabaragamuwa_university_logo.png'
import wu_logo_img from '../../../../assets/images/university/logo/wayamba_university_logo.png'
import uwu_logo_img from '../../../../assets/images/university/logo/uva_wellassa_university_logo.png'
import uvpa_logo_img from '../../../../assets/images/university/logo/university_of_the_visual_&_performing_arts_logo.png'
import gwuim_logo_img from '../../../../assets/images/university/logo/gampaha_wickramarachchi_university_of_indigenous_medicine_logo.png'
import ou_logo_img from '../../../../assets/images/university/logo/open_university_logo.png'
import sc_logo_img from '../../../../assets/images/university/logo/sri_palee_campus_logo.png'
import tc_logo_img from '../../../../assets/images/university/logo/trincomalee_campus_logo.png'
import vc_logo_img from '../../../../assets/images/university/logo/vavuniya_campus_logo.png'
import iim_logo_img from '../../../../assets/images/university/logo/institute_of_indigenous_medicine_logo.png'
import ucsc_logo_img from '../../../../assets/images/university/logo/university_of_colombo_school_of_computing_logo.png'
import svias_logo_img from '../../../../assets/images/university/logo/swami_vipulananda_institure_of_aesthetic_studies_logo.png'
import rafa_logo_img from '../../../../assets/images/university/logo/ramanathan_academy_of_fine_arts_logo.png'

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

let uniLogoImagesDict = {
  CMB: uoc_logo_img,
  PDN: uop_logo_img,
  SJP: uosj_logo_img,
  KLN: uok_logo_img,
  MRT: uom_logo_img,
  UJA: uoj_logo_img,
  RUH: uor_logo_img,
  EUSL: eu_logo_img,
  SEUSL: seu_logo_img,
  RUSL: ru_logo_img,
  SUSL: su_logo_img,
  WUSL: wu_logo_img,
  UWU: uwu_logo_img,
  UVPA: uvpa_logo_img,
  GWUIM: gwuim_logo_img,
  OUSL: ou_logo_img,
  IIM: iim_logo_img,
  UCSC: ucsc_logo_img,
  SVIAS: svias_logo_img,
  RAFA: rafa_logo_img,
  SP: sc_logo_img,
  TRINCO: tc_logo_img,
  VAV: vc_logo_img,
}

function UniversityProfile() {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const [username, setUsername] = useState(searchParams.get('username'))

  const [data, setData] = useState({})

  // For the server side requests and responses
  const [loading, setLoading] = useState(false)

  let content = {}

  useEffect(() => {
    setLoading(true)

    universityDetailsService.getUniversityProfile(username).then(
      (res) => {
        if (res.type === 'OK') {
          toast.success(res.message)

          // Settings table data
          content = res.payload
          setData(res.payload)

          console.log(content.uniProfileCourseDetailList)

          categorizeData(res.payload.uniProfileCourseDetailList)
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

  // Determine the steams of available courses
  const [streams, setStreams] = useState([])
  const [indexedStreams, setIndexedStreams] = useState([])
  const [courseCounts, setCourseCounts] = useState([])

  const categorizeData = (courses) => {
    const tempStream = []
    const indexedTempStream = []
    const tempCourseCounts = []
    const courseList = [...courses]

    // Stream population
    courseList.forEach((item) => {
      if (!tempStream.includes(item.streamName)) {
        tempStream.push(item.streamName)
      } else {
        // console.log('already contains')
      }
    })

    setStreams(tempStream)

    // Indexising streams and population
    let counter = 1
    tempStream.forEach((item) => {
      indexedTempStream.push({ id: counter, stream: item })
      counter++
    })

    setIndexedStreams(indexedTempStream)

    // Count course amount with respect to each particular stream
    let courseCounter = 0
    tempStream.forEach((streamItem) => {
      courseList.forEach((courseItem) => {
        if (courseItem.streamName === streamItem) {
          courseCounter++
        }
      })

      tempCourseCounts.push(courseCounter)
      courseCounter = 0
    })

    setCourseCounts(tempCourseCounts)
  }

  return (
    <CContainer className="bg-white border rounded-3">
      <CImage src={uniWallImagesDict[username]} className="w-100 wall-image mt-3 rounded-top" />

      {/* Data fetch loader */}
      <AppFetchDataLoader loading={loading} />

      <div>
        <div className="p-3 bg-light border">
          <CRow>
            <CCol md={6}>
              <CRow>
                <CCol md="auto">
                  <CImage src={uniLogoImagesDict[username]} height={50} className="mt-1" />
                </CCol>
                <CCol md="auto">
                  <h2>{data.name}</h2>
                  <h6>{data.address}</h6>

                  <span>
                    <FaWifi className="fs-6 me-2" />
                    <a href="www.uoc.lk">
                      <b>www.uoc.lk [Content Need to be Added]</b>
                    </a>
                  </span>

                  <h6 className="mt-2">
                    <FaAt className="fs-6 me-2" />
                    {data.email}
                  </h6>
                  <h6 className="mt-2">
                    <FaPhone className="fs-6 me-2" />
                    {data.phone}
                  </h6>
                  <CRow className="ms-2 pt-2">
                    <CTable bordered style={{ fontSize: '13px' }} borderColor="secondary">
                      <CTableBody>
                        <CTableRow className="text-center">
                          <CTableHeaderCell className="p-1" color="primary">
                            Rank
                          </CTableHeaderCell>
                          <CTableDataCell className="p-1" color="success">
                            Island
                          </CTableDataCell>
                          <CTableDataCell className="p-1">{data.islandRank}</CTableDataCell>
                          <CTableDataCell className="p-1" color="warning">
                            World
                          </CTableDataCell>
                          <CTableDataCell className="p-1">{data.worldRank}</CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    </CTable>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
            <CCol md={6}>
              <div className="py-2">
                The University of Colombo is a public research university located primarily in
                Colombo, Sri Lanka. It is the oldest institution of modern higher education in Sri
                Lanka. Specialised in the fields of natural, social, and applied sciences as well as
                mathematics, computer sciences, and law.
              </div>
            </CCol>
          </CRow>
        </div>

        <div className="my-3">
          <CAccordion alwaysOpen activeItemKey={1}>
            {indexedStreams.map((item) => (
              <CAccordionItem key={item.id} itemKey={item.id}>
                <CAccordionHeader>{item.stream}</CAccordionHeader>
                <CAccordionBody>
                  <CTable align="middle" className="mt-2 border" hover responsive bordered>
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableHeaderCell>Unicode</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Course name</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {data.uniProfileCourseDetailList.map(
                        (courseItem) =>
                          courseItem.streamName === item.stream && (
                            <CTableRow>
                              <CTableDataCell>
                                <strong>{courseItem.unicode}</strong>
                              </CTableDataCell>
                              <CTableDataCell>
                                <div>{courseItem.courseName}</div>
                              </CTableDataCell>
                            </CTableRow>
                          ),
                      )}
                    </CTableBody>
                  </CTable>
                </CAccordionBody>
              </CAccordionItem>
            ))}
          </CAccordion>
        </div>

        <div>
          <CRow>
            <CCol md={6}>
              <CCard>
                <CCardHeader>Course offerings</CCardHeader>
                <CCardBody>
                  <CChart
                    className="mx-4"
                    type="bar"
                    data={{
                      labels: streams,
                      datasets: [
                        {
                          label: 'Amount of courses',
                          backgroundColor: [
                            '#0d6efd',
                            '#198754',
                            '#fd7e14',
                            '#dc3545',
                            '#20c997',
                            '#0dcaf0',
                            '#d63384',
                            '#1DE29C',
                          ],
                          data: courseCounts,
                        },
                      ],
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>
        <br />
      </div>
    </CContainer>
  )
}

export default UniversityProfile
