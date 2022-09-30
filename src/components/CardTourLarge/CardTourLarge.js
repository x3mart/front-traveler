import React from 'react'
import styles from './CardTourLarge.module.css';
import cn from 'classnames';
import Tag from '../Tag/Tag'
import Htag from '../Htag/Htag'
import starIcon from '../../assets/img/Star.svg';
import likeIcon from '../../assets/img/Like.svg'
    


const CardTourLarge = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={styles.card_tour + ' ' + styles[block_style]}
        >    
                  
            {children}
            <Tag size='l'>
                <div className={styles.card_tour_image}>
                    <img src={likeIcon} alt="Like"/>
                </div>
                <div className={styles.card_tour_content}>
                    <div className={styles.card_tour_content_place_info}>
                        <Htag tag='h4'>Армения</Htag>
                        <Htag tag='h3'>По горам на велосипеде</Htag>
                    </div>
                    <div className={styles.card_tour_content_guide_info}>
                        <div className={styles.card_tour_content_guide_info_name}>
                            <div className={styles.card_tour_content_guide_info_name_avatar}>

                            </div>
                            <div className={styles.card_tour_content_guide_info_name_raiting}>
                                <Htag tag='h4'>Мария</Htag>
                                <Htag tag='h4'>
                                    <img src={starIcon} alt=""/>
                                    <span className={styles.raiting_star}>4.9</span>
                                    (132)  
                                </Htag>
                            </div>
                        </div>
                        <div className={styles.card_tour_content_guide_info_cost}>
                            <Htag tag='h4'>7 дн. (21 - 28 мар)</Htag> 
                            <Htag tag='h3'>от 80.000 <span>{'\u20bd'}</span></Htag>
                        </div>
                    </div>
                </div>
            </Tag>     
             
        </div>
    );
};

export default CardTourLarge
