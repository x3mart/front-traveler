import React from 'react'
import styles from './CardFeedback.module.css';
import cn from 'classnames';
import Tag from '../Tag/Tag'
import Htag from '../Htag/Htag'
import Button from '../Button/Button'
// import MountainIcon from '/public/mountain.svg';
    


const CardFeedback = ({ block_style, children, className, ...props }) => {    
    return (
      <div
        className={cn(styles.card_feedback, className, {
          [styles.card_tour]: block_style == 'card_tour',
        })}
        {...props}
      >
        {children}
        <Tag size='feedback'>
          <div className={styles.card_feedback_image}>
            {/* <MountainIcon className={styles.card_feedback_mounticon} /> */}
          </div>
          <Htag tag='h2'>Давид Исмаилов</Htag>
          <Htag tag='h4'>
            Маршрут «Аиды Дивы» построен по уму: день в море сразу после старта,
            и день в море перед финишем. Так как возможных точек старта и финиша
            было две (Ла-Романа и Монтего-Бэй), то и дней в море,
            соответственно, было четыре ...
          </Htag>
          <Button appearance='ghost'>Читать полностью</Button>
        </Tag>
      </div>
    )
};

export default CardFeedback