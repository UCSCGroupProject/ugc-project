import axios from 'axios'

const API_URL = 'http://localhost:8080/api/auth/'

class AuthService {
  login(email, password) {
    console.log(email, password)
    return axios
      .post(API_URL + 'signin', {
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
}

export default new AuthService()
