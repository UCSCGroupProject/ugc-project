import axios from 'axios'

const API_URL = 'http://localhost:8081/api/student'

class StudentService {
  stuNicAndExamFormCheck(stuNicAndExamForm) {
    return axios.post(API_URL + '/stuNicAndExamFormCheck', stuNicAndExamForm).then((response) => {
      console.log(response)
      return response.data
    })
  }

  stuDetailsFormCheck(stuDetailsForm) {
    return axios.post(API_URL + '/stuDetailsFormCheck', stuDetailsForm).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  loginDetailsFormCheck(stuLoginDetailsForm) {
    return axios.post(API_URL + '/loginDetailsFormCheck', stuLoginDetailsForm).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  studentRegister(completeData) {
    return axios.post(API_URL + '/studentRegister', completeData).then((response) => {
      console.log(response.data)
      return response.data
    })
  }
}

export default new StudentService()
