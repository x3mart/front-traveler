import React, { useEffect, useState } from 'react'
import Account from '../../../layouts/account/account'

import { connect } from 'react-redux'
import {setPage, update_user, clear_errors, update_avatar, update_local_user} from '../../../redux/actions/authActions'
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
import AvatarInput from "../../../components/AccountTours/FormFields/AvatarInput";

const MyProfile = ({ language, error, reg_status, user, status, setPage, update_user, getLanguages, languages, clear_errors, update_avatar, update_local_user }) => {
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

  const history = useHistory()

  useEffect(() => {
    if(submitted && reg_status >= 200 && reg_status < 300) {
      setActivePopUp(true)
    }
  }, [submitted, reg_status])

  const handleChange = (name, value) => {
    update_local_user({
      ...user,
      [name]: value,
    })
  }

  const handleRedirect = () => {
    history.push(`/${language}/account/requests`)
  }

  const handleImageChange = (image) => {
    setAction(true)
    update_avatar(image)
    setAction(false)
  }

  const handleSubmit = () => {
    setSubmitted(true)
    update_user({
      ...user,
    })
  }

  return (
    <Account title='Мой профиль' menu_item='profile'>
      {activePopUp && <PopUp status={'ok'} title={'Успешно обновлено'}
                             text={''} button={'Ок'} action={() => setActivePopUp(false)}/>}
      <>
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
                value={user && user.avatar}
                type='file'
              />
              {status === 'experts' && <div className="user-profile-aside-text">
                Пожалуйста, не публикуйте названия компаний, контакты, бренды и ссылки.
                Публикации с подобной информацией могут быть удалены в одностороннем порядке.
              </div>}
            </aside>
            <div className="profile-page-content">
              <DoubleWrapper full={true}>
                <Input
                  label={'Имя'}
                  action={handleChange}
                  name='first_name'
                  value={user && user.first_name}
                />
                <Input
                  label={'Фамилия'}
                  action={handleChange}
                  name='last_name'
                  value={user && user.last_name}
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
                  val={user && user.languages}
                  multiple={true}
                />
              </SingleWrapper>}

              {status === 'customers' && <SingleWrapper label='Email' width={'100%'} margin={'0'}>
                <Input
                  label={'Email'}
                  action={handleChange}
                  name='email'
                  value={user && user.email}
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

              <SingleWrapper label='Расскажите о себе (это всем интересно)' width={'100%'} margin={'0'}>
                <TextEditor
                  name='about'
                  label='Расскажите о себе'
                  rows='7'
                  value={user && user.about}
                  action={handleChange}
                />
              </SingleWrapper>
              <Button
                text='Сохранить'
                action={handleSubmit}
              />

            </div>
          </div>
        </main>
        {/*{status === 'customers' && <div>Страница профиля клиента</div>}*/}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  user: state.auth.user,
  status: state.auth.status,
  languages: state.tours.languages,
  error: state.auth.error,
  reg_status: state.auth.reg_status
})

export default connect(mapStateToProps, { setPage, update_user, getLanguages, clear_errors, update_avatar, update_local_user })(MyProfile)
