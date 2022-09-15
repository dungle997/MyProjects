import axios from 'axios'
let token = JSON.parse(localStorage.getItem('user_token'))
// console.log('token = ',token)

const instance = axios.create({
    baseURL: 'http://localhost:9000/',
    // headers: {'Authorization': 'Bearer '+ token}
  });

export default instance