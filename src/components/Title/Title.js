import React from 'react'
import styles from './Title.module.css'
import {connect} from 'react-redux'

const Title = ({title, sub_title, border_color, color = 'black', left, travels_count = null, button = null}) => {

    const getToursNumber = (n) => {
        if(
          String(n).slice(-1) === '0' ||
          String(n).slice(-1) === '5' ||
          String(n).slice(-1) === '6' ||
          String(n).slice(-1) === '7' ||
          String(n).slice(-1) === '8' ||
          String(n).slice(-1) === '9' ||
          n === 11 ||
          n === 12 ||
          n === 13 ||
          n === 14
        ) {
            return `Найдено ${n} туров`
        } else if(
          n !== 11 &&
          String(n).slice(-1) === '1'
        ) {
            return `Найдено ${n} тур`
        } else if(
          String(n).slice(-1) === '2' ||
          String(n).slice(-1) === '3' ||
          String(n).slice(-1) === '4'
        ) {
            return `Найдено ${n} тура`
        }
    }

    return (
      <>
          <div className={styles.title_section}>
              <div className={styles.title_set + ' ' + styles[border_color]}>
                  <div className={styles.title + ' ' + styles[color]}>{title}</div>
                  <div className={styles.sub_title + ' ' + styles[color]}>{travels_count ? getToursNumber(travels_count) : sub_title}</div>
              </div>
              <div>
                  {button ? <button className={styles.title_button}>{button}</button> : left}
              </div>
          </div>
      </>
    );
};

export default Title;