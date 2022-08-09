import React from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader } from '@coreui/react'

import { CChart } from '@coreui/react-chartjs'

function Users() {
  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>Students registered within the system</CCardHeader>
          <CCardBody>
            <CChart
              className="sm-5"
              type="pie"
              height="500px"
              width="100px"
              data={{
                labels: ['Government Students', 'Private Students'],
                datasets: [
                  {
                    backgroundColor: ['#2eb85c', '#f9b115'],
                    data: [80, 40],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Users
