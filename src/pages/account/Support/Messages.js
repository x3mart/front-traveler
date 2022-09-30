import React, {useEffect, useState} from 'react';
import styles from './Support.module.css';
import {connect} from 'react-redux';
import {w3cwebsocket as W3CWebSocket} from "websocket";
import {
  clear_current_support_messages, clear_current_ticket, clear_current_ticket_status, close_ticket,
  set_all_support_messages_read,
  set_all_support_messages_unread, set_archive_ticket,
  set_current_support_messages, set_new_ticket
} from "../../../redux/actions/supportActions";
import MessagesForm from "./MessagesForm";
import MessagesField from "./MessagesField";
import TicketButton from "./TicketButton";

const Messages = ({
                    current_ticket,
                    set_current_support_messages,
                    clear_current_support_messages,
                    set_all_support_messages_read,
                    set_all_support_messages_unread,
                    current_status,
                    set_new_ticket,
                    close_ticket,
                    clear_current_ticket_status,
                    clear_current_ticket,
                    set_archive_ticket,
}) => {

  const [newTicket, setNewTicket] = useState(false)

  const client = current_ticket ?
    new W3CWebSocket(`wss://traveler.market/ws/support_chat/${current_ticket}/?token=${localStorage.getItem('access')}`)
    :
    null
  ;

  useEffect(() => {
    return () => {
      clear_current_support_messages()
      client?.close()
    }
  })

  useEffect(() => {
    if (client) {
      client.onopen = () => {
        console.log('WebSocket Client Connected');
      };

      client.onclose = () => {
        console.log('WebSocket Client Disconnected');
      };

      client.onerror = (e) => {
        console.error(e);
        console.log('Connection Error');
      };

      client.onmessage = (e) => {
        const dataFromServer = JSON.parse(e.data);
        // console.log('got reply!');
        if (dataFromServer) {
          if (dataFromServer?.command === 'close_ticket') {
            client?.close()
            set_archive_ticket()
            clear_current_ticket_status()
            clear_current_ticket()
            clear_current_support_messages()
          } else if (dataFromServer?.command === 'set_read') {
            set_all_support_messages_read()
          } else if (dataFromServer?.command === 'set_unread') {
            set_all_support_messages_unread()
          } else {
            set_current_support_messages(dataFromServer)
          }
        }
      };
    }
  }, [client])

  const handleSend = (message) => {
    if(newTicket){
      setNewTicket(false)
      set_new_ticket({
        text: message
      })
    } else {
      client.send(JSON.stringify({
        message: message
      }));
    }
  }

  useEffect(() => {
    if(newTicket) {
      clear_current_ticket_status()
      clear_current_ticket()
      clear_current_support_messages()
    }
  }, [newTicket])

  const handleTicketButton = () => {
    if(current_status && current_status !== 3){
      setNewTicket(false)
      close_ticket(current_ticket)
      clear_current_ticket_status()
      clear_current_ticket()
      clear_current_support_messages()
    } else {
      setNewTicket((newTicket) => !newTicket)
    }
  }

  return (
    <>
      <div className={styles.chat_messages}>
        <TicketButton active_ticket={current_status && current_status !== 3}
                       action={handleTicketButton}/>
        <MessagesField/>
        <div className={styles.send_button}>
          {((current_status && current_status !== 3) || newTicket) && <MessagesForm action={handleSend} new_ticket={newTicket}/>}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  current_ticket: state.support.current_ticket,
  current_status: state.support.current_status,
})
const mapDispatchToProps = {
  set_current_support_messages,
  clear_current_support_messages,
  set_all_support_messages_read,
  set_all_support_messages_unread,
  set_new_ticket,
  close_ticket,
  clear_current_ticket_status,
  clear_current_ticket,
  set_archive_ticket,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages)