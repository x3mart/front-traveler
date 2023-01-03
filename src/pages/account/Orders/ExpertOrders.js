import React, {useEffect, useState} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import OrderFilters from "./OrderFilters";
import ExpertOrder from "./ExpertOrder";
import {
  filter_orders,
  get_all_filters,
  get_all_orders,
  update_orders_actions
} from "../../../redux/actions/orderActions";
import axios from "axios";
import ReactPaginate from "react-paginate";
import {setConfig} from "../../../functions";

const ExpertOrders = ({
                        get_all_orders,
                        get_all_filters,
                        filter_orders,
                        orders,
                        filters,
                        update_orders_actions,
                      }) => {

  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    if (orders?.count > itemsPerPage) {
      setPageCount(Math.ceil(orders?.count / itemsPerPage))
    }
  }, [orders, itemsPerPage])

  useEffect(() => {
    get_all_orders()
    get_all_filters()
  }, [])

  const handleSubmit = async (id, act) => {
    const config = setConfig(!!localStorage.getItem('access'))

    const body = JSON.stringify({})

    try {
      const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/orders/${id}/${act}`, body, config)

      update_orders_actions('success', res)

    } catch (err) {
      update_orders_actions('fail', err)
    }
  }

  return (
    <>
      <OrderFilters filters={filters} />
      <table className={styles.orders_table}>
        <thead>
          <tr>
            <th>ID заказа</th>
            <th>Действия</th>
            <th>Дата и ID транзакции</th>
            <th>Название тура и даты</th>
            <th>Ф.И.О (кол-во)</th>
            <th>Сумма</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
        {orders?.results?.map((item, index) => <ExpertOrder key={index} order={item} action={handleSubmit}/>)}
        </tbody>
      </table>
      {pageCount > 1 && (<div className={'pagination'}>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={e => {
            get_all_orders(`page=${e.selected + 1}`)
          }}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>)}
    </>
  );
};

const mapStateToProps = state => ({
  orders: state.orders.orders,
  filters: state.orders.filters,
})
const mapDispatchToProps = {
  get_all_orders,
  get_all_filters,
  filter_orders,
  update_orders_actions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpertOrders)