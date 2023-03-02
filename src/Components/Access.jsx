import React from 'react'
import { Link } from 'react-router-dom'
function Access() {
    return (
        <>
            <div>
                <h1 className="container display-6 bg-danger text-light h-75 w-50">You Don't have access</h1>
                <div>
                    <span> Please </span><Link to={'/login'}> Login </Link><span>First</span>
                </div>
            </div>
        </>
    )
}

export default Access