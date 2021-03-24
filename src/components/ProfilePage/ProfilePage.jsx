import React from 'react';
import Post from '../Post/Post';
import './ProfilePage.css';
import ProfilePage__ProfileBox from './__ProfileBox/ProfilePage__ProfileBox';
import postimg from "./../../media/avatars/арбуз4.jpg"

function ProfilePage(props) {
    let posts = props.postDB.map( el => <Post txt={el.txt} key={el.id} img={el.img} />);
    return (
        <div className='ProfilePage'>
            <ProfilePage__ProfileBox />
            {posts.reverse()}         

            
        </div>
    );
}

export default ProfilePage;