import avatar from "./../media/avatars/арбуз4.jpg"
const ADD_POST = "ADD-POST";

const CHANGE_POST_TEXTAREA="CHANGE-POST-TEXTAREA";






export const postReducer = (state,action)=>{


    if(action.type===ADD_POST){
            console.log("postcreating")
            let lastId = state.postDB[state.postDB.length - 1]
            let newPost = {
                id: lastId,
                txt: state.newPostTextField,
                img: action.contentIMG
            }
            state.newPostTextField="";
            state.postDB.push(newPost);
            
        
            
    }
    else if(action.type ===CHANGE_POST_TEXTAREA){
        console.log("textcreating")
           // console.log(postText);
            state.newPostTextField = action.content;
    
            
        
       
    }
    return state;



}
export default postReducer;