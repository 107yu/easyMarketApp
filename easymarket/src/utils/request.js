import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://169.254.12.174:8888',
  // withCredentials: true, 
  timeout: 5000 // request timeout
})
const getNewHeaders = () =>{
  return {'x-nideshop-token': window.localStorage.getItem('token')}
}
class service {
  static get (url, params = {}) {
    return new Promise((resolve, reject) => {
      instance.get(url, { params, headers: getNewHeaders() },).then(({ data }) => {
        if(data.errno === 0){
          resolve(data.data)
        }else{
          resolve(data)
        }
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
  static post (url, params = {}) {
    return new Promise((resolve, reject) => {
      instance.post(url, { ...params },{headers: getNewHeaders()}).then(({ data }) => {
        resolve(data)
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
}
export default service