import React, {useState} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';

const FilterButton = ({data, action}) => {

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(active => !active)
    action(data.status)
  }

  return (
    <>
      <button className={`${styles.filter_button} ${active ? styles.active : ''}`} onClick={handleClick}>
        {data.title}
      </button>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButton)