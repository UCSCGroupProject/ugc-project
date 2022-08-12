import axios from 'axios'

const API_URL = 'http://localhost:8083/api/staff'

class StaffService {
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

  staffRegister(completeData) {
    return axios.post(API_URL + '/register', completeData).then((response) => {
      console.log(response.data)
      return response.data
    })
  }
}

export default new StaffService()
