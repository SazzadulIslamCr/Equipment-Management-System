import React from 'react'
import './login.module.css'

function login() {
  return (
    <div>
        <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
            <div className="col-lg-6 d-none d-lg-block bg-login-image" />
            <div className="col-lg-6">
                <div className="p-5">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4" style={{color: 'red'}}>CodeRex EMS</h1>
                </div>
                <form className="user">
                    <div className="form-group" style={{margin: '2px'}}>
                        <input type="email" className="form-control form-control-user" id="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                    </div>
                    <div className="form-group" style={{margin: '2px'}}>
                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                    </div>
                    <div className="form-group">
                    </div>
                    <div className='col text-center'>
                        <button className="btn btn-success btn-user btn-block">
                            Sign In
                        </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default login