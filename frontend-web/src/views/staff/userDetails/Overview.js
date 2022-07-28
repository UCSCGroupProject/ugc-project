import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilChartLine, cilArrowTop } from '@coreui/icons'

function Overview() {
  const studentDetails = {
    totalCount: '71388',
    governmentStudents: '47268',
    privateStudents: '24120',
  }

  const schoolDetails = {
    totalCount: '71388',
    governmentSchools: '47268',
    privateSchools: '24120',
  }

  const universityDetails = {
    totalCount: '71388',
  }

  return (
    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
      <CCol xs>
        <CCard color={'primary'} textColor={'white'} className="mb-3">
          <CCardHeader>
            Users
          </CCardHeader>
          <CCardBody>
            <CCardTitle>
              {' '}
              26K (-12.4% ) <CIcon icon={cilArrowTop} size="xl" />
            </CCardTitle>
            <CCardText>
            {<br></br>}
              {<br></br>}
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="card-text">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard color={'info'} textColor={'white'} className="mb-3">
          <CCardHeader>
            Students
            
          </CCardHeader>
          <CCardBody>
            <CCardTitle>
              {' '}
              [Total {studentDetails.totalCount}] <CIcon icon={cilChartLine} size="xl" />
            </CCardTitle>
            <CCardText>
              Government Students - {studentDetails.governmentStudents} {<br></br>}
              Private Students - {studentDetails.privateStudents}
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="card-text">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>

      <CCol xs>
        <CCard color={'secondary'} className="mb-3">
          <CCardHeader>
            Schools
          </CCardHeader>
          <CCardBody>
            <CCardTitle>
              {' '}
              [Total {schoolDetails.totalCount}] <CIcon icon={cilChartLine} size="xl" />
            </CCardTitle>
            <CCardText>
              Government Schools - {schoolDetails.governmentSchools} {<br></br>}
              Private Schools - {schoolDetails.privateSchools}
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="card-text">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard color={'dark'} textColor={'white'} className="mb-3">
          <CCardHeader>
            Universities
            
          </CCardHeader>
          <CCardBody>
            <CCardTitle>
              {' '}
              [Total {universityDetails.totalCount}] <CIcon icon={cilChartLine} size="xl" />
            </CCardTitle>
            <CCardText>
              {<br></br>}
              {<br></br>}
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="card-text">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Overview
