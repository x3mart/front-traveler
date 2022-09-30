import React from 'react'
import styles from './BlockFilters.module.css'
import cn from 'classnames'

const BlockFilters = ({ block_style, children, className, ...props }) => {
  return (
    <div
      className={cn(styles.block_viewed, className, {
        [styles.viewed_block]: block_style == 'viewed_block',
      })}
      {...props}
    >
      <div className={styles.wrapper} {...props}>
        {children}
        <div className={styles.filter_item} {...props}>
          Тип тура
        </div>
        <div className={styles.filter_item} {...props}>
          Язык группы
        </div>
        <div className={styles.filter_item} {...props}>
          Цена
        </div>
        <div className={styles.filter_item} {...props}>
          Туры с кешбеком
        </div>
        <div className={styles.filter_item} {...props}>
          Средний возраст группы
        </div>
        <div className={styles.filter_item} {...props}>
          Длительность (дни)
        </div>
        <div className={styles.filter_item} {...props}>
          Осталось мест
        </div>
        <div className={styles.filter_item} {...props}>
          Проживание
        </div>
        <div className={styles.filter_item} {...props}>
          Активность
        </div>
        <div className={styles.filter_item} {...props}>
          Рейтинг
        </div>
        <div className={styles.filter_item} {...props}>
          Гарантированные даты
        </div>
      </div>
    </div>
  )
}

export default BlockFilters
