import axios from 'axios'

const API_URL = 'http://localhost:8084/api/school/document'

class ValidationDocumentService {
  getDocument(schoolId) {
    return axios.get(API_URL + '?username=' + schoolId).then((res) => {
      console.log('recieved', res.data)
      return res.data
    })
  }

  updateDocument(document) {
    return axios.put(API_URL, document).then((res) => {
      return res.data
    })
  }
}

export default new ValidationDocumentService()
