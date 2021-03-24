import React from 'react';
import { connect } from 'react-redux';
//import StoreContext from '../../redux/StoreContext.js';
//import store from '../../redux/redux-state.js';

import {createActionADDPOST,createActionCHANGEPOSTTEXTAREA} from './../../redux/state.js'
import NewPost from './NewPost';

/*function ContainerNewPost(props) {
    return <StoreContext.Consumer>
    { store => {
    
    let changeTextArea = (text) =>{
        store.dispatch(createActionCHANGEPOSTTEXTAREA(text));
    }
    let sendPost = () =>{
        store.dispatch(createActionADDPOST());
    }
    

   
    return (
        <NewPost changeTextArea = {changeTextArea} sendPost={sendPost}  newPostTextField={props.newPostTextField}/>
    );
    }
    }
    </StoreContext.Consumer>
}*/
let mapStateToProps = (state)=> {
    return {
        newPostTextField: state.postData.newPostTextField
    }
}


let mapDispatchToProps = (dispatch) =>{
    return {
    changeTextArea: (text) =>{
        console.log(text);
    dispatch(createActionCHANGEPOSTTEXTAREA(text))
    },
    sendPost: () =>{
        dispatch(createActionADDPOST());
    }
    }
 }
let ContainerNewPost = connect(mapStateToProps,mapDispatchToProps)(NewPost);

export default ContainerNewPost;