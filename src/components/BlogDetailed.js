import React from 'react'
import blogService from "../services/blogs";


const BlogDetailed = ({blog, swap, setBlogLikes, blogLikes}) => {

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    const like = async () => {
        const newBlog = {
            user: blog.user.id,
            likes: blogLikes + 1,
            author: blog.author,
            url: blog.url,
            title: blog.title
        }
        const updatedBlog = await blogService.update(newBlog, blog.id)
        setBlogLikes(updatedBlog.likes)
    }

    return (
        <div style={blogStyle}>
            <p>
                {blog.title}
                <button onClick={swap}>View</button>
            </p>
            <p>{blog.url}</p>
            <p>
                Likes {blogLikes}
                <button onClick={like}>Like</button>
            </p>
            <p>{blog.author}</p>

        </div>
    )
}


export default BlogDetailed
