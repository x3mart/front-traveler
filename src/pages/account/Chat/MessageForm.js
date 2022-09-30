import React, {useEffect, useRef, useState} from 'react';
import styles from './Chat.module.css';
import send from "./images/send.svg";
import TextareaAutosize from 'react-textarea-autosize';

const MessageForm = ({action}) => {

  const textareaRef = useRef()
  const formRef = useRef()

  const [message, setMessage] = useState('')

  const handleSend = (e) => {
    if(message) {
      e.preventDefault();
      action(message)
      setMessage('')
    } else {
      e.preventDefault();
    }
  }

  const handleMessageEdit = (e) => {
    setMessage(e.target.value)
  }

  const onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      handleSend(e)
    }
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSend}>
        {/*<div ref={ref} className={styles.editable_area} contentEditable="true" onChange={(e) => console.log(e.target)}/>*/}
        <TextareaAutosize ref={textareaRef}  placeholder='Текст сообщения' onChange={handleMessageEdit} onKeyDown={onEnterPress} value={message} maxRows={3}/>
        {/*<textarea ref={textareaRef} placeholder='Текст сообщения' onChange={handleMessageEdit} value={message}/>*/}
        <button type='submit'><img src={send} alt=""/></button>
      </form>
    </>
  );
};

export default MessageForm;