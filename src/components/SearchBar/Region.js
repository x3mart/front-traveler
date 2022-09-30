import React, {useEffect, useState} from 'react';
import styles from './SearchBar.module.css';
import 'react-calendar/dist/Calendar.css';
import './SearchBar.css'
import FilterButtons from "./FilterButtons";
import FilterData from "./FilterData";

const Region = () => {

  return (
    <>
      <div className={styles.traveler_region}>
        <FilterButtons/>
        <FilterData/>
      </div>
    </>
  );
};

export default Region