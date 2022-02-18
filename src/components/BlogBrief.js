import React from "react"

const BlogBrief = ({blog, swap}) => {
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: "solid",
        borderWidth: 1,
        marginBottom: 5
    }

    return (
        <div style={blogStyle}>
            {blog.title}
            <button onClick={swap}>View</button>
        </div>
    )

}


export default BlogBrief
