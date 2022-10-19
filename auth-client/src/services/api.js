import axios from 'axios';
import data from './data.json'

export const api_url = data.api_url
export const client_url = data.client_url
export const login_url = data.login_url
export const logout_url = data.logout_url
export const csrf_token_url = data.csrf_token_url

// IF axios.create not used, we set default config for axio, axios.defaults.withCredentials = true

const apiClient = axios.create({
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": 'true',
        "Access-Control-Allow-Origin" : client_url
    },
    baseURL: api_url,
    withCredentials: true,
})

console.log(apiClient.defaults.headers)

export default apiClient