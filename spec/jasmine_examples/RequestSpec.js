let axios = require('axios');
var file_id;

const token = "dRYkhhbdg4MAAAAAAAAAAaNtwqevl1rQWfJXJjqmK9NSx_VIAhZMJ2HR1czid6Bq";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

describe("upload my diagram to server", function() {

    let config_upload = {
        method: 'post',
        url: 'https://content.dropboxapi.com/2/files/upload',
        headers: {
            'Dropbox-API-Arg': '{"path": "/Homework/testing/diagram", "mode": "add", "autorename": true, "mute": false, "strict_conflict": false}',
            'Content-Type': 'application/octet-stream'
        },
        data: {
            binary: "/home/romanm/Documents/DiagramHotelProject"
        }
    };

    it("have to be successfully uploaded", async function() {

        let response_status = 400;

        await axios(config_upload)
            .then(function(response) {
                response_status = response.status;
                file_id = response.data.id;
            })
            .catch(function(error) {
                console.log(error);
            });
        
        expect(response_status).toBe(200);
    }, 10000);

    
});

console.log("owieurow" + file_id);


describe("get metadata from file", function() {
    it("have to be successfully got data", async function() {
        let response_status = 400;

        let config_get_metadata = {
          method: 'post',
          url: 'https://api.dropboxapi.com/2/sharing/get_file_metadata',
          headers: {
              'Content-Type': 'application/json',
          },
          data: {
              "file": file_id,
              "actions": []
          }
      };

        await axios(config_get_metadata)
            .then(function(response) {
                response_status = response.status;
            })
            .catch(function(error) {
                console.log(error);
            });

        expect(response_status).toBe(200);
    }, 10000);
});

describe("delete file from server", function() {
    let config_delete_file = {
        method: 'post',
        url: 'https://api.dropboxapi.com/2/files/delete_v2',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "path": "/Homework/testing/diagram"
        }
    };

    it("have to be successfully deleted", async function() {
        let response_status = 400;

        await axios(config_delete_file)
            .then(function(response) {
                response_status = response.status;
            })
            .catch(function(error) {
                console.log(error);
            });

        expect(response_status).toBe(200);
    }, 10000);
});
