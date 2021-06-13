import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}

const REQUESTS_DETAILS = {
    login: (data) => ({
        method: 'POST',
        url: '/login',
        headers,
        data,
    }),
    signup: (data) => ({
        method: 'POST',
        url: '/signup',
        headers,
        data,
    }),
}

const makeAxiosRequest = (requestType, payload) => {
    let requestParams = REQUESTS_DETAILS[requestType](payload)
    return axios.request(requestParams)
}

export default makeAxiosRequest
