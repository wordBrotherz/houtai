import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  config.headers['token'] = window.localStorage.getItem('admin-token')
  return config
}, error => {
  // do something with request error
  console.log(error) // for debug
  return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(
  response => {
    let token = window.localStorage.getItem('admin-token')

    if (401 == response.code || !token) {
      router.push('/login')
    }

    return response.data
  }, error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message, type: 'error', duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
