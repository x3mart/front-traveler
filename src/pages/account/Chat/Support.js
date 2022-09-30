import React, {useEffect} from 'react';
import styles from './Chat.module.css';
import {connect} from 'react-redux';
import ContactsList from "./ContactsList";
import Messages from "./Messages";
import Account from "../../../layouts/account/account";
import Tickets from "./Tickets";
import TicketsList from "./TicketsList";
import {get_all_tickets} from "../../../redux/actions/chatActions";

const Support = ({get_all_tickets}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    get_all_tickets()
    return () => {
      // delete_chat_user()
      // clear_current_room()
      // set_all_messages_unread()
    }
  }, [])

  return (
    <>
      <Account title='Поддержка' menu_item='support'>

        <div className={styles.chat_wrapper}>
          <TicketsList/>
          <Tickets/>
        </div>

      </Account>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {get_all_tickets}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Support)