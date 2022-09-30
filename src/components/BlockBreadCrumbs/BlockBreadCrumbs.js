import React, { useState, useEffect } from 'react'
import styles from './BlockBreadCrumbs.module.css';
import cn from 'classnames';
import Breadcrumbs from 'nextjs-breadcrumbs';

const BlockBreadCrumbs = ({ block_style, children, margin, className}) => { 
    const [viewdBlock, setViewdBlock] = useState('')  
    useEffect(() => {
      if (block_style === 'viewed_block') {
        setViewdBlock(styles.viewed_block)
      }
      if (block_style === 'margin_first') {
        setViewdBlock(styles.margin_first)
      }
      if (block_style === 'margin_second') {
        setViewdBlock(styles.margin_second)
      }
    }, [block_style])

    return (
      <div className={viewdBlock}>
        <div className={styles.wrapper}>
          {children}
          {/* <div className={styles.breadcrumb_main} {...props}>Главная </div>
                    <div>&nbsp;-&nbsp;Путешествия</div> */}
          <Breadcrumbs useDefaultStyle rootLabel='Главная' />
        </div>
      </div>
    )
};

export default BlockBreadCrumbs
