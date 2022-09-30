import React, { useState, useEffect } from 'react'
import styles from './BlockAdvantage.module.css'
import cn from 'classnames'
import InfoBlock from '../InfoBlock/InfoBlock'
import Htag from '../Htag/Htag'
import LockIconBig from '../../assets/img/lock-big.svg'
import SmileIconBig from '../../assets/img/smile-big.svg'
import UserIconBig from '../../assets/img/user-big.svg'
import DefendIconBig from '../../assets/img/Defend.svg'
import Section from "../Section";
import Title from "../Title";
import CardCollection from "../CardCollection/CardCollection";

const BlockAdvantage = ({ block_style, children, className }) => {

  return (

    <>
      <Section padding={'30px 0 0 0'}>
        <Title title={'Traveler.market - Мы работаем для вас'} sub_title={`Основные принципы нашей работы`} border_color={'blue'}/>
        <div className={styles.advantage_block}>
          <div className={styles.advantage_block_item}>
            <img src={LockIconBig} alt=""/>
            <Htag tag='h2'>Безопасная оплата</Htag>
            <Htag tag='h4'>
              Бронируйте туры через нашу надежную платежную систему
            </Htag>
          </div>
          <div className={styles.advantage_block_item}>
            <img src={SmileIconBig} alt=""/>
            <Htag tag='h2'>Продуманная спонтанность</Htag>
            <Htag tag='h4'>
              Маршруты могут адаптироваться под пожелания группы
            </Htag>
          </div>
          <div className={styles.advantage_block_item}>
            <img src={UserIconBig} alt=""/>
            <Htag tag='h2'>Проверенные тревел-эксперты</Htag>
            <Htag tag='h4'>
              В нашей базе 3 452 гида, которые прошли тщательный отбор
            </Htag>
          </div>
          <div className={styles.advantage_block_item}>
            <img src={DefendIconBig} alt=""/>
            <Htag tag='h2'>Гарантированные туры</Htag>
            <Htag tag='h4'>
              У нас вы найдете более 11 534 туров с гарантированным отправлением
            </Htag>
          </div>
        </div>
        <div className={styles.advantage_block_item_info}>
          <Htag tag='h4'>
            Traveler.market — это маркетплейс авторских туров от
            тревел-экспертов и частных независимых гидов. Авторские туры — это
            спонтанные и яркие <br /> возможности, предлагающие взять максимум
            от каждой точки маршрута. Мы за непринужденный подход к групповым
            путешествиям, который больше <br /> похож на встречу со старыми
            друзьями.
          </Htag>
        </div>
      </Section>
    </>

  )
}

export default BlockAdvantage
