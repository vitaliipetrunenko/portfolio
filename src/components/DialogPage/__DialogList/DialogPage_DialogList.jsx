import React from 'react';

import styl from './DialogPage__DialogList.module.css';
import avatar from "./../../../media/avatars/арбуз4.jpg"

function DialogItem(props){
    return(
        <div className={styl.DialogItem}>
            <img src={props.avatar} className={styl.avatar}></img>
            <h4>{props.sender}<h5>{props.date}</h5>
            <h6>{props.text}</h6>
            </h4>

        </div>
    );

}

function DialogPage__DialogList() {
    return (
        <div className={styl.DialogPage__DialogList}>
                 <DialogItem text="lolol" date="Today at 6pm" sender="Hlib Stetsiuk" avatar={avatar}/>
                 

            
        </div>
    );
}

export default DialogPage__DialogList;