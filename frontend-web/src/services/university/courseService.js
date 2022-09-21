import axios from 'axios'

const API_URL = 'http://localhost:8082/api/university/course'

class CourseService {
  getAllCourseList = () => {
    return axios.get(API_URL + '/all').then((res) => {
      console.log(res.data)
      return res.data
    })
  }

  create(addCourseForm){
    return axios.post(API_URL + '/create', addCourseForm).then((response) => {
      return response.data
    })
  }

  getAllStreamsList = () => {
    return axios.get(API_URL + '/getStreams').then((res) => {
      return res.data
    })
  }
}

export default new CourseService()

