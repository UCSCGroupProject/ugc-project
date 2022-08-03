import axios from 'axios'

const API_URL = 'http://localhost:8083/api/university'

class UniService {
  register(uniDetailsForm, uniOtherDetailsForm, uniLoginDetailsForm) {
    console.log('FIRST SECTION')
    console.log(uniDetailsForm)
    console.log('SECOND SECTION')
    console.log(uniOtherDetailsForm)
    console.log('THIRD SECTION')
    console.log(uniLoginDetailsForm)

    return axios
      .post(API_URL + '/register', {
        uniDetailsForm,
        uniOtherDetailsForm,
        uniLoginDetailsForm,
      })
      .then((response) => {
        return response.data
      })
  }

  // uniRegister(completeData) {
  //   return axios.post(API_URL + '/register', completeData).then((response) => {
  //     console.log(response.data)
  //     return response.data
  //   })
  // }

  uniDetailsFormCheck(uniDetailsForm) {
    return axios.post(API_URL + '/uniDetailsFormCheck', uniDetailsForm).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  loginDetailsFormCheck(uniLoginDetailsForm) {
    return axios
      .post(API_URL + '/UniLoginDetailsFormCheck', uniLoginDetailsForm)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
  }

  universityRegister(completeData) {
    return axios.post(API_URL + '/universityRegister', completeData).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  // OTP
  sendOtp(phone) {
    const smsRequest = {
      phoneNumber: phone,
      message: 'Your OTP is ',
    }

    return axios.post(API_URL + '/generateOTP', smsRequest).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  validateOtp(enteredOtp) {
    const otpRequest = {
      enteredOtp: enteredOtp,
    }

    return axios.post(API_URL + '/validateOTP', otpRequest).then((response) => {
      // console.log(response.data)
      return response.data
    })
  }

  // Code
  sendCode(email) {
    const smsRequest = {
      recipient: email,
    }

    return axios.post(API_URL + '/generateCode', smsRequest).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  validateCode(enteredCode) {
    const codeRequest = {
      enteredCode: enteredCode,
    }

    return axios.post(API_URL + '/validateCode', codeRequest).then((response) => {
      // console.log(response.data)
      return response.data
    })
  }
}

export default new UniService()
