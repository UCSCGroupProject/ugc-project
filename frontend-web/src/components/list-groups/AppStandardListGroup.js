import React from 'react'

import { CListGroup, CListGroupItem } from '@coreui/react'

function AppStandardListGroup(props) {
  return (
    <CListGroup>
      {props.items.map((item) => (
        <CListGroupItem>{item}</CListGroupItem>
      ))}
    </CListGroup>
  )
}

export default AppStandardListGroup
