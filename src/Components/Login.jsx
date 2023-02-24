import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Login() {
    const [statusMsg, setStatusMSg] = useState('')

    const phoneNumRef = useRef()
    const passwordRef = useRef()

    const { auth, setAuth, API_URL } = useAuth()
    console.log(auth, setAuth)


    const submitBtnFunc = (e) => {
        e.preventDefault()
        console.log(phoneNumRef.current)
        console.log(passwordRef.current)

        let userData = {
            phone: parseInt(''),
            password: ''
        }

        let url = API_URL + '/login'
        axios.post(url, userData
        ).then((res) => {
            setStatusMSg('Login Successful')
            console.log(res)
        }).catch(
            (err) => {
                setStatusMSg('Login Failed')
                console.log(err)
            }
        )
    }

    return (
        <div className="container">
            <div className="row">
                {auth}
                <div className="col-md-6 offset-md-3">
                    <h1>Login</h1>
                    {statusMsg}
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