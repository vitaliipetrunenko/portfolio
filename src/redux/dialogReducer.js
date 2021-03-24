import avatar from "./../media/avatars/арбуз4.jpg"
const ADD_MESSAGE ="ADD-MESSAGE";

const CHANGE_MESSAGE_TEXTAREA = "CHANGE-MESSAGE-TEXTAREA";


let defaultDialogs =  {
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
        { id: 1,text: "lolol", date: "Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar },
        { id: 2,text: "lo", date: "Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar },
        { id: 3,text: "lolol", date: "Today at 6pm", sender: "Hlib Stetsiuk", avatar: avatar }
    ]

}


const dialogReducer = (state=defaultDialogs, action)=>{


    if(action.type===ADD_MESSAGE){
            var options = {
                month: 'long',
                day: 'numeric',
                
                timezone: 'ISO',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
              };
            let lastId = Object.keys(state.dialogMessagesDB).length;
            let newMessage = {
                id: lastId,
                
                text: state.newMessageTextField,
                date: new Date().toLocaleDateString("en-US", options),
                sender: state.SessionInfo.currUser,
                avatar: avatar,
                img: avatar
            }
            return {
                ...state,
                newMessageTextField : "",
                dialogMessagesDB : [...state.dialogMessagesDB,newMessage]
            
            }
    }
    else if(action.type ===CHANGE_MESSAGE_TEXTAREA){
        return{
            ...state,
            newMessageTextField: action.content
       }
       
    }
    return state;



}
export default dialogReducer;