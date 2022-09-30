import React, {useState} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import axios from "axios";
import PopUp from "../../../components/PopUp/PopUp";
import {update_order_actions} from "../../../redux/actions/orderActions";

const ExpertOrder = ({order, update_order_actions, action}) => {

  const [actionUrl, setActionUrl] = useState('')
  const [title, setTitle] = useState('')
  const [active, setActive] = useState(false)

  const {
    id,
    expert,
    customer,
    start_date,
    finish_date,
    postpay_final_date,
    status,
    name,
    travelers_number,
    currency,
    cost,
    book_cost,
    book_price,
    travelers,
    actions,
    tour
  } = order

  const handleAction = async (act, confirmation, title) => {
    setTitle(title)
    await setActionUrl(act)
    if(confirmation) {
      setActive(true)
    } else {
      await action(id, act)
    }
  }

  const handleSubmit = () => {
    action(id, actionUrl)
    setActive(false)
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
        <td>{id}</td>
        <td>
          <div className={styles.table_actions}>
            {actions?.length > 0 && actions.map(item => <div style={{color: item.color, cursor: 'pointer'}} onClick={() => handleAction(item.action, item.confirmation, item.title)}>
              {item.title}
            </div>)}
          </div>
        </td>
        <td>
          <div className={styles.table_transaction}>
            <div>
              {/*{transaction_date}*/}
            </div>
            <div>
              {/*{transaction_id}*/}
            </div>
          </div>
        </td>
        <td>
          <div className={styles.table_tour}>
            <div>
              {name}
            </div>
            <div>
              {`${start_date} - ${finish_date}`}
            </div>
          </div>
        </td>
        <td>{`${customer?.full_name}(${travelers_number})`}</td>
        <td>{cost}</td>
        <td>{status}</td>
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
)(ExpertOrder)