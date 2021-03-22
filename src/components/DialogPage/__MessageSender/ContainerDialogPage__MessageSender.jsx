import React from 'react';


import { createActionCHANGEMESSAGETEXTAREA,createActionADDMESSAGE } from '../../../redux/state';
import DialogPage_MessageSender from './DialogPage__MessageSender';






function ContainerDialogPage_MessageSender(props) {

    
let changeTextArea = (text) =>{
    props.dispatch(createActionCHANGEMESSAGETEXTAREA(text));
}
let sendMessage = () =>{
    props.dispatch(createActionADDMESSAGE());
}


return(
<DialogPage_MessageSender sendMessage={sendMessage} newMessageTextField={props.newMessageTextField} changeTextArea={changeTextArea}/>
)

}
export default ContainerDialogPage_MessageSender;