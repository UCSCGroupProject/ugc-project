import axios from 'axios'

const API_URL = 'http://localhost:8081/api/student/universityAdmission'

class UniversityAdmissionService {
  step1FormCheckAndSubmit(data) {
    return axios.post(API_URL + '/step1FormCheckAndSubmit', data).then((response) => {
      console.log(response.data)
      return response.data
    })
  }
}

export default new UniversityAdmissionService()
