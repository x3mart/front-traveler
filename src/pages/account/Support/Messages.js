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
                    user_id,
                    set_current_support_messages,
                    clear_current_support_messages,
                    set_all_support_messages_read,
                    set_all_support_messages_unread,
                    current_status,
}) => {

  const [ticketId, setTicketId] = useState(0)
  const [newTicket, setNewTicket] = useState(false)

  const client = user_id
		? new W3CWebSocket(
				`wss://traveler.market/ws/support_chat/${user_id}/?token=${localStorage.getItem(
					'access'
				)}`
		  )
		: null
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
            clear_current_support_messages()
          } else if (dataFromServer?.command === 'set_read') {
            set_all_support_messages_read()
          } else if (dataFromServer?.command === 'set_unread') {
            set_all_support_messages_unread()
          } else if (dataFromServer?.command === 'set_ticket') {
            console.log('ticket_id', dataFromServer?.ticket_id)
						setTicketId(dataFromServer?.ticket_id)
					} else {
						set_current_support_messages(dataFromServer)
					}
        }
      };
    }
  }, [client])

  const handleSend = (message) => {
    client.send(
			JSON.stringify({
				message,
				ticket_id: ticketId,
			})
		)
  }

  return (
    <>
      <div className={styles.chat_messages}>
        <MessagesField/>
        <div className={styles.send_button}>
          {user_id && <MessagesForm action={handleSend} new_ticket={newTicket}/>}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  current_status: state.support.current_status,
  user_id: state.auth.user?.id
})
const mapDispatchToProps = {
  set_current_support_messages,
  clear_current_support_messages,
  set_all_support_messages_read,
  set_all_support_messages_unread,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages)