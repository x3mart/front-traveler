import React, { useState, useEffect, useRef } from 'react'
import menu from '../../../assets/img/menu-dots.svg'

import { connect } from 'react-redux'
import Modal from "./Modal";
import {Link, useHistory} from "react-router-dom";
import {deleteTeamMember, getTeamMember} from "../../../redux/actions/profileActions";
import PopUp from "../../PopUp/PopUp";

const TeamCard = ({
                    language,
                    member,
                    deleteTeamMember,
                    getTeamMember,
                  }) => {
  const history = useHistory()

  const myRef = useRef()

  const [active, setActive] = useState(false)
  const [more, setMore] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [about, setAbout] = useState('')
  const [activePopUp, setActivePopUp] = useState(false)

  useEffect(() => {
    if(member && member.about && member.about.length>120) {
      setMore(true)
      setAbout(member.about.substring(0,120) + '...')
    } else {
      setAbout(member.about)
    }
  })

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setActive(false)
    }
  }

  const handleMemberEdit = () => {
    history.push(`${language}/account/team/${member.id}/edit`)
  }

  const handleMenu = () => {
    setActive(true)
  }
  const handleDelete = () => {
    deleteTeamMember(member.id)
    setActivePopUp(false)
    // location.reload()
  }

  return (
    <>
      {activePopUp && <PopUp status={'danger'}
                             title={'Уверены, что хотите удалить?'}
                             text={'Информация будет удалена навсегда.'}
                             button={'Отменить'}
                             button2={'Удалить'}
                             action={() => setActivePopUp(false)}
                             second_action={handleDelete}/>}
      <div className='team-card'>
        <div className="team-image-wrapper">
          <div
            onClick={handleMemberEdit}
            className='team-image'
            style={{ backgroundImage: 'url(' + member.avatar + ')' }}
          />
          <div
            className='tour-menu-dots'
            style={{
              padding: '5px',
              position: 'absolute',
              top: 0,
              right: 0,
              cursor: 'pointer',
            }}
            onClick={handleMenu}
          >
            <img src={menu} alt='menu' />
          </div>
          <div
            className='tour-menu'
            ref={myRef}
            style={{
              position: 'absolute',
              top: 20,
              right: 25,
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
              borderRadius: 8,
              backgroundColor: '#fff',
              display: active ? 'block' : 'none',
            }}
          >
            <div
              className='tour-item-top'
              style={{
                padding: 10,
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                lineHeight: '15px',
                textAlign: 'right',
                cursor: 'pointer',
              }}
              onClick={handleMemberEdit}
            >
              Изменить
            </div>
            <div
              className='tour-item-bottom'
              style={{
                padding: 10,
                lineHeight: '15px',
                textAlign: 'right',
                cursor: 'pointer',
              }}
              onClick={() => setActivePopUp(true)}
            >
              Удалить
            </div>
          </div>

        </div>
        <div className='team-data'>
          <div
            className='team-name'
            onClick={handleMemberEdit}
            style={{ cursor: 'pointer' }}
          >
            {member.full_name}
          </div>
          <div className='team-text'>
            {showMore ? member.about : about}
          </div>
          {more && <div className='team-more' onClick={() => setShowMore(!showMore)}>
            {showMore ? 'скрыть' : 'подробнее...'}
          </div>}
        </div>
      </div>
      {/*</div>*/}
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language
})

export default connect(mapStateToProps, { getTeamMember, deleteTeamMember })(
  TeamCard
)
