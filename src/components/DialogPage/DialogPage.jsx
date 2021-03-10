import React from 'react';

import styl from './DialogPage.module.css';

import postimg from "./../../media/avatars/арбуз4.jpg"
import DialogPage__DialogList from './__DialogList/DialogPage_DialogList';

import avatar from "./../../media/avatars/арбуз4.jpg"


function DialogPage() {
    let dialoglistDB=[{text: "lolol", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar},{text: "lolol00000000000000000000000000000000000000", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar},{text: "lolol", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar}]
    return (
        <div className={styl.DialogPage}>
           <DialogPage__DialogList dialoglistDb={dialoglistDB}/>

           
           <div> messages</div>        

            
        </div>
    );
}

export default DialogPage;