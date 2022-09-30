import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux'

import {
  getTourTypes,
  updateTour,
  updateTourWallpaper,
  setName,
  tourToServer,
  getTour,
  getCurrencies,
  getCities,
  getTourPropertyTypes,
  getTourAccomodations,
  getLanguages, setKey, clearErrors,
  tourToServerError,
  clearCurrentTour,
} from '../../redux/actions/toursActions'

import ToursEditLayout from "../../layouts/account/ToursEditLayout";
import {getTeamMembers} from "../../redux/actions/profileActions";
import isNotEmptyObject from "../../helpers/isNotEmptyObject";
import CircularProgress from "@mui/material/CircularProgress";
import PopUp from "../../components/PopUp/PopUp";
import SubmitButton from "../../components/AccountTours/Components/SubmitButton";
import axios from "axios";
import {UPDATE_TOUR_FAIL, UPDATE_TOUR_SUCCESS} from "../../redux/types";
import {APPLICATION_CONFIG} from "../../data";
import {tourTrimmed, getData, setConfig} from "../../functions";

const ToursFormLayout = ({
                           language,
                           section_slug,
                           section_name,
                           tour_id,
                           forward_url,
                           backward_url,
                           submit_url,
                           children,
                           tour,
                           getCurrencies,
                           getCities,
                           getTourPropertyTypes,
                           getTourAccomodations,
                           getLanguages,
                           getTourTypes,
                           getTeamMembers,
                           getTour,
                           setKey,
                           clearErrors,
                           tourToServerError,
                           tourToServer,
                           clearCurrentTour,
                         }) => {

  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [activePopUp, setActivePopUp] = useState(false)
  const [status, setStatus] = useState(false)
  const [direction, setDirection] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    // window.scrollTo(0, 0)
    getTourTypes()
    getTeamMembers()
    getCurrencies()
    getCities()
    getTourPropertyTypes()
    getTourAccomodations()
    getLanguages()
    return () => clearErrors()
  }, [])

  useEffect(() => {
    if(status){
      if(direction == 'forward') {
        history.push(`/${language}/account/tours/${tour_id}/edit/${forward_url}`)
      } else if(direction == 'backward') {
        history.push(`/${language}/account/tours/${tour_id}/edit/${backward_url}`)
      } else if(direction == 'submit') {
        history.push(`/${language}${submit_url}`)
      }
    }
  }, [status])

  const toServer = async (section) => {
    const config = setConfig(!!localStorage.getItem('access'))

    // const config = APPLICATION_CONFIG

    let new_tour = tourTrimmed(tour)

    const data = getData(new_tour, '', section)
    // const data = getData(new_tour, 'submit', section)

    const body = JSON.stringify(data)

    try {
      const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${tour_id}/`, body, config)

      setStatus(true)

      tourToServer(res.data)


    } catch (err) {

      const errStatus = err.response.status
      const errData = err.response.data
      tourToServerError(errData)
      errStatus >= 400 && errStatus < 500 ? setKey(Object.keys(errData)[0]) : setActivePopUp(true)
    }
  }

  const toModeration = async () => {
    const config = setConfig(!!localStorage.getItem('access'))

    let new_tour = tourTrimmed(tour)

    const data = getData(new_tour, 'submit', '')

    const body = JSON.stringify(data)

    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${tour_id}/`, body, config)
      history.push(`/${language}${submit_url}`)
      clearCurrentTour()

    } catch (err) {
      const errStatus = err.response.status
      const errData = err.response.data
      if(errData?.message) {
        setErrorMessage(errData?.message)
      }
      if(errStatus === 403) {
        setActivePopUp(true)
      }
      tourToServerError(errData)
      errStatus >= 400 && errStatus < 500 ? setKey(Object.keys(errData)[0]) : setActivePopUp(true)
    }
  }

  useEffect(() => {
    const loadTour = async () => {
      setLoading(true)
      await getTour(tour_id)
    }
    if (!isNotEmptyObject(tour) && direction !== 'submit') {
      loadTour().then(() => setLoading(false))
    }
  }, [tour, direction])


  return (
    <>
      <ToursEditLayout secondary_item={section_slug} secondary_name={section_name} tour_id={tour_id}>
        {activePopUp && <PopUp status={'cancel'} title={errorMessage ? errorMessage : 'Упс... Что-то пошло не так'}
                               text={'Попробуйте заново внести всю информацию и нажать "Продолжить"'}
                               button={'Ок'} action={() => {
          setActivePopUp(false)
        }}/>}
        <div className='my-tours-section-heading'>
          <h4>{section_name}</h4>
        </div>
        {!loading &&
          <>
            {children}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '66%',
              }}
            >
              {backward_url && <SubmitButton
                text={'Назад'}
                color={'button-primary'}
                section={section_slug}
                direction={'backward'}
                action={toServer}
                action2={setDirection}
              />}
              {forward_url && <SubmitButton
                text={'Продолжить'}
                color={'button-success'}
                section={section_slug}
                direction={'forward'}
                action={toServer}
                action2={setDirection}
              />}
              {submit_url && <SubmitButton
                text={'На модерацию'}
                color={'button-success'}
                section={section_slug}
                direction={'submit'}
                action={toModeration}
                action2={setDirection}
              />}

            </div>
          </>}
        {loading && (
          <>
            <div className='form-loader-spinner'>
              <CircularProgress/>
            </div>
          </>
        )}

      </ToursEditLayout>
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  toursTypes: state.tours.tour_types,
  tour: state.tours.current_tour,
  res_status: state.tours.res_status,
  tour_name: state.tours.tour_name,
  members: state.profile.members,
})

export default connect(mapStateToProps, {
  getTourTypes,
  updateTour,
  updateTourWallpaper,
  setName,
  tourToServer,
  getTeamMembers,
  getTour,
  getCurrencies,
  getCities,
  getTourPropertyTypes,
  getTourAccomodations,
  getLanguages,
  setKey,
  clearErrors,
  tourToServerError,
  clearCurrentTour,
})(ToursFormLayout)
