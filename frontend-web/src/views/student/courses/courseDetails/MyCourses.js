import React from 'react'
import { useState, useEffect } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CFormSelect,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CInputGroup,
  CFormInput,
  CInputGroupText,
} from '@coreui/react'

import { cilSearch } from '@coreui/icons'
import { cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { toast } from 'react-toastify'

import unicodeService from '../../../../services/university/unicodeService'

const tableHeaders = [
  { id: 'id', name: 'No.', sortable: false },
  { id: 'courseName', name: 'Course', sortable: true },
  { id: 'universityName', name: 'University', sortable: true },
  { id: 'unicode', name: 'Unicode', sortable: true },
]

// const data = {
// tableHeaders: [
//   { id: 'id', name: 'No.', sortable: false },
//   { id: 'courseName', name: 'Course', sortable: true },
//   { id: 'universityName', name: 'University', sortable: true },
//   { id: 'unicode', name: 'Unicode', sortable: true },
// ],
//   tableContent: [
//     {
//       id: 0,
//       unicode: '112A',
//       courseName: 'Medicine',
//       universityName: 'University of Colombo',
//     },
//     {
//       id: 1,
//       unicode: '222A',
//       courseName: 'Computer Science',
//       universityName: 'University of Colombo School of Computing',
//     },
//   ],
// }

function MyCourses() {
  // const [tableData, setTableData] = useState({
  //   tableHeaders: [
  //     { id: 'id', name: 'No.', sortable: false },
  //     { id: 'courseName', name: 'Course', sortable: true },
  //     { id: 'universityName', name: 'University', sortable: true },
  //     { id: 'unicode', name: 'Unicode', sortable: true },
  //   ],
  //   tableContent: data.payload,
  // })

  // setTableData((prev) => ({ ...prev, tableContent: data.payload }))
  // console.log(tableData)
  // const [tableRecords, setTableRecords] = useState([])
  // setTableRecords(data.payload)
  // console.log(tableRecords)

  // // For the server side requests and responses
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)

  //   unicodeService.getAllUniCourseList().then(
  //     (res) => {
  //       if (res.type === 'OK') {
  //         toast.success(res.message)
  //         // setTableHeaders(data.tableHeaders)
  //         // setTableContent(res.payload)
  //         console.log('recived', res.payload)
  //         setTableRecords([...res.payload])
  //         setTableData((prev) => ({ ...prev, tableContent: res.payload }))
  //         console.log('updated', tableRecords)
  //       } else if (res.type === 'BAD') {
  //         toast.error(res.message)
  //       }

  //       setLoading(false)
  //     },
  //     (error) => {
  //       const res =
  //         (error.response && error.response.data && error.response.data.message) ||
  //         error.message ||
  //         error.toString()

  //       // After recieving the server request
  //       toast.error(res)
  //       setLoading(false)
  //     },
  //   )
  // }, [])

  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>My Courses</CCardHeader>
            <CCardBody>
              {/* <AppTableTest tableHeaders={tableHeaders} tableContent={data.payload} /> */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default MyCourses
