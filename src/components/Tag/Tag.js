import React from 'react'
import styles from './Tag.module.css';
import cn from 'classnames';

const Tag = ({ size, children, href, className, style, ...props }) => {
    return (
        <div
            className={ cn(styles.tag, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.b]: size == 'b',
                [styles.l]: size == 'l',
                [styles.t]: size == 't',
                [styles.feedback]: size == 'feedback',    
                [styles.about_expert]: size == 'about_expert',            
            })}
            style={style}
            {...props}
        >{
            href
                ? <a href={href}>{children}</a>
                : <>{children}</>
        }   
            
        </div>
    );
};

export default Tag
