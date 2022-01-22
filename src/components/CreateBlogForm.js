import React from 'react'
import blogService from "../services/blogs";

const createBlog = async (event, title, author, url, blogs, setTitle, setAuthor, setUrl, setBlogs, setErrorMessage) => {
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
    } catch (exception) {
        setErrorMessage(`${newBlog.title} was created!`)
        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
    }
}


const CreatBlogForm = ({title, author, url, blogs, setTitle, setAuthor, setUrl, setBlogs, setErrorMessage}) => (
    <div>
        <h2>Create New</h2>
        <form
            onSubmit={(e) => createBlog(e, title, author, url, blogs, setTitle, setAuthor, setUrl, setBlogs, setErrorMessage)}>
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
