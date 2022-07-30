import React from 'react'
import { BiChevronLeft } from 'react-icons/bi';
import Logo1 from '../../asset/logo1.png'

import './style.css'

const SignUp = () => {
  return (
    <div className="">
      <div className="div1">
        <div className="flex items-center justify-center">
          <img src={Logo1} alt="Logo1" className="sign-up-logo1" />
        </div>
        <button className="back-btn">
          <BiChevronLeft className="back-icon" />
        </button>
      </div>
      <div className="sign-up-container">
        <div className="sign-up-form-container">
          <div className="sign-up-form-text">
            <p className="sign-up-form-text-main">Create an account</p>
            <p className="sign-up-form-text-sub">
              Take a step towards finding someone awesome!
            </p>
          </div>
          <div className="sign-up-form-input-container">
            <div className="email-input-container">
              <div className="email-label">
                <label className="email">Email ID</label>
                {/* <input /> */}
              </div>
            </div>
            <div className="email-input-container">
              <div className="email-label">
                <label className="email">Password</label>
                {/* <input /> */}
              </div>
            </div>
            <button className='sign-up-form-btn'>
              <p className="sign-up-form-btn-text">
                Continue
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp