import React from 'react'

import AppStandardContainer from '../../../components/containers/AppStandardContainer'
import AppFileUploadDragArea from '../../../components/inputs/AppFileUploadDragArea'

function UploadDocument() {
  return (
    <div>
      <AppStandardContainer title="Upload signed document">
        <AppFileUploadDragArea />
      </AppStandardContainer>
    </div>
  )
}

export default UploadDocument
