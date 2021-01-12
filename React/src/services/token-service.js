import config from '../config';

const TokenService = {
    saveUser(user) {
        window.localStorage.setItem('user', JSON.stringify(user))
    },
    getAuthToken() {
        return window.localStorage.getItem()
    },
    clearAuthToken() {
        window.localStorage.removeItem()
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    makeBasicAuthToken(userName, password) {
        return window.btoa(`${userName}:${password}`)
    },
}

export default TokenService;
