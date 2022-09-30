import React, {useEffect} from 'react';
import styles from './Support.module.css';
import {connect} from 'react-redux';
import {truncateText} from "../../../functions";

const TicketCard = ({
                      ticket,
                      is_running,
                      action,
                      active = false,
                      first = false,
                    }) => {

  const {
    id,
    staff,
    last_message,
  } = ticket

  useEffect(() => {
    if(is_running) {
      action(id)
    }
  }, [is_running])

  const handleClick = () => {
    action(ticket)
  }

  return (
    <>
      <div className={`${styles.chat_contact_card} ${active ? styles.active : ''} ${!is_running ? styles.is_not_running : ''} ${first ? styles.first : ''}`} onClick={handleClick}>
        <div className={styles.chat_contact_wrapper}>
          <div className={styles.chat_contact_data}>
            <div className={styles.chat_contact_name}>{`Заявка №${id}`}</div>
            <div className={styles.chat_contact_last_message}>{truncateText(last_message, 20)}</div>
          </div>
        </div>
        {/*<div className={styles.chat_contact_last_message_date}>{last_message_date}</div>*/}
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketCard)