import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  CContainer,
  CCard,
  CCardHeader,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from '@coreui/react'

const latestCiscularsData = [
  {
    id: 1,
    title: 'Commision Circulars',
    content: [
      {
        id: 1,
        content: 'Sample 1',
        to: '/home',
      },
      {
        id: 2,
        content: 'Sample 2',
        to: '/home',
      },
    ],
  },
  {
    id: 2,
    title: 'Establisments Circulars',
    content: [
      {
        id: 1,
        content: 'Sample 1',
        to: '/home',
      },
      {
        id: 2,
        content: 'Sample 2',
        to: '/home',
      },
    ],
  },

  {
    id: 3,
    title: 'Finance Circulars',
    content: [
      {
        id: 1,
        content: 'Sample 1',
        to: '/home',
      },
      {
        id: 2,
        content: 'Sample 2',
        to: '/home',
      },
    ],
  },
]

function LatestCirculars() {
  return (
    <CCard className="mb-3">
      <CCardHeader>
        <strong>Latest Circularss</strong>
      </CCardHeader>
      <div className="p-0">
        <CAccordion flush>
          {latestCiscularsData.map((item) => (
            <CAccordionItem key={item.id} itemKey={item.id}>
              <CAccordionHeader>{item.title}</CAccordionHeader>
              <CAccordionBody style={{ padding: '0' }}>
                {item.content.map((subItem) => (
                  <NavLink
                    key={`${item.id}-${subItem.id}`}
                    to={subItem.to}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <CContainer
                      className="border border-bottom-1 dashboard-notification py-2"
                      style={{ fontSize: '15px' }}
                    >
                      {subItem.content}
                    </CContainer>
                  </NavLink>
                ))}
              </CAccordionBody>
            </CAccordionItem>
          ))}
        </CAccordion>
      </div>
    </CCard>
  )
}

export default LatestCirculars
