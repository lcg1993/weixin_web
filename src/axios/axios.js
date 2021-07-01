// 1. 引入
import axios from 'axios'

// 2. 创建实例
const instance =  axios.create(config)

// 3. 配置信息
let config = {
  // 每次请求的协议、IP地址。  设置该配置后，每次请求路径都可以使用相对路径，例如"/admin/login"
  baseURL: "/api",
  // 请求超时时间
  timeout: 10000,
  // 每次请求携带cookie
  withCredentials: false
}

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
);

// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
);

// 4. 导出
export default instance


