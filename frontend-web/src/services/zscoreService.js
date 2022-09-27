import axios from 'axios'

const API_URL = 'http://localhost:4/api/zscore'

class ZscoreService{

    zscoreImportFormCheck(zscoreImportForm){
        return axios.post(API_URL + '/import', zscoreImportForm).then((response) => {
            console.log(response.data)
            return response.data
        })
    }

}

export default new ZscoreService()