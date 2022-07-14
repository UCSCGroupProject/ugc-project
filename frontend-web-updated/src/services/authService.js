import axios from 'axios'

const API_URL = 'http://localhost:8080/api/user'


class AuthService {
  login(email, password) {
    console.log(email, password)
    return axios
      .post(API_URL + '/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  register(username, email, password) {
    console.log({ username, email, password })
    return axios.post(API_URL + 'signup', {
      username,
      email,
      password,
    })
  }
}

export default new AuthService()
