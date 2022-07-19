import axios from 'axios'

const API_URL = 'http://localhost:8081/api/student'

class StudentService {
  register(stuNicAndExamForm, stuDetailsForm, stuLoginDetailsForm) {
    console.log('FIRST SECTION')
    console.log(stuNicAndExamForm)
    console.log('SECOND SECTION')
    console.log(stuDetailsForm)
    console.log('THIRD SECTION')
    console.log(stuLoginDetailsForm)

    return axios
      .post(API_URL + '/register', {
        stuNicAndExamForm,
        stuDetailsForm,
        stuLoginDetailsForm,
      })
      .then((response) => {
        return response.data
      })
  }

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
