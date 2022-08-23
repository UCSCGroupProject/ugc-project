import React from 'react'
import { useState } from 'react'
import { CCard, CCol, CCardBody, CButton, CWidgetStatsB, CRow, CContainer } from '@coreui/react'

function SelectionProcess() {
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)
  const [percentage3, setPercentage3] = useState(0)

  //you can leave the sleep constant
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  const handleRunSelectionAlgorithm = async () => {
    for (let i = 0; i <= 100; i++) {
      //code before sleep goes here, just change the time below in milliseconds
      await sleep(30)
      //code after sleep goes here
      setPercentage1(i)
    }

    for (let i = 0; i <= 100; i++) {
      //code before sleep goes here, just change the time below in milliseconds
      await sleep(40)
      //code after sleep goes here
      setPercentage2(i)
    }

    for (let i = 0; i <= 100; i++) {
      //code before sleep goes here, just change the time below in milliseconds
      await sleep(20)
      //code after sleep goes here
      setPercentage3(i)
    }
  }

  const getColorVariant = (x) => {
    if(x <= 25){
      return "danger"
    } else if(x <= 50) {
      return "warning"
    }else if(x <= 75) {
      return "info"
    }else {
      return "success"
    }
  }

  return (
    <>
      <CContainer>
        <CRow></CRow>
        <CRow>
          <CCol xs={2}></CCol>
          <CCol xs={8}>
            <CButton size="lg" color="warning" onClick={handleRunSelectionAlgorithm}>
              Run Selection Process
            </CButton>
            <CCard className="mt-3">
              <CCardBody>
                <CWidgetStatsB
                  className="mb-3"
                  progress={{ color: getColorVariant(percentage1), value: percentage1 }}
                  text="Selection of top 40%"
                  title="Merit Selection"
                  value={percentage1}
                />
                <CWidgetStatsB
                  className="mb-3"
                  progress={{ color: getColorVariant(percentage2), value: percentage2 }}
                  text="Selection of remaining 55% under 25 districts "
                  title="District Quota Selection"
                  value={percentage2}
                />
                <CWidgetStatsB
                  className="mb-3"
                  progress={{ color: getColorVariant(percentage3), value: percentage3 }}
                  text="Selection of remaining 5% under 16 districts "
                  title="Educationally Disadvantaged Selection"
                  value={percentage3}
                />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs={2}></CCol>
        </CRow>
        <CRow></CRow>
      </CContainer>
    </>
  )
}

export default SelectionProcess
