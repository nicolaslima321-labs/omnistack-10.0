import axios from 'axios' 

const api = axios.create({
    'baseURL': 'http://h6-4jr.anonymous.mobile.exp.direct:3333'
})

export default api
