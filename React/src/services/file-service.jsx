import service from './service.jsx';

export default class FileService {
    uploadFileToServer(data){
        //returns Promise object
        return service.getRestClient().post('/upload', data);
    }
}