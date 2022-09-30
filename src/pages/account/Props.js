import React, { useEffect } from 'react'
import Account from '../../layouts/account/account'

import {Redirect} from 'react-router-dom'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const Props = ({ status, setPage, language }) => {

  if (status === 'customers') {
    return <Redirect to={`/${language}/404`}/>
  }

  useEffect(() => {
    setPage('props')
  }, [])

  return (
    <Account menu_item='props' title='Реквизиты'>
      <>
        {status === 'experts' && <div>Страница реквизитов эксперта</div>}
        {/* {status === 'customers' && <div>Страница профиля клиента</div>} */}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(Props)
