import React, {useEffect, useRef, useState} from 'react'
import Account from '../../../layouts/account/account'

import {connect} from 'react-redux'
import {
  setPage,
  update_user,
  clear_errors,
  update_avatar,
  delete_avatar,
  email_confirm_request,
  phone_confirm_request,
  phone_confirm,
  clear_confirm_status,
} from '../../../redux/actions/authActions'
import {getLanguages} from '../../../redux/actions/toursActions'
import {Link} from "react-router-dom";
import Input from "../../../components/AccountTours/FormFields/Input";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import ProfileInputWrapper from "../../../components/AccountProfile/Wrappers/ProfileInputWrapper";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import Button from "../../../components/AccountTours/Components/Button";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import FileInput from "../../../components/AccountTours/FormFields/FileInput";
import ProfileInputDoubleWrapper from "../../../components/AccountProfile/Wrappers/ProfileInputDoubleWrapper";
import CheckboxInput from "../../../components/AccountTours/FormFields/CheckboxInput";
import cross from '../../../assets/img/x.svg'
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import PopUp from "../../../components/PopUp/PopUp";
import styles from "../../../components/PopUp/PopUp.module.css";
import {isNotEmptyObject, setConfig} from "../../../functions";
import axios from "axios";
import * as t from "../../../redux/types";
import PhoneInput from "../../../components/AccountTours/Components/PhoneInput";

const Settings = ({
                    reg_status,
                    user,
                    status,
                    setPage,
                    update_user,
                    getLanguages,
                    languages,
                    update_avatar,
                    email_confirm_request,
                    delete_avatar,
                    request_status,
                    clear_confirm_status,
                    clear_errors,
                    phone_confirm_request,
                    phone_confirm,
                    confirm,
                    phone_error,
                    error,
                  }) => {
  useEffect(() => {
    setPage('profile')
    getLanguages()
    return () => {
      clear_errors()
      setActivePopUp(false)
    }
  }, [])

  const [profile, setProfile] = useState({})
  const [phoneConfirmed, setPhoneConfirmed] = useState(null)
  const [action, setAction] = useState(false)

  const [requestActive, setRequestActive] = useState(false)
  const [requestSuccess, setRequestSuccess] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [activePopUp, setActivePopUp] = useState(false)
  const [activePhonePopUp, setActivePhonePopUp] = useState(false)
  const [phoneChanged, setPhoneChanged] = useState(false)
  const [phoneRequestError, setPhoneRequestError] = useState(null)
  const [err, setErr] = useState(null)

  useEffect(() => {
    const scrollTo = (el) => {
      let anchor = document.getElementById(el)
      anchor && anchor.scrollIntoView({block: "center", behavior: "smooth"})
    }
    if (error) {
      scrollTo(Object.keys(error)[0])
    }
    // return () => clearErrors()
  }, [error])

  useEffect(() => {
    if(phoneRequestError) {
      setErr(phoneRequestError)
    } else if(error) {
      setErr(error)
    } else {
      setErr(null)
    }
  }, [phoneRequestError, error])


  useEffect(() => {
    if (submitted && reg_status >= 200 && reg_status < 300) {
      setActivePopUp(true)
    }
  }, [submitted, reg_status])

  useEffect(() => {
    if (request_status !== 'error' && request_status >= 200 && request_status < 300) {
      setRequestSuccess(true)
    } else {
      setRequestSuccess(false)
    }
  }, [request_status])

  const handleModalClose = () => {
    setRequestActive(false)
    clear_confirm_status()
  }

  useEffect(() => {
    if (user) {
      setProfile({
        ...profile,
        video: user.video,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        phone_code: user.phone_code,
        email: user.email,
        old_phone: user.phone,
        old_email: user.email,
        phone_confirmed: user.phone_confirmed,
        email_confirmed: user.email_confirmed,
      })
      setPhoneConfirmed(user.phone_confirmed)
    }
  }, [user])

  // useEffect(() => {
  //   if(phoneConfirmed && phoneChanged && profile.phone != profile.old_phone) {
  //     setPhoneConfirmed(false)
  //     setPhoneChanged(false)
  //   } else {
  //     setPhoneConfirmed(user && user.phone_confirmed)
  //     setPhoneChanged(false)
  //   }
  //
  // }, [phoneConfirmed, phoneChanged, profile])

  const handleChange = (name, value) => {
    // if(name === 'phone') {
    //   setPhoneChanged(true)
    // }
    setProfile({
      ...profile, [name]: value,
    })
  }

  const handleSubmit = () => {
    setSubmitted(true)
    update_user({
      ...profile,
    })
  }

  const handlePopUp = () => {
    setActivePopUp(false)
    setSubmitted(false)
  }

  const handlePhonePopUp = () => {
    setActivePhonePopUp(false)
    setSubmitted(false)
  }

  useEffect(() => {
    if(confirm >= 200 && confirm < 300) {
      handlePhonePopUp()
    }
  }, [confirm])


  const handleEmailConfirm = () => {
    setRequestActive(true)
    email_confirm_request()
    setTimeout(() => handleModalClose(), 3000)
  }

  const handlePhoneConfirm = async() => {
    const config = setConfig(!!localStorage.getItem('access'))

    const body = JSON.stringify({phone: profile.phone})

    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/experts/${user.id}/send_confirmation_call/`,
        body,
        config
      )
      setActivePhonePopUp(true)
    } catch (err) {
      setPhoneRequestError(err.response.data)
    }
  }


  const PhoneForm = () => {
    const numOfFields = 4;
    const [val, setValue] = React.useState('');

    const useSSNFields = () => {

      return {
        handleChange: e => {
          const {maxLength, value, name} = e.target;
          const [fieldName, fieldIndex] = name.split("-");

          // Check if they hit the max character length
          if (value.length >= maxLength) {
            // Check if it's not the last input field
            if (parseInt(fieldIndex, 10) < numOfFields) {
              // Get the next input field
              const nextSibling = document.querySelector(
                `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
              );

              // If found, focus the next field
              if (nextSibling !== null) {
                nextSibling.focus();
              }
            }
          }

          setValue(val + value);
        }
      };
    };

    const {handleChange} = useSSNFields();

    const handlePhoneSubmit = () => {
      phone_confirm(user.id, {code: val})
    }


    return (
      <>
        <div className={styles.popup_text}>Вам позвонит наш робот. Не отвечайте на звонок, а введите последние четыре
          цифры входящего номера.
        </div>
        <form onSubmit={handleSubmit}>
          <div className={'phone-form'}>
            <input name="ssn-1" maxLength={1} onChange={handleChange} autoFocus type="text"/>
            <input name="ssn-2" maxLength={1} onChange={handleChange} type="text"/>
            <input name="ssn-3" maxLength={1} onChange={handleChange} type="text"/>
            <input name="ssn-4" maxLength={1} onChange={handleChange} type="text"/>
            {confirm >= 300 && phone_error && isNotEmptyObject(phone_error) && phone_error.code.map((item, index) => (
                <div key={index} className="phone-error">
                  {item}
                </div>
              )
            )
            }
          </div>

        </form>
        <div className="phone-confirm-buttons">
          <Button text={'Подтвердить'} action={handlePhoneSubmit} color={'button-primary'} width={'100%'} margin={'0'}/>
          <Button text={'Отменить'} action={() => setActivePhonePopUp(false)} color={'button-danger'} width={'100%'} margin={'0'}/>
        </div>
      </>
    )
  }

  return (<Account title='Настройки' menu_item='settings'>
    <>
      {activePopUp && <PopUp status={'ok'} title={'Успешно обновлено'}
                             text={''} button={'Ок'} action={handlePopUp}/>}
      {activePhonePopUp && <PopUp status={null} title={'Верификация номера'}
                                  text={<PhoneForm/>} button={null}/>}
      {requestActive && (
        <div className={`modal-request-confirm`}>
          {request_status && (<div className="modal-request-body">
            <div className="modal-request-close" onClick={handleModalClose}><img src={cross} alt="cross"/></div>
            {requestSuccess ? (
              <div className={`modal-request-text green`}>
                Запрос успешно отправлен
              </div>
            ) : (
              <div className={`modal-request-text red`}>
                Ошибка отправки запроса
              </div>
            )}
            {requestSuccess ? (
              <div className="modal-request-subtext">
                Проверьте вашу почту
              </div>
            ) : (
              <div className="modal-request-subtext">
                Попробуйте еще раз позже
              </div>
            )}
          </div>)}
        </div>
      )}
      {/*{status === 'experts' && ()}*/}
      <main>
        <div className='global-h2-heading'>
          <h2>Настройки</h2>
        </div>
        <div className="profile-settings-subheading">
          <h4>
            Личные данные
          </h4>
        </div>

        <DoubleWrapper full={true}>
          <PhoneInput
            label={'Номер телефона (в международном формате)'}
            action={handleChange}
            name='phone'
            value={profile.phone}
            region_code={profile.phone_code}
            error={err}
          />
          <Input
            label={'Email'}
            action={handleChange}
            name='email'
            value={profile.email}
            error={error}
          />
        </DoubleWrapper>
        <DoubleWrapper full={true} undertext={true}>
          {(phoneConfirmed || (confirm >= 200 && confirm < 300)) ? (<div className="verified-note">
              <span className="confirmed-green">Телефон подтвержден и скрыт от других пользователей</span>
            </div>

          ) : (<div className="verified-note">
            Телефон не подтвержден! <span onClick={handlePhoneConfirm}
                                          style={{cursor: 'pointer'}}>Подтвердить?</span>
          </div>)}
          {profile.email_confirmed ? (<div className="verified-note">
            <span className="confirmed-green">Email подтвержден</span>
          </div>) : (<div className="verified-note">
            Email не подтвержден! <span onClick={handleEmailConfirm} style={{cursor: 'pointer'}}>Подтвердить?</span>
          </div>)}
        </DoubleWrapper>

        <Button
          color={'button-primary'}
          text='подключить мессенджеры'
          width={'404px'}
          // action={handleSubmit}
        />

        <SingleWrapper label='Видео' width={'100%'} margin={'0'}>
          <Input
            label={'Ссылка на видео'}
            action={handleChange}
            name='video'
            value={profile.video}
            error={error}
          />
        </SingleWrapper>

        <div className="profile-settings-subheading">
          <h4>
            Настройка push-уведомлений
          </h4>
        </div>
        <SingleWrapper label='Язык уведомлений' width={'50%'} padding={'0 10px 0 0'}>
          <SelectInput
            name='notification_languages'
            label='Выберите языки'
            action={handleChange}
            options={languages}
            val={profile.notification_languages}
            error={error}
          />
        </SingleWrapper>
        <Button
          color={'button-primary'}
          text='Подключить текущее устройство'
          padding={'0'}
          width={'404px'}
          // action={handleSubmit}
        />

        <div className="profile-settings-checkbox">
          <CheckboxInput label={'Получать push-уведомления (Необходимо разрешить получение уведомлений в браузере)'}/>
        </div>

        <div className="profile-settings-subheading">
          <h4>
            Пароль
          </h4>
        </div>

        <ProfileInputWrapper label='Для смены учетных данных, введите в поле новый пароль и его подтверждение:'/>

        <DoubleWrapper full={true}>
          <Input
            type='password'
            label={'Новый пароль'}
            action={handleChange}
            name='password'
            value={profile.password}
            error={error}
          />
          <Input
            type='password'
            label={'Подтверждение пароля'}
            action={handleChange}
            name='re_password'
            value={profile.re_password}
            error={error}
          />
        </DoubleWrapper>

        <Button
          text='Сохранить настройки'
          action={handleSubmit}
        />
      </main>
      {/*{status === 'customers' && <div>Страница настроек клиента</div>}*/}
    </>
  </Account>)
}

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.auth.error,
  status: state.auth.status,
  confirm: state.auth.confirm,
  phone_error: state.auth.phone_error,
  request_status: state.auth.confirm_request,
  languages: state.tours.languages,
  reg_status: state.auth.reg_status
})

export default connect(mapStateToProps, {
  setPage, update_user, getLanguages, update_avatar, email_confirm_request,
  delete_avatar, clear_confirm_status, clear_errors, phone_confirm_request, phone_confirm,
})(Settings)
