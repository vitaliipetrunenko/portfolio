import React from 'react';
import styl from './ProfilePage__ProfileBox.module.css';
import avatar from "./../../../media/avatars/арбуз4.jpg"

function ProfilePage__ProfileBox(props) {
    return (
        <div className={styl.ProfilePage__ProfileBox}>
            <img src={avatar}></img>
            <div className={styl.PersonalInfo}>
            <h1>Oleg Arbuzenko</h1>
            <p>Возраст: 42</p>
            <p>Город: Самара</p>
            <p>Образование: КНУ им. Джеффа Безоса</p>
            </div>
        </div>
    );
}

export default ProfilePage__ProfileBox;