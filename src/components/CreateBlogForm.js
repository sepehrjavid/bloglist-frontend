import React from 'react'
import blogService from "../services/blogs";

const createBlog = async (event, title, author, url, blogs, setTitle, setAuthor, setUrl, setBlogs, setErrorMessage, setMessageClass) => {
    event.preventDefault()

    const newBlog = await blogService.create({
        title: title,
        url: url,
        author: author
    })

    try {

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


const CreatBlogForm = ({title, author, url, blogs, setTitle, setAuthor, setUrl, setBlogs, setErrorMessage, setMessageClass}) => (
    <div>
        <h2>Create New</h2>
        <form
            onSubmit={(e) => createBlog(e, title, author, url, blogs, setTitle, setAuthor, setUrl, setBlogs, setErrorMessage, setMessageClass)}>
            <div>
                title
                <input
                    type="text"
                    value={title}
                    name="Title"
                    onChange={({target}) => setTitle(target.value)}
                />
            </div>
            <div>
                author
                <input
                    type="text"
                    value={author}
                    name="Author"
                    onChange={({target}) => setAuthor(target.value)}
                />
            </div>
            <div>
                url
                <input
                    type="text"
                    value={url}
                    name="Url"
                    onChange={({target}) => setUrl(target.value)}
                />
            </div>
            <button type="submit">Create</button>
        </form>
    </div>
)

export default CreatBlogForm
