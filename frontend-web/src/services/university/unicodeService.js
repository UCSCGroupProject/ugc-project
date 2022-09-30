import axios from 'axios'

const API_URL = 'http://localhost:8082/api/university/unicode'

class UnicodeService {
  getAllUniCourseList = () => {
    return axios.get(API_URL + '/all').then((res) => {
      return res.data
    })
  }

  getUniCourse = (unicodeValue) => {
    console.log(unicodeValue)
    return axios.get(API_URL + '?unicodeValue=' + unicodeValue).then((res) => {
      return res.data
    })
  }

  getUniCourseList(courseId) {
    return axios.get(API_URL + '/getUnicodes?courseId=' + courseId).then((res) => {
      return res.data
    })
  }
}

export default new UnicodeService()
