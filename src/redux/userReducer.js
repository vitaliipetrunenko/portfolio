import lorem1 from "./../media/photos/image01__.jpg"
import lorem2 from "./../media/photos/images.jpg"
import lorem3 from "./../media/photos/lorem-ipsum-generator-cicero-engraving.png"
import avatar from "./../media/avatars/арбуз4.jpg"

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const SET_USERS="SET-USERS";


const SET_PAGE="SET-PAGE";
const SET_USER_COUNT="SET-USER-COUNT";


let defaultUsers = {
    users:[],
    currentPage:15,
    pageSize:15,
    totalUsersCount:250
}



export const userReducer = (state=defaultUsers,action)=>{
    let stateCopy = {...state};

    if(action.type===FOLLOW){
        return {
            ...state,users: state.users.map(el=>{
                if(el.id === action.userID){
                    return {...el,followed: true}
                }
                return el;
    
               })
        }
    }
    else if(action.type ===UNFOLLOW){
       return{
           ...state,users: state.users.map(el=>{
            if(el.id === action.userID){
                return {...el,followed: false}
            }
            return el;

           })
       }
    }
    else if(action.type ===SET_USERS){
        return{
            ...state,users:[...action.users]
        }
     }
     else if(action.type ===SET_PAGE){
        return{
            ...state,currentPage:action.pageIndex
        }
     }
     else if(action.type ===SET_USER_COUNT){
        return{
            ...state,totalUsersCount:action.totalUsersCount
        }
     }
    return state



}
export default userReducer;