import axios from 'axios'

const API_URL = 'http://localhost:8083/api/staff/alresults'

class ALResultsService {
  getResults = () => {
    return axios.get(API_URL + '/view').then((res) => {
      console.log(res.data)
      return res.data
    })
  }

  getResultOfStudent = (studentId) => {
    return axios.get(API_URL + '/getStudentResults?studentId='+ studentId).then((res) => {
      return res.data
    })
  }

  upload(file, onUploadProgress) {
    let formData = new FormData()
    formData.append('file', file)

    return axios
      .post(API_URL + '/upload', formData, {
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

  update(editResultsForm){
    return axios.put(API_URL + '/update', editResultsForm).then((response) => {
      return response.data
    })
  }
}

export default new ALResultsService()
