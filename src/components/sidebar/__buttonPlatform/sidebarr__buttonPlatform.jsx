import React from 'react';
import styl from './sidebar__buttonPlatform.module.css';
import Style from 'style-it';
import { NavLink } from 'react-router-dom';

function Sidebar__buttonPlatform(props) {
    
    return  (<div className= {styl.Sidebar__buttonPlatform} href="#">
        
        <NavLink to={{pathname: props.link}} className={styl.Sidebar__button_hover} activeClassName={styl.active}>{props.txt}</NavLink>
        <NavLink to={{pathname: props.link}} className={styl.Sidebar__button_unhover} activeClassName={styl.active}>{props.txt}</NavLink>

        <NavLink to={{pathname: props.link}} className={styl.Sidebar__button_hover_Mini} activeClassName={styl.active}>{props.txt[0]}</NavLink>
        <NavLink to={{pathname: props.link}} className={styl.Sidebar__button_unhover_Mini} activeClassName={styl.active}>{props.txt[0]}</NavLink>

        </div>);
    
}

export default Sidebar__buttonPlatform;