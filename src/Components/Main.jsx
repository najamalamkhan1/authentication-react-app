import React from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Access from './Access'

function Main() {
    const { isLoggedIn } = useAuth()
    return (
        <div>
            {
                isLoggedIn ? <h1>Main</h1> : <Access></Access>
            }
        </div>
    )
}

export default Main