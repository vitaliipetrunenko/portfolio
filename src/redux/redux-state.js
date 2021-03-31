import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";





let reducers = combineReducers({
    dialogData: dialogReducer,
    postData: postReducer,
    userData: userReducer

})

let store = createStore(reducers);




export default store