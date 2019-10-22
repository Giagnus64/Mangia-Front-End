import React from 'react';
import {Message} from 'react-bulma-components';

const MessageForm = (props) => {
    console.log(props)
    const getMessages = () => {
        return props.errors.map((error, i) => { return (<li key={i}>{error}</li>)})
    }

   return (
       <Message color="danger" className="message-box">
         <Message.Body>
         {getMessages()}
        </Message.Body>
      </Message>
      )
}

export default MessageForm; 