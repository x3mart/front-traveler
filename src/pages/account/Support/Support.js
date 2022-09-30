import React, {useEffect} from 'react'
import styles from './Support.module.css'
import {connect} from 'react-redux'
import Messages from "./Messages";
import Account from "../../../layouts/account/account";
import TicketsList from "./TicketsList";
import {
  clear_current_ticket, clear_current_ticket_status,
  get_all_tickets,
  set_all_support_messages_unread, set_current_ticket_status
} from "../../../redux/actions/supportActions";

const Support = ({
                   location,
                   get_all_tickets,
                   clear_current_ticket,
                   set_all_support_messages_unread,
                   clear_current_ticket_status,
                 }) => {

  const {pathname} = location

  useEffect(() => {
    window.scrollTo(0, 0)
    get_all_tickets()
    return () => {
      clear_current_ticket_status()
      clear_current_ticket()
      set_all_support_messages_unread()
    }
  }, [])


  return (
    <>
      <Account title='Поддержка' menu_item='support' page={pathname}>

        <div className={styles.chat_wrapper}>
          <TicketsList/>
          <Messages/>
        </div>

      </Account>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  get_all_tickets,
  clear_current_ticket,
  set_all_support_messages_unread,
  clear_current_ticket_status,
}

export default connect(mapStateToProps, mapDispatchToProps)(Support)