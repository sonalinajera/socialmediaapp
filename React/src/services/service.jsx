import axios from 'axios';
class Service {

  constructor() {
    console.log("Service is constructed");
  }

  getRestClient() {
    if (!this.serviceInstance) {
      this.serviceInstance = axios.create({
        baseURL: 'http://localhost:9001/SocialApp/api',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
      });
    }
    return this.serviceInstance;
  }
}

export default (new Service());