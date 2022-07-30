import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import Logo1 from "../../asset/Logo1";
import Banner from "../../asset/Banner";

import "./style.css";

const Login = () => {
  return (
    <div className="">
      <div className="div1">
        <Banner />
        <div className="flex items-center justify-center">
          <div className="logo1">
            <Logo1 height={145.93} width={44} />
          </div>
        </div>
        <button className="back-btn">
          <BiChevronLeft className="back-icon" />
        </button>
      </div>
      <div className="sign-up-container">
        <div className="sign-up-form-container">
          <div className="sign-up-form-text">
            <p className="sign-up-form-text-main">Login</p>
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
            <button className="sign-up-form-btn">
              <p className="sign-up-form-btn-text">Login</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
