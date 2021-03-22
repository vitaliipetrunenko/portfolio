import React from 'react';
import styl from './DialogPage__MessageSender.module.css';
import styled from 'styled-components';



const SendButton = styled.button `
border-radius: 0 15px 15px 0;
height:100%;
background-color: #4267B2;
color:white;
&:hover,&:focus{
    outline: none;
    color: white;
    text-decoration:none;
    box-shadow:none;
}
`;
const Textarea = styled.textarea`
    flex-grow: 1;
    border-radius: 15px 0 0 15px;
    &:focus{
        outline: none;
    }
`
;


function DialogPage_MessageSender(props) {
let input = React.createRef();

return(<div className={styl.MessageSender}>
<Textarea ref={input} value={props.newMessageTextField} onChange={()=>{props.changeTextArea(input.current.value)}}></Textarea>

<SendButton onClick={()=>{props.sendMessage()}}>Send!</SendButton>


</div>
)

}
export default DialogPage_MessageSender;