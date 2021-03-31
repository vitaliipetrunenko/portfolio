import React from 'react';
import './sidebar.css';
import Sidebar__buttonPlatform from './__buttonPlatform/sidebarr__buttonPlatform.jsx'
import MediaQuery from 'react-responsive'

function Sidebar() {
    return (
        <div className='Sidebar'>
        
            <Sidebar__buttonPlatform txt="News" link="/news"/>
            <Sidebar__buttonPlatform txt="Profile" link="/profile"/>
            <Sidebar__buttonPlatform txt="People" link="/people"/>
            <Sidebar__buttonPlatform txt="Messages" link="/messages"/>
            <Sidebar__buttonPlatform txt="Gallery" />
            <Sidebar__buttonPlatform txt="Music" />
            <Sidebar__buttonPlatform txt="Bookmarks" />
    

      
         

        </div>
    );
}

export default Sidebar;