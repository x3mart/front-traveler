import React, {useEffect, useState} from 'react';
import styles from './TourImportantToKnow.module.css';
import down from './down.svg'
import up from './up.svg'

const FaqElement = ({title, text, is_opened}) => {

  const [active, setActive] = useState(false)
  const handleToggleActive = () => {
    setActive(!active)
  }

  useEffect(() => {
    setActive(is_opened)
  }, [is_opened])

  return (
    <>
      {text && <div className={styles.faq_element_wrapper}>
        <div className={styles.faq_element_header} onClick={handleToggleActive}>
          <div className={styles.faq_element_name}>
            {title}
          </div>
          <div className={styles.faq_element_arrow}>
            <img src={active ? up : down} alt="chevron"/>
          </div>
        </div>
        {active && <div dangerouslySetInnerHTML={{__html: text}} className={styles.faq_element_body}>
        </div>}
      </div>}
    </>
  );
};

export default FaqElement;