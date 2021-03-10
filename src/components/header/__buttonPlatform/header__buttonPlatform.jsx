import React from 'react';
import styl from'./header__buttonPlatform.module.css';
import Style from 'style-it';
import MediaQuery from 'react-responsive'


function Header__buttonPlatform(props) {
    
                
    
    return  (<div className={styl.Header__buttonPlatform} href="#">
        
            <a className={styl.Header__button_hover}>{props.txt}</a>
            <a className={styl.Header__button_unhover}>{props.txt}</a>
        
        
        
           
        
        </div>);
    
    
    
 
    
}

export default Header__buttonPlatform;