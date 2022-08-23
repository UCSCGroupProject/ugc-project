import axios from 'axios'

const API_URL = 'http://localhost:5/blockchain'

class BlockchainService {
  getBlockChain() {
    return axios.get(API_URL + '/getblockchain').then((res) => {
      console.log('recieved', res.data)
      return res.data
    })
  }

  verifyBlock = async (id, publicKey) => {
    return await axios
      .get(API_URL + '/verifyBlock', { params: { blockId: id, publicKey: publicKey } })
      .then((response) => {
        console.log(response.data)
        return response.data
      })
  }

  verifyBlockchain = async () => {
    return await axios.get(API_URL + '/verifyBlockchain').then((response) => {
      console.log(response.data)
      return response.data
    })
  }
}

export default new BlockchainService()
