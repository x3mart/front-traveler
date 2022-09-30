import React from 'react';
import styles from './Leader.module.css';
import {connect} from 'react-redux';
import Section from "../../components/Section";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Breadcrumbs from "../../components/Breadcrumbs";
import time from './img/time.svg'
import chat from './img/chat.svg'
import docs from './img/docs.svg'
import phone from './img/phone.svg'
import mail from './img/mail.svg'
import Button from "../../components/AccountTours/Components/Button";
import {add_chat_room} from "../../redux/actions/chatActions";
import {useHistory} from "react-router-dom";

const LeaderSection = ({language, expert, add_chat_room, isAuthenticated}) => {

  const history = useHistory()

  const {
    id,
    about,
    avatar,
    first_name,
    last_name,
    last_visit,
    docs_confirmed,
    email_confirmed,
    phone_confirmed,
    registration_date,
    reviews_count,
  } = expert

  const handleExpertChat = () => {
    add_chat_room(id)
    history.push(isAuthenticated ? '/' + language + '/account/chat' : '/' + language + '/login/chat')
  }

  return (
    <>
      <Section background={'#ffffff'}>
        <Breadcrumbs>
          <Breadcrumb
            link="/"
          >
            Главная
          </Breadcrumb>
          <Breadcrumb>
            {`Эксперт ${first_name} ${last_name}`}
          </Breadcrumb>

        </Breadcrumbs>

        <div className="wrapper">
          <div className={styles.leader_wrapper}>
            <div className={styles.leader_left_section}>
              <img src={avatar} alt="avatar"/>
              {registration_date ? 'Зарегистрирован ' + registration_date : ''}
            </div>
            <div className={styles.leader_main}>
              {last_visit && <div className={styles.leader_last_visit}>
                {last_visit ? 'Был(а) на сайте ' + last_visit : ''}
              </div>}
              <div className={styles.leader_header}>
                {`Привет! Меня зовут ${first_name}`}
              </div>
              <div dangerouslySetInnerHTML={{__html: about}}/>
            </div>
            <div className={styles.leader_right_section}>
              <Button
                color={'button-orange'}
                small={true}
                width={'100%'}
                margin={'0 0 30px 0'}
                text={'Написать в чат'}
                action={handleExpertChat}
              />
              <div className={styles.leader_data}>
                <div className={styles.leader_data_image_text}>
                  <img src={time} alt=""/>
                  Среднее время ответа:
                </div>
                <div>
                  <span>2ч.</span>
                </div>
              </div>
              <div className={styles.leader_data}>
                <div className={styles.leader_data_image_text}>
                  <img src={chat} alt=""/>
                  Отзывов туристов:
                </div>
                <div>
                  <span>{reviews_count}</span>
                </div>
              </div>

              <div className={styles.leader_approved}>
                {`${first_name} подтвердил:`}
                <div className={`${styles.leader_approved_image_text} ${docs_confirmed ? styles.approved : ''}`}>
                  <div className={styles.leader_approved_image}>
                    <svg width="22" height="24" viewBox="0 0 22 24" fill={`${docs_confirmed ? "#84BB59" : "black"}`} fillOpacity={`${docs_confirmed ? "1" : "0.25"}`} xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5781 24H4.625C2.55719 24 0.875 22.3178 0.875 20.25V7.54688C0.875 5.47906 2.55719 3.79688 4.625 3.79688H13.5781C15.6459 3.79688 17.3281 5.47906 17.3281 7.54688V20.25C17.3281 22.3178 15.6459 24 13.5781 24ZM4.625 5.67188C3.59119 5.67188 2.75 6.51306 2.75 7.54688V20.25C2.75 21.2838 3.59119 22.125 4.625 22.125H13.5781C14.6119 22.125 15.4531 21.2838 15.4531 20.25V7.54688C15.4531 6.51306 14.6119 5.67188 13.5781 5.67188H4.625ZM21.0781 17.9062V3.75C21.0781 1.68219 19.3959 0 17.3281 0H6.92188C6.40405 0 5.98438 0.419678 5.98438 0.9375C5.98438 1.45532 6.40405 1.875 6.92188 1.875H17.3281C18.3619 1.875 19.2031 2.71619 19.2031 3.75V17.9062C19.2031 18.4241 19.6228 18.8438 20.1406 18.8438C20.6584 18.8438 21.0781 18.4241 21.0781 17.9062Z"/>
                    </svg>
                  </div>
                  Документы
                </div>
                <div className={`${styles.leader_approved_image_text} ${phone_confirmed ? styles.approved : ''}`}>
                  <div className={styles.leader_approved_image}>
                    <svg width="16" height="24" viewBox="0 0 16 24" fill={`${phone_confirmed ? "#84BB59" : "black"}`} fillOpacity={`${phone_confirmed ? "1" : "0.25"}`} xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.1536 0H2.84673C1.55302 0 0.500488 1.05249 0.500488 2.34624V21.6538C0.500488 22.9475 1.55297 24 2.84673 24H13.1535C14.4472 24 15.4998 22.9476 15.4998 21.6538V2.34624C15.4999 1.05249 14.4473 0 13.1536 0ZM5.30172 1.40705H10.6429V2.11664H5.30172V1.40705ZM13.1536 22.593H2.84673C2.32885 22.593 1.90754 22.1716 1.90754 21.6538V2.34624C1.90754 1.82836 2.32885 1.40705 2.84673 1.40705H3.89467V2.29318C3.89467 2.97169 4.44667 3.52369 5.12514 3.52369H10.8195C11.4979 3.52369 12.05 2.97165 12.05 2.29318V1.40705H13.1536C13.6715 1.40705 14.0928 1.82836 14.0928 2.34624V21.6538H14.0928C14.0928 22.1716 13.6715 22.593 13.1536 22.593Z"/>
                    </svg>
                  </div>
                  Номер телефона
                </div>
                <div className={`${styles.leader_approved_image_text} ${email_confirmed ? styles.approved : ''}`}>
                  <div className={styles.leader_approved_image}>
                    <svg width="22" height="24" viewBox="0 0 22 24" fill={`${email_confirmed ? "#84BB59" : "black"}`} fillOpacity={`${email_confirmed ? "1" : "0.25"}`} xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.5468 9.23325C21.5466 9.05142 21.4734 8.86969 21.3409 8.73717L18.7344 6.13064V0.703125C18.7344 0.314812 18.4196 0 18.0312 0H3.96875C3.58044 0 3.26562 0.314812 3.26562 0.703125V6.13064L0.659094 8.73717C0.656656 8.73961 0.654594 8.74233 0.652203 8.74481C0.520438 8.88056 0.453453 9.0593 0.453172 9.23325C0.453172 9.23372 0.453125 9.23414 0.453125 9.23461V21.8906C0.453125 23.0552 1.40075 24 2.5625 24H19.4375C20.6018 24 21.5469 23.0528 21.5469 21.8906V9.23461C21.5469 9.23414 21.5468 9.23372 21.5468 9.23325ZM18.7344 8.11936L19.8494 9.23438L18.7344 10.3494V8.11936ZM4.67188 6.42211C4.67188 6.42197 4.67188 6.42178 4.67188 6.42164V1.40625H17.3281V6.42164C17.3281 6.42178 17.3281 6.42197 17.3281 6.42211V11.7556L13.5213 15.5625H8.47873L4.67188 11.7556V6.42211ZM3.26562 8.11936V10.3494L2.15061 9.23438L3.26562 8.11936ZM1.85938 21.5994V10.9319L7.19314 16.2656L1.85938 21.5994ZM2.85378 22.5938L8.47873 16.9688H13.5213L19.1462 22.5938H2.85378ZM20.1406 21.5994L14.8069 16.2656L20.1406 10.9319V21.5994Z"/>
                    </svg>
                  </div>
                  Личный e-mail
                </div>
              </div>

            </div>
          </div>
        </div>

      </Section>
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  language: state.languages.language,
})
const mapDispatchToProps = {add_chat_room}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeaderSection)