import axios from 'axios'

const API_URL = 'http://localhost:1002/api/file'

class FileManagerService {
  uploadFile(file, onUploadProgress) {
    let formData = new FormData()
    formData.append('file', file)

    return axios
      .post(API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress,
      })
      .then((res) => {
        console.log(res.data)
        return res.data
      })
  }

  downloadFile(fileId) {
    window.open(API_URL + '?fileId=' + fileId, '_blank', 'noopener,noreferrer')
    // return axios.get(API_URL + '?fileId=' + fileId).then((res) => {
    //   console.log(res.data)
    //   return res.data
    // })
  }

  deleteFile(fileId) {
    return axios.delete(API_URL + '?fileId=' + fileId).then((res) => {
      console.log(res.data)
      return res.data
    })
  }
}

export default new FileManagerService()
