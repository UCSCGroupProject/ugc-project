import axios from 'axios'

const API_URL = 'http://localhost:8084/api/school/default'

class DefaultSchoolService {
  createSchool(payload) {
    return axios.post(API_URL, payload).then((res) => {
      return res.data
    })
  }

  getSchool(schoolId) {
    return axios.get(API_URL + '?schoolId=' + schoolId).then((res) => {
      console.log('recieved', res.data)
      return res.data
    })
  }

  getAllSchools() {
    return axios.get(API_URL + '/all').then((res) => {
      console.log('recieved', res.data)
      return res.data
    })
  }

  updateSchool(schoolId, payload) {
    return axios.put(API_URL + '?schoolId=' + schoolId, payload).then((res) => {
      return res.data
    })
  }

  deleteSchool(schoolId) {
    return axios.delete(API_URL + '?schoolId=' + schoolId).then((res) => {
      return res.data
    })
  }
}

export default new DefaultSchoolService()
