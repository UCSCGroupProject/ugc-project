import axios from 'axios'

const API_URL = 'http://localhost:8084/api/school'

class SchoolService {
  schoolDetailsFormCheck(schoolDetailsForm) {
    return axios.post(API_URL + '/schoolDetailsFormCheck', schoolDetailsForm).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  loginDetailsFormCheck(schoolLoginDetailsForm) {
    return axios
      .post(API_URL + '/loginDetailsFormCheck', schoolLoginDetailsForm)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
  }

  schoolRegister(completeData) {
    return axios.post(API_URL + '/schoolRegister', completeData).then((response) => {
      console.log(response.data)
      return response.data
    })
  }
}

export default new SchoolService()
