import React from 'react';
import styl from './NewPost.module.css';


function NewPost(props) {
    let postAddText = React.createRef();



   console.log(props.newPostTextField+"    - new field")
    return (
        <div className={styl.Post}>
            <div className={styl.newPostArea}>

            <textarea ref={postAddText} onChange={()=>{props.changeTextArea(postAddText.current.value)}} value={props.newPostTextField}/>
            
            <button onClick={()=>{props.sendPost()}} className="sendButton">отправить</button>
            


        </div>
        </div>
    );
}

export default NewPost;