import React from 'react'
import styles from './Input.module.css';
// import { BlockCalendar } from '../../components';
import cn from 'classnames';

const Input = ({ className, choice, ...props }) => {    
    return (
        <div className={styles.input}>
            <input className={cn(className, styles.input, {
                [styles.place]: choice == 'place',
                [styles.calendar]: choice == 'calendar',
            })} {...props}/>
            
        </div>
    );
};

export default Input