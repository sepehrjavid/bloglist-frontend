import React, {useState} from "react"


const CreatBlogForm = ({blogFormRef, setBlogs, blogs, setMessageClass, setErrorMessage, dummyCreateForTest}) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")


    const addBlog = async (event) => {
        event.preventDefault()

        // try {
            dummyCreateForTest({
                title: title,
                url: url,
                author: author
            })
            // const newBlog = await blogService.create({
            //     title: title,
            //     url: url,
            //     author: author
            // })

        //     blogFormRef.current.toggleVisibility()
        //     setBlogs(blogs.concat(newBlog))
        //     setTitle("")
        //     setAuthor("")
        //     setUrl("")
        //     setMessageClass("message")
        //     setErrorMessage(`${newBlog.title} was created!`)
        //     setTimeout(() => {
        //         setErrorMessage(null)
        //     }, 5000)
        // } catch (exception) {
        //     setMessageClass("error")
        //     setErrorMessage("Something went wrong!")
        //     setTimeout(() => {
        //         setErrorMessage(null)
        //     }, 5000)
        // }
    }

    return (
        <div>
            <h2>Create New</h2>
            <form
                onSubmit={addBlog}>
                <div>
                    title
                    <input
                        id="titleInput"
                        type="text"
                        value={title}
                        name="Title"
                        onChange={({target}) => setTitle(target.value)}
                    />
                </div>
                <div>
                    author
                    <input
                        id="authorInput"
                        type="text"
                        value={author}
                        name="Author"
                        onChange={({target}) => setAuthor(target.value)}
                    />
                </div>
                <div>
                    url
                    <input
                        id="urlInput"
                        type="text"
                        value={url}
                        name="Url"
                        onChange={({target}) => setUrl(target.value)}
                    />
                </div>
                <button type="submit" id="submitInput">Create</button>
            </form>
        </div>
    )
}


export default CreatBlogForm
