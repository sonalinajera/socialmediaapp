import config from '../config';

const TokenService = {

    //to set the user to the localStorage.
    saveUser(user) {
        window.localStorage.setItem('user', JSON.stringify(user))
    },

    //This is to get the user from the localStorage
    getUser() {
        let user = window.localStorage.getItem('user')
        return JSON.parse(user);
    },
    clearAuthToken() {
        window.localStorage.removeItem('user')
    },

    //this is for checking to see if user has authorization for being logged in. 
    hasAuthToken() {
        return !!TokenService.getUser()
    },


    // makeBasicAuthToken(userName, password) {
    //     return window.btoa(`${userName}:${password}`)
    // },
}

export default TokenService;
