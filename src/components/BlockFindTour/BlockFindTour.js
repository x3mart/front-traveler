import React from 'react'
import styles from './BlockFindTour.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock'
import Htag from '../Htag/Htag'
import FormGetTour from '../FormGetTour/FormGetTour'

const BlockFindTour = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={ cn(styles.block_viewed, className, {
                [styles.viewed_block]: block_style == 'viewed_block', 
            })}
            {...props}
        >
            
            <div className={styles.wrapper} {...props}>
                {children}
                <div className={styles.findtour_block} {...props}>
                    <InfoBlock border_color='white_left_border'>
                        <Htag tag='h2'>
                            Подобрать тур 
                        </Htag>
                        <Htag tag='h4'>
                            Мы подберем только лучшее
                        </Htag>
                    </InfoBlock>
                    <FormGetTour form_style='second_form_get_tour' />  
                </div>
            </div> 
            
        </div>
    );
};

export default BlockFindTour
