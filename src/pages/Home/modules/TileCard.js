import React, {useEffect, useState} from 'react';
import styles from './TileCard.module.css';
import {connect} from 'react-redux';
import Tag from "../../../components/Tag/Tag";
import Htag from "../../../components/Htag/Htag";
import {Link} from "react-router-dom";
import mockup from '../../../assets/img/static-img/Rectangle8.png'
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const TileCard = ({language, data, quantity}) => {

  return (
    <>
      <Link
        to={`${data?.public_url}`}
        className={`${styles.card_tour} ${styles[`set-${quantity}`]}`}
        style={{backgroundImage: `url(${data?.tmb_image ? data?.tmb_image : mockup})`}}
      >
        <div className={styles.card_title}>{data?.name?.length>18 ? data?.name?.substring(0, 18) + '...' : data?.name}</div>
        <div className={styles.card_subtitle}>туры: {data?.tours_count}</div>
        {/*<Tag size={data?.desktop_quantity === 3 ? 'm' : 's'} style={{backgroundImage: `url(${data?.tmb_image ? data?.tmb_image : mockup})`}}>*/}
        {/*  <div className={styles.card_type_tour_content}>*/}

        {/*    <Htag tag='h4'>{data?.name?.length>18 ? data?.name?.substring(0, 18) + '...' : data?.name}</Htag>*/}
        {/*    <Htag tag='h3'>туры: {data?.tours_count}</Htag>*/}
        {/*  </div>*/}
        {/*</Tag>*/}

      </Link>
    </>
  );
};

const mapStateToProps = state => ({
  language: state.languages.language,
})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TileCard)