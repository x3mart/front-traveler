import React from 'react'
import styles from './CommonTourCard.module.scss';
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
import ArrowIconLeft from '../../assets/img/left_arrow.svg';
import ArrowIconRight from '../../assets/img/right_arrow.svg';
import {Link} from 'react-router-dom'

import like from '../../assets/img/Like.svg'
import star from '../../assets/img/Star.svg'
import likeFilled from '../../assets/img/LikeWhite.svg'
import dateFormat, { masks } from 'dateformat'

const CommonTourCard = ({size='small', data}) => {
    
    const guide = data.team_member ? data.team_member : data.guest_guide

    const image_style = size === 'big' ? 'image_part_big' : 'image_part_small'
    
    return (
        <>
            <div className={styles.card_wrapper}>
                <div className={styles.image_part + ' ' + styles[image_style]} style={{backgroundImage: 'url(' + data.tmb_wallpaper + ')'}}>
                    <div className={styles.favourite}><img src={data.is_favourite ? likeFilled : like} alt="Is Favourite"/></div>
                    {size === 'big' && (
                        <>
                            <div className={styles.data_header_big}>
                                <div className={styles.data_country}>{data.start_country}</div>
                                <div className={styles.data_tour_name}>{data.name}</div>
                            </div>
                        </>
                    )}
                </div>
                <div className={styles.data_part}>
                    <div className={styles.data_header_small}>
                        <div className={styles.data_country}>{data.start_country}</div>
                        <div className={styles.data_tour_name}>{data.name}</div>
                    </div>
                    <div className={styles.data_footer}>
                        <div className={styles.left_part}>
                            <div className={styles.guide_image}><img src={guide.tmb_image} alt=""/></div>
                            <div className={styles.name_rating_part}>
                                <div className={styles.guide_name}>{guide.guide_name}</div>
                                <div className={styles.tour_rating}><img src={star} alt="star"/><span>{data.rating}</span>({data.reviews_count})</div>
                            </div>
                        </div>
                        <div className={styles.right_part}>
                            <div className={styles.tour_duration}>{data.tour_days} дн. (с {dateFormat(new Date(data.start_date), 'dd.mm.yyyy')})</div>
                            <div className={styles.tour_price}>от {data.price} <span className='rub-sign'>₽</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CommonTourCard