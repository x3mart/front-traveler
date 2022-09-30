import React from 'react'
import styles from './BlockFiltersTypeTour.module.css';
import cn from 'classnames';


const BlockFiltersTypeTour = ({ block_style, children, className, ...props }) => {     
    return (
        <div
            className={ cn(styles.block_viewed, className, {
                [styles.viewed_block]: block_style == 'viewed_block',
            })}
            {...props}
        >
            
            <div className={styles.wrapper} {...props}>
                {children}
                    <div className={styles.filter_item} {...props}>Тип в горы</div>
                    <div className={styles.filter_item} {...props}>Этнотур</div>
                    <div className={styles.filter_item} {...props}>Авто тур</div>
                    <div className={styles.filter_item} {...props}>Джип тур</div>
                    <div className={styles.filter_item} {...props}>Экскурсионный тур</div>
                    
                    
                    
                    
            </div> 
            
        </div>
    );
};

export default BlockFiltersTypeTour
