import React from 'react'
import { NavLink } from 'react-router-dom'

import { CContainer, CCard, CCardHeader, CBadge } from '@coreui/react'

const latestHighlightsData = [
  {
    id: 1,
    content: 'Notice for University Admission 2021/22',
    to: '/home',
  },
  {
    id: 2,
    content:
      'Fin. Circular 07/2022 : Expenditure management and Business Sustainability of Commercial Corporations, Statutory Boards and Government Owned Companies',
    to: '/home',
  },
  {
    id: 3,
    content:
      'Estab. Circular No. 07/2022 : Restricting the calling of officers to gervernment corporations, statutory boards and government owned companies',
    to: '/home',
  },
  {
    id: 4,
    content:
      'Estab. Circular No. 06/2022 : Three months leave for Vice Chancellors who complete a Full-Term of Office',
    to: '/home',
  },
  {
    id: 5,
    content:
      'Commission Circular No. 12/2022 :Selection of the Commercial Partners by Research and innovation teams at universities and Start-up AHEAD ',
    to: '/home',
  },
  {
    id: 6,
    content:
      'Internal Audit Circular 02/2022: Recover Bond Value under the Provisions of the Financial Regulations',
    to: '/home',
  },
]

function LatestHighlights() {
  return (
    <CCard className="mb-3">
      <CCardHeader>
        <strong>Latest Highlights</strong>{' '}
        <CBadge color="warning">{latestHighlightsData.length}</CBadge>
      </CCardHeader>
      <div className="p-0">
        {latestHighlightsData.map((item) => (
          <NavLink key={item.id} to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
            <CContainer
              className="border border-bottom-1 dashboard-notification py-2"
              style={{ fontSize: '15px' }}
            >
              {item.content}
            </CContainer>
          </NavLink>
        ))}
      </div>
    </CCard>
  )
}

export default LatestHighlights
