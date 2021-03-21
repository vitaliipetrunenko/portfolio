import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import {addPost} from './redux/state.js';

import lorem1 from "./media/photos/image01__.jpg"
import lorem2 from "./media/photos/images.jpg"
import lorem3 from "./media/photos/lorem-ipsum-generator-cicero-engraving.png"
import avatar from "./media/avatars/арбуз4.jpg"


export let renderEntireTree = (state,addPost,addMessage,changeNewPostText,changeNewMessageText) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPostprop={addPost} addMessageprop={addMessage} changeNewPostTextprop={changeNewPostText} changeNewMessageTextprop={changeNewMessageText}/>
  </React.StrictMode>,
  document.getElementById('root')
);}