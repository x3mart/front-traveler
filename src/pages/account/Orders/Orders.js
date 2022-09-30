import React, {useEffect} from 'react'
import styles from './Orders.module.css'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import Account from "../../../layouts/account/account";
import {setPage} from "../../../redux/actions/authActions";
import ExpertOrders from "./ExpertOrders";
import CustomerOrders from "./CustomerOrders";
import HistorySet from "../History/HistorySet";

const Orders = ({ status, setPage, isAuthenticated }) => {
  useEffect(() => {
    setPage('orders')
  }, [])

  if (!isAuthenticated) {
    return <Redirect to='/404'/>
  }

  return (
    <Account menu_item='orders' title={status === 'experts' ? 'Заказы' : 'Мои брони'}>
      <>
        <main>
          <div className='global-h2-heading'>
            {status === 'experts' && <h2>Заказы</h2>}
            {status === 'customers' && <h2>Мои брони</h2>}
          </div>
          {status === 'experts' && <ExpertOrders/>}
          {status === 'customers' && <CustomerOrders/>}
        </main>
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(Orders)