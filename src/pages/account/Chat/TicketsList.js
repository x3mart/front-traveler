import React from 'react';
import styles from './Chat.module.css';
import ContactCard from "./ContactCard";
import {connect} from "react-redux";
import {
  set_current_room,
  delete_chat_user,
  clear_current_room,
  set_all_messages_unread, set_current_ticket,
} from "../../../redux/actions/chatActions";
import TicketCard from "./TicketCard";

const TicketsList = ({
                       all_tickets,
                        chat_rooms,
                        current_room,
                        set_current_room,
                        delete_chat_user,
                        clear_current_room,
                        set_all_messages_unread,
                       set_current_ticket,
                       current_ticket,
                      }) => {
  const handleCurrentTicket = (id) => {
    set_current_ticket(id)
  }
  return (
    <>
      <div className={styles.chat_contacts}>
        {all_tickets?.map((i, n) => <TicketCard key={n} ticket={i} action={handleCurrentTicket}
                                                         active={current_ticket === i.id} first={n === 0}/>)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  all_tickets: state.chat.all_tickets,
  current_ticket: state.chat.current_ticket,
})

export default connect(mapStateToProps, {
  set_current_room,
  delete_chat_user,
  clear_current_room,
  set_all_messages_unread,
  set_current_ticket,
})(TicketsList);