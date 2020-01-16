import axios from 'axios' 

const api = axios.create({
    'baseURL': 'exp://sa-b86.anonymous.mobile.exp.direct:80'
})

export default api
