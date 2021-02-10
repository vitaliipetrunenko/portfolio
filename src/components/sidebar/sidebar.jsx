import React from 'react';
import './sidebar.css';
import Sidebar__buttonPlatform from './__buttonPlatform/sidebarr__buttonPlatform.jsx'

function Sidebar() {
    return (
        <div className='Sidebar'>
            <Sidebar__buttonPlatform txt="Profile" />
            <Sidebar__buttonPlatform txt="Messages" />
            <Sidebar__buttonPlatform txt="Gallery" />
            <Sidebar__buttonPlatform txt="Music" />
            <Sidebar__buttonPlatform txt="Bookmarks" />
            
        </div>
    );
}

export default Sidebar;