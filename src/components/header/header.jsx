import React from 'react';
import './header.css';
import Header__buttonPlatform from './__buttonPlatform/header__buttonPlatform';
import logo1 from "./../../media/logos/logo1.png"

function Header() {
    return (
        <div className='Header'>
            <img src={logo1} ></img>
            <Header__buttonPlatform txt="About"/>
            <Header__buttonPlatform txt="Our goal"/>
            <Header__buttonPlatform txt="More info"/>
            <Header__buttonPlatform txt="Contact us"/>
            


        </div>
    );
}

export default Header;