import React from "react";
import styles from './TourIncluded.module.css';
import ok from './ok.svg'
import cross from './cross.svg'

const TourIncluded = ({inclusions, exclusions}) => {


  return (
    <>
      {inclusions.length > 0 && <h3>
        В стоимость включено :
      </h3>}
      <div className={styles.tour_inclusions_container}>
        <div className={styles.inclusions_column}>
          {inclusions.map((item, index) => (<div key={index} className={styles.inclusion}><img src={ok} alt=""/>{item}</div>))}
        </div>
      </div>
      {exclusions.length > 0 && <h3>
        В стоимость не включено :
      </h3>}
      <div className={styles.tour_inclusions_container}>
        <div className={styles.inclusions_column}>
          {exclusions.map((item, index) => (<div key={index} className={styles.inclusion}><img src={cross} alt=""/>{item}</div>))}
        </div>
      </div>
    </>)
}

export default TourIncluded
