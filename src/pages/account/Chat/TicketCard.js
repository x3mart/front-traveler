import React, {useEffect} from 'react';
import styles from './Chat.module.css';
import wallpaper from "../../Blog/images/wallpaper.png";
import {truncateText} from "../../../functions";
import {connect} from "react-redux";
import {set_users_online} from "../../../redux/actions/chatActions";

const TicketCard = ({ticket, action, active = false, first = false, users_online, set_users_online, }) => {

  const {
    id,
    last_message,
    status,
    staff
  } = ticket

  // const {
  //   avatar,
  //   first_name,
  //   last_name,
  //   last_message_date,
  //   is_online,
  // } = room.room_members[0]
  //
  // const user_id = room.room_members[0].id

  // useEffect(() => {
  //   if(is_online && user_id){
  //     set_users_online(user_id)
  //   }
  // }, [is_online, user_id])
  //
  // console.log(user_id)

  const handleClick = () => {
    action(id)
  }

  return (
    <>
      <div className={`${styles.chat_contact_card} ${active ? styles.active : ''} ${first ? styles.first : ''}`} onClick={handleClick}>
        <div className={styles.chat_contact_wrapper}>
          {/*<div className={`${styles.chat_contact_avatar}${users_online?.includes(user_id) ? ' ' + styles.active_user : ''}`} style={{backgroundImage: `url(${avatar})`}}/>*/}
          <div className={styles.chat_contact_data}>
            <div className={styles.chat_contact_name}>{`Сотрудник #${staff}`}</div>
            <div className={styles.chat_contact_last_message}>{truncateText(last_message, 20)}</div>
          </div>
        </div>
        {/*<div className={styles.chat_contact_last_message_date}>{last_message_date}</div>*/}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  users_online: state.chat.users_online
})

export default connect(mapStateToProps, {set_users_online})(TicketCard)