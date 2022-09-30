import React from 'react';
import styles from './Experts.module.css';
import {connect} from 'react-redux';
import StarBigIcon from "../../../assets/img/star-big.svg";
import Section from "../../../components/Section";
import Title from "../../../components/Title";
import AliceCarousel from "react-alice-carousel";
import {Link} from "react-router-dom";

const Experts = ({data}) => {

  const responsive = {
    0: { items: data?.mobile_quantity },
    568: { items: data?.tablet_quantity },
    1024: { items: data?.desktop_quantity },
  };

  const Expert = ({expert}) => {
    return (
      <>
        <div className={`${styles.card_wrapper}`}>
          {expert?.public_url && <Link to={expert?.public_url} className={`${styles.expert_avatar}`}
                 style={{backgroundImage: `url(${expert?.tmb_avatar})`}}/>}
          {!expert?.public_url && <div className={`${styles.expert_avatar}`} style={{backgroundImage: `url(${expert?.tmb_avatar})`}}/>}
          {expert?.public_url && <Link to={expert?.public_url} className={`${styles.expert_name}`}>
            {`${expert?.first_name} ${expert?.last_name}`}
          </Link>}
          {!expert?.public_url && <div className={`${styles.expert_name}`}>
            {`${expert?.first_name} ${expert?.last_name}`}
          </div>}
          <div className={`${styles.expert_data_wrapper}`}>
            <div className={`${styles.expert_data} ${styles.rating}`}>
              <div className={`${styles.expert_data_name}`}>
                Рейтинг:
              </div>
              <div className={`${styles.expert_data_amount}`}>
                <img src={StarBigIcon} alt=""/> {expert?.rating}

              </div>
            </div>
            <div className={`${styles.expert_data} ${styles.reviews}`}>
              <div className={`${styles.expert_data_name}`}>
                Отзывы:
              </div>
              <div className={`${styles.expert_data_amount}`}>
                {expert?.reviews_count}
              </div>
            </div>
            <div className={`${styles.expert_data} ${styles.tours}`}>
              <div className={`${styles.expert_data_name}`}>
                Активных туров:
              </div>
              <div className={`${styles.expert_data_amount}`}>
                {expert?.active_tours}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {data?.data?.length < data?.desktop_quantity && (
        <>
          <div className={`${styles.experts_card_wrapper}`}>
            {data?.data?.map((item, index) => <Expert key={index} expert={item}/>)}
          </div>
        </>
      )}
      {data?.data?.length >= data?.desktop_quantity && (
        <>
          <AliceCarousel
            mouseTracking
            infinite
            items={data?.data?.map((item, index) => <Expert key={index} expert={item}/>)}
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls
          />
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
)(Experts)