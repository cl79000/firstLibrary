import Axios from 'axios'

export default function request (config) {
  const instance = Axios.create({
    baseURL: '',
    timeout: 5000,
  });
  return instance(config)
}
