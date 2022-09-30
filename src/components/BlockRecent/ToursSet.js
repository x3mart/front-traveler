import React from 'react';
import styles from './BlockRecent.module.css';
import Tour from "./Tour";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const ToursSet = ({tours = [], action}) => {

  return (
    <>
      <section>
        <div className='wrapper'>
          <div className={styles.tours_set_section}>
            {/*<Carousel*/}
            {/*  wrapAround={true}*/}
            {/*  slidesToShow={3}*/}
            {/*>*/}
            {/*  {tours && tours.map((tour, index) => <Tour key={index} tour={tour}/>)}*/}
            {/*</Carousel>*/}

            {tours.length <= 3 && <>
              <div className={styles.tours_wrapper}>
                {tours && tours.map((tour, index) => <Tour key={index} tour={tour}/>)}
              </div>

            </>}

            {tours.length > 3 && <AliceCarousel
              mouseTracking
              infinite
              items={tours && tours.map((tour, index) => <Tour key={index} tour={tour}/>)}
              responsive={responsive}
              controlsStrategy="alternate"
              disableDotsControls
            />}

          </div>
        </div>
      </section>
    </>
  );
};

export default ToursSet;