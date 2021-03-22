import React from 'react';

import {createActionADDPOST,createActionCHANGEPOSTTEXTAREA} from './../../redux/state.js'
import NewPost from './NewPost';

function ContainerNewPost(props) {
    

    
    let changeTextArea = (text) =>{
        props.dispatch(createActionCHANGEPOSTTEXTAREA(text));
    }
    let sendPost = () =>{
        props.dispatch(createActionADDPOST());
    }
    

   
    return (
        <NewPost changeTextArea = {changeTextArea} sendPost={sendPost}  newPostTextField={props.newPostTextField}/>
    );
}

export default ContainerNewPost;