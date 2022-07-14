import axios from 'axios'

const API_URL = 'http://localhost:8080/api/auth'


class AuthService {
  login(username, password) {
    console.log(username, password)
    return axios
      .post(API_URL + '/signin', {
        username,
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
