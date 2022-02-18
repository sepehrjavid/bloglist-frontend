import React, {useEffect, useRef, useState} from "react"
import Blog from "./components/Blog"
import blogService from "./services/blogs"
import LoginForm from "./components/LoginForm"
import UserDetail from "./components/UserDetail"
import Notification from "./components/Notification"
import Togglable from "./components/Togglable"
import CreatBlogForm from "./components/CreateBlogForm"

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
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
        const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser")
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    const compare = (a, b) => {
        if (a.likes < b.likes) {
            return 1
        }
        if (a.likes > b.likes) {
            return -1
        }
        return 0
    }


    const removeBlog = async (blog) => {
        const result = window.confirm(`Remove blog ${blog.title} by ${blog.author}`)
        if (result) {
            await blogService.remove(blog.id)
            const newBlogs = blogs.filter((value) => {
                return value.id !== blog.id
            })
            setBlogs(newBlogs)
        }
    }


    const likeBlog = async (blog) => {
        const newBlog = {
            user: blog.user.id,
            likes: blog.likes + 1,
            author: blog.author,
            url: blog.url,
            title: blog.title
        }
        await blogService.update(newBlog, blog.id)
        blog.likes++
        setBlogs([...blogs])
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
                <CreatBlogForm blogFormRef={blogFormRef} setBlogs={setBlogs} blogs={blogs}
                    setErrorMessage={setErrorMessage} setMessageClass={setMessageClass}/>
            </Togglable>}


            {user !== null && blogs.sort(compare).map(blog =>
                <Blog key={blog.id} blog={blog} removeBlog={removeBlog} likeBlog={likeBlog}/>
            )}
        </div>
    )
}

export default App
