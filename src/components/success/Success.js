import React from 'react'
import Logo1 from '../../asset/Logo1'
import {BiChevronRight} from 'react-icons/bi'
import tutorial from '../../asset/tutorial.mp4';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css"

const Success = () => {
  return (
    <div className="page-container">
      <Row>
        <Col className="div1 success-div">
          <div className="logo1">
            <Logo1 height={225.53} width={68} />
          </div>
        </Col>
      </Row>
      <div className="div2">
        <Row>
          <Col className="container-center">
            <div className="tutorial">
              <video
                className="video"
                width="326px"
                height="258px"
                src={tutorial}
                controls
                autoPlay={true}
              />
              <div className="tutorial-text-container">
                <div className="tutorial-text">
                  <h4 className="tutorial-text-title">Tutorial</h4>
                  <p className="tutorial-text-desc">
                    Duis in libero vel nulla feugiat venenatis sed nec elit.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="container-center">
            <div className="success-action">
              <p className="skip">Skip</p>
              <div className="btn-next-div">
                <button className="btn-next">
                  <BiChevronRight style={{ color: "#1F2937" }} />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Success