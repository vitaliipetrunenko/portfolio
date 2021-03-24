import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-state.js';
//import {addPost,addMessage,changeNewPostText,changeNewMessageText} from './redux/state.js';




import lorem1 from "./media/photos/image01__.jpg"
import lorem2 from "./media/photos/images.jpg"
import lorem3 from "./media/photos/lorem-ipsum-generator-cicero-engraving.png"
import avatar from "./media/avatars/арбуз4.jpg"
import { Provider } from 'react-redux';





 let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );}
  renderEntireTree(store.getState());
  store.subscribe(()=>{
    let state = store.getState();
    renderEntireTree(state);
  });
