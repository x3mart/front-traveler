import React from 'react';
import styles from './Support.module.css';
import {connect} from 'react-redux';
import {close_ticket} from "../../../redux/actions/supportActions";

const TicketButton = ({active_ticket = false, action, close_ticket}) => {

  const handleClick = () => {
    action()
    // action(!active_ticket)
  }

  return (
    <>
      <div className={styles.tickets_button} onClick={handleClick}>
        {active_ticket ? 'Закрыть заявку' : 'Открыть заявку'}
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {close_ticket}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketButton)