import lorem1 from "./../media/photos/image01__.jpg"
import lorem2 from "./../media/photos/images.jpg"
import lorem3 from "./../media/photos/lorem-ipsum-generator-cicero-engraving.png"
import avatar from "./../media/avatars/арбуз4.jpg"

const ADD_POST = "ADD-POST";

const CHANGE_POST_TEXTAREA="CHANGE-POST-TEXTAREA";


let defaultPosts = {
    newPostTextField: "new post text",
    postDB: [
        { id: 0, txt: "post 1", img: null },
        { id: 1, txt: "lorem", img: lorem1 },
        { id: 2, txt: "lorem lorem lorem", img: lorem2 },
        { id: 3, txt: "lorem...", img: lorem3 }
    ]
}



export const postReducer = (state=defaultPosts,action)=>{
    let stateCopy = {...state};

    if(action.type===ADD_POST){
        let lastId = Object.keys(state.postDB).length

        console.log();
            let newPost = {
                
                id: lastId,
                txt: state.newPostTextField,
                img: action.contentIMG,
                
            }
        return {
            ...state,
            newPostTextField:"",
            
            postDB:[...state.postDB,newPost]
            
            
        
        }
    }
    else if(action.type ===CHANGE_POST_TEXTAREA){
       return{
            ...state,
            newPostTextField: action.content
       }
            
        
       
    }
    return state



}
export default postReducer;