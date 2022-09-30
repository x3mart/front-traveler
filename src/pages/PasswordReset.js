import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import {login, checkAuthenticated, clear_errors, reset_password} from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Input from "../components/AccountTours/FormFields/Input";
import PopUp from "../components/PopUp/PopUp";


const PasswordReset = ({ language, isAuthenticated, login, checkAuthenticated, error, clear_errors,
                 reg_status, reset_password }) => {

  const history = useHistory()

  const [data, setData] = useState({})
  const [check, setCheck] = useState(true)
  const [activePopUp, setActivePopUp] = useState(false)

  if (isAuthenticated) {
    // setData({})
    return <Redirect to={`${language}/account`} />
  }

  const handleData = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleLoginRedirect = e => {
    e.preventDefault()
    history.push(`${language}/login`)
  }

  const handleAction = async e => {
    e.preventDefault()
    await reset_password(data.email)
    setActivePopUp(true)
  }

  return (
    <MainLayout>
      <>
        {activePopUp && <PopUp status={'ok'} title={'Данные для восстановления отправлены на почту'}
                                button={'Ок'} action={() => setActivePopUp(false)}/>}
        <section>
          <div className='wrapper'>
            <div className='breadcrumbs breadcrumbs_margin'>
              <span>Главная</span> - <span>Восстановление пароля</span>
            </div>
          </div>
        </section>

        <section>
          <div className='wrapper wrapper_center'>
            <div className='login_page_block recover'>
              <div className='login_block_left'>
                <div className='info_block_text_login'>
                  <div className='info_block_text_left'>Восстановить пароль</div>
                  <Link to={`/login`} className='info_block_text_right'>Войти на сайт</Link>
                </div>
                <div className='login_page_text_block'>
                  <p>
                    Если вы забыли пароль, введите адрес электронной почты.
                  </p>
                  <p>
                    Ссылка для смены пароля будет выслана вам на адрес электронной почты.
                  </p>
                </div>
                <div className='auth_form'>
                  <form onSubmit={handleAction}>
                    <Input
                      required={true}
                      action={handleData}
                      name='email'
                      label='Адрес эл. почты'
                      icon={'email'}
                      type='email'
                      value={data.email}
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
  isAuthenticated: state.auth.isAuthenticated,
  language: state.languages.language,
  error: state.auth.error,
  reg_status: state.auth.reg_status
})

export default connect(mapStateToProps, { login, checkAuthenticated, clear_errors, reset_password })(PasswordReset)
