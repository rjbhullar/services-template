import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.1.35:3000'
const headers = {
    'Content-Type': 'application/json',
}

const REQUESTS_DETAILS = {
    login: (data) => ({
        method: 'POST',
        url: '/signin',
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
