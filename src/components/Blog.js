import React, {useState} from 'react'
import BlogDetailed from "./BlogDetailed";
import BlogBrief from "./BlogBrief";

const Blog = ({blog, removeBlog}) => {
    const [detailed, setDetailed] = useState(false)
    const [blogLikes, setBlogLikes] = useState(blog.likes)

    const swap = () => {
        setDetailed(!detailed)
    }


    return (
        <div>
            {detailed? BlogDetailed({blog, swap, setBlogLikes, blogLikes, removeBlog}) : BlogBrief({blog, swap})}
        </div>
    )
}

export default Blog
