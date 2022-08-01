import React from 'react'
import { BiChevronLeft } from 'react-icons/bi';

import './style.css'

import Data from './usertype.json'
import { checkCheckBox } from './utils';

const UserType = () => {
  return (
    <div className="page-container user-form-container">
      <button className="back-btn-container">
        <BiChevronLeft fontSize={25} />
      </button>
      <div className="user-from-title-container">
        <p className="user-form-title-text">{Data.title}</p>
      </div>
      <div className="container-center">
        <div className="user-form-input-container">
          {Data.formInput.map((input) => 
            <div className="user-form-input-checkbox-container" key={input.id}>
              <label
                htmlFor={`user-type-${input.id}`}
                className="user-form-checkbox-title form-check-label"
              >
                {input.question}
              </label>
              <input
                className="form-check-input"
                type="radio"
                name={input.inputName}
                id={`user-type-${input.id}`}
                value="option1"
                onChange={(e) => checkCheckBox(e.target)}
              />
            </div>
          )}
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

export default UserType