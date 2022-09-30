import React, {useEffect, useState} from 'react';
import styles from './Blog.module.css';
import star from './images/star.svg'
import dateFormat, { masks } from 'dateformat'
import {decodeEntities, properDate, removeTags, truncateText} from "../../functions";
import {useHistory, Link} from "react-router-dom";
import {clear_single_article} from "../../redux/actions/blogActions";
import {connect} from "react-redux";

const BlogCard = ({language, data, big = false, index, clear_single_article}) => {

  const history = useHistory()

  const [margin, setMargin] = useState(false)

  useEffect(() => {
    if(
      index === 0 ||
      index === 2 ||
      index === 3 ||
      index === 5
    ) {
      setMargin(true)
    } else {
      setMargin(false)
    }
  }, [index])

  const {
    id,
    title,
    tmb_image,
    text,
    slug,
    user_avatar,
    user_name,
    user_rating,
    user_reviews,
    date,
    reading_time,
  } = data

  const handleRedirect = () => {
    clear_single_article()
    history.push(`/${language}/article/${slug}`)
  }


  return (
    <>
      <div className={`${styles.card_wrapper} ${big ? styles.big : ''} ${margin ? styles.margin : ''}`}>
        {/*<a href={`/blog/${id}`} className={styles.card_image} style={{backgroundImage: `url(${tmb_image})`}}>*/}
        {/*  {big &&*/}
        {/*    <div className={styles.card_title}>*/}
        {/*      {truncateText(title, 35)}*/}
        {/*    </div>*/}
        {/*  }*/}
        {/*</a>*/}
        <div className={styles.card_image} style={{backgroundImage: `url(${tmb_image})`}} onClick={handleRedirect}>
          {big &&
            <div className={styles.card_title}>
              {truncateText(title, 35)}
            </div>
          }
        </div>
        <div className={styles.card_text_wrapper}>
          {!big &&
            // <a href={`/blog/${id}`} className={styles.card_title}>
            //   {truncateText(title, 35)}
            // </a>
            <div className={styles.card_title} onClick={handleRedirect}>
              {truncateText(title, 35)}
            </div>
          }
          <div className={styles.card_text}>
            {truncateText(decodeEntities(text), 200)}
          </div>
        </div>
        <div className={styles.card_footer}>
          <div className={styles.card_user}>
            {/*<div className={styles.card_avatar} style={{backgroundImage: `url(${user_avatar})`}}/>*/}
            {/*<div className={styles.card_data}>*/}
            {/*  <div className={styles.card_user_name}>{user_name}</div>*/}
            {/*  <div className={styles.card_user_rating}><img src={star} alt="star"/> {user_rating} <span>({user_reviews})</span></div>*/}
            {/*</div>*/}
          </div>
          <div className={styles.date_time}>
            <div>{`Читать ≈ ${reading_time} мин`}</div>
            <div>{properDate(date)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  language: state.languages.language,
})

export default connect(mapStateToProps, {clear_single_article})(BlogCard)
