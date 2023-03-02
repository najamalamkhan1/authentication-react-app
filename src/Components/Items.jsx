import React from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Access from './Access'

function Items() {
    const { isLoggedIn } = useAuth()
    return (
        <div>
            {
                isLoggedIn ?
                    (
                        <>
                            <div className="container" >
                                <h1 className="display-1">Items</h1>
                            </div>
                        </>
                    ) : <Access></Access>
            }
        </div>

    )
}

export default Items