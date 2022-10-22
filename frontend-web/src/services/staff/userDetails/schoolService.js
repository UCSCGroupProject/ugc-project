import axios from 'axios'

const API_URL = 'http://localhost:8084/api/school/default'

class SchoolService {
    getSchools = () => {
    return axios.get(API_URL + '/all').then((res) => {
      console.log(res.data)
      return res.data
    })
  }
}

export default new SchoolService()
