import React from 'react';
import { connect } from 'react-redux';


import { createActionCHANGEMESSAGETEXTAREA,createActionADDMESSAGE } from '../../../redux/state';
//import StoreContext from '../../../redux/StoreContext';
import DialogPage_MessageSender from './DialogPage__MessageSender';




/*

function ContainerDialogPage_MessageSender(props) {
    return <StoreContext.Consumer>
    { store => {
    
    
let changeTextArea = (text) =>{
    store.dispatch(createActionCHANGEMESSAGETEXTAREA(text));
}
let sendMessage = () =>{
    store.dispatch(createActionADDMESSAGE());
}
return(
<DialogPage_MessageSender sendMessage={sendMessage} newMessageTextField={props.newMessageTextField} changeTextArea={changeTextArea}/>
)
    }}</StoreContext.Consumer>
}
*/
let mapStateToProps = (state)=>{
   return{
     newMessageTextField: state.dialogData.newMessageTextField
   }
}

let mapDispatchToProps = (dispatch)=>{
    return {
    sendMessage: ()=>{
        dispatch(createActionADDMESSAGE())
    },
    changeTextArea: (text)=>{
        dispatch(createActionCHANGEMESSAGETEXTAREA(text));
    }
}

}

const  ContainerDialogPage_MessageSender = connect(mapStateToProps,mapDispatchToProps)(DialogPage_MessageSender);

export default ContainerDialogPage_MessageSender;