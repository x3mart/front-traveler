import React from 'react';
import styles from './Reviews.module.css';

const ReviewsButton = ({action}) => {
  return (
    <>
      <button className={styles.reviews_button} onClick={action}>
        Показать больше отзывов
      </button>
    </>
  );
};

export default ReviewsButton;