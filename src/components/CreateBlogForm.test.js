import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreatBlogForm from "./CreateBlogForm";

describe('<CreatBlogForm />', () => {
    let container

    const submitHandler = jest.fn()

    beforeEach(() => {
        container = render(
            <CreatBlogForm dummyCreateForTest={submitHandler}/>
        ).container
    })

    test('Has right values', () => {
        const titleInput = container.querySelector("#titleInput")
        const authorInput = container.querySelector("#authorInput")
        const urlInput = container.querySelector("#urlInput")
        const submitButton = container.querySelector("#submitInput")

        userEvent.type(titleInput, "test title")
        userEvent.type(authorInput, "author")
        userEvent.type(urlInput, "http://test.com")
        userEvent.click(submitButton)

        expect(submitHandler.mock.calls).toHaveLength(1)
        expect(submitHandler.mock.calls[0][0].title).toBe('test title' )
        expect(submitHandler.mock.calls[0][0].author).toBe('author' )
        expect(submitHandler.mock.calls[0][0].url).toBe('http://test.com' )
    })

})
