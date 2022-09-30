import React, { useState, useEffect } from 'react'
import styles from './BlockPresentation.module.css';
// import Button from '../Button/Button';
// import Htag from '../Htag/Htag';
// import FormGetTour from '../FormGetTour/FormGetTour';
import cn from 'classnames';
import Htag from "../Htag/Htag";
import SearchBar from "../SearchBar";

const BlockPresentation = ({ block_style, children, className }) => {  
     const [viewedBlock, setViewedBlock] = useState('')

     useEffect(() => {
       if (block_style === 'presentation_block') {
         setViewedBlock(styles.presentation_block)
       } else if (block_style === 'presentation_block_another') {
         setViewedBlock(styles.presentation_block_another)
       }
     }, [block_style])

    return (
      <div className={viewedBlock}>
        <div className={styles.wrapper}>
          <div className={styles.main_section}>
            <div>
              <Htag tag='h1'>traveler market - Маркетплейс авторских туров</Htag>
            </div>
            <SearchBar margin_bottom={'80px'}/>
          </div>
        </div>
      </div>
    )
};

export default BlockPresentation