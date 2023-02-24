import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Signup() {
    const [statusMsg, setStatusMSg] = useState()

    const phoneNumRef = useRef(parseInt(''))
    const passwordRef = useRef('')

    const signupBtnFunc = (e) => {
        e.preventDefault()

        let url = 'https://comfortable-gold-belt.cyclic.app/signup'
        let userData = {
            phone: parseInt(''),
            password: ''
        }
        axios.post(url, userData).then(
            (res) => {
                setStatusMSg(res.data.msg)
                console.log(res);
            }
        ).catch(
            (err) => {
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
                    {statusMsg}
                    <form>
                        <div className="mb-3">
                            <input ref={phoneNumRef} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Phone Number' />
                        </div>
                        <div className="mb-3">
                            <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' />
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