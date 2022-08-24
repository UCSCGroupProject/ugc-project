import axios from 'axios'

const API_URL = 'http://localhost:1000/api/email/verificationCode'

class StudentService {
  // Code
  sendCode(email) {
    const verificationCodeRequest = {
      email: email,
    }

    return axios.post(API_URL + '/sendCode', verificationCodeRequest).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  validateCode(email, enteredCode) {
    const verificationCodeRequest = {
      email: email,
      enteredCode: enteredCode,
    }

    return axios.post(API_URL + '/validateCode', verificationCodeRequest).then((response) => {
      // console.log(response.data)
      return response.data
    })
  }
}

export default new StudentService()
