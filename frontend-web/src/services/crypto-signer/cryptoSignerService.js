import axios from 'axios'

const API_URL = 'http://localhost:1003/api/crypto/pdf'

class CryptoSignerService {
  generate(username) {
    console.log(username)
    window.open(API_URL + '?username=' + username, '_blank', 'noopener,noreferrer')
    // return axios.get(API_URL + '?username=' + username).then((res) => {
    //   // window.open(API_URL, '_blank', 'noopener, noreferrer')
    //   return res.data
    // })
  }
}

export default new CryptoSignerService()
