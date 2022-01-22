import axios from 'axios'

const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}


const create = async (data) => {
    const config = {
        headers: {Authorization: token},
    }
    const response = await axios.post(baseUrl, data, config)
    return response.data
}


const blogService = {getAll, create, setToken}

export default blogService
