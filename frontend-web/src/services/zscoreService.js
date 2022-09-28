import axios from 'axios'

const API_URL = 'http://localhost:1001/api/zscore'

class ZscoreService{

    // zscoreImportFormCheck(zscoreImportForm){
    //     return axios.post(API_URL + '/import', zscoreImportForm).then((response) => {
    //         console.log(response.data)
    //         return response.data
    //     })
    // }

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
}

export default new ZscoreService()