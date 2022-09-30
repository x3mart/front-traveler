import React, {useEffect, useState} from 'react';
import styles from './Support.module.css';
import {connect} from 'react-redux';
import TicketCard from "./TicketCard";
import {
  clear_current_ticket, clear_current_ticket_status,
  set_all_support_messages_unread,
  set_current_ticket, set_current_ticket_status
} from "../../../redux/actions/supportActions";
import chevron from './images/chevron_down.svg'

const TicketsList = ({
                       clear_current_ticket,
                       set_all_support_messages_unread,
                       set_current_ticket,
                       current_ticket,
                       running_ticket,
                       archive_tickets,
                       set_current_ticket_status,
}) => {

  const [archiveActive, setArchiveActive] = useState(false)

  useEffect(() => {
    if(running_ticket) {
      set_current_ticket(running_ticket.id)
      set_current_ticket_status(running_ticket.status)
    }
  }, [running_ticket])

  const handleCurrentTicket = (ticket) => {
    clear_current_ticket()
    set_all_support_messages_unread()
    set_current_ticket(ticket.id)
    set_current_ticket_status(ticket.status)
  }

  return (
    <>
      <div className={styles.chat_contacts}>
        {running_ticket && <TicketCard ticket={running_ticket} action={handleCurrentTicket} is_running={true}
                                                         active={current_ticket === running_ticket.id} first={true}/>}
        <div className={`${styles.chat_contact_card} ${styles.archive_handler}`} onClick={() => setArchiveActive((archiveActive) => !archiveActive)}>
          <div>
            Архив заявок
          </div>
          <div className={archiveActive ? styles.chevron_rotated : ''}>
            <img src={chevron} alt=""/>
          </div>
        </div>
        <div className={styles.archive_tickets}>
          {archiveActive && archive_tickets?.map((i, n) => <TicketCard key={n} ticket={i} action={handleCurrentTicket} is_running={running_ticket?.id === i.id}
                                                                       active={current_ticket === i.id} first={n === 0}/>)}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  all_tickets: state.support.all_tickets,
  current_ticket: state.support.current_ticket,
  running_ticket: state.support.running_ticket,
  archive_tickets: state.support.archive_tickets,
})
const mapDispatchToProps = {
  clear_current_ticket,
  set_all_support_messages_unread,
  set_current_ticket,
  set_current_ticket_status,
  clear_current_ticket_status,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketsList)