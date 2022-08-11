import React from 'react'

import { AppHeader } from '../components'

function DefaultLayout(props) {
  return (
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div>{props.page}</div>
    </div>
  )
}

export default DefaultLayout
