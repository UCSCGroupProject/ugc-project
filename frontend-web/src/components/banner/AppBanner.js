import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

function AppBanner(props) {
  return (
    <CCard style={{ width: '100%' }}>
      <CCardBody>
        <CRow>
          <CCol md={4}>
            <CCardImage orientation="top" src={props.data.img} />
          </CCol>
          <CCol md={8}>
            <CCardTitle>{props.data.title}</CCardTitle>
            <p className="mb-1">{props.data.desc}</p>
            <CListGroup flush>
              {props.data.listItems.map((item) => (
                <CListGroupItem key={item.id}>{item.content}</CListGroupItem>
              ))}
            </CListGroup>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default AppBanner
