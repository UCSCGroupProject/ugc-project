import React from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader } from '@coreui/react'

import AppTable from '../../../../components/table/AppTable'

const data = {
  tableHeaders: [
    { id: 'no', name: 'No.', sortable: false },
    { id: 'unicode', name: 'Unicode', sortable: true },
    { id: 'course', name: 'Course', sortable: true },
    { id: 'university', name: 'University', sortable: true },
  ],
  tableContent: [
    {
      id: 0,
      no: 1,
      unicode: '112A',
      course: 'Medicine',
      university: 'University of Colombo',
    },
    {
      id: 1,
      no: 2,
      unicode: '222A',
      course: 'Computer Science',
      university: 'University of Colombo School of Computing',
    },
  ],
}

const allCoursesData = [
  {
    id: '1',
    unicode: '112A',
    courseOfStudy: 'Medicine',
    university: 'University of Colombo',
  },
]

function AllCourses() {
  return (
    <div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Courses</CCardHeader>
            <CCardBody>
              <AppTable tableData={data} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default AllCourses
