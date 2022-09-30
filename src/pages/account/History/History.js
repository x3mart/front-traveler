import React, {useEffect} from 'react'
import styles from './History.module.css'
import {connect} from 'react-redux'
import {getTravelHistory, setPage} from '../../../redux/actions/authActions'
import {Redirect} from "react-router-dom";
import Account from "../../../layouts/account/account";
import HistorySet from "./HistorySet";
import ToursPagesComponent from "../../../components/ToursPagesComponent";

const History = ({ status, setPage, getTravelHistory, travel_history }) => {
  useEffect(() => {
    getTravelHistory()
    setPage('history')
  }, [])

  if (status === 'experts') {
    return <Redirect to='/404'/>
  }

  return (
    <Account title={'История путешествий'} menu_item={'history'}>
      <>
        <main>
          <div className='global-h2-heading'>
            <h2>История путешествий</h2>
          </div>
          {status === 'customers' && <ToursPagesComponent type={'cut_tour'} tours={travel_history}/>}
        </main>
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
  travel_history: state.auth.travel_history,
})

export default connect(mapStateToProps, { setPage, getTravelHistory })(History)