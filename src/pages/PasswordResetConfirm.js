import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import {
  login,
  checkAuthenticated,
  clear_errors,
  reset_password,
  reset_password_confirm
} from '../redux/actions/authActions'
import { connect } from 'react-redux'
import {Link, Redirect, useHistory} from 'react-router-dom'
import Input from "../components/AccountTours/FormFields/Input";
import PopUp from "../components/PopUp/PopUp";
import axios from "axios";
import * as t from "../redux/types";
import {setConfig} from "../functions";


const PasswordResetConfirm = ({ language, match, reset_password_confirm }) => {

  const history = useHistory()



  const [activePopUp, setActivePopUp] = useState(false)
  const [handler, setHandler] = useState(false)

  const [error, setError] = useState({})

  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { new_password, re_new_password } = formData;

  useEffect(() => {
    if(error?.non_field_errors) {
      setError({
        new_password: ['Пароли не совпадают.'],
        re_new_password: ['Пароли не совпадают.']
      })
    }
  }, [error])

  useEffect(() => {
    let timeout = null
    if(handler) {
      timeout = setTimeout(() => {
        if(activePopUp){
          setActivePopUp(false)
          history.push(`/login`)
        }
      }, 2000)
    }
    return () => clearTimeout(timeout)
  }, [handler])

  const handleAction = async e => {
    e.preventDefault();
    const uid = match.params.uid;
    const token = match.params.token;

    const config = setConfig(!!localStorage.getItem('access'))

    const body = JSON.stringify({uid, token, new_password, re_new_password})

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
        body,
        config
      )
      setActivePopUp(true)
      setHandler(true)
    } catch (err) {
      setError(err.response.data)
    }

  };

  const handleData = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <MainLayout>
      <>
        {activePopUp && <PopUp status={'ok'} title={'Пароль успешно обновлен.'} text={'Сейчас вы будете перенаправлены на страницу входа.'}
                               button={'Ок'} action={() => setActivePopUp(false)}/>}
        <section>
          <div className='wrapper'>
            <div className='breadcrumbs breadcrumbs_margin'>
              <span>Главная</span> - <span>Смена пароля</span>
            </div>
          </div>
        </section>

        <section>
          <div className='wrapper wrapper_center'>
            <div className='login_page_block recover'>
              <div className='login_block_left'>
                <div className='info_block_text_login'>
                  <div className='info_block_text_left'>Сменить пароль</div>
                  <Link to={'/login'} className='info_block_text_right'>Войти на сайт</Link>
                </div>
                <div className='auth_form'>
                  <form onSubmit={handleAction}>
                    <Input
                      required={true}
                      action={handleData}
                      name='new_password'
                      label='Новый пароль'
                      icon={'password'}
                      type='password'
                      value={new_password}
                      margin={'0 0 25px 0'}
                      error={error}
                    />
                    <Input
                      required={true}
                      action={handleData}
                      name='re_new_password'
                      label='Подтвердите новый пароль'
                      icon={'password'}
                      type='password'
                      value={re_new_password}
                      margin={'0 0 25px 0'}
                      error={error}
                    />

                    <button
                      className='enter_site enter_site_registration'
                      type='submit'
                    >
                      Отправить
                    </button>
                  </form>
                </div>

              </div>
              <div className='login_block_right'>
                Маркетплейс авторских туров
              </div>
            </div>
          </div>
        </section>
      </>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  reg_status: state.auth.reg_status
})

export default connect(mapStateToProps, { login, checkAuthenticated, clear_errors, reset_password, reset_password_confirm })(PasswordResetConfirm)
