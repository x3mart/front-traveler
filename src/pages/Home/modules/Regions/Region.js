import React from 'react';
import styles from './Regions.module.css';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const Region = ({active, action, content}) => {

  return (
    <>
      {/*<Link*/}
      {/*  to={`${content.public_url}`}*/}
      {/*  className={styles.change_country_block_item}*/}
      {/*  onMouseEnter={() => action(content.name)}*/}
      {/*  onMouseOut={() => action('')}*/}
      {/*>*/}
      {/*  <div*/}
      {/*    className={`${styles.change_country_block_item_first_block} ${active ? styles.active : '' }`}*/}
      {/*    style={{backgroundImage: `url(${content?.map_icon})`}}*/}
      {/*  >*/}
      {/*  </div>*/}
      {/*  <div className={`${styles.change_country_block_item_first_block_title} ${active ? styles.active : ''}`}>*/}
      {/*    {content.name}*/}
      {/*  </div>*/}
      {/*</Link>*/}

      <Link
        to={`${content.public_url}`}
        className={styles.region_wrapper}
        onMouseEnter={() => action(content.name)}
        onMouseOut={() => action('')}
      >
        <img src={content?.map_icon} alt="" className={`${styles.region_icon} ${active ? styles.active : '' }`}/>
        <div className={`${styles.region_title} ${active ? styles.active : ''}`}>
          {content.name}
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
)(Region)