import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import Logo1 from "../../asset/Logo1";

import "./style.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  return (
    <div className="page-container">
      <Row>
        <Col className="div1 success-div">
          <div className="login-logo1">
            <Logo1 height={145.93} width={44} />
          </div>
          <button className="back-btn">
            <BiChevronLeft className="back-icon" />
          </button>
        </Col>
      </Row>
      <div className="div2">
        <div className="get-started-container">
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
              <p className="forgot-password">Forgot Password</p>
              <button className="sign-up-form-btn">
                <p className="sign-up-form-btn-text">Login</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
