import React from 'react'
import Banner from '../../asset/Banner';
import Logo1 from '../../asset/Logo1'

import './style.css'

const GetStarted = () => {
  return (
    <div className="">
      <div className="div1">
        <Banner type="success" />
        <div className="flex items-center justify-center">
          <div className="logo1">
            <Logo1 height={145.93} width={44} />
          </div>
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
          By continuing you agree to our Terms and Privacy Policy. We never post
          to facebook.
        </p>
      </div>
    </div>
  );
}

export default GetStarted