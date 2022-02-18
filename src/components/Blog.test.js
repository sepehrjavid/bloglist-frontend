import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

describe('<Blog />', () => {
    let container

    const blog = {
        title: "sep",
        likes: 0,
        url: "http://sep.com",
        author: "me"
    }
    const likeHandler = jest.fn()

    beforeEach(() => {
        container = render(
            <Blog blog={blog} removeBlog={jest.fn()} likeBlog={likeHandler}/>
        ).container
    })

    test('Has title and author', () => {
        const element = screen.getByText(`${blog.title} by ${blog.author}`)
        expect(element).toBeDefined()
    })

    test('does not have url', () => {
        const element = container.querySelector("#url")
        expect(element).toBeNull()
    })

    test('does not have likes', () => {
        const element = container.querySelector("#likes")
        expect(element).toBeNull()
    })

    test('has url after button clicked', () => {
        const button = screen.getByText("View")
        userEvent.click(button)

        const element = container.querySelector("#url")
        expect(element).not.toBeNull()
    })

    test('has likes after button clicked', () => {
        const button = screen.getByText("View")
        userEvent.click(button)

        const element = container.querySelector("#likes")
        expect(element).not.toBeNull()
    })

    test('like pressed twice', () => {
        const button = screen.getByText("View")
        userEvent.click(button)

        const likeButton = container.querySelector("#likeButton")

        userEvent.click(likeButton)
        userEvent.click(likeButton)

        expect(likeHandler.mock.calls).toHaveLength(2)
    })
})
