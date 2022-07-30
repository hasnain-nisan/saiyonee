import React from 'react'
import Logo1 from '../../asset/logo1.png'
import {BiChevronRight} from 'react-icons/bi'
import "./style.css"
import tutorial from '../../asset/tutorial.mp4';

const Success = () => {
  return (
    <div className="">
      <div className="div1">
        <div className='flex items-center justify-center'>
          <img src={Logo1} alt="Logo1" 
            className="logo1" 
          />
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
      <div className="flex justify-between items-center mx-[2.25rem]">
        <p className="skip">Skip</p>
        <div className="btn-next-div">
            <button className="btn-next">
            <BiChevronRight style={{ color: "#1F2937" }}/>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Success