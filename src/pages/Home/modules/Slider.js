import React, {useEffect, useState} from 'react';
import styles from './Slider.module.css';
import {connect} from 'react-redux';
import Tour from "../../../components/BlockRecent/Tour";
import AliceCarousel from "react-alice-carousel";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Slider = ({data}) => {

  const [quantity, setQuantity] = useState(3)

  const { width } = useWindowDimensions();

  useEffect(() => {
    if(width >= 1024) {
      setQuantity(data?.desktop_quantity)
    } else if(width < 1024 && width >= 568) {
      setQuantity(data?.tablet_quantity)
    } else {
      setQuantity(data?.mobile_quantity)
    }
  }, [width])

  const responsive = {
    0: { items: data?.mobile_quantity },
    568: { items: data?.tablet_quantity },
    1024: { items: data?.desktop_quantity },
  };

  return (
    <>
      <section>
        <div className='wrapper'>
          <div className={styles.tours_set_section}>

            {data?.data.length <= quantity && <>
              <div className={styles.tours_wrapper}>
                {data?.data && data?.data.map((tour, index) => <Tour key={index} tour={tour}/>)}
              </div>

            </>}

            {data?.data.length > quantity && <AliceCarousel
              mouseTracking
              infinite
              items={data?.data && data?.data.map((tour, index) => <Tour key={index} tour={tour}/>)}
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

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Slider)