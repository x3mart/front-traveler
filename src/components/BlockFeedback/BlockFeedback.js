import React, {useState} from 'react'
import styles from './BlockFeedback.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock'
import Htag from '../Htag/Htag'
import CardCollection from '../CardCollection/CardCollection'
import Title from "../Title";
import ToursSet from "../BlockRecent/ToursSet";
import Section from "../Section";
import mounts from '../../assets/img/mounts.svg'
import close from '../../assets/img/close.svg'
import {decodeEntities, truncateText} from "../../functions";
import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 2 },
};

const BlockFeedback = ({reviews}) => {

  const ReviewCard = ({data}) => {

    const [active, setActive] = useState(false)

    return (
      <>
        {active && <ReviewModal data={data} action={setActive}/>}
        <div className={styles.card_wrapper}>
          <div className={styles.avatar_section} style={{backgroundImage: `url(${mounts})`}}>
            <div className={styles.avatar_section_image} style={{backgroundImage: `url(${data?.author?.avatar})`}}/>
          </div>
          <div className={styles.name_section}>{`${data?.author?.full_name}`}</div>
          <div className={styles.text_section}>{truncateText(decodeEntities(data?.body), 200)}</div>
          <div className={styles.button_section} onClick={() => setActive(true)}>Читать полностью</div>
        </div>
      </>
    )
  }

  const ReviewModal = ({data, action}) => (
    <>
      <div className={styles.modal_wrapper}>
        <div className={styles.modal_card_wrapper}>
          <img src={close} alt="" onClick={() => action(false)}/>
          <div className={styles.avatar_section} style={{backgroundImage: `url(${mounts})`}}>
            <div className={styles.avatar_section_image} style={{backgroundImage: `url(${data?.author?.avatar})`}}/>
          </div>
          <div className={styles.name_section}>{`${data?.author?.full_name}`}</div>
          <div className={styles.text_section} dangerouslySetInnerHTML={{__html: data?.body}}/>
        </div>
      </div>
    </>
  )

  return (
    <>
      {reviews?.length > 0 && (

        <Section background={'transparent'} padding={'30px 0'}>
          <Title title={'Отзывы наших путешественников'} sub_title={`Все самое интересное`} border_color={'blue'}/>
          {reviews?.length <= 2 && (
            <div className={styles.reviews_wrapper}>
              {reviews?.map((item, index) => <ReviewCard key={index} data={item}/>)}
            </div>
          )}
          {reviews?.length > 2 && (
            <>
              <AliceCarousel
                mouseTracking
                infinite
                items={reviews?.map((item, index) => <ReviewCard key={index} data={item}/>)}
                responsive={responsive}
                controlsStrategy="alternate"
                disableDotsControls
              />
            </>
          )}
        </Section>
      )}

    </>
  );
};

export default BlockFeedback
