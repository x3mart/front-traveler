import React, {useEffect, useRef} from 'react';
import styles from './Chat.module.css';
import Message from "./Message";
import {connect} from "react-redux";

const MessagesList = ({current_messages, user}) => {

  const scrollRef = useRef(null);

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [current_messages]);

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [current_messages]);

  return (
    <>
      <div ref={scrollRef} className={styles.chat_messages_messages}>
        {current_messages?.map((i, n) => <Message key={n} data={i} author={i.author} user_id={user.id}/>)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  current_messages: state.chat.current_messages,
})

export default connect(mapStateToProps)(MessagesList)