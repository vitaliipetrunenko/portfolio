import React from 'react';

import styl from './DialogPage.module.css';

import postimg from "./../../media/avatars/арбуз4.jpg"
import DialogPage__DialogList from './__DialogList/DialogPage_DialogList';

function DialogPage() {
    return (
        <div className={styl.DialogPage}>
           <DialogPage__DialogList>

           </DialogPage__DialogList>
           <div> messages</div>        

            
        </div>
    );
}

export default DialogPage;