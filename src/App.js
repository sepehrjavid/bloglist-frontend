import React, {useEffect, useState} from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from "./components/LoginForm";
import UserDetail from "./components/UserDetail";
import Notification from "./components/Notification";

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        blogService.getAll().then(blogs =>
            setBlogs(blogs)
        )
    }, [])

    return (
        <div>
            <h2>blogs</h2>

            <Notification message={errorMessage}/>

            {user === null ?
                LoginForm({username, password, setUsername, setPassword, setUser, setErrorMessage}) :
                UserDetail({user})
            }

            {user !== null && blogs.map(blog =>
                <Blog key={blog.id} blog={blog}/>
            )}
        </div>
    )
}

export default App
