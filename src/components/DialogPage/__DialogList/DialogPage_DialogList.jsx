import React from 'react';

import styl from './DialogPage__DialogList.module.css';

import MediaQuery from 'react-responsive'

function DialogItem(props){
    return(
        <div className={styl.DialogItem}>
            <img src={props.avatar} className={styl.avatar}></img>
            <div className={styl.textblock}>
            <div>{props.sender}<div>{props.date}</div>
            <div>{props.text}</div>
            </div>
            </div>

        </div>
    );

}

function DialogPage__DialogList(props) {
    let dialogs = props.dialoglistDb.map(el => <DialogItem text={el.text} date={el.date} key={el.id} sender={el.sender} avatar={el.avatar}/>);
    let dialogsMinified = props.dialoglistDb.map(el => <DialogItem avatar={el.avatar} />);
    return (
        <div className={styl.DialogPage__DialogList}>
        <MediaQuery minDeviceWidth={700} device={{deviceWidth: visualViewport.width}}>
                    {dialogs} 
                </MediaQuery>

                 <MediaQuery maxDeviceWidth={699} device={{deviceWidth: visualViewport.width}}>
                 {dialogsMinified}
                 

                 </MediaQuery>
                 

            
        </div>
    );
}

export default DialogPage__DialogList;