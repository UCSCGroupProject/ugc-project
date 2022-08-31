import axios from 'axios'

const API_URL = 'http://localhost:8082/api/university/unicode'

class UnicodeService {
  getAllUniCourseList = () => {
    return axios.get(API_URL + '/all').then((res) => {
      return res.data
    })
  }
}

export default new UnicodeService()
