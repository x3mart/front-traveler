import React from 'react';
import styles from './Advantages.module.css';
import {connect} from 'react-redux';
import Htag from "../../../components/Htag/Htag";

const Advantages = ({data}) => {
  return (
    <>
      <div className={styles.advantage_block}>
        {data?.data?.map((item, index) => (
          <div key={index} className={styles.advantage_block_item}>
            <img src={item.icon} alt=""/>
            <Htag tag='h2'>{item.title}</Htag>
            <Htag tag='h4'>
              {item.text}
            </Htag>
          </div>
        ))}
      </div>
      <div className={styles.advantage_block_item_info}>
        <Htag tag='h4'>{data.description}</Htag>
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Advantages)