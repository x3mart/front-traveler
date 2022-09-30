import React, {useState} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import {properNumber} from "../../../functions";
import axios from "axios";
import * as t from "../../../redux/types";
import {update_order_actions} from "../../../redux/actions/orderActions";
import PopUp from "../../../components/PopUp/PopUp";
import {Link} from "react-router-dom";

const CustomerOrder = ({order, action, update_order_actions}) => {

  const {
    id,
    name,
    start_date,
    finish_date,
    travelers,
    travelers_number,
    cost,
    currency,
    status,
    actions,
    tour,
  } = order

  const [actionUrl, setActionUrl] = useState('')
  const [title, setTitle] = useState('')
  const [active, setActive] = useState(false)

  const handleSubmit = () => {
    action(id, actionUrl)
    setActive(false)
  }


  const handleAction = async (act, confirmation, title) => {
    setTitle(title)
    await setActionUrl(act)
    if(confirmation) {
      setActive(true)
    } else {
      await action(id, act)
    }
  }

  return (
    <>
      {active && <PopUp
        second_color={'button-primary'}
        first_color={'button-danger'}
        button2={'Отменить'}
        button={'Продолжить'}
        action={handleSubmit}
        status={'danger'}
        title={title}
        text={'Данное действие необратимо. Уверены, что хотите продолжить?'}
        second_action={() => setActive(false)}
        close_action={() => setActive(false)}
      />}
      <tr>
        <td>
          <Link to={`/account/orders/${id}/payment`} className={styles.table_id}>
            {id}
          </Link>
        </td>
        <td>
          <div className={styles.table_actions}>
            {actions?.length > 0 && actions.map(item => <div style={{color: item.color, cursor: 'pointer'}} onClick={() => handleAction(item.action, item.confirmation, item.title)}>
              {item.title}
            </div>)}
          </div>
        </td>
        <td>
          <div className={styles.table_tour}>
            <Link to={`/tours/${tour}`}>
              {name}
            </Link>
            <div>
              {`${start_date} - ${finish_date}`}
            </div>
          </div>
        </td>
        <td>
          <div className={styles.table_travelers}>
            {`${travelers && travelers[0] && travelers[0]?.last_name} (${travelers_number} чел.)`}
          </div>
        </td>
        <td>
          <div className={styles.table_price}>
            {`${properNumber(cost)}${currency}`}
          </div>
        </td>
        <td>
          <div className={styles.table_status}>
            {status}
          </div>
        </td>
      </tr>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {
  update_order_actions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerOrder)