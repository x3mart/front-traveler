import React, { useEffect, useState } from 'react'
import Account from '../../../layouts/account/account'

import { connect } from 'react-redux'
import {
  setPage, 
  update_user, 
  clear_errors, 
  update_avatar, 
  delete_avatar,
  update_local_user,
  email_confirm_request,
  phone_confirm_request,
  phone_confirm, 
  clear_confirm_status
} from '../../../redux/actions/authActions'
import {getLanguages} from '../../../redux/actions/toursActions'
import {Link, useHistory} from "react-router-dom";
import Input from "../../../components/AccountTours/FormFields/Input";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import ProfileInputWrapper from "../../../components/AccountProfile/Wrappers/ProfileInputWrapper";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import Button from "../../../components/AccountTours/Components/Button";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import TextEditor from "../../../components/AccountTours/FormFields/TextEditor";
import PopUp from "../../../components/PopUp/PopUp";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import FileInput from "../../../components/AccountTours/FormFields/FileInput";
import {isNotEmptyObject, setConfig} from "../../../functions";
import axios from "axios";
import AvatarInput from "../../../components/AccountTours/FormFields/AvatarInput";
import PhoneInput from '../../../components/AccountTours/Components/PhoneInput';
import cross from '../../../assets/img/x.svg'

const MyProfile = ({ 
                    language, 
                    reg_status, 
                    user, 
                    status, 
                    setPage, 
                    update_user, 
                    getLanguages,
                    languages,
                    email_confirm_request,
                    clear_confirm_status,
                    clear_errors, 
                    update_avatar, 
                    update_local_user, 
                    request_status,
                    phone_confirm,
                    confirm,
                    phone_error,
                    error
                  }) => {
  useEffect(() => {
    setPage('profile')
    getLanguages()
    return () => {
      clear_errors()
      setActivePopUp(false)
    }
  }, [])

  const [submitted, setSubmitted] = useState(false)
  const [activePopUp, setActivePopUp] = useState(false)
  const [action, setAction] = useState(false)
  const [profile, setProfile] = useState({})
  const [pass, setPass] = useState({})
  const [activePhonePopUp, setActivePhonePopUp] = useState(false)
  const [requestActive, setRequestActive] = useState(false)
  const [err, setErr] = useState(null)
  const [phoneConfirmed, setPhoneConfirmed] = useState(null)
  const [requestSuccess, setRequestSuccess] = useState(true)
  const [phoneRequestError, setPhoneRequestError] = useState(null)

  const history = useHistory()

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
    if(submitted && reg_status >= 200 && reg_status < 300) {
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
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        phone_code: user.phone_code,
        email: user.email,
        old_phone: user.phone,
        old_email: user.email,
        phone_confirmed: user.phone_confirmed,
        email_confirmed: user.email_confirmed,
        avatar:user.avatar
      })
      setPhoneConfirmed(user.phone_confirmed)
    }
  }, [user])

  // const handleChange = (name, value) => {
  //   // if(name === 'phone') {
  //   //   setPhoneChanged(true)
  //   // }
  //   setProfile({
  //     ...profile, [name]: value,
  //   })
  // }

  // const handleSubmit = () => {
  //   setSubmitted(true)
  //   update_user({
  //     ...profile,
  //   })
  // }

  const handleChange = (name, value) => {
    console.log(name)
    console.log(value)
    setProfile({
      ...profile, [name]: value,
    })
  }
  const handleChangePass = (name,value) =>{
    setPass({
      ...pass,
      [name]:value
    })
  }

  const handleRedirect = () => {
    history.push(`/account/requests`)
  }

  const handleImageChange = (image) => {
    setAction(true)
    update_avatar(image)
    setAction(false)
  }

  const handleSubmit = () => {
    setSubmitted(true)
    update_user({
      ...profile,
    })
  }

  const handleSubmitPass = () => {
    setSubmitted(true)
    update_user({
      password:pass.password,
      re_password:pass.re_password
    })
  }
  
  const handlePopUp = () => {
    setActivePopUp(false)
    setSubmitted(false)
  }

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
  
  return (
    <Account title='Мой профиль' menu_item='profile'>
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
            <h2>Мой профиль</h2>
          </div>
          {status === 'experts' && <div className='tours-list-add-button-wrapper'>
            <div className='tours-list-add-button-text'>
              Проверенным экспертам туристы доверяют на 75% больше чем остальным. Получите статус бесплатно!
            </div>
            <div className='tours-list-add-button-button blue'>
              <div onClick={handleRedirect} style={{cursor: 'pointer'}}>
                Получить статус
              </div>
            </div>
          </div>}
          <div className="profile-page-body">
            <aside className="user-profile-aside">
              {/*<div className="user-profile-avatar" style={{backgroundImage: 'url(' + user.avatar + ')'}}/>*/}
              <AvatarInput
                max={1}
                action={handleImageChange}
                name='avatar'
                value={profile.avatar}
                type='file'
              />
              {status === 'experts' && <div className="user-profile-aside-text">
                Пожалуйста, не публикуйте названия компаний, контакты, бренды и ссылки.
                Публикации с подобной информацией могут быть удалены в одностороннем порядке.
              </div>}
            </aside>
            <div className="profile-page-content">
              <SingleWrapper label='Телефон' full={true} margin_bottom='0' margin='0' margin_bottom_label='20px'>
                <PhoneInput
                  label={'Номер телефона (в международном формате)'}
                  action={handleChange}
                  name='phone'
                  value={profile.phone}
                  region_code={profile.phone_code}
                  error={err}
                />
                </SingleWrapper>
                <SingleWrapper label='' full={true} margin_bottom='0'>
                {(phoneConfirmed || (confirm >= 200 && confirm < 300)) ? (<div className="verified-note">
                    <span className="confirmed-green">Телефон подтвержден и скрыт от других пользователей</span>
                  </div>

                ) : (<div className="verified-note">
                  Телефон не подтвержден! <span onClick={handlePhoneConfirm}
                                                style={{cursor: 'pointer'}}>Подтвердить?</span>
                </div>)}
                </SingleWrapper>
                <SingleWrapper label='E-mail' full={true} margin_bottom='0' margin='0' margin_bottom_label='20px'>
                <Input
                  label={'Email'}
                  action={handleChange}
                  name='email'
                  value={profile.email}
                  error={error}
                />
              </SingleWrapper>
                <SingleWrapper full={true} label='' margin_bottom='0'>
                {profile.email_confirmed ? (<div className="verified-note">
                  <span className="confirmed-green">Email подтвержден</span>
                </div>) : (<div className="verified-note">
                  Email не подтвержден! <span onClick={handleEmailConfirm} style={{cursor: 'pointer'}}>Подтвердить?</span>
                </div>)}
                </SingleWrapper>

              <DoubleWrapper full={true}>
                <Input
                  label={'Имя'}
                  action={handleChange}
                  name='first_name'
                  value={profile.first_name}
                />
                <Input
                  label={'Фамилия'}
                  action={handleChange}
                  name='last_name'
                  value={profile.last_name}
                />
              </DoubleWrapper>
              {/*<SingleWrapper label='Страна' width={'100%'} margin={'0'}>*/}
              {/*  <Input*/}
              {/*    name='country'*/}
              {/*    label='Укажите страну в которой вы живете'*/}
              {/*    value={user && user.country}*/}
              {/*    action={handleChange}*/}
              {/*  />*/}
              {/*</SingleWrapper>*/}
              {/*<SingleWrapper label='Город' width={'100%'} margin={'0'}>*/}
              {/*  <Input*/}
              {/*    name='city'*/}
              {/*    label='Укажите город в котором вы живете'*/}
              {/*    value={user && user.city}*/}
              {/*    action={handleChange}*/}
              {/*  />*/}
              {/*</SingleWrapper>*/}
              {status === 'experts' && <SingleWrapper label='Языки, которыми вы владеете' full={true} margin={'0'}>
                <SelectInput
                  name='languages'
                  label='Языки, которыми вы владеете'
                  action={handleChange}
                  options={languages}
                  val={profile.languages}
                  multiple={true}
                />
              </SingleWrapper>}

              {status === 'customers' && <SingleWrapper label='Email' width={'100%'} margin={'0'}>
                <Input
                  label={'Email'}
                  action={handleChange}
                  name='email'
                  value={profile.email}
                  error={error}
                />
              </SingleWrapper>}
              {/*<SingleWrapper label='Где вы были?' width={'100%'} margin={'0'}>*/}
              {/*  <Input*/}
              {/*    name='visited_countries'*/}
              {/*    label='Укажите колличечство стран, в которых вы были'*/}
              {/*    value={user && user.visited_countries}*/}
              {/*    action={handleChange}*/}
              {/*  />*/}
              {/*</SingleWrapper>*/}
            </div>
          </div>
          <SingleWrapper label='Расскажите о себе (это всем интересно)' width={'100%'} margin={'0'}>
            <TextEditor
              name='about'
              label='Расскажите о себе'
              rows='7'
              value={profile.about}
              action={handleChange}
            />
          </SingleWrapper>
          <Button
            text='Сохранить'
            action={handleSubmit}
          />
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
              action={handleChangePass}
              name='password'
              value={pass.password}
              error={error}
            />
            <Input
              type='password'
              label={'Подтверждение пароля'}
              action={handleChangePass}
              name='re_password'
              value={pass.re_password}
              error={error}
            />
          </DoubleWrapper>

          <Button
            text='Изменить пароль'
            action={handleSubmitPass}
          />
        </main>
        {/*{status === 'customers' && <div>Страница профиля клиента</div>}*/}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  user: state.auth.user,
  error: state.auth.error,
  status: state.auth.status,
  confirm: state.auth.confirm,
  phone_error: state.auth.phone_error,
  languages: state.tours.languages,
  reg_status: state.auth.reg_status,
  request_status: state.auth.confirm_request
})

export default connect(mapStateToProps, { 
  setPage, update_user, getLanguages, update_avatar, update_local_user, email_confirm_request, 
  delete_avatar, clear_confirm_status, clear_errors, phone_confirm_request, phone_confirm
})(MyProfile)
