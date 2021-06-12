import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'
const headers = {}

const REQUESTS_DETAILS = {
    login: (data) => ({
        method: 'POST',
        url: '/posts',
        headers,
        data,
    }),
}

const makeAxiosRequest = (requestType, payload) => {
    let requestParams = REQUESTS_DETAILS[requestType](payload)
    return axios.request(requestParams)
}

export default makeAxiosRequest
