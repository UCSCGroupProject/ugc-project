import axios from 'axios'

const API_URL = 'http://localhost:1003/api/crypto/pdf'

class CryptoSignerService {
  generate(schoolId) {
    console.log(schoolId)
    window.open(API_URL + '?schoolId=' + schoolId, '_blank', 'noopener,noreferrer')
    // return axios.get(API_URL + '?schoolId=' + schoolId).then((res) => {
    //   // window.open(API_URL, '_blank', 'noopener, noreferrer')
    //   return res.data
    // })
  }
}

export default new CryptoSignerService()
