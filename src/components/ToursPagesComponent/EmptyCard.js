import React from 'react';
import styles from './ToursPagesComponent.module.css';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import FavoriteComponent from "../FavoriteComponent";
import Expert from "../Expert";
import dateFormat from "dateformat";

const EmptyCard = () => {
  return (
    <>
      <div className={styles.tour_card}>
        <div className={styles.text}>
          <div className={styles.tour_card_empty_card_title}>
            Не нашли подходящее путешествие?
          </div>
          <div className={styles.tour_card_empty_card_text}>
            Подберем путешествие в нужный период из туров, которых еще нет на сайте
          </div>
        </div>
        <div className={styles.tour_card_empty_card_button}>
          Подберите мне тур
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
)(EmptyCard)