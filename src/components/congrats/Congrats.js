import React from 'react'
import Banner from '../../asset/Banner'

import './style.css'

const Congrats = () => {
  return (
    <div className="">
      <div className="div1">
        <Banner type={"congrats"} />
      </div>
      <div className="flex items-center justify-center">
        <div className="congrats-text-container">
          <div className="congrats-text-container-sub">
            <p className="congrats-text-title">Congratulation</p>
            <p className="congrats-text-sub">
              Your phone email is verified now
            </p>
          </div>
        </div>
        <button className='congrats-btn'>
            <p className='congrats-btn-text'>Lets Go</p>
        </button>
      </div>
    </div>
  );
}

export default Congrats