import axios from 'axios'

const API_URL = 'http://localhost:8084/api/school/document/upload'

class UploadedDocumentService {
  uploadDocument(documentId, fileId) {
    console.log('docid' + documentId, 'fileid' + fileId)
    return axios.post(API_URL + '?documentId=' + documentId + '&fileId=' + fileId).then((res) => {
      console.log(res.data)
      return res.data
    })
  }

  isUploadDocumentExist(documentId) {
    return axios.get(API_URL + '/check?documentId=' + documentId).then((res) => {
      console.log('recieved', res.data)
      return res.data
    })
  }

  getDocuments() {
    return axios.get(API_URL).then((res) => {
      console.log('recieved', res.data)
      return res.data
    })
  }

  deleteUploadDocument(documentId) {
    return axios.delete(API_URL + '?documentId=' + documentId).then((res) => {
      console.log(res.data)
      return res.data
    })
  }
}

export default new UploadedDocumentService()
