import axios from 'axios'
import config from '../config/api.config.json'


const API = {
    cover: async (artist_name, song_name) => {
        //apiconfig.BASE_URL+apiconfig.ENDPOINTS.LOGIN
        let option = {
            url: config.BASE_URL + config.ENDPOINTS.COVER,
            method: 'POST',
            data: {
                artist_name: artist_name,
                song_name: song_name
            }
        }

        try {
            let result = await axios(option)
            return result.data
        } 
        
        catch (error) {
            return error

        }
    }
}

export default API