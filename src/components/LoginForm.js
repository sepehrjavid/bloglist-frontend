import React from "react"
import loginService from "../services/login"
import blogService from "../services/blogs"

const handleLogin = async (event, username, password, setUsername, setPassword, setUser, setErrorMessage, setMessageClass) => {
    event.preventDefault()

    try {
        const user = await loginService.login({
            username, password,
        })

        window.localStorage.setItem(
            "loggedBlogAppUser", JSON.stringify(user)
        )

        blogService.setToken(user.token)
        setUser(user)
        setUsername("")
        setPassword("")
    } catch (exception) {
        setMessageClass("error")
        setErrorMessage("Wrong credentials")
        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
    }
}

const LoginForm = ({username, password, setUsername, setPassword, setUser, setErrorMessage, setMessageClass}) => (
    <form
        id='loginForm'
        onSubmit={(e) => handleLogin(e, username, password, setUsername, setPassword, setUser, setErrorMessage, setMessageClass)}>
        <div>
            username
            <input
                type="text"
                value={username}
                name="Username"
                onChange={({target}) => setUsername(target.value)}
            />
        </div>
        <div>
            password
            <input
                type="password"
                value={password}
                name="Password"
                onChange={({target}) => setPassword(target.value)}
            />
        </div>
        <button type="submit">login</button>
    </form>
)

export default LoginForm
