import React from "react";
import styles from './TourLocation.module.css';

const TourLocation = ({country, region}) => {
  return (
    <>
      <div className={styles.tour_location}>
        {country} - {region}
      </div>
    </>
  )
}

export default TourLocation
