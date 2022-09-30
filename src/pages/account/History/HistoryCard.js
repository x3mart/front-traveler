import React from 'react';
import styles from './History.module.css';
import {connect} from 'react-redux';

const HistoryCard = ({data}) => {

  const {
    wallpaper,
    badge,
    country,
    title,
  } = data

  return (
    <>
      <div className={styles.card_body}>
        <div className={styles.card_top} style={{backgroundImage: `url(${wallpaper})`}}>
          <div className={`${styles.card_badge} ${styles[badge.color]}`}>{badge.text}</div>
        </div>
        <div className={styles.card_middle}>
          <div className={styles.card_middle_country}>
            {country}
          </div>
          <div className={styles.card_middle_title}>
            {title}
          </div>
        </div>
        <div className={styles.card_bottom}>
          <button className={`${styles.card_bottom_button} ${styles.success}`}>оставить отзыв</button>
          <button className={styles.card_bottom_button}>Пожаловаться</button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoryCard)