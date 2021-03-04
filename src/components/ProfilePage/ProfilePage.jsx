import React from 'react';
import Post from '../Post/Post';
import './ProfilePage.css';
import ProfilePage__ProfileBox from './__ProfileBox/ProfilePage__ProfileBox';
import postimg from "./../../media/avatars/арбуз4.jpg"

function ProfilePage() {
    return (
        <div className='ProfilePage'>
            <ProfilePage__ProfileBox />
            <Post img={postimg} txt="lorem lorem lorem..."/> 
            <Post img={postimg} txt="lorem lorem lorem..."/>
            <Post img={postimg} txt="lorem lorem lorem..."/>           

            
        </div>
    );
}

export default ProfilePage;