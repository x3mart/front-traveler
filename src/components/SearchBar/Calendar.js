import React, {useEffect, useState} from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import {Calendar as Cal} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './SearchBar.css'
import {setSearchDates} from "../../redux/actions/filterActions";

const Calendar = ({current_search_dates, setSearchDates}) => {

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    if(current_search_dates.length > 0) {
      setValue(current_search_dates)
    } else {
      setValue(new Date())
    }
  }, [current_search_dates])

  return (
    <>
      <Cal
        minDate={new Date()}
        onChange={setSearchDates}
        value={value}
        className={styles.traveler_calendar}
        selectRange={true}
      />
    </>
  );
};

const mapStateToProps = state => ({
  current_search_dates: state.filters.current_search_dates,
})
const mapDispatchToProps = {
  setSearchDates
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar)