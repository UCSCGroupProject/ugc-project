import React from 'react'

import { CContainer, CRow, CCol } from '@coreui/react'

import Carousel from './components/Carousel'
import UniversityRegistration from './components/UniversityRegistration'

import LatestHighlights from './components/LatestHighlights'
import NewsAndEvents from './components/NewsAndEvents'
import LatestCirculars from './components/LatestCirculars'

function Home() {
  return (
    <div className="body flex-grow-1 custom-wrapper">
      <div>
        <CContainer>
          <CRow>
            <CCol md={9}>
              {/* Carousel */}
              <Carousel />

              <br />
              <strong>WELCOME TO</strong>
              <h1 className="display-6">THE UNIVERSITY GRANTS COMMISSION</h1>
              <p className="lead">
                The University Grants Commission (UGC) is the apex body of the University System in
                Sri Lanka which was established on 22nd December 1978 under the Universities Act No.
                16 of 1978. The functions of the UGC are; planning and coordination of university
                education, allocation of funds to Higher Educational Institutions (HEIs),
                maintenance of academic standards, regulation of the administration of HEIs and
                regulation of admission of students to HEIs.{' '}
              </p>

              <br />
              {/* University Registration Poster */}
              <UniversityRegistration />
            </CCol>

            <CCol md={3}>
              {/* Latest Highlights */}
              <LatestHighlights />

              {/* News and Events */}
              <NewsAndEvents />

              {/* Latest Circulars */}
              <LatestCirculars />
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </div>
  )
}

export default Home
