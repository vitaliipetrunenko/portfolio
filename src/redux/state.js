import lorem1 from "./../media/photos/image01__.jpg"
import lorem2 from "./../media/photos/images.jpg"
import lorem3 from "./../media/photos/lorem-ipsum-generator-cicero-engraving.png"
import avatar from "./../media/avatars/арбуз4.jpg"
import dialogReducer from "./dialogReducer"
import postReducer from "./postReducer"



export const createActionADDMESSAGE =()=> ({type:"ADD-MESSAGE"})
export const createActionCHANGEMESSAGETEXTAREA =(text)=>({type:"CHANGE-MESSAGE-TEXTAREA",content:text})

export const createActionCHANGEPOSTTEXTAREA =(text)=>({type:"CHANGE-POST-TEXTAREA",content:text})
export const createActionADDPOST =()=>({type:"ADD-POST"})

//import {renderEntireTree} from './../render.js';


let Storage = {
    _state: {
        
        dialogData: {
            SessionInfo: { currUser: "dima" },
            newMessageTextField: "new messsage",

            dialogMessagesDB: [
                { id: 0, text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar, img: avatar },
                { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar },
                { id: 2, text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar, img: avatar },
                { id: 3, text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar, img: avatar },
                { id: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar },
                { id: 5, text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar, img: avatar },
                { id: 6, text: "lolol loremloremlorem00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar, img: avatar },
                { id: 7, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci suscipit augue vestibulum cursus vel in orci. In sit.", date: new Date('1995-12-17T03:24:00'), sender: "dima", avatar: avatar, img: avatar },
                { id: 8, text: "l", date: new Date('1995-12-17T03:24:00'), sender: "Hlib Stetsiuk", avatar: avatar, img: avatar },
            ],


            dialoglistDB: [
                { text: "lolol", date: "Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar },
                { text: "lo", date: "Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar },
                { text: "lolol", date: "Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar }
            ]

        },
        postData: {
            newPostTextField: "new post text",
            postDB: [
                { id: 0, txt: "post 1", img: null },
                { id: 1, txt: "lorem", img: lorem1 },
                { id: 2, txt: "lorem lorem lorem", img: lorem2 },
                { id: 3, txt: "lorem...", img: lorem3 }
            ]
        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber() { },




   
   


  

   
    
    dispatch(action){
        this._state.dialogData = dialogReducer(this._state.dialogData,action);
        this._state.postData = postReducer(this._state.postData,action);
        this._callSubscriber(this.getState())
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
    
}

export default Storage;