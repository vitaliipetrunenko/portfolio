import lorem1 from "./../media/photos/image01__.jpg"
import lorem2 from "./../media/photos/images.jpg"
import lorem3 from "./../media/photos/lorem-ipsum-generator-cicero-engraving.png"
import avatar from "./../media/avatars/арбуз4.jpg"

import {renderEntireTree} from './../render.js';



let state = {
    SessionInfo: {currUser: "dima"},
 dialogData: {

    
    
    dialogMessagesDB: [
        {id: 0,text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
        {id: 1,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar},
        {id: 2,text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
        {id: 3,text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
        {id: 4,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar},
        {id: 5,text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
        {id: 6,text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
        {id: 7,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar},
        {id: 8,text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar,img: avatar},
    ],
     
      
       dialoglistDB: [
        {text: "lolol", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar},
        {text: "lo", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar},
        {text: "lolol", date:"Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar}
    ]
    
},
postData: {
    postDB: [
        {id:0 ,txt: "post 1", img: null},
        {id:1, txt: "lorem", img: lorem1},
        {id:2, txt: "lorem lorem lorem", img: lorem2 },
        {id:3, txt: "lorem...", img: lorem3}
       ]
}



}

export let addPost = (postText=null,postImg=null)=>{
    let lastId = state.postData.postDB[state.postData.postDB.length-1]
    let newPost ={
        id :lastId,
        txt: postText,
        img: postImg
    }
    state.postData.postDB.push(newPost);
    renderEntireTree(state,addPost,addMessage);
}

export let addMessage = (postText=null) => {
    alert("messaged");
    let lastId = state.dialogData.dialogMessagesDB[state.dialogData.dialogMessagesDB-1];
    let newMessage ={
        id :lastId,
        text: postText,
        date: new Date().toLocaleDateString(),
        sender: state.SessionInfo.currUser,
        avatar: avatar,
        img: avatar

    }
    console.log(newMessage);
    state.dialogData.dialogMessagesDB.push(newMessage);
    renderEntireTree(state,addPost,addMessage);
}


export const currUser=state.SessionInfo.currUser;

export default state;