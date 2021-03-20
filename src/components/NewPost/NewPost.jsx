import React from 'react';
import styl from './NewPost.module.css';


function NewPost(props) {
    let postAddText = React.createRef();



   
    return (
        <div className={styl.Post}>
            <div className={styl.newPostArea}>
            <textarea ref={postAddText}>текст</textarea>
            <button onClick={function(){props.AddPost(postAddText.current.value)}} className="sendButton">отправить</button>
            


        </div>
        </div>
    );
}

export default NewPost;