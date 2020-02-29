import Axios from 'axios'

export default function request (config) {
  const instance = Axios.create({
    baseURL: 'https://api.apiopen.top',
    timeout: 3000,
  });
  // 请求 - 拦截
  instance.interceptors.request.use(config => {
    return config
  },err =>{
    return err
  });
  // 响应 - 拦截
  instance.interceptors.response.use(response => {
    return response
  },err =>{
    return err
  });
  return instance(config)
}
