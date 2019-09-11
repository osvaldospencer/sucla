import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/'
})

export const loadGenres = () => api.get('genres')

const apis = {
    loadGeneres: loadGenres
}

export default apis