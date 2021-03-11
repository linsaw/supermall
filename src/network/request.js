import axios from "axios";

export function request(config) {
  // 1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 10 * 1000
  })
  // 2、axios拦截器
  instance.interceptors.request.use((res) => {
    // console.log(res)
    // 拦截做事情
    // 比如配置中一些信息部符合服务器要求
    return res
  },(error) => {
    // console.log(error)
  })
  // 2.1、响应拦截
  instance.interceptors.response.use((res) => {
    console.log(res)
    return res
  },(error) => {
    console.log(error)
  })
  // 3、发送请求
  return instance(config)
}


