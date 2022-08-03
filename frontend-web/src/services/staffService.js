import axios from 'axios'

const API_URL = 'http://localhost:8083/api/staff'

class StaffService {
  staffRegister(staffRoleDetailsForm, staffPersonalDetailsForm, staffLoginDetailsForm) {

    console.log('FIRST SECTION')
    console.log(staffRoleDetailsForm)
    console.log('SECOND SECTION')
    console.log(staffPersonalDetailsForm)
    console.log('THIRD SECTION')
    console.log(staffLoginDetailsForm)

    return axios
      .post(API_URL + '/register', {
        staffRoleDetailsForm,
        staffPersonalDetailsForm,
        staffLoginDetailsForm,
      })
      .then((response) => {
        return response.data
      })
  }

  staffRegister(completeData) {
    return axios.post(API_URL + '/register', completeData).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  staffRoleDetailsFormCheck(staffRoleDetailsForm) {
    return axios.post(API_URL + '/RoleDetailsFormCheck', staffRoleDetailsForm).then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  staffPersonalDetailsFormCheck(staffPersonalDetailsForm) {
    return axios
      .post(API_URL + '/PersonalDetailsFormCheck', staffPersonalDetailsForm)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
  }

  staffLoginDetailsFormCheck(staffLoginDetailsForm) {
    return axios
      .post(API_URL + '/LoginDetailsFormCheck', staffLoginDetailsForm)
      .then((response) => {
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
  
}

export default new StaffService()
