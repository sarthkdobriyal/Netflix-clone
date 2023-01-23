import axios from 'axios'


//creating the base url for all requests later
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    timeout: 1000,
})

export default instance;