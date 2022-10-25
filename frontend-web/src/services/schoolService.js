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
    return axios.post(API_URL + '/register', completeData).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  getKeypair(username) {
    return axios.get(API_URL + '/keys?username=' + username).then((res) => {
      console.log('recieved', res.data)
      return res.data
    })
  }

  getAllSchools() {
    return axios.get(API_URL + '/all').then((res) => {
      console.log('recieved', res.data)
      return res.data
    })
  }
}

export default new SchoolService()
