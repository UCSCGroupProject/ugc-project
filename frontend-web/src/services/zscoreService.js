import axios from 'axios'

const API_URL = 'http://localhost:4/api/zscore'

class ZscoreService{

    importZscoreTable(){
        return axios.post(API_URL + '/import', staffRoleDetailsForm).then((response) => {
            console.log(response.data)
            return response.data
        })
    }

}