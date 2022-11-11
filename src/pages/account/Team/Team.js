import React, {useEffect, useState} from 'react';
import styles from './Team.module.css';
import {Link, useHistory} from "react-router-dom";
import Account from "../../../layouts/account/account";
import { connect } from 'react-redux'
import {setPage, update_user} from "../../../redux/actions/authActions";
import {getLanguages} from "../../../redux/actions/toursActions";
import TeamList from "../../../components/AccountTours/Components/TeamList";
import {addTeamMember, clearTeamMember} from "../../../redux/actions/profileActions";
import axios from "axios";
import {setConfig} from "../../../functions";

const Team = ({language, user, status, addTeamMember, members, member, clearTeamMember}) => {

  const history = useHistory()

  useEffect(() => {
    setPage('team')
    getLanguages()
    clearTeamMember()
  }, [])

  const [profile, setProfile] = useState({})

  useEffect(() => {
    if(user) {
      setProfile({
        ...profile,
        country: user.country,
        city: user.city,
        languages: user.languages,
        visited_countries: user.visited_countries,
        about: user.about,
      })
    }
  }, [user])


  const handleChange = (name, value) => {
    setProfile({
      ...profile,
      [name]: value,
    })
  }

  const handleAddButton = async () => {
    const config = setConfig(!!localStorage.getItem('access'))

    const data = {}

    const body = JSON.stringify(data)

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/teammembers/`, body, config)
      history.push(`/account/team/${res.data.id}/edit`)

    } catch (err) {
     console.error(err)
    }

  }

  const handleSubmit = () => {
    update_user({
      ...profile,
    })
  }

  return (
    <Account title='Моя команда' menu_item='team'>
      <>
        {status === 'experts' && (
          <main>
            <div className='global-h2-heading'>
              <h2>Моя команда</h2>
            </div>
            <div className='tours-list-add-button-wrapper'>
              <div className='tours-list-add-button-text'>
                Добавьте членов вашей команды, которые проводят туры вместе с вами.
              </div>
              <div className='tours-list-add-button-button blue'>
                <div onClick={handleAddButton}>
                  Добавить
                </div>
              </div>
            </div>
            <div className="team-subtitle">
              Члены команды
            </div>
            <TeamList/>
          </main>
        )}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  user: state.auth.user,
  status: state.auth.status,
  languages: state.tours.languages,
  member: state.profile.member,
})

export default connect(mapStateToProps, { addTeamMember, clearTeamMember })(Team)