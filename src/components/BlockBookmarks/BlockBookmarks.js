import React, { useState, useEffect } from 'react'
import styles from './BlockBookmarks.module.css'
import cn from 'classnames'

const BlockBookmarks = ({ block_style, children, className }) => {
  const [viewdBlock, setViewdBlock] = useState('')

  useEffect(() => {
    if (block_style === 'viewed_block') {
      setViewdBlock(styles.viewed_block)
    }
  }, [block_style])

  return (
    <div className={viewdBlock}>
      <div className={styles.wrapper}>
        {children}
        <div className={styles.bookmarks_block}>
          <div
            className={
              (styles.bookmarks_block_item, styles.bookmarks_block_item_active)
            }
          >
            Обзор
          </div>
          <div className={styles.bookmarks_block_item}>Галерея</div>
          <div className={styles.bookmarks_block_item}>Маршрут</div>
          <div className={styles.bookmarks_block_item}>Проживание</div>
          <div className={styles.bookmarks_block_item}>Что включено</div>
          <div className={styles.bookmarks_block_item}>Тревел-Эксперт</div>
          <div className={styles.bookmarks_block_item}>Отзывы</div>
        </div>
      </div>
    </div>
  )
}

export default BlockBookmarks
