import React from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import FilterButton from "./FilterButton";

const FilterCities = ({data}) => {
  return (
    <>
      <div className={styles.filter_buttons_wrapper}>
        {data.map((item, index) => <div key={index}>{item.name}</div>)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterCities)