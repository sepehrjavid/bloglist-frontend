import React, {useEffect, useRef, useState} from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from "./components/LoginForm";
import UserDetail from "./components/UserDetail";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
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
    const [messageClass, setMessageClass] = useState(".error")

    const blogFormRef = useRef()

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

    const addBlog = async (event) => {
        event.preventDefault()

        try {
            const newBlog = await blogService.create({
                title: title,
                url: url,
                author: author
            })

            blogFormRef.current.toggleVisibility()
            setBlogs(blogs.concat(newBlog))
            setTitle('')
            setAuthor('')
            setUrl('')
            setMessageClass("message")
            setErrorMessage(`${newBlog.title} was created!`)
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        } catch (exception) {
            setMessageClass("error")
            setErrorMessage('Something went wrong!')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }


    return (
        <div>
            <h2>blogs</h2>

            <Notification message={errorMessage} messageClass={messageClass}/>

            {user === null ?
                LoginForm({username, password, setUsername, setPassword, setUser, setErrorMessage, setMessageClass}) :
                UserDetail({user, setUser})
            }

            {user !== null && <Togglable buttonLabel="Create New Blog" ref={blogFormRef}>
                <CreatBlogForm addBlog={addBlog} setUrl={setUrl} setAuthor={setAuthor} setTitle={setTitle} title={title}
                               author={author} url={url}/>
            </Togglable>}


            {user !== null && blogs.map(blog =>
                <Blog key={blog.id} blog={blog}/>
            )}
        </div>
    )
}

export default App
