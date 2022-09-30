import React, {useRef, useState} from 'react';
import styles from './Reviews.module.css';
import {connect} from 'react-redux';
import mounts from "../../../assets/img/mounts.svg";
import {decodeEntities, truncateText} from "../../../functions";
import close from "../../../assets/img/close.svg";
import Section from "../../../components/Section";
import Title from "../../../components/Title";
import AliceCarousel from "react-alice-carousel";
import useOutsideClick from "../../../hooks/useOutsideClick";

const Reviews = ({data}) => {

  const [active, setActive] = useState(false)
  const [popup, setPopup] = useState(null)

  const popup_ref = useRef()

  const responsive = {
    0: { items: data?.mobile_quantity },
    568: { items: data?.tablet_quantity },
    1024: { items: data?.desktop_quantity },
  };

  const ReviewCard = ({review}) => {

    return (
      <>
        <div className={styles.card_wrapper}>
          <div className={styles.avatar_section} style={{backgroundImage: `url(${mounts})`}}>
            <div className={styles.avatar_section_image} style={{backgroundImage: `url(${review?.author?.avatar})`}}/>
          </div>
          <div className={styles.name_section}>{`${review?.author?.full_name}`}</div>
          <div className={styles.text_section}>{truncateText(decodeEntities(review?.body), 150)}</div>
          <div className={styles.button_section} onClick={() => {
            setActive(true)
            setPopup(review)
          }}>Читать полностью</div>
        </div>
      </>
    )
  }

  const ReviewModal = ({review, action}) => {
    useOutsideClick(popup_ref, () => action(false));
    return (
      <>
        <div className={styles.modal_wrapper}>
          <div ref={popup_ref} className={styles.modal_card_wrapper}>
            <img src={close} alt="" onClick={() => action(false)}/>
            <div className={styles.avatar_section} style={{backgroundImage: `url(${mounts})`}}>
              <div className={styles.avatar_section_image} style={{backgroundImage: `url(${review?.author?.avatar})`}}/>
            </div>
            <div className={styles.name_section}>{`${review?.author?.full_name}`}</div>
            <div className={styles.text_section} dangerouslySetInnerHTML={{__html: review?.body}}/>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {active && <ReviewModal review={popup} action={setActive}/>}
      {data?.data?.length > 0 && (

        <>
          {data?.data?.length <= 2 && (
            <div className={styles.reviews_wrapper}>
              {data?.data?.map((item, index) => <ReviewCard key={index} review={item}/>)}
            </div>
          )}
          {data?.data?.length > 2 && (
            <>
              <AliceCarousel
                mouseTracking
                infinite
                items={data?.data?.map((item, index) => <ReviewCard key={index} review={item}/>)}
                responsive={responsive}
                controlsStrategy="alternate"
                disableDotsControls
              />
            </>
          )}
        </>
      )}

    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reviews)