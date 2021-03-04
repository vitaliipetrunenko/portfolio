import React from 'react';
import styl from './Post.module.css';
import avatar from "./../../media/avatars/арбуз4.jpg"
import Header__buttonPlatform from '../header/__buttonPlatform/header__buttonPlatform';


function Post(props) {
    return (
        <div className={styl.Post}>
            <div className={styl.Post__Header}>
            <img src={avatar} className={styl.avatar}></img>
            <h5>Oleg Arbuzenko<h6>today at 6:30pm</h6></h5>
            
            </div>
            <img src={props.img} ></img>
            <p className={styl.postText}>{props.txt}</p>
            <div className={styl.postFooter}>
                <Header__buttonPlatform txt="like"/>
                <Header__buttonPlatform txt="comment"/>
                <Header__buttonPlatform txt="report"/>
            </div>
            


        </div>
    );
}

export default Post;