import React from 'react';
import styles from './Faq.module.css';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const SingleFaq = ({data, language}) => {
  return (
    <>
      <div className={styles.card_wrapper}>
        <div className={styles.card_header}>{data?.title}</div>
        <div className={styles.card_body}>
          <ul>
            {data?.faqs?.map((item, index) => (
              <li key={index}><Link to={`/faqs/${data.id}/${item.id}`}>{item?.question}</Link></li>
            ))}
          </ul>
        </div>
        <div className={styles.card_all}>
          <Link to={`/faqs/${data.id}`}>Все вопросы</Link>
        </div>
      </div>
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
)(SingleFaq)