import React from 'react'
import { CCard, CCardHeader, CBadge } from '@coreui/react'

import AppNotification from './AppNotification'

function AppNotifications(props) {
  return (
    <CCard className="mb-3">
      <CCardHeader>
        Notifications <CBadge color="warning">10</CBadge>
      </CCardHeader>
      {/* <CCardBody> */}
      <div className="p-1">
        {/* Notification */}
        {props.notifications.map((notification) => (
          <AppNotification
            key={notification.id}
            title={notification.title}
            content={notification.content}
            createdAt={notification.createdAt}
          />
        ))}
      </div>

      {/* </CCardBody> */}
    </CCard>
  )
}

export default AppNotifications
