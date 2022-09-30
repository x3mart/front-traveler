import React from "react";
import styles from './TourHeader.module.css';
import star from './star.svg'

const TourHeader = ({title, rating, reviews}) => {
  return (
    <>
      <div className={styles.tour_header_container}>
        <div className={styles.tour_header_title}>
          {title}
        </div>
        <div className={styles.tour_header_rating_reviews}>
          <div className={styles.tour_header_rating}>
            <img src={star} alt="star"/>{rating ? rating : '0.0'}
          </div>
          <div className={styles.tour_header_reviews}>
            {reviews} отзывов
          </div>
        </div>
      </div>
    </>
  )
}

export default TourHeader
