let axios = require('axios');
const config = require('./../helpers/config');


class DeleteFile {
    constructor() {
        this.token = config.token;
        this.payload = this.config_payload();
    }

    config_payload() {
        return {
            method: 'post',
            url: 'https://api.dropboxapi.com/2/files/delete_v2',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${this.token}`
            },
            data: {
                "path": "/Homework/testing/diagram"
            }
        };
    }

    async apply() {
        try { 
            let response = await axios(this.payload);

            return response.status;
        } catch(e){ 
            console.log(e)

            return 400;
        }
    }
}

module.exports = DeleteFile;