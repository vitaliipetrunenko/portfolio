import React from 'react';
import './sidebar__buttonPlatform.css';
import Style from 'style-it';

function Sidebar__buttonPlatform(props) {
    return  (<div className='Sidebar__buttonPlatform' href="#">
            
        <a className="Sidebar__button_hover">{props.txt}</a>
        <a className="Sidebar__button_unhover">{props.txt}</a>

        </div>);
    
}

export default Sidebar__buttonPlatform;