import React, {useEffect, useState} from 'react'
import styles from './SliderBlock.module.scss';
import cn from 'classnames';
import CardTour from '../CardTour/CardTour';
import CardCountryTour from '../CardCountryTour/CardCountryTour';
import CardTourLarge from '../CardTourLarge/CardTourLarge';
import CardTypeTour from '../CardTypeTour/CardTypeTour';
import CardExpert from '../CardExpert/CardExpert';
import Rating from '../Rating/Rating';
import Sale from '../Sale/Sale';
import CardFeedback from '../CardFeedback/CardFeedback';
import CardAboutExpert from '../CardAboutExpert/CardAboutExpert';
import arrowIconLeft from '../../assets/img/left_arrow.svg';
import arrowIconRight from '../../assets/img/right_arrow.svg';

import wallpaper1 from '../../assets/img/tour_images/img.jpg';
import wallpaper2 from '../../assets/img/tour_images/img2.jpg';
import wallpaper3 from '../../assets/img/tour_images/img3.jpg';
import wallpaper4 from '../../assets/img/tour_images/img4.jpg';

import david from '../../assets/img/guides_images/david.jpg';
import mary from '../../assets/img/guides_images/mary.jpg';
import kriss from '../../assets/img/guides_images/kriss.jpg';

import CommonTourCard from "../CommonTourCard/CommonTourCard";
import {Link} from 'react-router-dom'
import Section from "../Section";
import Title from "../Title";
import ToursSet from "../BlockRecent/ToursSet";

const SliderBlock = ({new_tours}) => {

    return (
      <>
          {new_tours && (
            <>
                <Section background={'var(--background-grey)'} padding={'30px 0'}>
                    <Title title={'Новинки'} sub_title={`Все самое новое от наших тревел-экспертов`} border_color={'orange'}/>
                    <ToursSet tours={new_tours}/>
                </Section>
            </>
          )}
      </>
    )
};

export default SliderBlock