import React, {useState} from 'react';
import styles from './TourImportantToKnow.module.css';
import up from "../TourDays/up.svg";
import down from "../TourDays/down.svg";
import FaqElement from "./FaqElement";

const TourImportantToKnow = ({
                               guest_requirements,
                               take_with,
                               key_features,
                               new_to_see,
}) => {

  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }

  let data = [
    {
      title: 'Требования к гостю',
      text: guest_requirements,
    },
    {
      title: 'Что взять с собой?',
      text: take_with,
    },
    {
      title: 'Ключевые особенности?',
      text: key_features,
    },
    {
      title: 'Что нового я увижу?',
      text: new_to_see,
    },
  ]

  return (
    <>
      {data && Array.isArray(data) && <div className={styles.important_to_know_container}>
        <div className={styles.important_to_know_header}>
          <h3>Важно знать</h3>
          <div className={styles.important_to_know_opener} onClick={toggleActive}>
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
        {data.map((item, index) => (
          <FaqElement key={index} title={item.title} text={item.text} is_opened={active}/>
        ))}
      </div>}
    </>
  );
};

export default TourImportantToKnow;