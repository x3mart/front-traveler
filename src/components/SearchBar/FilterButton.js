import React from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import {clearSearchRegion, getSearchData, setSearchIsRussia, setSearchRegion} from "../../redux/actions/toursActions";
import {setCurrentSearchRegion, setSearchDestinations} from "../../redux/actions/filterActions";

const FilterButton = ({data, search_region, setCurrentSearchRegion, setSearchDestinations, action}) => {

  const handleClick = (item) => {
    if(search_region?.id !== item.id){
      action()
    }
    setCurrentSearchRegion(item)
    setSearchDestinations(item?.destinations)
  }

  return (
    <>
      <button className={`${styles.filter_button} ${search_region?.id === data.id ? styles.active : ''}`} onClick={() => handleClick(data)}>
        {data.name}
      </button>
    </>
  );
};

const mapStateToProps = state => ({
  search_region: state.filters.search_region
})
const mapDispatchToProps = {
  setCurrentSearchRegion,
  setSearchDestinations
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButton)