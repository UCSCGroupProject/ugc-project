import axios from "axios";

const API_URL = 'http://localhost:8081/api/staff'

class StaffService {
    register(staffRoleDetailsForm, staffPersonalDetailsForm, staffLoginDetailsForm) {
  
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
  
    staffRoleDetailsFormCheck(staffRoleDetailsForm) {
      return axios.post(API_URL + '/RoleDetailsFormCheck', staffRoleDetailsForm).then((response) => {
        console.log(response.data)
        return response.data
      })
    }
  
    staffPersonalDetailsFormCheck(staffPersonalDetailsForm) {
      return axios.post(API_URL + '/PersonalDetailsFormCheck', staffPersonalDetailsForm).then((response) => {
        console.log(response.data)
        return response.data
      })
    }
  
    staffLoginDetailsFormCheck(staffLoginDetailsForm) {
      return axios.post(API_URL + '/loginDetailsFormCheck', staffLoginDetailsForm).then((response) => {
        console.log(response.data)
        return response.data
      })
    }
  
  }
  
  export default new StaffService()