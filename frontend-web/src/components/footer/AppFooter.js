import React from 'react'
import { CFooter } from '@coreui/react'

function AppFooter() {
  return (
    <CFooter>
      <div>
        <a href="/">UGC</a>
        <span className="ms-1">&copy; 2022 UCSC Group Project.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="/">elseware</a>
      </div>
    </CFooter>
  )
}

export default AppFooter
