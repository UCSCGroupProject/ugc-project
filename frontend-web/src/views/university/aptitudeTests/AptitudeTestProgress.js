import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import React, { useState } from 'react'

const AptitudeTestProgress = () => {
  const [allTestsProgress, setAllTestsProgress] = useState([
    {
      id: 1,
      unicode: '118H',
      courseOfStudy: 'Information System',
      pass: 25,
      fail: 75,
    },
    {
      id: 2,
      unicode: '112J',
      courseOfStudy: 'Architecture',
      pass: 100,
      fail: 25,
    },
    {
      id: 3,
      unicode: '119H',
      courseOfStudy: 'Fashion Designing',
      pass: 10,
      fail: 50,
    },
    {
      id: 4,
      unicode: '115K',
      courseOfStudy: 'Fashion Designing',
      pass: 10,
      fail: 5,
    },
  ])

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Aptitude Tests Progress</CCardHeader>
            <CCardBody>
              <CRow className="py-2 bg-light rounded">
                {allTestsProgress.map((item) => (
                  <CCol md={4}>
                    <CCard color="success-gradient" textColor="medium-emphasis">
                      <CCardHeader><b>{item.courseOfStudy}</b></CCardHeader>
                      <CCardBody>
                        <CChart
                          id={item.id}
                          type="doughnut"
                          data={{
                            labels: ['Pass', 'Fail'],
                            datasets: [
                              {
                                backgroundColor: ['#41B883', '#E46651'],
                                data: [item.pass, item.fail],
                              },
                            ],
                          }}
                        />
                      </CCardBody>
                    </CCard>
                    <br/>
                  </CCol>
                ))}
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default AptitudeTestProgress
