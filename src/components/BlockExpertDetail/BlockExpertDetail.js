import React from 'react'
import styles from './BlockExpertDetail.module.css'
import cn from 'classnames'
import Htag from '../../components/'
import P from '../../components/'
import CardCollection  from '../../components/'
import ClockIcon from '../../public/clock_big.svg'
import ChatIcon from '../../public/chat.svg'
import DocIcon from '../../public/doc.svg'
import TelIcon from '../../public/tel.svg'
import MailIcon from '../../public/mail.svg'

const BlockExpertDetail = ({ block_style, children, className }) => {

  return (
    <div
      className={cn(styles.block_viewed, className, {
        [styles.viewed_block]: block_style == 'viewed_block',
      })}
    >
      <div className={styles.wrapper}>
        {children}
        <div className={styles.expert_detail_block}>
          <div className={styles.expert_detail_block_photo}>
            <div className={styles.expert_detail_block_photo_face}></div>
            <div className={styles.expert_detail_block_photo_reg}>
              Зарегистрирован 16 марта 2015г.
            </div>
          </div>
          <div className={styles.expert_detail_block_content}>
            <div className={styles.expert_detail_block_content_last_visit}>
              Был(а) на сайте вчера в 22:06
            </div>
            <div className={styles.expert_detail_block_content_last_visit}>
              <Htag tag='h2'>Здравствуйте, меня зовут Давид</Htag>
              <P>
                Эй! Ты готов к приключениям !!?? <br />
                Да-Да! Именно ПРИКЛЮЧЕНИЯМ!
                <br />С 2014 года наша команда выросла до 15 человек, а проект
                вырос до реальной компании-организатора приключений в стиле
                DiscoveryКаждое наше путешествие – взрывная смесь культуры
                страны, адреналина, сёрфинга и драйва. Подойдут тем, кто ищет не
                просто Авторский тур, а ПРИКЛЮЧЕНИЕ, которое будете прокручивать
                в голове как минимум до следующей поездки с нами! Все наши
                маршруты прошли неоднократную проверку, почитайте отзывы или
                задайте вопрос по любой мелочи :)
              </P>
              <P>
                Если ты такой же фанат новых впечатлений и криков «ВАУ!!
                Охренеть, вот это ....»– то просто выбирай страну, где ещё не
                был и поехали вместе!
              </P>{' '}
              <br />
              <span>развернуть</span>
            </div>
          </div>
          <div className={styles.expert_detail_block_contacts}>
            <div className={styles.expert_detail_block_contacts_button}>
              Написать в чат
            </div>
            <div className={styles.expert_detail_block_contacts_info}>
              <div className={styles.expert_detail_block_contacts_info_detail}>
                <ClockIcon />
                <p>Среднее время ответа:</p>
                <span>2ч.</span>
              </div>
              <div className={styles.expert_detail_block_contacts_info_detail}>
                <ChatIcon />
                <p>Отзывов туристов:</p>
                <span>210</span>
              </div>
              <div
                className={styles.expert_detail_block_contacts_info_detail_text}
              >
                Давид подтвердил:
              </div>
              <div className={styles.expert_detail_block_contacts_info_detail}>
                <DocIcon />
                <p>Документы</p>
              </div>
              <div className={styles.expert_detail_block_contacts_info_detail}>
                <TelIcon />
                <p>Номер телефона</p>
              </div>
              <div className={styles.expert_detail_block_contacts_info_detail}>
                <MailIcon />
                <p>Личный e-mail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockExpertDetail
