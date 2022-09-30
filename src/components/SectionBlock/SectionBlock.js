import React from 'react'
import styles from './SectionBlock.module.css';
import cn from 'classnames';

const SectionBlock = ({ block_style, children, className }) => {    
    return (
        <section
            className={ cn(styles.section_flex, className, {
                [styles.section_block]: block_style == 'section_block',
            })}
        >
            {children}
            
        </section>
    );
};

export default SectionBlock
