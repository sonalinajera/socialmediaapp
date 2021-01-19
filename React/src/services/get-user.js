import axios from 'axios';
import config from '../config';

async function getUser() {
    axios.get(`${config.API_ENDPOINT}/api/getUser`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        })
}