import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import {setCurrentSection, setKey, tourToServer, tourToServerError} from '../../redux/actions/toursActions'
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import isNotEmptyObject from "../../helpers/isNotEmptyObject";
import PopUp from "../PopUp/PopUp";
import {APPLICATION_CONFIG, application_config} from "../../data";
import {getData, setConfig, tourTrimmed} from "../../functions";

const SecondaryNav = ({ language, setCurrentSection, secondary_nav, secondary, secondary_item, tour_id, tour, tourToServer, tourToServerError, setKey }) => {

  const history = useHistory()

  const handleClick = data => {

    if (data && data.active && data.value) {
      setCurrentSection(data.value)
    }
  }
  const [activePopUp, setActivePopUp] = useState(false)
  const [sectionChecked, setSectionChecked] = useState(false)
  const [sectionUrl, setSectionUrl] = useState('')

  const handleNavigate = async (e, url) => {
    e.preventDefault()

    setSectionChecked(false)
    setSectionUrl(url)
    console.log('secondary_item', secondary_item)
    const config = setConfig(!!localStorage.getItem('access'))

    let new_tour = tourTrimmed(tour)

    const data = getData(new_tour, '', secondary_item)
    const body = JSON.stringify(data)

    try {
      const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${tour.id}/`, body, config)
      tourToServer(res.data)
      setSectionChecked(true)      

    } catch (err) {
      console.error(err)
      const errStatus = err.response.status
      const errData = err.response.data
      tourToServerError(errData)
      errStatus >= 400 && errStatus < 500 ? setKey(Object.keys(errData)[0]) : setActivePopUp(true)
      }
  }

  useEffect(() => {
		if (sectionChecked && sectionUrl) {
			history.push(`${sectionUrl}`)
		}
	}, [sectionChecked])


  return (
    secondary && (
      <>
        {activePopUp && <PopUp status={'cancel'} title={'Упс... Что-то пошло не так'}
                               text={'Попробуйте заново внести всю информацию на странице и нажать "Продолжить"'}
                               button={'Ок'} action={() => {
          setActivePopUp(false)
        }}/>}
        <ul>
          {secondary_nav &&
            secondary_nav.map((item, index) => (
              <li
                className='li-border-none'
                key={index}
                // onClick={() => handleClick(item)}
              >
                <Link to={`/account/tours/${tour_id}/edit/${item.value}`} style={{width: '100%'}} onClick={e => handleNavigate(e, `/account/tours/${tour_id}/edit/${item.value}`)}>
                <div
                  className={`tours-submenu-name-wrap ${
                    secondary_item === item.value ? 'item-active' : 'item-inactive'
                  }`}
                  // onClick={() => handleClick(item)}
                >
                  {item.text}
                  <svg
                    width='17'
                    height='17'
                    viewBox='0 0 17 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='8.5'
                      cy='8.5'
                      r='8.5'
                      fill={item.active ? '#84BB59' : '#BFBFBF'}
                    />
                    <path
                      d='M11.5085 5.27211L7.29117 9.75675L5.49156 7.84294C5.15032 7.48017 4.59705 7.48017 4.25593 7.84294C3.91469 8.20595 3.91469 8.79421 4.25593 9.1571L6.67336 11.7279C6.84392 11.9093 7.06761 12 7.29117 12C7.51474 12 7.73843 11.9093 7.90899 11.7279L12.744 6.58626C13.0853 6.22337 13.0853 5.635 12.7441 5.27223C12.403 4.90934 11.8497 4.90922 11.5085 5.27211Z'
                      fill='white'
                    />
                  </svg>
                </div>
                </Link>
              </li>
            ))}
        </ul>
      </>
    )
  )
}

const mapStateToProps = state => ({
  activeSections: state.tours.active_sections,
  secondary_nav: state.tours.secondary_nav,
  secondary: state.tours.secondary,
  tour: state.tours.current_tour,
  language: state.languages.language,
})

export default connect(mapStateToProps, { setCurrentSection, tourToServerError, tourToServer, setKey })(SecondaryNav)
