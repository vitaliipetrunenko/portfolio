import avatar from "./../media/avatars/арбуз4.jpg"
const ADD_MESSAGE ="ADD-MESSAGE";

const CHANGE_MESSAGE_TEXTAREA = "CHANGE-MESSAGE-TEXTAREA";





const dialogReducer = (state,action)=>{


    if(action.type===ADD_MESSAGE){
        //addMessage() {

            var options = {
            
            
                month: 'long',
                day: 'numeric',
                
                timezone: 'ISO',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
                
              };
    
            
            let lastId = state.dialogMessagesDB[state.dialogMessagesDB - 1];
            let newMessage = {
                id: lastId,
                text: state.newMessageTextField,
                date: new Date().toLocaleDateString("en-US", options),
                sender: state.SessionInfo.currUser,
                avatar: avatar,
                img: avatar
            }
            //console.log(newMessage);
            state.dialogMessagesDB.push(newMessage);
            state.newMessageTextField = "";
            
    }
    else if(action.type ===CHANGE_MESSAGE_TEXTAREA){
       // changeNewMessageText(postText) {
            //console.log(postText);
            state.newMessageTextField = action.content;
    
          
       
    }
    return state;



}
export default dialogReducer;