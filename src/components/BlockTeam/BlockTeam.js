import React from 'react'
import styles from './BlockTeam.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock';
import Htag from '../Htag/Htag';
import CardCollection from '../CardCollection/CardCollection';

const BlockTeam = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={ cn(styles.block_viewed, className, {
                [styles.viewed_block]: block_style == 'viewed_block',
            })}
            {...props}
        >
            
            <div className={styles.wrapper} {...props}>
                {children}
                    <InfoBlock border_color='blue_left_border'>
                        <Htag tag='h2'>
                            Команда
                        </Htag>
                        <Htag tag='h4'>
                            Познакомьтесь с дружной командой. Эти ребята сделают ваше путешествие незабываемым! 
                        </Htag>
                    </InfoBlock>                     
            </div> 
            <CardCollection name_block='about_expert'/>
        </div>
    );
};

export default BlockTeam