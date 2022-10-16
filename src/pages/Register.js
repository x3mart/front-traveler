import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import {clear_errors, signUp} from '../redux/actions/authActions'
import { connect } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import Input from "../components/AccountTours/FormFields/Input";
import PopUp from "../components/PopUp/PopUp";
import Breadcrumbs from "../components/Breadcrumbs";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import Section from "../components/Section";

const Register = ({ language, signUp, error, reg_status, clear_errors }) => {
  const [data, setData] = useState({})
  const [isExpert, setIsExpert] = useState(false)
  const [status, setStatus] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [activePopUp, setActivePopUp] = useState(false)

  const history = useHistory()

  useEffect(() => {
    if(submitted && reg_status >= 200 && reg_status < 300) {
      setActivePopUp(true)
    }
  }, [submitted, reg_status])


  useEffect(() => {
    return () => {
      // setData({})
      clear_errors()
      setActivePopUp(false)
      // setSubmitted(false)
    }
  }, [])

  useEffect(() => {
    if(isExpert){
        setStatus('experts')
    } else {
        setStatus('customers')
    }
  }, [isExpert])

  const handleData = (name, value) => {
    setData({
      ...data,
      [name]: value,
      ref:window.location.search?.substring(window.location.search?.indexOf('ref=')+4)
    })
  }

  const handleAction = e => {
    e.preventDefault()
    setSubmitted(true)
    signUp(status, data)
  }
  const handleRedirect = () => {
    history.push(`/${language}/login`)
  }

  return (
    <MainLayout>
      <>
        {activePopUp && <PopUp status={'ok'} title={'Вы успешно зарегистрировались'}
                text={'Для авторизации на сайте перейдите в раздел "Вход"'} button={'Ок'} action={handleRedirect}/>}
        <Section padding={'0px'}>
          <Breadcrumbs>
            <Breadcrumb
              link={`/${language}`}
            >
              Главная
            </Breadcrumb>
            <Breadcrumb>
              Регистрация
            </Breadcrumb>
          </Breadcrumbs>
        </Section>

        <section>
          <div className='wrapper wrapper_center'>
            <div className='login_page_block'>
              <div className='login_block_left'>
                <div className='info_block_text_login'>
                  <div className='info_block_text_left'>Регистрация</div>
                  <div className='info_block_text_right'>
                    <Link to={`/${language}/login`}>Войти на сайт</Link>
                  </div>
                </div>

                <div className='auth_form'>
                  <div className='change_type_block'>
                    <button
                      className={!isExpert ? 'active' : ''}
                      onClick={() => setIsExpert(false)}
                    >
                      Я путешественник
                    </button>
                    <button
                      className={isExpert ? 'active' : ''}
                      onClick={() => setIsExpert(true)}
                    >
                      Я тревел-эксперт
                    </button>
                  </div>
                  <form onSubmit={handleAction}>
                    <Input
                      required={true}
                      action={handleData}
                      name='name'
                      label='Представьтесь, пожалуйста'
                      icon={'user'}
                      type='text'
                      value={data.name}
                      margin={'0 0 25px 0'}
                      error={error}
                    />
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
                    <Input
                      required={true}
                      action={handleData}
                      name='password'
                      label='Пароль'
                      icon={'password'}
                      type='password'
                      value={data.password}
                      margin={'0 0 25px 0'}
                      error={error}
                    />

                    <Input
                      required={true}
                      action={handleData}
                      name='re_password'
                      label='Повторить пароль'
                      icon={'password'}
                      type='password'
                      value={data.re_password}
                      margin={'0 0 25px 0'}
                      error={error}
                    />

                    <div className='social_links_block_info social_links_block_info_registration'>
                      Отправляя форму вы соглашаетесь с{' '}
                      <Link to={`/${language}/legal-documents/oferta-dlia-avtora-tura`}>
                        условиями публичной оферты
                      </Link>{' '}
                      и выражаете свое согласие на обработку{' '}
                      <Link to={`/${language}/legal-documents/politika-konfidentsialnosti`}>
                        персональных данных
                      </Link>
                      .
                    </div>
                    <button
                      className='enter_site enter_site_registration'
                      type='submit'
                    >
                      Согласиться и продолжить
                    </button>
                  </form>
                </div>

                {!isExpert && (
                  <>
                    <div className='title_social'>
                      или зарегистрируйтесь через соц. сети
                    </div>
                    <div className='social_links_block'>
                      <div className='social_links_block_item apple'></div>
                      <div className='social_links_block_item vk'></div>
                      <div className='social_links_block_item fb'></div>
                      <div className='social_links_block_item google'></div>
                    </div>
                  </>
                )}
              </div>
              <div className='login_block_right login_block_right_registration_guide'>
                <div>
                  Стань частью тревел-комьюнити
                  <p>
                    Присоединяйся к сообществу из 10 000 путешественников
                    зарегистрированных на платформе.
                  </p>
                </div>
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
  error: state.auth.error,
  reg_status: state.auth.reg_status
})

const mapDispatchToProps = {
  signUp,
  clear_errors,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
