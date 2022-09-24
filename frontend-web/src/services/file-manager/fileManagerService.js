import axios from 'axios'

const API_URL = 'http://localhost:1101/api/file'

class FileManagerService {
  uploadFile(data) {
    console.log(data)
    return axios.post(API_URL + '/upload', { params: { file: data.document } }).then((response) => {
      console.log(response.data)
      return response.data
    })
  }
}

export default new FileManagerService()
