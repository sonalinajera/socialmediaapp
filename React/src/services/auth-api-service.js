import config from '../config'
import axios from 'axios';

//AuthApiService is an object of functions that perform api calls for for loggin in and registration.

const AuthApiService = {


    //This function is for creating a new user.(Registration)
    postUser(userInfo) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default AuthApiService