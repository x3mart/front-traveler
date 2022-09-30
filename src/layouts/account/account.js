import React, {useState, useEffect} from 'react'
import MainLayout from '../MainLayout'
import MetaTags from 'react-meta-tags'
import {Link, Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import SideBar from '../../components/sideBar/SideBar'

import {load_user} from '../../redux/actions/authActions'
import {openSecondaryMenu} from '../../redux/actions/toursActions'

const Account = ({
                   page,
                   language,
                   title,
                   subtitle,
                   menu_item,
                   isAuthenticated,
                   children,
                   tour,
                   openSecondaryMenu,
                 }) => {



  if (!isAuthenticated) {
    return <Redirect to={`/${language}/login`}/>
  }

  if (tour.secondary) {
    openSecondaryMenu(false)
  }

  const [avatarLetter, setAvatarLetter] = useState('')

  useEffect(() => {
    load_user()
  }, [])

  return (
    <>
      <MetaTags>
        <title>{title}</title>
        <meta name='description' content=''/>
        <link rel='icon' href='/favicon.ico'/>
      </MetaTags>
      <MainLayout page={page}>
        <section>
          <div className='wrapper'>
            <div className='breadcrumbs breadcrumbs_margin'>
              <span><Link to={`/${language}`}>Главная</Link></span> - <span><Link
              to={`/${language}/account`}>Личный кабинет</Link></span>{subtitle && ' - '}{subtitle && <span><Link
              to={`/${language}/account/${menu_item}`}>{subtitle}</Link></span>}{title && ' - '}<span
              style={{textDecoration: 'none', pointerEvents: 'none'}}>{title}</span>
            </div>
          </div>
        </section>

        <section>
          <div className='wrapper'>
            <div className='account_block'>
              <SideBar menu_item={menu_item}/>
              {children}
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  status: state.auth.status,
  // page: state.auth.page,
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {load_user, openSecondaryMenu})(Account)
