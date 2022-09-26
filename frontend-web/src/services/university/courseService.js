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

  getCourseDetails = (courseId) => {
    return axios.get(API_URL + '/getCourseDetails?courseId='+ courseId).then((res) => {
      return res.data
    })
  }

  update(editCourseForm){
    return axios.put(API_URL + '/update', editCourseForm).then((response) => {
      return response.data
    })
  }
}

export default new CourseService()

