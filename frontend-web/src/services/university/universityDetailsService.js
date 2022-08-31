import axios from 'axios'

const API_URL = 'http://localhost:8082/api/university/details'

class UniversityDetailsService {
  getAllUniversityList = () => {
    return axios.get(API_URL + '/all').then((res) => {
      return res.data
    })
  }

  getUniversityProfile = (username) => {
    return axios.get(API_URL + '/profile?username=' + username).then((res) => {
      return res.data
    })
  }
}

export default new UniversityDetailsService()
