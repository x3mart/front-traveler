import React from 'react'
import styles from './CardCollection.module.css';
import cn from 'classnames';
import CardTour from '../CardTour/CardTour';
import CardCountryTour from '../CardCountryTour/CardCountryTour';
import CardTourLarge from '../CardTourLarge/CardTourLarge';
import CardTypeTour from '../CardTypeTour/CardTypeTour';
import CardExpert from '../CardExpert/CardExpert';
import Rating from '../Rating/Rating';
import Sale from '../Sale/Sale';
import CardFeedback from '../CardFeedback/CardFeedback';
import CardAboutExpert from '../CardAboutExpert/CardAboutExpert';
import ArrowIconLeft from '../../assets/img/left_arrow.svg';
import ArrowIconRight from '../../assets/img/right_arrow.svg';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

const CardCollection = ({language, name_block, data, children}) => {
  switch (name_block) {
    case 'viewed':
      return (
        <div className={styles.card_collection}>
          <div className={styles.card_tour_arrow_left}>
            <img src={ArrowIconLeft} alt=''/>
          </div>
          <div className={styles.card_tour_arrow_right}>
            <img src={ArrowIconRight} alt=''/>
          </div>
          {children}
          <CardTour/>
          <CardTour/>
          <CardTour/>
        </div>
      )
    case 'popular':
      return <div
        className={styles.card_collection_popular}
      >
        {data?.map((item, index) => <CardCountryTour key={index} data={item}/>)}
      </div>;
    case 'personal':
      return (
        <div className={styles.card_collection}>
          {children}
          <div className={styles.card_personal_arrow_left}>
            <img src={ArrowIconLeft} alt="arrow"/>
          </div>
          <div className={styles.card_personal_arrow_right}>
            <img src={ArrowIconRight} alt="arrow"/>
          </div>
          <CardTourLarge/>
          <CardTour/>
        </div>
      )
    case 'new':
      return <h4 className={styles.h4}>{children}</h4>;
    case 'type':
      return <div
        className={styles.card_collection_type}
      >
        {data?.map((item, index) => <CardTypeTour key={index} data={item}/>)}
      </div>;
    case 'rating':
      return <div
        className={styles.card_collection}
      >
        <div className={styles.card_tour_arrow_left}><img src={ArrowIconLeft} alt="arrow"/></div>
        <div className={styles.card_tour_arrow_right}><img src={ArrowIconRight} alt="arrow"/></div>
        {children}
        <CardTour block_style='card_tour_border'><Rating/></CardTour>
        <CardTour block_style='card_tour_border'><Rating/></CardTour>
        <CardTour block_style='card_tour_border'><Rating/></CardTour>
      </div>;
    case 'experts':
      return <div
        className={styles.card_collection_experts}
      >
        <div className={styles.card_collection_experts_block}>
          <div className={styles.card_expert_arrow_left}><img src={ArrowIconLeft} alt="arrow"/></div>
          <div className={styles.card_expert_arrow_right}><img src={ArrowIconRight} alt="arrow"/></div>
          {children}
          <CardExpert/>
          <CardExpert/>
          <CardExpert/>
          <CardExpert/>
        </div>
      </div>;
    case 'sales':
      return <div
        className={styles.card_collection}
      >
        <div className={styles.card_tour_arrow_left}><img src={ArrowIconLeft} alt="arrow"/></div>
        <div className={styles.card_tour_arrow_right}><img src={ArrowIconRight} alt="arrow"/></div>
        {children}
        <CardTour block_style='card_tour_border'>
          <Sale/>
          <div className={styles.sale_cost_block}>
            <span className={styles.sale_cost}>89.000 <span className={styles.sale_cost_rub}>{'\u20bd'}</span></span>
          </div>
        </CardTour>
        <CardTour block_style='card_tour_border'>
          <Sale/>
          <div className={styles.sale_cost_block}>
            <span className={styles.sale_cost}>89.000 <span className={styles.sale_cost_rub}>{'\u20bd'}</span></span>
          </div>
        </CardTour>
        <CardTour block_style='card_tour_border'>
          <Sale/>
          <div className={styles.sale_cost_block}>
            <span className={styles.sale_cost}>89.000 <span className={styles.sale_cost_rub}>{'\u20bd'}</span></span>
          </div>
        </CardTour>
      </div>;
    case 'feedback':
      return <div
        className={styles.card_feedback}
      >
        <div className={styles.card_feedback_arrow_left}>{ArrowIconLeft}</div>
        <div className={styles.card_feedback_arrow_right}>{ArrowIconRight}</div>
        {children}
        <CardFeedback/>
        <CardFeedback/>
      </div>;
    case 'tour-page':
      return <div
        className={styles.tour_page}
      >
        <Link to={`/${language}/tour/detail-tour/`}>
          <CardTour block_width="block_width_travel_page" block_style='card_tour_border'
                    className={styles.tour_page_card}/>
        </Link>
        <CardTour block_width="block_width_travel_page" block_style='card_tour_border'
                  className={styles.tour_page_card}/>
        <CardTour block_width="block_width_travel_page" block_style='card_tour_border'
                  className={styles.tour_page_card}/>
        <CardTour block_width="block_width_travel_page" block_style='card_tour_border'
                  className={styles.tour_page_card}/>
        <CardTour block_width="block_width_travel_page" block_style='card_tour_border'
                  className={styles.tour_page_card}/>
        <CardTour block_width="block_width_travel_page" block_style='card_tour_border'
                  className={styles.tour_page_card}/>
        <CardTour block_width="block_width_travel_page" block_style='card_tour_border'
                  className={styles.tour_page_card}/>
        <CardTour block_width="block_width_travel_page" block_style='card_tour_border'
                  className={styles.tour_page_card}/>
        <CardTour block_width="block_width_travel_page" block_style='card_tour_border'
                  className={styles.tour_page_card}/>
        <CardTour block_width="block_width_travel_page" block_style='card_tour_border'
                  className={styles.tour_page_card}/>
        <CardTour block_width="display_none" block_style='card_tour_border' className={styles.tour_page_card}/>
        <CardTour block_width="display_none" block_style='card_tour_border' className={styles.tour_page_card}/>
        <CardTour block_width="display_none" block_style='card_tour_border' className={styles.tour_page_card}/>
        <CardTour block_width="display_none" block_style='card_tour_border' className={styles.tour_page_card}/>
        <CardTour block_width="display_none" block_style='card_tour_border' className={styles.tour_page_card}/>
      </div>;
    case 'about_expert':
      return <div
        className={styles.about_expert_block}
      >
        <div className={styles.card_about_expert_arrow_left}>{ArrowIconLeft}</div>
        <div className={styles.card_about_expert_arrow_right}>{ArrowIconRight}</div>
        {children}
        <div className={styles.card_collection_expert_card_hidden_left}></div>
        <CardAboutExpert className={styles.card_collection_expert_card_hidden}/>
        <CardAboutExpert/>
        <CardAboutExpert/>
        <CardAboutExpert/>
        <CardAboutExpert/>
        <CardAboutExpert className={styles.card_collection_expert_card_hidden}/>
        <div className={styles.card_collection_expert_card_hidden_right}></div>
      </div>;
    default:
      return <></>;
  }
};

const mapStateToProps = state => ({
  language: state.languages.language,
})

export default connect(mapStateToProps)(CardCollection)