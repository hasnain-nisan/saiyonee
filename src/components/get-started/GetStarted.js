import React from 'react'
import Logo1 from '../../asset/logo1.png'

import './style.css'
const GetStarted = () => {
  return (
    <div className="">
      <div className="div1">
        <div className="flex items-center justify-center">
          <img src={Logo1} alt="Logo1" className="login-logo1" />
        </div>
      </div>
      <div className="get-started-container">
        <div className="title-text-container">
          <p className="title-text">Hi there! Let get Started.</p>
          <p className="title-text-sub">
            Sign up with one of following options
          </p>
        </div>
        <div className="button-container">
          <button className="sign-up-btn">
            <p className="sign-up-btn-text">Sign Up with Email</p>
          </button>
          <button className="login-btn">
            <p className="login-btn-text">Login</p>
          </button>
        </div>
        <p className="terms-text">
          By continuing you agree to our Terms and Privacy Policy.
          We never post
          to facebook.
        </p>
      </div>
    </div>
  );
}

export default GetStarted