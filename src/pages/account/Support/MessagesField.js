import React, {useEffect, useRef} from 'react';
import styles from './Support.module.css';
import {connect} from 'react-redux';
import Message from "./Message";

const MessagesForm = ({user, current_support_messages, }) => {

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [current_support_messages]);

  return (
    <>
      <div ref={scrollRef} className={styles.chat_messages_messages}>
        {current_support_messages?.map((i, n) => <Message key={n} data={i} author={i.author} user_id={user.id}/>)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  current_support_messages: state.support.current_support_messages,
})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagesForm)