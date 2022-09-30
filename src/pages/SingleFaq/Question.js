import React from 'react';
import styles from './SingleFaq.module.css';
import {connect} from 'react-redux';

const Question = ({data}) => {
  return (
    <>
      <div className={styles.faq_page_question}>
        <div className={styles.faq_page_question_title}>
          {data?.question}
        </div>
        <div className={styles.faq_page_question_answer} dangerouslySetInnerHTML={{__html: data?.answer}}/>
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Question)