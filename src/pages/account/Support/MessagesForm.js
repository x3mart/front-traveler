import React, {useRef, useState} from 'react';
import styles from './Support.module.css';
import {connect} from 'react-redux';
import TextareaAutosize from "react-textarea-autosize";
import send from "../Chat/images/send.svg";

const MessagesForm = ({action}) => {

  const textareaRef = useRef()
  const formRef = useRef()

  const handleSend = (e) => {
    if(message) {
      e.preventDefault();
      action(message)
      setMessage('')
    } else {
      e.preventDefault();
    }
  }

  const [message, setMessage] = useState('')

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

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagesForm)