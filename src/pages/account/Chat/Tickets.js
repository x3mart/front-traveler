import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import styles from './Chat.module.css';
import Message from "./Message";
import avatar4 from "./images/avatar4.png";
import {w3cwebsocket as W3CWebSocket} from "websocket";
import send from "./images/send.svg";
import MessageForm from "./MessageForm";
import {
  set_current_messages,
  clear_current_messages,
  set_all_messages_read,
  set_all_messages_unread, set_new_ticket,
} from "../../../redux/actions/chatActions";
import MessagesList from "./MessagesList";
import TicketsButton from "./TicketsButton";

const Tickets = ({
                    current_ticket,
                    set_current_messages,
                    clear_current_messages,
                    set_all_messages_read,
                    set_all_messages_unread,
                   set_new_ticket,
                   all_tickets,
                  }) => {

  const [newTicket, setNewTicket] = useState(false)

  const client = current_ticket ?
    new W3CWebSocket(`wss://traveler.market/ws/chat/${current_ticket}/?token=${localStorage.getItem('access')}`)
    :
    null
  ;

  useEffect(() => {
    return () => {
      clear_current_messages()
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
          if (dataFromServer?.command === 'set_read') {
            set_all_messages_read()
          } else if (dataFromServer?.command === 'set_unread') {
            set_all_messages_unread()
          } else {
            set_current_messages(dataFromServer)
          }
        }
      };
    }
  }, [client])

  // console.log(current_room)


  const handleSend = (message) => {
    set_new_ticket({
      text: message
    })

    // set_current_messages({
    //   author:
    //     {
    //       id: user.id,
    //       avatar: user.avatar
    //     },
    //   message: message,
    //   time_date: Date.now(),
    // })
  }

  return (
    <>
      <div className={styles.chat_messages}>
        {current_ticket?.status !== 3 && <TicketsButton action={setNewTicket} active_ticket={newTicket}/>}
        <MessagesList/>
        <div className={styles.send_button}>
          {newTicket && <MessageForm action={handleSend}/>}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  all_tickets: state.chat.all_tickets,
  archive_tickets: state.chat.archive_tickets,
  current_ticket: state.chat.current_ticket,
})

const mapDispatchToProps = {
  set_current_messages,
  clear_current_messages,
  set_all_messages_read,
  set_all_messages_unread,
  set_new_ticket,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)