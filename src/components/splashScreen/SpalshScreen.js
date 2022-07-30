import React from 'react'
import './style.css'
import Logo from '../../asset/logo.png'

const SpalshScreen = () => {
  return (
    <div className="">
      <div className="div1">
        <p className="welcome-text flex items-center justify-center h-full">
          Welcome to Saiyonee
        </p>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <img src={Logo} alt="logo" className="logo" />
        <div class="loadingio-spinner-spinner-bw2nrc78gjf">
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
        </div>
      </div>
    </div>
  );
}

export default SpalshScreen