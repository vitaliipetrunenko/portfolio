import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Storage from './redux/state.js';
//import {addPost,addMessage,changeNewPostText,changeNewMessageText} from './redux/state.js';




import lorem1 from "./media/photos/image01__.jpg"
import lorem2 from "./media/photos/images.jpg"
import lorem3 from "./media/photos/lorem-ipsum-generator-cicero-engraving.png"
import avatar from "./media/avatars/арбуз4.jpg"




let postDB = [
  {txt: "post 1", img: null},
  {txt: "lorem", img: lorem1},
  {txt: "lorem lorem lorem", img: lorem2 },
  {txt: "lorem...", img: lorem3}
 ];

 let dialoglistDB=[
  {text: "lolol", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar},
  {text: "lo", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar},
  {text: "lolol", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar}];

  let dialogMessagesDB=[
    {text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
    {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar},
    {text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
    {text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
    {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar},
    {text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
    {text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
    {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar},
    {text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
]

 let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={Storage.getState()} dispatch={Storage.dispatch.bind(Storage)} />
    </React.StrictMode>,
    document.getElementById('root')
  );}
  renderEntireTree(Storage.getState());
  Storage.subscribe(renderEntireTree);
