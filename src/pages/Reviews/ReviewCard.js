import React, {useState} from 'react'
import styles from './Reviews.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import {Link} from "react-router-dom";
import ButtonsSet from "../../components/ButtonsSet/ButtonsSet";
import Title from "../../components/Title";
import ToursSet from "../Tours/ToursSet";
import TextSection from "../Tours/TextSection";
import MainLayout from "../../layouts/MainLayout";
import {decodeEntities, proper_date} from "../../functions";

const ReviewCard = ({data, action}) => {

  const [active, setActive] = useState(false)

  const {
    user_avatar,
    user_name,
    user_date,
    review_image,
    review_title,
    review,
    review_date,
    review_rating,
  } = data

  const getText = (text, limit) => {
    text = text.trim();
    if(active){
      return text
    } else if(text.length > limit) {
      return text.slice(0, limit) + '...';
    } else {
      return text
    }
  }

  return (
    <>
      <div className={styles.review_card_wrapper}>
        <div className={styles.user_section}>
          <div className={styles.user_avatar} style={{backgroundImage: `url(${data?.author?.avatar})`}}/>
          <div className={styles.user_name_section}>
            <div className={styles.user_name}>
              {data?.author?.full_name}
            </div>
            <div className={styles.user_sub_name}>
              {user_date ? `На Traveler.market с ${user_date}` : ''}
            </div>
          </div>

        </div>
        <div className={styles.review_section}>
          <div className={styles.review_image} style={{backgroundImage: `url(${data?.tour?.tmb_wallpaper})`}}/>
          <div className={styles.review_text_section}>
            <div className={styles.review_title}>{data?.tour?.name}</div>
            <div className={styles.review_text}>{getText(decodeEntities(data?.body), 660)}{decodeEntities(data?.body)?.length > 660 ? <span className={styles.review_read_more} onClick={() => setActive(!active)}>{active ? ' скрыть' : ' показать'}</span> : ''}</div>
            <div className={styles.review_date}>{`Отзыв добавлен ${proper_date(data?.created_at)}`}</div>
          </div>
        </div>
        <div className={styles.review_rating_wrapper}>
          <div className={styles.review_rating}>{data?.rating}</div>
          <div className={styles.review_sub_rating}>rating</div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard)