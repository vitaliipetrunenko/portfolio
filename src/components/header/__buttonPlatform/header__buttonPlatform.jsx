import React from 'react';
import './header__buttonPlatform.css';
import Style from 'style-it';

function Header__buttonPlatform(props) {
    return  (<div className='Header__buttonPlatform' href="#">
            
        <a className="Header__button_hover">{props.txt}</a>
        <a className="Header__button_unhover">{props.txt}</a>

        </div>);
    
}

export default Header__buttonPlatform;