import React, {useState} from "react";
import styles from './TourDays.module.css';

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const DaysImages = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const Component = () => {
    if(Array.isArray(slides) && slides.length > 1) {
      return (
        <>
          {slides.map((slide, index) => {
            return (
              <>
                <div key={index} className={`${styles.day_image} ${styles.slide} ${index === current ? styles.active : ''}`} style={{
                  backgroundImage: 'url(' + slide.image + ')'}}
                >
                  <FaAngleLeft className='left-arrow' onClick={prevSlide} />
                  <FaAngleRight className='right-arrow' onClick={nextSlide} />

                </div>
              </>
            )}
          )}
        </>
      )
    } else if(Array.isArray(slides) && slides.length === 1) {
      return (
        <div className={styles.day_image} style={{
          backgroundImage: 'url(' + slides[0].image + ')'
        }}/>
      )
    }
  }

  return (
    <>
      <Component/>

    </>)
}

export default DaysImages
