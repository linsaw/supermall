import axios from "axios";

export function request(option) {
  // 1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn',
    timeout: 5000
  })
  // 2、axios拦截器
  instance.interceptors.request.use((config) => {
    // console.log(res)
    // 拦截做事情
    // 比如配置中一些信息部符合服务器要求
    return config
  },(error) => {
    // console.log(error)
    return error
  })
  // 2.1、响应拦截
  instance.interceptors.response.use((response) => {
    // console.log(res)
    return response.data
  },(error) => {
    // console.log(error)
    return error
  })
  // 3、发送请求
  return instance(option)

}


