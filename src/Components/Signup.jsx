import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import HashLoader from 'react-spinners/HashLoader'


function Signup() {
    const [statusMsg, setStatusMSg] = useState('')
    const [loading, setLoading] = useState(false);

    const phone = useRef()
    const password = useRef()

    const navigate = useNavigate()

    const signupBtnFunc = (e) => {
        e.preventDefault()
        console.log(phone.current.value)
        console.log(password.current.value)
        setLoading(true)

        let url = 'https://comfortable-gold-belt.cyclic.app/signup'
        let userData = {
            phone:phone.current.value,
            password :password.current.value
        }
        axios.post(url, userData).then(
            (res) => {
                setLoading(false)
                navigate('/login')
                setStatusMSg('Signup Successful')
                console.log(res);
            }
        ).catch(
            (err) => {
                setLoading(false)
                navigate('/access')
                setStatusMSg('Signup Failed')
                console.log(err)
            }
        )
    }

    return (
        // bootstrep 5 signup form?
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Signup</h1>
                    <div className='h-50 w-25 m-auto'>
                        {loading ? <HashLoader
                            loading={loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /> : statusMsg
                        }
                    </div>
                    <form>
                        <div className="mb-3">
                            <input ref={phone} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Phone Number' />
                        </div>
                        <div className="mb-3">
                            <input ref={password} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' />
                        </div>
                        <button type="submit" className="btn btn-warning" onClick={signupBtnFunc}>Signup</button>
                        OR
                        <Link to={'/login'} className='btn btn-primary'>Login</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup