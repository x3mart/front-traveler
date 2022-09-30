import React, {useState} from 'react'
import CardCollection from '../CardCollection/CardCollection';
import Section from "../Section";
import Title from "../Title";
import Tour from "../BlockRecent/Tour";
import AliceCarousel from "react-alice-carousel";
import Tag from "../Tag/Tag";
import styles from "../CardExpert/CardExpert.module.css";
import Htag from "../Htag/Htag";
import StarBigIcon from "../../assets/img/star-big.svg";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};


const BlockTravelExperts = ({experts}) => {

  // const [state, setState] = useState([1,2,3,4])

  const Expert = ({data}) => {
    return (
      <>
        <div className={`${styles.card_wrapper}`}>
          <div className={`${styles.expert_avatar}`} style={{backgroundImage: `url(${data?.tmb_avatar})`}}/>
          <div className={`${styles.expert_name}`}>
            {`${data?.first_name} ${data?.last_name}`}
          </div>
          <div className={`${styles.expert_data_wrapper}`}>
            <div className={`${styles.expert_data} ${styles.rating}`}>
              <div className={`${styles.expert_data_name}`}>
              Рейтинг:
              </div>
              <div className={`${styles.expert_data_amount}`}>
                <img src={StarBigIcon} alt=""/> {data?.rating}

              </div>
            </div>
            <div className={`${styles.expert_data} ${styles.reviews}`}>
              <div className={`${styles.expert_data_name}`}>
                Отзывы:
              </div>
              <div className={`${styles.expert_data_amount}`}>
                {data?.reviews_count}
              </div>
            </div>
            <div className={`${styles.expert_data} ${styles.tours}`}>
              <div className={`${styles.expert_data_name}`}>
                Активных туров:
              </div>
              <div className={`${styles.expert_data_amount}`}>
                {data?.active_tours}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

    return (
      <>
        <Section background={'transparent'} padding={'30px 0'}>
          <Title title={'Популярные тревел-эксперты'} sub_title={`Лучшие из лучших`} border_color={'blue'}/>
          {experts?.length < 3 && (
            <>
              <div className={`${styles.experts_card_wrapper}`}>
                {experts?.map((item, index) => <Expert key={index} data={item}/>)}
              </div>
            </>
          )}
          {experts?.length >= 3 && (
            <>
              <AliceCarousel
                mouseTracking
                infinite
                items={experts?.map((item, index) => <Expert key={index}/>)}
                responsive={responsive}
                controlsStrategy="alternate"
                disableDotsControls
              />
            </>
          )}

        </Section>
      </>
    );
};

export default BlockTravelExperts