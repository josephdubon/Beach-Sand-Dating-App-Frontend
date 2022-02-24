import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://beach-sand-dating-app.herokuapp.com/'
})

export default instance