import axios from 'axios'

const API_URL = 'http://localhost:5/api/crypto/pdf'

class CryptoSignerService {
  generate(document) {
    return axios.post(API_URL + '/generate', document).then((res) => {
      console.log(res)
      // window.open(API_URL + '/generate', '_blank', 'noopener, noreferrer')
      return res.data
    })
  }
}

export default new CryptoSignerService()
