import React, {useEffect, useState} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import DaysComponent from './DaysComponent'

import {connect} from 'react-redux'
import {
  updateTour,
  deleteKey,
  clearErrors,
} from '../../../redux/actions/toursActions'
import CitySelectInput from "../FormFields/CitySelectInput";
import ToursFormLayout from "../../../layouts/account/ToursFormLayout";
import MapSection from "./MapSection";

const TourRoute = ({
                     tour,
                     updateTour,
                     cities,
                     match,
                     error,
                     deleteKey,
                     field_key,
                     clearErrors,
                   }) => {

  useEffect(() => {
    const scrollTo = async (el) => {
      let anchor = document.getElementById(el)
      anchor && anchor.scrollIntoView({block: "center", behavior: "smooth"})
    }
    if (field_key) {
      scrollTo(field_key).then(() => deleteKey())
    }
    return () => clearErrors()
  }, [field_key])

  const handleInput = (name, value) => {
    updateTour({...tour, [name]: value})
  }

  return (
    <>
      <ToursFormLayout
        section_slug={'route'}
        section_name={'Маршрут'}
        tour_id={match.params.id}
        forward_url={'accommodation'}
        backward_url={'gallery'}
        submit_url={''}
      >
        <DoubleWrapper ratio='1-2' tour={tour}>
          <Input
            action={handleInput}
            name='start_date'
            label='Дата начала тура'
            value={tour && tour.start_date}
            type='date'
            error={error}
          />
          <Input
            action={handleInput}
            name='finish_date'
            label='Дата завершения тура'
            value={tour && tour.finish_date}
            type='date'
            error={error}
          />
        </DoubleWrapper>
        <DoubleWrapper comment='' tour={tour}>
          <Input
            action={handleInput}
            name='start_time'
            value={tour && tour.start_time}
            type='time'
            label='Время начала тура (местное)'
            error={error}
          />
          <Input
            action={handleInput}
            name='finish_time'
            value={tour && tour.finish_time}
            type='time'
            label='Время окончания тура (местное)'
            error={error}
          />
        </DoubleWrapper>

        <SingleWrapper label='Город начала тура' comment='' tour={tour} name='start_city'>
          <CitySelectInput
            action={handleInput}
            name='start_city'
            label='Город начала тура'
            comment=''
            val={tour && tour.start_city}
            options={cities}
            error={error}
          />
        </SingleWrapper>
        <SingleWrapper label='Город конца тура' comment='' tour={tour} name='finish_city'>
          <CitySelectInput
            action={handleInput}
            name='finish_city'
            label='Город конца тура'
            comment=''
            val={tour && tour.finish_city}
            options={cities}
            error={error}
          />
        </SingleWrapper>

        <SingleWrapper label='Маршрут на карте' comment='' width={'100%'}>
          <MapSection/>
        </SingleWrapper>

        <DaysComponent/>
      </ToursFormLayout>
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
  cities: state.tours.cities,
  error: state.tours.error,
  field_key: state.tours.key,
})

export default connect(mapStateToProps, {
  updateTour,
  deleteKey,
  clearErrors,
})(TourRoute)
