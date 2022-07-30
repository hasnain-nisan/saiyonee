import React from 'react'
import Logo1 from '../../asset/Logo1'
import {BiChevronRight} from 'react-icons/bi'
import tutorial from '../../asset/tutorial.mp4';
import Banner from '../../asset/Banner';

import "./style.css"

const Success = () => {
  return (
    <div className="">
      <div className="div1">
        <Banner type="success"/>
        <div className="flex items-center justify-center">
          <div className='logo1'>
            <Logo1 height={225.53} width={68}/>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="tutorial">
          <video
            className="video"
            width="326px"
            height="258px"
            src={tutorial}
            controls
            autoPlay={true}
          />
          <div className="tutorial-text shadow-lg">
            <h4 className="tutorial-text-title">Tutorial</h4>
            <p className="tutorial-text-desc">
              Duis in libero vel nulla feugiat venenatis sed nec elit.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center success-action">
        <p className="skip">Skip</p>
        <div className="btn-next-div">
          <button className="btn-next">
            <BiChevronRight style={{ color: "#1F2937" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success