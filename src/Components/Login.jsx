import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";
import useAuth from '../hooks/useAuth'

function Login() {
    const [statusMsg, setStatusMSg] = useState('')
    let [loading, setLoading] = useState(false);

    const phoneNumRef = useRef()
    const passwordRef = useRef()

    const { auth, setAuth, API_URL, isLoggedIn, setIsLoggedIn } = useAuth()
    console.log(auth, setAuth)

    const navigate = useNavigate()


    const submitBtnFunc = (e) => {
        e.preventDefault()
        console.log(phoneNumRef.current.value)
        console.log(passwordRef.current.value)
        setLoading(true)

        let userData = {
            phone: parseInt(phoneNumRef.current.value),
            password: passwordRef.current.value
        }

        let url = API_URL + '/login'
        axios.post(url, userData
        ).then((res) => {
            setLoading(false)
            setStatusMSg('Login Successful')
            setIsLoggedIn(true)
            navigate('/main/items')
            console.log(res.data)
            setAuth(res)
        }).catch(
            (err) => {
                setLoading(false)
                setStatusMSg('Login Failed')
                navigate('/access')
                console.log(err)
            }
        )
    }

    return (
        <div className="container">
            <div className="row">
                {/* {auth} */}
                <div className="col-md-6 offset-md-3">
                    <h1>Login</h1>
                    <div className='h-50 w-25 m-auto'>
                        {loading ?
                            <HashLoader
                                loading={loading}
                                size={150}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            /> : statusMsg
                        }
                    </div>
                    <form>
                        <div className="mb-3">
                            <input ref={phoneNumRef} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone Number' />
                        </div>
                        <div className="mb-3">
                            <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                        </div>
                        <div className="mb-3 form-check">
                            <button type="submit" className="btn btn-primary" onClick={submitBtnFunc}>Login</button>
                            OR
                            <Link to={'/signup'} className='btn btn-warning'>Signup</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;