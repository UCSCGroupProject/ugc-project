import axios from 'axios'

const API_URL = 'http://localhost:8083/api/course'

class CourseService {
  getCourses() {
    return axios.get(API_URL + '/getCourses').then((response) => {
      console.log(response.data)
      return response.data
    })
  }
}

export default new CourseService()
