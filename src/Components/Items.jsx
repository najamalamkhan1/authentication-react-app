import React from 'react'
import { Outlet } from 'react-router-dom'

function Items() {
    return (
        <>
            <div className="container">
                <h1 className="display-1">Items</h1>
                <Outlet />
            </div>
        </>
    )
}

export default Items