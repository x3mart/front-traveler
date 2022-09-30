import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {email_confirm} from "../../../redux/actions/authActions";
import {Redirect, useHistory} from "react-router-dom";
import Button from "../../../components/AccountTours/Components/Button";
import MainLayout from "../../../layouts/MainLayout";
import CircularProgress from '@mui/material/CircularProgress'

const EmailActivate = ({match, email_confirm, status, language}) => {

  const history = useHistory()

  const [requestSuccess, setRequestSuccess] = useState(true)
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    verify_email()
  }, [])

  useEffect(() => {
    const redirector = () => {
      setVerified(false)
      history.push(`/${language}`)
    }
    if(verified) {
      let timer = setTimeout(() => redirector(), 5000)
      return () => clearTimeout(timer)
    }
  }, [verified])


  useEffect(() => {
    if(status !== 'error' && status >= 200 && status < 300) {
      setRequestSuccess(true)
    } else {
      setRequestSuccess(false)
    }
  }, [status])

  const verify_email = () => {
    const data = {
      uid: match.params.uid,
      token: match.params.token,
    }
    email_confirm(data);
    setVerified(true)
  };

  return (
    <>
      <MainLayout>
        <div className="verification-page">
          {verified && status ? (
              <>
                {requestSuccess ?
                  <div className="verification-text green">Почта успешно подтверждена!</div>
                  :
                  <div className="verification-text red">Ошибка подтверждения. Попробуйте еще раз.</div>
                }
                <div className="verification-subtext">Скоро вы будете перенаправлены на главную страницу</div>
              </>
            )
            :
            <div className='verification-button'>
              <CircularProgress />
            </div>
          }
        </div>
      </MainLayout>
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  status: state.auth.confirm,
})

export default connect(mapStateToProps, {email_confirm})(EmailActivate)