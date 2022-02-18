import React, {useState} from "react"
import BlogDetailed from "./BlogDetailed"
import BlogBrief from "./BlogBrief"

const Blog = ({blog, removeBlog, likeBlog}) => {
    const [detailed, setDetailed] = useState(false)

    const swap = () => {
        setDetailed(!detailed)
    }


    return (
        <div>
            {detailed? BlogDetailed({blog, swap, removeBlog, likeBlog}) :
                BlogBrief({blog, swap})}
        </div>
    )
}

export default Blog
