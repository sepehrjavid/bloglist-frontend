import React, {useEffect, useState} from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from "./components/LoginForm";
import UserDetail from "./components/UserDetail";
import Notification from "./components/Notification";
import CreatBlogForm from "./components/CreateBlogForm";

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        async function fetchBlogs() {
            const blogs = await blogService.getAll()
            setBlogs(blogs)
        }

        fetchBlogs()
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])


    return (
        <div>
            <h2>blogs</h2>

            <Notification message={errorMessage}/>

            {user === null ?
                LoginForm({username, password, setUsername, setPassword, setUser, setErrorMessage}) :
                UserDetail({user, setUser})
            }

            {user !== null && CreatBlogForm({
                title,
                author,
                url,
                blogs,
                setTitle,
                setAuthor,
                setUrl,
                setBlogs,
                setErrorMessage
            })}

            {user !== null && blogs.map(blog =>
                <Blog key={blog.id} blog={blog}/>
            )}
        </div>
    )
}

export default App
