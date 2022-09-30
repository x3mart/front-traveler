import React from 'react';
import styles from './SingleFaq.module.css'
import {connect} from 'react-redux';
import Category from "./Category";

const Categories = ({action, category, categories}) => {
  return (
    <>
      <div className={styles.faq_page_categories}>
        {categories?.map((item, index) => <Category key={index} data={item} active={item.id == category} action={action}/>)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories)