import axios from 'axios'

const API_URL = 'http://localhost:8081/api/student/universityAdmission'

class UniversityAdmissionService {
  getStep1Form(username) {
    return axios.get(API_URL + '/step1Form', { params: { username: username } }).then((res) => {
      console.log(res)
      return res.data
    })
  }

  step1FormCheckAndSubmit(data, username) {
    const payload = {
      ...data,
      username: username,
    }

    console.log('PAYLOAD', payload)

    return axios.post(API_URL + '/step1Form', payload).then((response) => {
      return response.data
    })
  }

  getStep3Form(username) {
    return axios.get(API_URL + '/step3Form', { params: { username: username } }).then((res) => {
      console.log(res.data)
      return res.data
    })
  }

  step3FormCheckAndSubmit(data, additionalSchoolData, username) {
    console.log(data, additionalSchoolData)

    const payload = {
      ...data,
      additionalSchools: additionalSchoolData,
      username: username,
    }

    console.log('PAYLOAD', payload)

    return axios.post(API_URL + '/step3Form', payload).then((response) => {
      return response.data
    })
  }

  getStep4Form(username) {
    return axios.get(API_URL + '/step4Form', { params: { username: username } }).then((res) => {
      console.log(res.data)
      return res.data
    })
  }

  step4FormCheckAndSubmit(data, username) {
    console.log(data)

    const payload = {
      unicodes: data,
      username: username,
    }

    console.log('PAYLOAD', payload)

    return axios.post(API_URL + '/step4Form', payload).then((response) => {
      return response.data
    })
  }
}

export default new UniversityAdmissionService()
