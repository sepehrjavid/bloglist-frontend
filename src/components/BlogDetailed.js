import React from 'react'

const BlogDetailed = ({blog, swap}) => {
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    return (
        <div style={blogStyle}>
            <p>
                {blog.title}
                <button onClick={swap}>View</button>
            </p>
            <p>{blog.url}</p>
            <p>
                Likes {blog.likes}
                <button>Like</button>
            </p>
            <p>{blog.author}</p>

        </div>
    )
}


export default BlogDetailed
