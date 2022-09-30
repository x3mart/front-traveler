import React from 'react';
import styles from './Chat.module.css';
import read from "./images/read.svg";
import read_not from "./images/read_not.svg";
import {connect} from "react-redux";

const IsRead = ({is_read, all_messages_read}) => {
  return (
    <>
      <div className={styles.message_status}><img src={is_read || all_messages_read ? read : read_not} alt=""/></div>
    </>
  );
};

const mapStateToProps = state => ({
  all_messages_read: state.chat.all_messages_read,
})

export default connect(mapStateToProps)(IsRead)