import React from 'react';

import styl from './DialogPage.module.css';

import postimg from "./../../media/avatars/арбуз4.jpg"
import DialogPage__DialogList from './__DialogList/DialogPage_DialogList';


import DialogPage__DialogField from './__DialogField/DialogPage__DialogField';


function DialogPage(props) {
    
    
    
    return (
        <div className={styl.DialogPage}>
           <DialogPage__DialogList dialoglistDb={props.dialoglistDB}/>
            <DialogPage__DialogField dialogMessages={props.dialogMessagesDB} addMessageprop={props.addMessageprop}/>
           
             

            
        </div>
    );
}

export default DialogPage;