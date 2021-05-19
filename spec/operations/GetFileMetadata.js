let axios = require('axios');
const config = require('./../helpers/config');


class GetFileMetadata {
    constructor() {
        this.token = config.token;
        this.payload = this.config_payload();
    }

    config_payload() {
        return {
            method: 'post',
            url: 'https://api.dropboxapi.com/2/sharing/get_file_metadata',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${this.token}`
            },
            data: {
                "actions": []
            }
        };  
    }

    async apply(file_id) {
        try { 
            this.payload.data.file = file_id;
            let response = await axios(this.payload);

            return response.status;
        } catch(e){ 
            console.log(e)

            return 400;
        }
    }
}

module.exports = GetFileMetadata;