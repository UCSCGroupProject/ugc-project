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
}

export default new ALResultsService()
