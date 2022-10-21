import axios from 'axios'

const API_URL = 'http://localhost:8081/api/student'

class StudentService {
  getStudents = () => {
    return axios.get(API_URL + '/getStudents').then((res) => {
      console.log(res.data)
      return res.data
    })
  }
}

export default new StudentService()
