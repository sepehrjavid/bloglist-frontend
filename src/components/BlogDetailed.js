import React from "react"
import PropTypes from "prop-types"


const BlogDetailed = ({blog, swap, removeBlog, likeBlog}) => {

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: "solid",
        borderWidth: 1,
        marginBottom: 5
    }

    return (
        <div style={blogStyle}>
            <p>
                {blog.title}
                <button onClick={swap}>Hide</button>
            </p>
            <p id="url">{blog.url}</p>
            <p id="likes">
                Likes {blog.likes}
                <button onClick={() => likeBlog(blog)} id="likeButton">Like</button>
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
