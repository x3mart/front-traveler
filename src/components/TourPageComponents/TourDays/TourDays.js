import React, {useState} from "react";
import styles from './TourDays.module.css';
import down from './down.svg'
import up from './up.svg'
import TourDay from "./TourDay";

const TourDays = ({days=[]}) => {

  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <>
      {Array.isArray(days) && days.length > 0 && <div className={styles.tour_days_container}>
        <div className={styles.tour_days_header}>
          <h3>День за днем</h3>
          <div className={styles.days_opener} onClick={toggleActive}>
            {active
              ?
              'Закрыть все'
              :
              'Открыть все'
            }
            {' '}
            {' '}
            <img src={active ? up : down} alt="chevron"/>
          </div>
        </div>
        {days.map((item, index) => (
          <TourDay  key={index} day={item} index={index} is_opened={active}/>
        ))}
      </div>}

    </>)
}

export default TourDays
