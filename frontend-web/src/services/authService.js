import axios from 'axios'

// const API_URL = 'http://localhost:8081/api/student'
let API_URL

class AuthService {
  login = async (email, password) => {
    let API_URL

    // Resquesting from each service to check actor type - Async requests
    const isStudent = await axios
      .get('http://localhost:8081/api/student/isStudent', { params: { email: email } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        if (error.response) {
          console.log('Student - Connection issue')
          return false
        }
      })

    const isUniversity = await axios
      .get('http://localhost:8082/api/university/isUniversity', { params: { email: email } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        if (error.response) {
          console.log('University - Connection issue')
          return false
        }
      })

    const isStaff = await axios
      .get('http://localhost:8083/api/staff/isStaff', { params: { email: email } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        if (error.response) {
          console.log('Staff - Connection issue')
          return false
        }
      })

    const isSchool = await axios
      .get('http://localhost:8084/api/school/isSchool', { params: { email: email } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        if (error.response) {
          console.log('School - Connection issue')
          return false
        }
      })

    console.log(isStudent, isUniversity, isStaff, isSchool)

    if (isStudent) {
      console.log('student login')
      API_URL = 'http://localhost:8081/api/student'
    } else if (isUniversity) {
      console.log('university login')
      API_URL = 'http://localhost:8082/api/university'
    } else if (isStaff) {
      console.log('staff login')
      API_URL = 'http://localhost:8083/api/staff'
    } else if (isSchool) {
      console.log('university login')
      API_URL = 'http://localhost:8084/api/school'
    } else {
      console.log('not defined login')
    }

    return axios
      .post(API_URL + '/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout() {
    localStorage.removeItem('user')
  }

  passwordReset = async (email, password) => {
    let API_URL

    // Resquesting from each service to check actor type - Async requests
    const isStudent = await axios
      .get('http://localhost:8081/api/student/isStudent', { params: { email: email } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        if (error.response) {
          console.log('Student - Connection issue')
          return false
        }
      })

    const isUniversity = await axios
      .get('http://localhost:8082/api/university/isUniversity', { params: { email: email } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        if (error.response) {
          console.log('University - Connection issue')
          return false
        }
      })

    const isStaff = await axios
      .get('http://localhost:8083/api/staff/isStaff', { params: { email: email } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        if (error.response) {
          console.log('Staff - Connection issue')
          return false
        }
      })

    const isSchool = await axios
      .get('http://localhost:8084/api/school/isSchool', { params: { email: email } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        if (error.response) {
          console.log('School - Connection issue')
          return false
        }
      })

    console.log(isStudent, isUniversity, isStaff, isSchool)

    if (isStudent) {
      console.log('student login')
      API_URL = 'http://localhost:8081/api/student'
    } else if (isUniversity) {
      console.log('university login')
      API_URL = 'http://localhost:8082/api/university'
    } else if (isStaff) {
      console.log('university login')
      API_URL = 'http://localhost:8083/api/staff'
    } else if (isSchool) {
      console.log('university login')
      API_URL = 'http://localhost:8084/api/school'
    } else {
      console.log('not defined login')
    }

    return axios
      .post(API_URL + '/passwordReset', {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data)
        return response.data
      })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}

export default new AuthService()
