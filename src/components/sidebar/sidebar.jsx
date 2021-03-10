import React from 'react';
import './sidebar.css';
import Sidebar__buttonPlatform from './__buttonPlatform/sidebarr__buttonPlatform.jsx'
import MediaQuery from 'react-responsive'

function Sidebar() {
    return (
        <div className='Sidebar'>
        <MediaQuery minDeviceWidth={700} device={{deviceWidth: visualViewport.width}}>
            <Sidebar__buttonPlatform txt="News" link="/news"/>
            <Sidebar__buttonPlatform txt="Profile" link="/profile"/>
            <Sidebar__buttonPlatform txt="Messages" link="/messages"/>
            <Sidebar__buttonPlatform txt="Gallery" />
            <Sidebar__buttonPlatform txt="Music" />
            <Sidebar__buttonPlatform txt="Bookmarks" />
        </MediaQuery>

        <MediaQuery maxDeviceWidth={699} device={{deviceWidth: visualViewport.width}}>
            <Sidebar__buttonPlatform txt="N" link="/news"/>
            <Sidebar__buttonPlatform txt="P" link="/profile"/>
            <Sidebar__buttonPlatform txt="M" link="/messages"/>
            <Sidebar__buttonPlatform txt="G" />
            <Sidebar__buttonPlatform txt="M" />
            <Sidebar__buttonPlatform txt="B" />
        </MediaQuery>  

        </div>
    );
}

export default Sidebar;