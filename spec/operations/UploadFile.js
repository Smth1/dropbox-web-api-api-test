let axios = require('axios');
const config = require('./../helpers/config');


class UploadFile {
    constructor() {
        this.token = config.token;
        this.payload = this.config_payload();
    }

    config_payload() {
        return {
            method: 'post',
            url: 'https://content.dropboxapi.com/2/files/upload',
            headers: {
                'Dropbox-API-Arg': '{"path": "/Homework/testing/diagram", "mode": "add", "autorename": true, "mute": false, "strict_conflict": false}',
                'Content-Type': 'application/octet-stream',
                'Authorization' : `Bearer ${this.token}`
            },
            data: {
                binary: "/home/romanm/Documents/DiagramHotelProject"
            }
        };
    }

    async apply() {
        try { 
            let response = await axios(this.payload);

            return { status : response.status,
                    id : response.data.id };
        } catch(e){ 
            console.log(e)

            return 400;
        }
    }
}

module.exports = UploadFile;