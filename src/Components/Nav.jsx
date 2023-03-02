import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Nav() {
    const { isLoggedIn } = useAuth()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>MyApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to={'/main'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Main
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to={'/main/items'}>Items</Link></li>
                                    <li><Link className="dropdown-item disabled" to={' '}>Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item disabled" to={' '}>Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to={' '} tabindex="-1" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link className="btn btn-outline-warning" to={isLoggedIn ? '/logout' : '/signup'}>{isLoggedIn ? 'Logout' : 'Signup'}</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav