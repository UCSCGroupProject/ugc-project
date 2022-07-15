import axios from 'axios'

const API_URL = 'http://localhost:8080/api/student'


class AuthService {
  login(email, password) {
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
    localStorage.removeItem("student");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("student"))
  }
}

export default new AuthService()
