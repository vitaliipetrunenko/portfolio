import React from 'react';
import styl from'./header__buttonPlatform.module.css';
import Style from 'style-it';
import MediaQuery from 'react-responsive'


function Header__buttonPlatform(props) {
    
                
    
    return  (<div className={styl.Header__buttonPlatform} href="#">
        <MediaQuery minDeviceWidth={700}>
            <a className={styl.Header__button_hover}>{props.txt}</a>
            <a className={styl.Header__button_unhover}>{props.txt}</a>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={699}>
            <a className={styl.Header__button_hover, styl.inactive}>{props.txt}</a>
            <a className={styl.Header__button_unhover, styl.inactive}>{props.txt}</a>
        </MediaQuery>
        </div>);
    
 
    
}

export default Header__buttonPlatform;