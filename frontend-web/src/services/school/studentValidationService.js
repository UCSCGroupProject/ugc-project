import axios from 'axios'

const API_URL = 'http://localhost:8084/api/school/student'

class StudentValidationService {
  getStudentValidationList() {
    return axios.get(API_URL + '/getStudentValidationList').then((res) => {
      console.log('recieved', res.data)
      return res.data
    })
  }

  validateAndPublishStudentList = async (studentList, username) => {
    const ReqBlockData = {
      transactions: studentList,
      creatorName: username,
    }
    console.log(ReqBlockData)

    return await axios
      .post(API_URL + '/validateAndPublishStudentList', ReqBlockData)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
  }
}

export default new StudentValidationService()
