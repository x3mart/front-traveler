import React, {useEffect, useState} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import FilterButton from "./FilterButton";
import {filter_orders} from "../../../redux/actions/orderActions";

const OrderFilters = ({filters, filter_orders}) => {

  const [filterList, setFilterList] = useState([])

  useEffect(() => {
    filter_orders(filterList)
  }, [filterList])

  const handleFilterList = (filter) => {
    if(filterList.includes(filter)) {
      setFilterList(filterList => filterList.filter(item => item !== filter))
    } else {
      setFilterList(filterList => [...filterList, filter])
    }
  }

  return (
    <>
      <div className={styles.filters_wrapper}>
        {filters?.map((filter, i) => <FilterButton key={i} data={filter} action={handleFilterList}/>)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {
  filter_orders,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderFilters)