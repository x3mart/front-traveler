import React from 'react'
import styles from './CardTour.module.css'
import cn from 'classnames'
import Tag from '../Tag/Tag'
import Htag from '../Htag/Htag'
import starIcon from '../../assets/img/Star.svg'
import likeIcon from '../../assets/img/Like.svg'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

const CardTour = ({
                    language,
                    block_style,
                    block_width,
                    children,
                    className,
                  }) => {
  return (
    <div
      className={cn(styles.card_tour, className, {
        [styles.card_tour]: block_style == 'card_tour',
        [styles.card_tour_border]: block_style == 'card_tour_border',
        [styles.block_width_travel_page]:
        block_width == 'block_width_travel_page',
        [styles.display_none]: block_width == 'display_none',
      })}
    >
      {children}
      <Tag size='b'>
        <Link to={`/${language}/tour/detail-tour`}>
          <div className={styles.card_tour_image}>
            <img src={likeIcon} alt=''/>
          </div>
        </Link>
        <div className={styles.card_tour_content}>
          <div className={styles.card_tour_content_place_info}>
            <Htag tag='h4'>Вьетнам</Htag>
            <Link to={`/${language}/tour/detail-tour`}>
              <Htag className={styles.link_pointer} tag='h3'>
                Неизведанные места и тропы
              </Htag>
            </Link>
          </div>
          <div className={styles.card_tour_content_guide_info}>
            <div className={styles.card_tour_content_guide_info_name}>
              <Link to={`/${language}/expert`}>
                <div className={styles.card_tour_content_guide_info_name_avatar}/>
              </Link>
              <div className={styles.card_tour_content_guide_info_name_raiting}>
                <Htag tag='h4'>
                  <Link to={`/${language}/expert`}>Мария</Link>
                </Htag>
                <Htag tag='h4'>
                  <img src={starIcon} alt=''/>
                  <span className={styles.raiting_star}>4.9</span>
                  (132)
                </Htag>
              </div>
            </div>
            <div className={styles.card_tour_content_guide_info_cost}>
              <Htag tag='h4'>7 дн. (21 - 28 мар)</Htag>
              <Htag tag='h3'>
                от 80.000 <span>{'\u20bd'}</span>
              </Htag>
            </div>
          </div>
        </div>
      </Tag>
    </div>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
})

export default connect(mapStateToProps)(CardTour)
