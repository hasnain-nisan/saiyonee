import React from 'react'
import Logo1 from '../../asset/Logo1'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './style.css'

const GetStarted = () => {
  return (
    <div className="page-container">
      <Row>
        <Col className="div1 success-div">
          <div className="login-logo1">
            <Logo1 height={145.93} width={44} />
          </div>
        </Col>
      </Row>
      <div className="div2">
        <div className="get-started-container">
          <Row className="title-text-container">
            <p className="title-text">Hi there! Let get Started.</p>
            <p className="title-text-sub">
              Sign up with one of following options
            </p>
          </Row>
          <Row className="button-container">
            <button className="btn sign-up-btn">
              <p className="sign-up-btn-text">Sign Up with Email</p>
            </button>
            <button className="btn login-btn">
              <p className="login-btn-text">Login</p>
            </button>
          </Row>
          <Row className="terms-text">
            By continuing you agree to our Terms and Privacy Policy. We never
            post to facebook.
          </Row>
        </div>
      </div>
    </div>
  );
}

export default GetStarted