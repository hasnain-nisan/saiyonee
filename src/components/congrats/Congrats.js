import React from 'react'

import './style.css'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Congrats = () => {
  return (
    <div className="page-container">
      <Row>
        <Col className="div1 congrats-div"></Col>
      </Row>
      <div className="div2 container-center">
        <div className="congrats-text-container">
          <div className="congrats-text-container-sub">
            <p className="congrats-text-title">Congratulation</p>
            <p className="congrats-text-sub">
              Your phone email is verified now
            </p>
          </div>
        </div>
        <div className='container-center'>
          <button className="congrats-btn">
            <p className="congrats-btn-text">Lets Go</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Congrats