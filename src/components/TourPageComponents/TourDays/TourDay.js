import React, {useState, useEffect} from "react";
import styles from './TourDays.module.css';
import down from './down.svg'
import up from './up.svg'
import DaysImages from "./DaysImages";

const TourDay = ({day={}, index, is_opened}) => {

  const [active, setActive] = useState(false)
  const handleToggleActive = () => {
    setActive(!active)
  }

  useEffect(() => {
    setActive(is_opened)
  }, [is_opened])

  return (
    <>
      <div className={styles.day_container}>
        {active && day && day.image && day.image.length>0 && <DaysImages slides={day && day.image}/>}
        <div className={styles.day_title_container} onClick={handleToggleActive}>
          <div className={styles.day_title}>День {index + 1}. {day.day_title} {day.location ? ' (' + day.location + ')' : ''}</div>
          <div className={styles.day_arrow}>
            <img src={active ? up : down} alt="chevron"/>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: day.description}} className={styles.day_description} style={{display: active ? 'block' : 'none'}}/>
      </div>

    </>)
}

export default TourDay
