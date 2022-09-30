import React from 'react'
import styles from './BlockNewTour.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock'
import Htag from '../Htag/Htag'
import CardCollection from '../CardCollection/CardCollection'

const BlockNewTour = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={ cn(styles.block_viewed, className, {
                [styles.viewed_block]: block_style == 'viewed_block',
            })}
            {...props}
        >
            
            <div className={styles.wrapper} {...props}>
                {children}
                    <InfoBlock border_color='orange_left_border'>
                        <Htag tag='h2'>
                            Новинки
                        </Htag>
                        <Htag tag='h4'>
                            Все самое новое от наших тревел-экспертов
                        </Htag>
                    </InfoBlock> 
                    <CardCollection name_block='viewed' />
            </div> 
            
        </div>
    );
};

export default BlockNewTour
