import axios from 'axios'

const API_URL = 'http://localhost:2/api/notification/otp'

class OTPService {
  // OTP
  sendOtp(phone) {
    const otpRequest = {
      phone: phone,
    }

    return axios.post(API_URL + '/sendOTP', otpRequest).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  validateOtp(phone, enteredOtp) {
    const otpRequest = {
      phone: phone,
      enteredOtp: enteredOtp,
    }

    return axios.post(API_URL + '/validateOTP', otpRequest).then((response) => {
      // console.log(response.data)
      return response.data
    })
  }
}

export default new OTPService()
