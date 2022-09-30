import React from 'react';
import styles from './Leader.module.css';
import {connect} from 'react-redux';
import {truncateText} from "../../functions";

const TeamCard = ({team}) => {

  return (
    <>
      <div className={styles.team_card}>
        <div className={styles.team_card_top}>
          <div className={styles.team_card_avatar} style={{backgroundImage: 'url(' + team?.avatar + ')'}}/>
          <div className={styles.team_card_name}>
            {team?.full_name}
          </div>
        </div>
        <div className={styles.team_card_bottom}>
          {truncateText(team?.about, 175)}
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
)(TeamCard)