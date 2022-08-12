import axios from 'axios'

const API_URL = 'http://localhost:8082/api/university'

class UniService {
  uniDetailsFormCheck(uniDetailsForm) {
    return axios.post(API_URL + '/uniDetailsFormCheck', uniDetailsForm).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  loginDetailsFormCheck(uniLoginDetailsForm) {
    return axios
      .post(API_URL + '/loginDetailsFormCheck', uniLoginDetailsForm)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
  }

  universityRegister(completeData) {
    return axios.post(API_URL + '/register', completeData).then((response) => {
      console.log(response.data)
      return response.data
    })
  }
}

export default new UniService()
