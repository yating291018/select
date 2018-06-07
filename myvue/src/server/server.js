import axios from 'axios'

axios.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

export default {
  get (url) {
    return axios.get(url)
  }
}
