import React from 'react'
import Logo from '../../asset/Logo'
import Banner from '../../asset/Banner'

import './style.css'

const SpalshScreen = () => {
  return (
    <div className="">
      <div className="div1">
        <Banner type={"splashScreen"}/>
        <p className="welcome-text flex items-center justify-center h-full">
          Welcome to Saiyonee
        </p>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <div className="logo">
          <Logo/>
        </div>
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