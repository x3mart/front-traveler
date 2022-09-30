import React from 'react';
import styles from './Types.module.css';
import {connect} from 'react-redux';
import image from "../Regions/images/mocup.png";
import {Link} from "react-router-dom";

const Type = ({type}) => {
  return (
    <>
      <Link to={type?.public_url} className={styles.type_card} style={{backgroundImage: `url(${type?.tmb_image ? type?.tmb_image : image})`}}>
        <div className={styles.type_card_name}>
          {type?.name}
        </div>
        <div className={styles.type_card_count}>
          туров: {type?.tours_count}
        </div>
      </Link>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Type)