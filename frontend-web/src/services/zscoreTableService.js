import axios from 'axios'

const API_URL = 'http://localhost:1001/api/zscoreTable'

class ZscoreTableService{

    upload(file, onUploadProgress) {
        let formData = new FormData()
        formData.append('file', file)
    
        return axios
          .post(API_URL + '/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            onUploadProgress,
          })
          .then((res) => {
            console.log(res.data)
            return res.data
          })
      }
  
      getResults = () => {
        return axios.get(API_URL + '/view').then((res) => {
          console.log(res.data)
          return res.data
        })
      }
}

export default new ZscoreTableService()