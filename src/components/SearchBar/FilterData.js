import React from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import {setSearchData} from "../../redux/actions/toursActions";
import {setCurrentSearchDestinations} from "../../redux/actions/filterActions";

const FilterData = ({setCurrentSearchDestinations, search_destinations, current_search_destinations}) => {

  const handleClick = (data) => {
    setCurrentSearchDestinations(data)
  }

  return (
    <>
      {search_destinations.length > 0 && <div className={styles.filter_selectable_data_wrapper}>
        {search_destinations?.map((item, index) =>
          <div
            key={index}
            onClick={() => handleClick(item)}
            className={`${styles.selectable_data} ${current_search_destinations?.some(i => i.id === item.id) ? styles.active_data : ''}`}
          >
            {item.name}
          </div>)}
      </div>}
    </>
  );
};

const mapStateToProps = state => ({
  search_destinations: state.filters.search_destinations,
  current_search_destinations: state.filters.current_search_destinations
})
const mapDispatchToProps = {
  setCurrentSearchDestinations
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterData)