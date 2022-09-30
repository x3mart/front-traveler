import React from 'react';
import styles from './CardComponent.module.css';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import FavoriteComponent from "../FavoriteComponent";
import Expert from "../Expert";
import dateFormat from "dateformat";
import {truncateText} from "../../functions";

const CutTourCard = ({tour}) => {
  return (
    <>
      <div className={styles.cut_tour_card}>
        <Link
          to={`${tour.public_url}`}
          className={styles.cut_tour_image}
          style={{backgroundImage: 'url(' + tour.tmb_wallpaper + ')'}}
        >

          <div className={styles.cut_tour_badges}>
            {tour?.completed && <div className={`${styles.cut_tour_badge} ${styles.green}`}>
              выполнен
            </div>}
            {tour?.pending && <div className={`${styles.cut_tour_badge} ${styles.orange}`}>
              ожидает
            </div>}
          </div>
        </Link>
        <div className={styles.cut_tour_data}>
          <div className={styles.cut_tour_name_section}>
            <div className={styles.cut_tour_country}>{`${tour.start_destination}`}</div>
            <Link to={`${tour.public_url}`} className={styles.cut_tour_name} >{truncateText(tour.name, 20)}</Link>
          </div>
          <div className={styles.cut_tour_button_section}>

            <div className={`${styles.cut_tour_button} ${styles.green}`}>
              оставить отзыв
            </div>
            <div className={`${styles.cut_tour_button} ${styles.transparent}`}>
              Пожаловаться
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CutTourCard)