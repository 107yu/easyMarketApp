import axios from 'axios'
import { getToken } from "../utils/index";
// create an axios instance
const service = axios.create({
  baseURL: 'http://123.206.55.50:8888',
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    // 判断是否有登陆态
    // if (getToken()) {
    //   // 让每个请求携带authorization
    //   config.headers['authorization'] = getToken()
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
    // message.error(error.message);
  }
)

export default service