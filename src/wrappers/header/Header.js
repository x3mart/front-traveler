import React, {useState, useEffect, useMemo} from 'react'
import Logo from '../../components/logo/Logo'
import {Link} from 'react-router-dom'
import {getIdent, load_user} from '../../redux/actions/authActions'

import { connect } from 'react-redux'
import UserSmallAvatar from '../../components/UserSmallAvatar/UserSmallAvatar'
import {w3cwebsocket as W3CWebSocket} from "websocket";
import {
  set_users_offline,
  set_users_online,
  update_chat_room,
  update_chat_rooms,
} from "../../redux/actions/chatActions";
import MainNav from "../../components/MainNav";

let client

const Header = ({ getIdent, isAuthenticated, load_user, user, page, set_users_online, set_users_offline, update_chat_rooms, update_chat_room, languages, language }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [active, setActive] = useState('')

  if(!localStorage.getItem('ident')){
    getIdent()
  }

  useMemo(() => {
    if(isAuthenticated) {
      client =  new W3CWebSocket(`wss://traveler.market/ws/notification/?token=${localStorage.getItem('access')}`)
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (!isAuthenticated) {
      client?.close()
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (client) {
      client.onopen = () => {
        console.log('WebSocket Client Connected');
      };

      client.onclose = () => {
        console.log('WebSocket Client Disconnected');
      };

      client.onerror = (e) => {
        console.error(e);
        console.log('Connection Error');
      };

      client.onmessage = (e) => {
        const dataFromServer = JSON.parse(e.data);
        // console.log('got reply!');
        if (dataFromServer) {
          if(dataFromServer.is_online) {
            set_users_online(dataFromServer.is_online)
          } else if(dataFromServer.is_offline) {
            set_users_offline(dataFromServer.is_offline)
          } else if(dataFromServer.new_chat) {
            update_chat_rooms(dataFromServer.new_chat)
          } else if(dataFromServer.new_message) {
            update_chat_room(dataFromServer.new_message)
          }
        }
      };
    }
  }, [client])

  useEffect(() => {
    if(isAuthenticated){
      load_user()
    }
  }, [])

  useEffect(() => {
    if(page){
      setActive(page)
    }
  }, [page])

  const toggleOpened = () => {
    setIsOpened(!isOpened)
  }
  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <div className='header_content'>
            <div className='mobile_menu' onClick={toggleOpened}></div>
            <div
              className={`mobile_menu_menu ${
                isOpened ? 'mobile_menu_visible' : 'mobile_menu_hidden'
              }`}
              id='mob_menu'
            >
              <a href=''>Подберите мне тур</a>
              <a href=''>Путешествия</a>
              <a href=''>Поддержка</a>
              <a href=''>Выбрать язык</a>
              <a href=''>Выбрать валюту</a>
              <a href=''>Избранное</a>
            </div>
            <Logo language={language} />
            <div className='buttons_block'>
              <div className='buttons_block_find_tour'>Подберите мне тур</div>
              <MainNav page={page}/>
              {/*<Link to={`/${language}/tours`} className={`buttons_block_travel ${active === 'tours' ? 'active' : ''}`} onClick={() => setActive('tours')}>Путешествия</Link>*/}
              {/*<Link to={`/${language}${isAuthenticated ? '/account/support' : '/login/support'}`} className={`buttons_block_travel ${active === 'support' ? 'active' : ''}`} onClick={() => setActive('support')}>Поддержка</Link>*/}
              {/*<div className={`buttons_block_travel ${active === 'support' ? 'active' : ''}`} onClick={() => setActive('поддержка')}>Поддержка</div>*/}
              <div className='buttons_block_country'>
                {/*<img src='./img/Flag.svg' alt='' />*/}
                {languages?.map((item, index) => <div className='buttons_block_country_name' key={index}>{item}</div>)}
              </div>
              <div className='buttons_block_currency'>&#8381; (Rub)</div>
              <Link to={`/${language}/favorite`} className='buttons_block_liked'/>
            </div>

            {isAuthenticated ? (
              <div className='margin-left'>
                <div className='user-account-name-wrapper'>
                  <Link to={`/${language}/account`}>
                    <div className='user-account-avatar'>
                      <UserSmallAvatar />
                      {/* <UserAvatar user={user} /> */}
                    </div>
                  </Link>
                </div>
              </div>
            ) : (
              <Link to={`/${language}/login`} className='login_block'>
                Вход
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  languages: state.languages.languages,
  language: state.languages.language,
})

export default connect(mapStateToProps, { getIdent, load_user, set_users_online, set_users_offline, update_chat_rooms, update_chat_room })(Header)
