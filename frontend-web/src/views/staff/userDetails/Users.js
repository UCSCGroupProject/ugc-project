import React from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader } from '@coreui/react'

import { CChart } from '@coreui/react-chartjs'

function Users() {
  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>Users registered within the system</CCardHeader>
          <CCardBody>
            <CChart
              className="sm-5"
              type="pie"
              height="500px"
              width="100px"
              data={{
                labels: ['Government Students', 'Private Students', 'Universities', 'Staff'],
                datasets: [
                  {
                    backgroundColor: ['#2eb85c', '#f9b115', '#4BC0C0', '#36A2EB'],
                    data: [80, 40, 17, 20],
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
