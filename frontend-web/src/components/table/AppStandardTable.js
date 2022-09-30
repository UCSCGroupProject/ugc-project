import React from 'react'

import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

function AppStandardTable(props) {
  return (
    <div>
      <CTable hover={props.hover}>
        <CTableHead>
          <CTableRow>
            {props.headers.map((item, index) => (
              <CTableHeaderCell
                key={index}
                scope="col"
                width={item.width}
                className={item.textAlign}
              >
                {item.name}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {props.content.map((row, index) => (
            <CTableRow key={index} color="">
              {props.headers.map((header) => (
                <CTableDataCell className={`${header.textAlign}`}>{row[header.id]}</CTableDataCell>
              ))}
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default AppStandardTable
