import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './redux/redux-state.js';
//import {addPost,addMessage,changeNewPostText,changeNewMessageText} from './redux/state.js';




import lorem1 from "./media/photos/image01__.jpg"
import lorem2 from "./media/photos/images.jpg"
import lorem3 from "./media/photos/lorem-ipsum-generator-cicero-engraving.png"
import avatar from "./media/avatars/арбуз4.jpg"




 let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={Store.getState()} dispatch={Store.dispatch.bind(Store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );}
  renderEntireTree(Store.getState());
  Store.subscribe(()=>{
    let state = Store.getState();
    renderEntireTree(state);
  });
