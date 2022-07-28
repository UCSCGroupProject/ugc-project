import axios from 'axios'

const API_URL = 'http://localhost:8083/api/university'

class UniService {
  uniRegister(uniDetailsForm, uniOtherDetailsForm, uniLoginDetailsForm) {

    console.log('FIRST SECTION')
    console.log(uniDetailsForm)
    console.log('SECOND SECTION')
    console.log(uniOtherDetailsForm)
    console.log('THIRD SECTION')
    console.log(uniLoginDetailsForm)

    return axios
      .post(API_URL + '/register', {
        uniDetailsForm,
        uniOtherDetailsForm,
        uniLoginDetailsForm,
      })
      .then((response) => {
        return response.data
      })
  }

  uniRegister(completeData) {
    return axios.post(API_URL + '/register', completeData).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  uniDetailsFormCheck(uniDetailsForm) {
    return axios.post(API_URL + '/UniDetailsFormCheck', uniDetailsForm).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  uniOtherDetailsFormCheck(uniOtherDetailsForm) {
    return axios
      .post(API_URL + '/UniOtherDetailsFormCheck', uniOtherDetailsForm)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
  }

  uniLoginDetailsFormCheck(uniLoginDetailsForm) {
    return axios
      .post(API_URL + '/UniLoginDetailsFormCheck', uniLoginDetailsForm)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
  }
}

export default new UniService()
