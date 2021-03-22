import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import postReducer from "./postReducer";


let reducers = combineReducers({
    dialogData: dialogReducer,
    postData: postReducer

})

let store = createStore(reducers);




export default store