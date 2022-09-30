import React from 'react';
import styles from './BlockRecent.module.css';
import heart from './heart.svg'
import star from './star.svg'
import {Link, useHistory} from "react-router-dom";
import dateFormat, { masks } from 'dateformat'
import Expert from "../Expert";
import {connect} from "react-redux";
import FavoriteComponent from "../FavoriteComponent";

const Tour = ({tour, language}) => {

  const history = useHistory()

  const handleRedirect = () => {
    let recent = JSON.parse(localStorage.getItem('recent'))
    if(recent) {
      let arr = recent.filter(item => item.id !== tour.id)
      arr.splice(0, 0, tour);
      if(arr.length > 10){
        arr.length = 10
      }
      localStorage.setItem('recent', JSON.stringify(arr))
    } else {
      localStorage.setItem('recent', JSON.stringify([tour]))
    }
    history.push(`${tour.public_url}`)
  }

  return (
    <>
      <div className={styles.tour_card}>
        <Link
          to={`${tour.public_url}`}
          className={styles.tour_image}
          style={{backgroundImage: 'url(' + tour.tmb_wallpaper + ')'}}
          // onClick={handleRedirect}
        >
          <div className={styles.tour_badges_upper}>
            <FavoriteComponent tour_id={tour.id}/>
            {/*<img src={heart} alt="favourite"/>*/}
            {tour.is_recomended && <div className={styles.tour_badges_recomended}>рекомендуем</div>}
          </div>
          <div className={styles.tour_badges_lower}>
            {tour.main_type && <div className={styles.tour_badge + ' ' + styles.green}>
              {tour.main_type}
            </div>}
            {tour.vacants_number && <div className={styles.tour_badge + ' ' + styles.orange}>
              {`Осталось мест: ${tour.vacants_number}`}
            </div>}

          </div>
        </Link>
        <div className={styles.tour_data}>
          <div className={styles.tour_name_section}>
            <div className={styles.tour_country}>{`${tour.start_destination} - ${tour.start_city}`}</div>
            <div className={styles.tour_name} onClick={handleRedirect}>{tour.name}</div>
          </div>
          <div className={styles.tour_data_section}>
            <div>
              {tour?.expert?.tmb_avatar && <Expert avatar={tour.expert.tmb_avatar} id={tour.expert.id} name={tour.expert.first_name}
                                                   rating={tour.expert.rating} reviews={tour.expert.reviews_count} public_url={tour.expert.public_url}/>}
            </div>
            {/*<div className={styles.tour_leader_section}>*/}
            {/*  <div className={styles.leader_avatar} style={{backgroundImage: 'url(' + tour.expert.tmb_avatar + ')'}}/>*/}
            {/*  <div className={styles.tour_leader_name_section}>*/}
            {/*    <div className={styles.leader_name}>{tour.expert.first_name}</div>*/}
            {/*    <div className={styles.leader_rating}><img src={star} alt="star"/><span>{tour.expert.rating}</span>{' '}({tour.expert.reviews_count})</div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className={styles.tour_price_section}>
              <div className={styles.tour_duration}>{`${tour.duration} дн. (с ${dateFormat(new Date(tour.start_date), 'dd.mm.yyyy')})`}</div>
              <div className={styles.tour_price}>
                {tour.discount && <span className={styles.tour_discounted_price} style={{marginRight: '5px'}}>{tour && tour.price ? tour.price.toLocaleString('ru') : ''}<span className='rub-sign'>{tour.currency.sign}</span></span>}
                {tour && tour.discount ? tour.discount.toLocaleString('ru') : tour.price.toLocaleString('ru')}
                <span className='rub-sign'>{tour.currency.sign}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  language: state.languages.language
})

export default connect(mapStateToProps)(Tour)