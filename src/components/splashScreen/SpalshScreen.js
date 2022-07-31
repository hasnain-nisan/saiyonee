import React from 'react'
import Logo from '../../asset/Logo'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './style.css'

const SpalshScreen = () => {
  
  return (
    <div className="page-container">
      <Row>
        <Col className="div1">
          <p className="welcome-text">Welcome to Saiyonee</p>
        </Col>
      </Row>
      <div className="div2">
        <Row>
          <Col className="container-center">
            <div className="logo">
              <Logo/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="container-center">
            <div className="loading-spinner">
              {/* <div class="loadingio-spinner-spinner-bw2nrc78gjf">
                <div class="ldio-rl5xt7jtin">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SpalshScreen