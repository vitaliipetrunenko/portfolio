import React from 'react';

import styl from './DialogPage.module.css';

import postimg from "./../../media/avatars/арбуз4.jpg"
import DialogPage__DialogList from './__DialogList/DialogPage_DialogList';

import avatar from "./../../media/avatars/арбуз4.jpg"
import DialogPage__DialogField from './__DialogField/DialogPage__DialogField';


function DialogPage() {
    let dialoglistDB=[
        {text: "lolol", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar},
        {text: "lolol00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar},
        {text: "lolol", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar}
    ]
    let dialogMessagesDB=[
        {text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar},
        {text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
        {text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar},
        {text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
        {text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar},
        {text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
    ]
    return (
        <div className={styl.DialogPage}>
           <DialogPage__DialogList dialoglistDb={dialoglistDB}/>
            <DialogPage__DialogField dialogMessages={dialogMessagesDB}/>
           
             

            
        </div>
    );
}

export default DialogPage;