import axios from 'axios'

const API_URL = 'http://localhost:8083/api/staff/course'

class CourseService {
  getAllCourseList = () => {
    return axios.get(API_URL + '/all').then((res) => {
      console.log(res.data)
      return res.data
    })
  }
}

export default new CourseService()

