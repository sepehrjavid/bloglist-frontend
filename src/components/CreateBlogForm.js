import React from 'react'


const CreatBlogForm = ({addBlog, setTitle, setAuthor, setUrl, title, author, url}) => (
    <div>
        <h2>Create New</h2>
        <form
            onSubmit={addBlog}>
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
