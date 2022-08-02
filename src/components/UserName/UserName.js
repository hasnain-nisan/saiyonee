import React from 'react'
import { BiChevronLeft } from 'react-icons/bi';

import './style.css'

const UserName = () => {
  return (
    <div className="page-container user-form-container">
      <button className="back-btn-container">
        <BiChevronLeft fontSize={25} />
      </button>
      <div className="user-from-title-container user-from-title-container-user-name">
        <p className="user-form-title-text">
          What’s your Candidates Full Name?
        </p>
        <p className="user-name-sub-text">
          You won’t be able to change this later
        </p>
      </div>
      <div className="container-center">
        <div className="user-form-input-container user-form-input-container-user-name">
          <div className="">
            <label className="user-name-sub-text">
              1. What is your real name ? (as per NID / Passport / Driving
              License)
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Type your real name"
            />
          </div>
          <div className="">
            <label className="user-name-sub-text">
              2. What username you want to use ? (display name)
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Type your user name"
            />
          </div>
        </div>
      </div>
      <div className="container-center">
        <button className="user-form-next-btn">
          <p className="user-form-next-btn-text">Next</p>
        </button>
      </div>
    </div>
  );
}

export default UserName