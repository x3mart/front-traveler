import React, {useEffect, useState} from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import FilterButton from "./FilterButton";
import {getCurrentFilterSet, getSearchRegions, resetDestinations} from "../../redux/actions/filterActions";

const FilterButtons = ({getSearchRegions, search_regions, resetDestinations, search_region, getCurrentFilterSet, current_filter_set}) => {

  const [searchRegions, setSearchRegions] = useState([])

  useEffect(() => {
    if(!current_filter_set) {
      getCurrentFilterSet()
    } else {
      setSearchRegions(current_filter_set?.data?.filter(item => item?.type === "start_destination")[0]?.data)
    }

    // getSearchRegions()
  }, [current_filter_set])

  useEffect(() => {
    if(!search_region) {
      resetDestinations()
    }
  }, [search_region])

  return (
    <>
      <div className={styles.filter_buttons_wrapper}>
        {searchRegions?.map((item, index) => <FilterButton key={index} data={item} action={resetDestinations}/>)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  search_regions: state.filters.search_regions,
  search_region: state.filters.search_region,
  current_filter_set: state.filters.current_filter_set,
})
const mapDispatchToProps = {
  getSearchRegions,
  resetDestinations,
  getCurrentFilterSet,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButtons)