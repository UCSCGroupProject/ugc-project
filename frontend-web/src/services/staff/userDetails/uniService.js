import axios from 'axios'

const API_URL = 'http://localhost:8082/api/university'

class UniService {
  getUniversities = () => {
    return axios.get(API_URL + '/getUniversities').then((res) => {
      console.log(res.data)
      return res.data
    })
  }
}

export default new UniService()
