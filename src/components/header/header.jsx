import React from 'react';
import './header.css';
import Header__buttonPlatform from './__buttonPlatform/header__buttonPlatform';
import logo1 from "./../../media/logos/logo1.png"
import MediaQuery from 'react-responsive'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='Header'>
        <NavLink to="/news/"><img src={logo1} ></img></NavLink>
            
            <MediaQuery minDeviceWidth={700} device={{deviceWidth: visualViewport.width}}>
                <Header__buttonPlatform txt="About"/>
                <Header__buttonPlatform txt="Our goal"/>
                <Header__buttonPlatform txt="More info"/>
                <Header__buttonPlatform txt="Contact us"/>
                
                </MediaQuery>
                <MediaQuery maxDeviceWidth={699} device={{deviceWidth: visualViewport.width}}>
                    <p>phone version in progress</p>
                </MediaQuery>


        </div>
    );
}

export default Header;