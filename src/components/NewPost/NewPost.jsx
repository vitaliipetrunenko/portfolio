import React from 'react';
import styl from './NewPost.module.css';
import {createActionADDPOST,createActionCHANGEPOSTTEXTAREA} from './../../redux/state.js'

function NewPost(props) {
    let postAddText = React.createRef();



   
    return (
        <div className={styl.Post}>
            <div className={styl.newPostArea}>
            <textarea ref={postAddText} onChange={function(){props.dispatch(createActionCHANGEPOSTTEXTAREA(postAddText.current.value))}} value={props.newPostTextField}/>
            
            <button onClick={function(){props.dispatch(createActionADDPOST())}} className="sendButton">отправить</button>
            


        </div>
        </div>
    );
}

export default NewPost;