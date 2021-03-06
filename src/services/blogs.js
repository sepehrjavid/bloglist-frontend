import axios from "axios"

const baseUrl = "/api/blogs"

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

const update = async (data, blog_id) => {
    const response = await axios.put(`${baseUrl}/${blog_id}`, data)
    return response.data
}

const remove = async (blog_id) => {
    const config = {
        headers: {Authorization: token},
    }
    const response = await axios.delete(`${baseUrl}/${blog_id}`, config)
    return response
}


const blogService = {getAll, create, setToken, update, remove}

export default blogService
