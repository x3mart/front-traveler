import React, {useEffect, useState} from 'react'
import Account from '../../../layouts/account/account'

import {Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import Button from "../../../components/AccountTours/Components/Button";

import {styled} from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import {getUserInn, resetUserInn} from "../../../redux/actions/profileActions";
import {
  update_local_user, setPage, getRecipientInnData, resetRecipientInnData, updateLegalVerificationData,
  updateVerificationData, clear_verification_status, update_user, load_user, clear_errors,
} from "../../../redux/actions/authActions";
import {getCountries, setKey} from "../../../redux/actions/toursActions";
import PopUp from "../../../components/PopUp/PopUp";
import Verification from "./verification";
import axios from "axios";
import * as t from "../../../redux/types";
import {setConfig} from "../../../functions";

// const data = [{
//   id: 1, available: true, title: 'Физическое лицо', subtitle: '', list: [],
// }, {
//   id: 2, available: true, title: 'Юридическое лицо (ИП, ООО)', subtitle: '', list: [],
// },]

const BpIcon = styled('span')(({theme}) => ({
  borderRadius: '50%',
  width: 24,
  height: 24,
  boxShadow: theme.palette.mode === 'dark' ? '0 0 0 1px rgb(16 22 26 / 40%)' : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage: theme.palette.mode === 'dark' ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))' : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)', outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none', background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#84BB59',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 24,
    height: 24,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#84BB59',
  },
});

const Requests = ({
                    language,
                    user,
                    status,
                    setPage,
                    getCountries,
                    countries,
                    updateVerificationData,
                    updateLegalVerificationData,
                    update_verification_status,
                    clear_verification_status,
                    load_user,
                    update_local_user,
                    clear_errors,
                    update_user
                  }) => {
                    

  // if(!user) {
  //   load_user()
  // }

  // const [active, setActive] = useState(1)
  const [activePopUp, setActivePopUp] = useState(false)
  const [activeErrorPopUp, setActiveErrorPopUp] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [can_edit, setCanEdit] = useState(true)
  const [verifications_status, setVerificationsStatus] = useState('draft')

  if (status === 'customers') {
    return <Redirect to={`/404`}/>
  }

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    setVerificationsStatus(user?.verifications.status)
    setCanEdit(!['aproved', 'waiting_aprove'].includes(user?.verifications.status))
  }, [user])

  useEffect(() => {
  if(update_verification_status >= 200 && update_verification_status < 300) {
    setActivePopUp(true)
  }
}, [update_verification_status])

  const handleSubmit = async () => {

    function parseJwt(token) {
      var base64Url = token.split('.')[1]
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          })
          .join('')
      )

      return JSON.parse(jsonPayload)
    }

    const config = setConfig(!!localStorage.getItem('access'))

    const body = JSON.stringify(user.verifications)

    const current_user = parseJwt(localStorage.getItem('access')).user_status

    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/${current_user}/${user.id}/verification/`,
        // `${process.env.REACT_APP_API_URL}/api/${current_user}/${id}/individual_verification/`,
        body,
        config
      )
      const result = 'ok'

      updateVerificationData(result)
      setCanEdit(false)
      setVerificationsStatus('waiting_aprove')
      window.scrollTo(0,0)
    } catch (err) {
      console.log(err)
      const errStatus = err.response.status
      const errData = err.response.data
      if(errData?.message) {
        setErrorMessage(errData?.message)
      }
      if(errStatus === 403) {
        setActiveErrorPopUp(true)
      }
      errStatus >= 400 && errStatus < 500 ? setKey(Object.keys(errData)[0]) : setActivePopUp(true)
      const result = err.response.data
      updateVerificationData(result)
    }

  }

  useEffect(() => {
    setPage('requests')
  }, [])

  useEffect(() => {
    setPage('requests')
  }, [])

  return (<Account menu_item='requests' title='Запросы на проверку'>

      <>
        {activePopUp && <PopUp status={'ok'} title={'Запрос на проверку отправлен'}
                               text={'Результаты проверки будут направлены на Ваш email.'}
                               button={'Ок'} action={() => {
          setActivePopUp(false)
          clear_verification_status()
        }}/>}
        {activeErrorPopUp && <PopUp status={'cancel'} title={errorMessage ? errorMessage : 'Упс... Что-то пошло не так'}
                                    text={'Исправьте все ошибки и повторно отправьте запрос.'}
                                    button={'Ок'} action={() => {
          setActiveErrorPopUp(false)
        }}/>}
        {status === 'experts' && (<main>
            <div className='global-h2-heading'>
              <h2>Запросы на проверку</h2>
            </div>

            {verifications_status=='declined' && (<div className="team-subtitle error" style={{whiteSpace: "pre-wrap"}}>
             Отказано по причине:<br></br> 
             {user?.verifications.decline_reason}
            </div>)}

            {verifications_status=='aproved' && (<div className="team-subtitle success" style={{whiteSpace: "pre-wrap"}}>
             Статус подтвержден!
            </div>)}

            {verifications_status=='waiting_aprove' && (<div className="team-subtitle" style={{whiteSpace: "pre-wrap"}}>
             Запрос отправлен. Ожидайте результатов проверки.
            </div>)}
            
            {/*<div className="cards-wrapper">*/}
            {/*  {data.map((item, index) => <Card key={index} id={item.id} list={item.list} subtitle={item.subtitle} title={item.title}*/}
            {/*                          available={item.available}/>)}*/}
            {/*</div>*/}

          <Verification countries={countries} can_edit={can_edit}/>

            {/*{active === 2 && (*/}
            {/*  <>*/}
            {/*    <Legal countries={countries}/>*/}
            {/*  </>*/}
            {/*)}*/}

            <Button text={'ОТПРАВИТЬ ЗАПРОС НА ПРОВЕРКУ'} action={handleSubmit} active = {can_edit}/>
          </main>)}
      </>


    </Account>)
}

const mapStateToProps = state => ({
  language: state.languages.language,
  user: state.auth.user,
  inn_data: state.auth.inn_data,
  update_verification_status: state.auth.update_verification_status,
  status: state.auth.status,
  error: state.auth.error,
  countries: state.tours.countries,
})

export default connect(mapStateToProps, {
  setPage, getUserInn, resetUserInn, update_local_user, getCountries, getRecipientInnData, resetRecipientInnData, updateLegalVerificationData,
  updateVerificationData, clear_verification_status, update_user, load_user, clear_errors,
})(Requests)
