const UploadFile = require('./operations/UploadFile');
const GetFileMetadata = require('./operations/GetFileMetadata');
const DeleteFile = require('./operations/DeleteFile');
var file_id;

describe("upload my diagram to server",  function() {
    const uploadPageObject = new UploadFile();

    it("have to be successfully uploaded", async function() {
        response = await uploadPageObject.apply();
        file_id = response.id;
        
        expect(response.status).toBe(200);
    }, 10000);

    
});

describe("get metadata from file", function() {
    const getFileMetadataPageObject = new GetFileMetadata();

    it("have to be successfully got data", async function() {
        response_status = await getFileMetadataPageObject.apply(file_id);
        
        expect(response_status).toBe(200);
    }, 10000);
});

describe("delete file from server", function() {
    const deleteFilePageObject = new DeleteFile();

    it("have to be successfully deleted", async function() {
        response_status = await deleteFilePageObject.apply();    

        expect(response_status).toBe(200);
    }, 10000);
});
