import axios from 'axios'

const API_URL = 'http://localhost:1001/api/zscore'

class ZscoreService{

    // zscoreImportFormCheck(zscoreImportForm){
    //     return axios.post(API_URL + '/import', zscoreImportForm).then((response) => {
    //         console.log(response.data)
    //         return response.data
    //     })
    // }

    // import(file, onUploadProgress) {
    //   let formData = new FormData()
    //   formData.append('file', file)
  
    //   return axios
    //     .post(API_URL + '/import', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //       onUploadProgress,
    //     })
    //     .then((res) => {
    //       console.log(res.data)
    //       return res.data
    //     })
    // }

    getResults = () => {
      return axios.get(API_URL + '/view').then((res) => {
        console.log(res.data)
        return res.data
      })
    }

    getZScoreTable = () => {
        return axios.get(API_URL + '/ZValue').then((res) => {
          console.log(res.data)
          return res.data
        })
      }
    
    create(addZValueForm){
        return axios.post(API_URL + '/addZValue', addZValueForm).then((response) => {
          return response.data
        })
    }

    import(file, onUploadProgress) {
      let formData = new FormData()
      formData.append('file', file)
  
      return axios
        .post(API_URL + '/import', formData, {
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

export default new ZscoreService()