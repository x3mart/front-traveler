import React from 'react'
import styles from './SectionFlex.module.css';
import cn from 'classnames';

const SectionFlex = ({ block_style, children, className, ...props }) => {    
    return (
        <section
            className={ cn(styles.section_flex, className, {
                [styles.section_flex]: block_style == 'section_flex', 
            })}
        >
            {children}
            
        </section>
    );
};

export default SectionFlex
