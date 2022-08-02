import React from 'react'
import ExploreIcon from '../../asset/ExploreIcon';
import HomeIcon from '../../asset/HomeIcon';
import Logo1 from '../../asset/Logo1';
import MessageIcon from '../../asset/MessageIcon';
import SettingsIcon from '../../asset/SettingsIcon';
import SettingsIcon1 from '../../asset/SettingsIcon1';

import './style.css'

const Home = () => {
  return (
    <div className="page-container">
      <div className="container-center">
        <div className="home-logo">
          <Logo1 />
        </div>
        <div className="home-settings-icon-container">
          <SettingsIcon />
        </div>
      </div>
      <div className="container-center float-menu">
        <div className="float-menu-icon">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="float-menu-icon">
          <ExploreIcon />
          <p>Explore</p>
        </div>
        <div className="float-menu-icon">
          <MessageIcon />
          <p>Message</p>
        </div>
        <div className="float-menu-icon">
          <SettingsIcon1 />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Home