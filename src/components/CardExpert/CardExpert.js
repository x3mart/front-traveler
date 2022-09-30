import React from 'react'
import styles from './CardExpert.module.css';
import cn from 'classnames';
import Tag from '../Tag/Tag'
import Htag from '../Htag/Htag'
import StarBigIcon from '../../assets/img/star-big.svg';
    


const CardExpert = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={ cn(styles.card_expert, className, {
                [styles.card_tour]: block_style == 'card_tour',
            })}
            {...props}
            
        >    
                  
            {children}
            <Tag size='t'>
                <div className={styles.card_expert_image}>
                    
                </div>
                <Htag tag='h3' className={styles.card_expert_name}>Мария Антонова</Htag>
                <div className={styles.card_expert_content}>
                    <div className={styles.card_expert_content_place_info}>
                        <Htag className={styles.card_expert_rating} tag='h4'>Рейтинг:</Htag>
                        <Htag className={styles.card_expert_feedback} tag='h4'>Отзывы:</Htag>
                        <Htag className={styles.card_expert_active_tours} tag='h4'>Активных туров:</Htag>
                    </div>
                    <div className={styles.card_expert_content_guide_info}>
                        <Htag tag='h4' className={styles.card_expert_rating_num}><img src={StarBigIcon} alt=""/> 5.0</Htag>
                        <Htag tag='h4' className={styles.card_expert_feedback_num}>211 отзывов</Htag>
                        <Htag tag='h4' className={styles.card_expert_active_tours_num}>31 тур</Htag>
                    </div>
                </div>
            </Tag>     
             
        </div>
    );
};

export default CardExpert