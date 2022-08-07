import axios from 'axios'

// const API_URL = 'http://localhost:8081/api/student'
let API_URL;

class AuthService {
  login = async (email, password) => {
    let API_URL;

    // TODO: Works but all 3 services need to be run. Hence come up with a new solution
    const isStudent = await axios.get("http://localhost:8081/api/student/isStudent", {params: {email: email}}).then((res) => {return res.data})
    const isUniversity = await axios.get("http://localhost:8082/api/university/isUniversity", {params: {email: email}}).then((res) => {return res.data})
    const isStaff = await axios.get("http://localhost:8083/api/staff/isStaff", {params: {email: email}}).then((res) => {return res.data})

    if(isStudent){
      console.log("student login")
      API_URL = 'http://localhost:8081/api/student'
    } else if(isUniversity) {
      console.log("university login")
      API_URL = 'http://localhost:8082/api/university'
    } else if(isStaff) {
      console.log("university login")
      API_URL = 'http://localhost:8083/api/staff'
    } else {
      console.log("not defined login")
    }

    return axios
      .post(API_URL + '/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('student', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  register(username, email, password) {
    console.log({ username, email, password })
    return axios.post(API_URL + '/register', {
      username,
      email,
      password,
    })
  }

  logout() {
    localStorage.removeItem('student')
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('student'))
  }
}

export default new AuthService()
