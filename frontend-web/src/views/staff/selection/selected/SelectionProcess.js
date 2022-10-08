import React from 'react'
import { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import {
  CCard,
  CCol,
  CCardBody,
  CButton,
  CRow,
  CContainer,
  CWidgetStatsB,
} from '@coreui/react'

import { toast } from 'react-toastify'

import selectionService from '../../../../services/staff/selectionService'

function SelectionProcess() {
  // For the server side requests and responses
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)
  const [percentage3, setPercentage3] = useState(0)
  let navigate = useNavigate()
  //you can leave the sleep constant
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  useEffect(() => {
    setLoading(true)

    selectionService.getSelectedStudents().then(
      (res) => {
        if (res.type === 'OK') {
          document.getElementById("selectionButton").disabled = true
          document.getElementById("selection1").progress = {color: "success", value: 100 }
          document.getElementById("selection1").value = "100"
          document.getElementById("selection2").progress = 100
          document.getElementById("selection2").value = 100
          document.getElementById("selection3").progress = 100
          document.getElementById("selection3").value = 100
        } else if (res.type === 'BAD') {
          document.getElementById("selectionButton").disabled = false
        }

        setLoading(false)
      },
      (error) => {
        const res =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
        // After recieving the server request
        setLoading(false)
      },
    )
  }, [])

  const handleRunSelectionAlgorithm = async () => {

    document.getElementById("selectionButton").disabled = true
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

    selectionService.selection().then(
      (res) => {
        

        if (res.type === 'OK') {
          toast.success(res.message)
          navigate('/staff/selected')
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
        setResMessage(res) // Remove later
        setLoading(false)
      },
    )

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
            <CButton id = "selectionButton" size="lg" color="warning" onClick={handleRunSelectionAlgorithm}>
              Run Selection Process
            </CButton>
            <CCard className="mt-3">
              <CCardBody>
                <CWidgetStatsB
                  id='selection1'
                  className="mb-3"
                  progress={{ color: getColorVariant(percentage1), value: percentage1 }}
                  text="Selection of top 40%"
                  title="Merit Selection"
                  value={percentage1}
                />
                <CWidgetStatsB
                  id='selection2'
                  className="mb-3"
                  progress={{ color: getColorVariant(percentage2), value: percentage2 }}
                  text="Selection of remaining 55% under 25 districts "
                  title="District Quota Selection"
                  value={percentage2}
                />
                <CWidgetStatsB
                  id='selection3'
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
