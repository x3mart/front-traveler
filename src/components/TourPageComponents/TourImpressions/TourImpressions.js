import React, {useMemo} from "react";
import styles from './TourImpressions.module.css';
import ok from './ok.svg'

const TourImpressions = ({impressions}) => {

  const getNumber = (num) => {
    if(num.length % 2 === 0) {
      return num.length / 2
    } else {
      return (num.length + 1) / 2
    }
  }

  const number = useMemo(() => getNumber(impressions), [impressions]);

  return (
    <>
      <h3>Главные впечатления</h3>
    <div className={styles.tour_impressions_container}>
      <div className={styles.impressions_column}>
        {impressions.map((item, index) => {
          if(index <= number-1) {
            return (<div key={index} className={styles.impression}><img src={ok} alt=""/>{item}</div>)
          }
        })}
      </div>
      <div className={styles.impressions_column}>
        {impressions.map((item, index) => {
          if(index > number-1) {
            return (<div key={index} className={styles.impression}><img src={ok} alt=""/>{item}</div>)
          }
        })}
      </div>
    </div>
  </>)
}

export default TourImpressions
