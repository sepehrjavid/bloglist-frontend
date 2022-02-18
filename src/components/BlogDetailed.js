import React from "react"
import blogService from "../services/blogs"
import PropTypes from "prop-types"


const BlogDetailed = ({blog, swap, setBlogLikes, blogLikes, removeBlog}) => {

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: "solid",
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
                <button onClick={swap}>Hide</button>
            </p>
            <p id="url">{blog.url}</p>
            <p id="likes">
                Likes {blogLikes}
                <button onClick={like}>Like</button>
            </p>
            <p>{blog.author}</p>
            <button onClick={() => removeBlog(blog)}>Remove</button>
        </div>
    )
}

BlogDetailed.propTypes = {
    blog: PropTypes.string.isRequired,
    swap: PropTypes.string.isRequired,
    setBlogLikes: PropTypes.string.isRequired,
    blogLikes: PropTypes.string.isRequired,
    removeBlog: PropTypes.string.isRequired,
}


export default BlogDetailed
