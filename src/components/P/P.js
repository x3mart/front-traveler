import React, { useState, useEffect } from 'react'
import styles from './P.module.css';
import cn from 'classnames';

const P = ({ color, link, href, children, className }) => {  
    
    const [pColor, setPColor] = useState({})
    const [pLink, setPLink] = useState({})

    useEffect(() => {
      if (color === 'p_footer') {
        setPColor(styles.p_footer)
      }
    }, [color])

    useEffect(() => {
      if (link === 'p_footer_link') {
        setPLink(styles.p_footer_link)
      } else if (link === 'p_footer_link_col_2') {
        setPLink(styles.p_footer_link_col_2)
      } else if (link === 'p_footer_letter_spacing') {
        setPLink(styles.p_footer_letter_spacing)
      } else if (link === 'p_footer_letter_spacing_margin_top') {
        setPLink(styles.p_footer_letter_spacing_margin_top)
      } 
    }, [link])
    
    return (
        <p
            className={ [pColor, pLink]}
        >{
            href
                ? <a href={href}>{children}</a>
                : <>{children}</>
        }    
        </p>
    );
}

export default P