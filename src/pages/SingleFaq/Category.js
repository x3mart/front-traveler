import React, {useState} from 'react';
import styles from './SingleFaq.module.css'
import {connect} from 'react-redux';
import down from './img/arrow_down.svg'
import up from './img/arrow_up.svg'
import {Link} from "react-router-dom";

const Category = ({data, language, active, action}) => {

  // const [active, setActive] = useState(false)


  return (
    <>
      <div className={styles.faq_page_category}>
        <Link to={`/${language}/faqs/${data?.id}`} className={styles.faq_page_category_title}>
          <div className={styles.faq_page_category_title_title}>
            {data.title}
          </div>
          {active ? <img src={up} alt="up"/> : <img src={down} alt="down"/>}
        </Link>
        {active && (
          <>
            <div className={styles.faq_page_category_body}>
              <ul>
                {data?.faqs?.map((item, index) => (
                  <li key={index}>
                    <Link to={`/${language}/faqs/${data?.id}/${item.id}`} onClick={() => action(item)}>
                      {item?.question}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

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
)(Category)