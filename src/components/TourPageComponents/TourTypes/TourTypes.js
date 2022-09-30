import React, {useEffect, useState} from "react";
import styles from './TourTypes.module.css';

const TourTypes = ({main_type, extra_types=[]}) => {

  const [types, setTypes] = useState([])

  useEffect(() => {
    setTypes([
      main_type,
      ...extra_types,
    ])
  }, [main_type, extra_types])

  return (
    <>
      <div className={styles.tour_types_container}>
        {types?.map((item, n) => (
          <div key={n} className={styles.tour_types_item}>
            {item}
            {/*{item.name}*/}
          </div>
        ))}
      </div>
    </>
  )
}

export default TourTypes
