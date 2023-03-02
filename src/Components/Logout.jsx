import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
    return (
        <div>
            <h1 className='display-1'>You Have Logged out</h1>
            <span className='display-5'>Want to</span> <Link to={'/login'} className='display-5'> Login Again</Link>

        </div>
    )
}

export default Logout