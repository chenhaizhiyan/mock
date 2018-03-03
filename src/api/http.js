import axios from 'axios'

// 使用interceptors拦截每次的request和response，然后自定义添加header信息
axios.defaults.withCredentials = true
axios.interceptors.request.use(config => { // config表示每次请求的内容
  // 设置header
  return config
}, error => { // 错误处理
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => { // 错误处理
    return Promise.reject(error)
  }
)

export default axios
