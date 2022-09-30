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
  set_all_messages_unread,
} from "../../../redux/actions/chatActions";
import MessagesList from "./MessagesList";

const Messages = ({
                    current_room,
                    set_current_messages,
                    clear_current_messages,
                    set_all_messages_read,
                    set_all_messages_unread,
                  }) => {

  const client = current_room ?
    new W3CWebSocket(`wss://traveler.market/ws/chat/${current_room}/?token=${localStorage.getItem('access')}`)
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
    client.send(JSON.stringify({
      message: message
    }));
  }

  return (
    <>
      <div className={styles.chat_messages}>
        <MessagesList/>
        <div className={styles.send_button}>
          <MessageForm action={handleSend}/>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  chat_rooms: state.chat.chat_rooms,
  current_room: state.chat.current_room,
})

const mapDispatchToProps = {
  set_current_messages,
  clear_current_messages,
  set_all_messages_read,
  set_all_messages_unread,
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)