import React from 'react'

const logout = (setUser) => {
    window.localStorage.removeItem('loggedBlogAppUser')
    setUser(null)
}

const UserDetail = ({user, setUser}) => (
    <div>
        {user.username} is logged in
        <button onClick={() => logout(setUser)}>Logout</button>
    </div>
)

export default UserDetail
