import React from 'react';
import styles from './History.module.css';
import {connect} from 'react-redux';
import HistoryCard from "./HistoryCard";

const HistorySet = ({history}) => {
  return (
    <>
      <div className={styles.history_wrapper}>
        {history?.map((item, index) => <HistoryCard key={index} data={item}/>)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistorySet)