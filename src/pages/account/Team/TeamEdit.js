import React, {useEffect, useState} from 'react';

import {useHistory} from "react-router-dom";

import styles from './Team.module.css';
import Input from "../../../components/AccountTours/FormFields/Input";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import Button from "../../../components/AccountTours/Components/Button";
import Account from "../../../layouts/account/account";
import { connect } from 'react-redux'
import {getLanguages} from "../../../redux/actions/toursActions";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import FileInput from "../../../components/AccountTours/FormFields/FileInput";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import {addTeamMemberAvatar, getTeamMember, updateTeamMember} from "../../../redux/actions/profileActions";
import CircularProgress from '@mui/material/CircularProgress'
import {isNotEmptyObject} from "../../../functions";
import {clear_confirm_status, email_confirm_request} from "../../../redux/actions/authActions";

const TeamEdit = ({language, user, status, getLanguages, languages, member, updateTeamMember, addTeamMemberAvatar, getTeamMember, email_confirm_request, clear_confirm_status, match}) => {

  const history = useHistory()
  const member_id = match.params.id

  useEffect(() => {
    getTeamMember(member_id)
  }, [])


  useEffect(() => {
    getLanguages()
  }, [])


  // const storage = localStorage.getItem('team_member_id')

  // useEffect(() => {
  //   if(isNotEmptyObject(member) && (!storage || storage === 'undefined')) {
  //     localStorage.setItem('team_member_id', member.id)
  //   } else if(storage && storage !== 'undefined' && !isNotEmptyObject(member)) {
  //     getTeamMember(localStorage.getItem('team_member_id'))
  //   } else {
  //     // history.push('/account/team')
  //   }
  // }, [member])




  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(false)
  const [requestActive, setRequestActive] = useState(false)

  useEffect(() => {
    if(member) {
      setProfile({
        ...profile,
        first_name: member.first_name,
        midle_name: member.midle_name,
        last_name: member.last_name,
        email: member.email,
        languages: member.languages,
        about: member.about,
      })
    }
  }, [member])

  useEffect(() => {
    if(loading && member && member.avatar) {
      setLoading(false)
    }
  }, [loading, member])

  const handleChange = (name, value) => {
    setProfile({
      ...profile,
      [name]: value,
    })
  }

  const handleAvatarChange = (image) => {
    setLoading(true)
    addTeamMemberAvatar(image, member.id)
  }

  const handleSubmit = () => {
    updateTeamMember({
      ...profile,
    }, member.id)
    history.push(`/${language}/account/team`)
  }

  const handleModalClose = () => {
    setRequestActive(false)
    clear_confirm_status()
  }

  // const handleEmailConfirm = () => {
  //   setRequestActive(true)
  //   email_confirm_request()
  //   setTimeout(() => handleModalClose(), 3000)
  // }

  return (
    <Account subtitle='Моя команда' title='Добавить члена команды' menu_item='team'>
      <>
        {status === 'experts' && !loading && (
          <main>
            <div className='global-h2-heading'>
              <h2>Добавить члена команды</h2>
            </div>
            <SingleWrapper full={true} margin={0} label={'Аватар'}>
              <FileInput
                name='avatar'
                action={handleAvatarChange}
                value={member && member.avatar}
                max={1}
                type={'team_member'}
                member={member}
              />
            </SingleWrapper>
            <SingleWrapper full={true} margin={0} label={'Фамилия'}>
              <Input
                label={'Фамилия'}
                name='last_name'
                action={handleChange}
                value={profile.last_name}
              />
            </SingleWrapper>
            <DoubleWrapper full={true} margin={0}>
              <Input
                label={'Имя'}
                name='first_name'
                action={handleChange}
                value={profile.first_name}
              />
              <Input
                label={'Отчество'}
                name='midle_name'
                action={handleChange}
                value={profile.midle_name}
              />
            </DoubleWrapper>
            <DoubleWrapper full={true}>
              <Input
                label={'Номер телефона'}
                action={handleChange}
                name='phone'
                value={profile.phone}
              />
              <Input
                label={'Email'}
                action={handleChange}
                name='email'
                value={profile.email}
              />
            </DoubleWrapper>
            {/*<DoubleWrapper full={true} undertext={true}>*/}
            {/*  {profile.phone_confirmed ? (<div className="verified-note">*/}
            {/*      <span className="confirmed-green">Телефон подтвержден и скрыт от других пользователей</span>*/}
            {/*    </div>*/}

            {/*  ) : (<div className="verified-note">*/}
            {/*    Телефон не подтвержден! <span>Подвердить?</span>*/}
            {/*  </div>)}*/}
            {/*  {profile.email_confirmed ? (<div className="verified-note">*/}
            {/*    <span className="confirmed-green">Email подтвержден</span>*/}
            {/*  </div>) : (<div className="verified-note">*/}
            {/*    Email не подтвержден! <span*/}
            {/*    // onClick={handleEmailConfirm}*/}
            {/*    style={{cursor: 'pointer'}}*/}
            {/*  > Подвердить?</span>*/}
            {/*  </div>)}*/}
            {/*</DoubleWrapper>*/}
            <SingleWrapper full={true} margin={0} label={'Расскажите о гиде*'}>
              <TextArea
                name='about'
                label='Расскажите о гиде'
                action={handleChange}
                value={profile.about}
              />
            </SingleWrapper>
            {/*<SingleWrapper margin={0} label={'Язык гида'} width={'50%'}>*/}
            {/*  <SelectInput*/}
            {/*    name='languages'*/}
            {/*    label='Выберите языки'*/}
            {/*    action={handleChange}*/}
            {/*    options={languages}*/}
            {/*    val={profile.languages}*/}
            {/*    multiple={true}*/}
            {/*  />*/}
            {/*</SingleWrapper>*/}
            <Button text={'Сохранить'} width={'50%'} action={handleSubmit}/>
          </main>
        )}
        {loading && <CircularProgress/>}
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

export default connect(mapStateToProps, { getLanguages, updateTeamMember, addTeamMemberAvatar, getTeamMember, email_confirm_request, clear_confirm_status })(TeamEdit)