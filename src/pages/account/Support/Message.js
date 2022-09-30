import React, {useEffect, useState} from 'react';
import styles from './Support.module.css';
import {connect} from 'react-redux';
import IsRead from "../Chat/IsRead";

const Message = ({
                   data,
                   author,
                   user_id,
                 }) => {

  const [isMine, setIsMine] = useState(false)

  useEffect(() => {
    if(author?.id === user_id) {
      setIsMine(true)
    }
  }, [author])

  return (
    <>
      <div className={`${styles.message_wrapper} ${isMine ? styles.is_mine : ''}`}>
        <div className={styles.user_avatar} style={{backgroundImage: `url(${author?.avatar})`}}/>
        <div className={styles.message_body}>
          <div className={styles.message_header}>
            <div className={styles.message_author_name}>{isMine ? 'Вы' : author?.first_name + ' ' + author?.last_name}</div>
            <div className={styles.message_date_time}>{data.created_at}</div>
            {isMine && <IsRead is_read={data.is_read}/>}
          </div>
          <div className={styles.message_text} dangerouslySetInnerHTML={{__html: data.message?.replace(/\n/g, "<br />")}}/>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message)