import React from 'react';

import styl from './DialogPage__DialogField.module.css';
import {currUser} from './../../../App.js';
import DialogPage_MessageSender from '../__MessageSender/DialogPage__MessageSender';


function MessageBox(props) {
    var options = {
        
        
        month: 'long',
        day: 'numeric',
        
        timezone: 'ISO',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
        
      };
    if (props.sender === currUser)
        return (
            <div className={styl.MessageBoxRight}>
                <img className={styl.avatar} src={props.avatar}></img>
                <div className={styl.message}>
                {props.text}
                <span className={styl.date}>{props.date.toLocaleString("en-US", options)}</span>
                </div>
            </div>
        );
    else {
        return (
            <div className={styl.MessageBoxLeft}>
                
                
                <img className={styl.avatar} src={props.avatar}></img>
                
                
                <div className={styl.message}>
                {props.text}
                <span className={styl.date}>{props.date.toLocaleString("en-US", options)}</span>
                </div>
            </div>
            );
    }
}

function DialogPage__DialogField(props) {
    let Messages = props.dialogMessages.map(el => <MessageBox text={el.text} date={el.date} sender={el.sender} avatar={el.avatar} img={el.img} />);
    return (<div className={styl.MessageWrapper}>
        <DialogPage_MessageSender/>
        <div className={styl.DialogField}>
            
            {Messages}
            





            </div>
        </div>
    );
}

export default DialogPage__DialogField;