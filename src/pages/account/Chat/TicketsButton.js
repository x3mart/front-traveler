import React from 'react';
import styles from './Chat.module.css';
import {connect} from 'react-redux';

const TicketsButton = ({active_ticket = false, action}) => {

  const handleClick = () => {
    action(!active_ticket)
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
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketsButton)