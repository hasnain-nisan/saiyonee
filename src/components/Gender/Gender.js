import React from 'react'
import { BiChevronLeft } from 'react-icons/bi';

import './style.css'
import { changeSelectedGender } from './utils';

const Gender = () => {
  return (
    <div className="page-container">
      <button className="back-btn-container">
        <BiChevronLeft fontSize={25} />
      </button>
      <div className="user-from-title-container">
        <p className="user-form-title-text">Enter gender</p>
        <p className="user-name-sub-text">
          Take a step towards finding someone awesome!
        </p>
      </div>
      <div className="container-center">
        <div className="user-form-input-container user-form-input-container-user-name">
          <div className="user-form-gender-container">
            <p className="user-form-gender-container-title">
              Select your gender
            </p>
            <div className="user-form-gender-options-container">
              <div>
                <input
                  className="form-check-input gender-input d-none"
                  type="radio"
                  name="genderRadio"
                  id="inlineRadio1"
                  value="Male"
                  onChange={changeSelectedGender}
                />
                <label className="form-check-label" for="inlineRadio1">
                  <div className="user-gender-options user-form-gender-option-selected">
                    <p className="user-form-gender-option-text-selected">
                      Male
                    </p>
                  </div>
                </label>
              </div>
              <div>
                <input
                  className="form-check-input gender-input d-none"
                  type="radio"
                  name="genderRadio"
                  id="inlineRadio2"
                  value="Female"
                  onChange={changeSelectedGender}
                />
                <label className="form-check-label" for="inlineRadio2">
                  <div className="user-gender-options user-form-gender-option-not-selected">
                    <p className="user-form-gender-option-text-not-selected">
                      Female
                    </p>
                  </div>
                </label>
              </div>
            </div>
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

export default Gender