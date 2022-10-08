import axios from 'axios'

const API_URL = 'http://localhost:1004/api/selection'

class SelectionService {
  selection = () => {
    return axios.get(API_URL + '/selectStudents').then((res) => {
      console.log(res.data)
      return res.data
    })
  }

  getSelectedStudents = () => {
    return axios.get(API_URL + '/getSelected').then((res) => {
      console.log(res.data)
      return res.data
    })
  }
}

export default new SelectionService()
