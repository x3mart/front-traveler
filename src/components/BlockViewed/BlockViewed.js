import React from 'react'
import styles from './BlockViewed.module.css'
import cn from 'classnames'
import InfoBlock from '../InfoBlock/InfoBlock'
import Htag from '../Htag/Htag'
import CardCollection from '../CardCollection/CardCollection'

const BlockViewed = ({ block_style}) => {
  return (
    <div
      className={styles.block_viewed + ' ' + styles[block_style]}
    >
      <div className={styles.wrapper}>
        {/* {children} */}
        <InfoBlock border_color='orange'>
          <Htag tag='h2'>Недавно просмотренные туры</Htag>
          <Htag tag='h4'>
            Мы сохранили для вас недавно просмотренные вами туры, возможно вы
            захотите к ним вернуться и выбрать один из них
          </Htag>
        </InfoBlock>
        <CardCollection name_block='viewed' />
      </div>
    </div>
  )
}

export default BlockViewed
