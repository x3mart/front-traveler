import React from 'react';
import styles from './Chat.module.css';
import ContactCard from "./ContactCard";
import {connect} from "react-redux";
import {
  set_current_room,
  delete_chat_user,
  clear_current_room,
  set_all_messages_unread,
} from "../../../redux/actions/chatActions";

const ContactsList = ({
                        chat_rooms,
                        current_room,
                        set_current_room,
                        delete_chat_user,
                        clear_current_room,
                        set_all_messages_unread,
                      }) => {
  const handleCurrentRoom = (id) => {
    delete_chat_user()
    clear_current_room()
    set_all_messages_unread()
    set_current_room(id)
  }
  return (
    <>
      <div className={styles.chat_contacts}>
        {chat_rooms?.map((i, n) => <ContactCard key={n} room={i} action={handleCurrentRoom}
                                                active={current_room === i.id} first={n === 0}/>)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  chat_rooms: state.chat.chat_rooms,
  current_room: state.chat.current_room,
})

export default connect(mapStateToProps, {
  set_current_room,
  delete_chat_user,
  clear_current_room,
  set_all_messages_unread,
})(ContactsList);