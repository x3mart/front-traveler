import React from 'react'
import styles from './Rating.module.css';
import cn from 'classnames';
import Htag from '../Htag/Htag'

const Rating = ({ position, children, ...props }) => {
  return (
    <div
        className={ cn(styles.rating, {
          [styles.left]: position == 'left',
          [styles.right]: position == 'right',
        })}
        {...props}
    >  
        {children}
        <Htag tag='h4'>5.0</Htag>
        <Htag tag='h3'>RATING</Htag>
    </div>
  );
    
};

export default Rating
