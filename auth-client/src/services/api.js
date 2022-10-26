import axios from 'axios';
import Cookies from 'js-cookie'

export const api_url = process.env.REACT_APP_API_URL || "http://localhost:8000"
export const client_url = process.env.REACT_APP_CLIENT_URL || "http://localhost:3000"
export const login_url = process.env.REACT_APP_LOGIN_URL || "api/login"
export const logout_url = process.env.REACT_APP_LOGOUT_URL || "api/logout"
export const csrf_token_url = process.env.REACT_APP_CSRF_TOKEN_URL || "/sanctum/csrf-cookie"

// IF axios.create not used, we set default config for axio, axios.defaults.withCredentials = true

// if logged in (for changing header for a single property of an axios call, here apiClient = const apiClient = axios.create( )
// apiClient.interceptors.request.use(config => {
//     config.headers['Authorization'] = `Bearer ${Cookies.get('access_token')}`;
//     return config;
//   });

var headers;
const isLoggedIn = sessionStorage.getItem('loggedIn') == 'true' || false
if(isLoggedIn){
    headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": 'true',
        "Access-Control-Allow-Origin" : client_url,
        "Authorization" : `Bearer ${Cookies.get('access_token')}`
    };
} else{
    headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": 'true',
        "Access-Control-Allow-Origin" : client_url,
    };
}

const apiClient = axios.create({
    headers: headers,
    baseURL: api_url,
    withCredentials: true,
})

export default apiClient