import React, {useEffect, useState} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'

import {connect} from 'react-redux'
import {
  updateTour, deleteKey, clearErrors,
} from '../../../redux/actions/toursActions'

import TextEditor from "../FormFields/TextEditor";
import TextArea from "../FormFields/TextArea";
import Activities from "./Activities";
import ToursFormLayout from "../../../layouts/account/ToursFormLayout";

const Review = ({
                  tour,
                  toursTypes,
                  updateTour,
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
    updateTour({
      ...tour,
      [name]: value,
    })
  }

  const [errorList, setErrorList] = useState([])

  useEffect(() => {
    if(error) {
      setErrorList(error)
    } else {
      setErrorList([])
    }
  }, [error])

  return (
    <>
      <ToursFormLayout
        section_slug={'review'}
        section_name={'Обзор'}
        tour_id={match.params.id}
        forward_url={'prices'}
        backward_url={'main'}
        submit_url={''}
      >
        <SingleWrapper label='Описание тура' comment='' tour={tour} name='description'>
          <TextEditor
            action={handleInput}
            name='description'
            value={tour && tour.description}
            error={error}
          />
        </SingleWrapper>

        <SingleWrapper label='Главные впечатления' comment='Вводить через точку с запятой.' tour={tour} name='main_impressions'>
          <TextArea
            action={handleInput}
            name='main_impressions'
            label=''
            value={tour && tour.main_impressions}
            rows='7'
            error={error}
          />
        </SingleWrapper>

        <SingleWrapper label='Ссылка на видео (youtube или vimeo)' comment='' tour={tour} name='media_link'>
          <Input
            action={handleInput}
            name='media_link'
            value={tour && tour.media_link}
            options={toursTypes}
            error={errorList}
          />
        </SingleWrapper>

        <Activities/>
      </ToursFormLayout>
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  tour: state.tours.current_tour,
  error: state.tours.error,
  field_key: state.tours.key,
})

export default connect(mapStateToProps, {
  updateTour,
  deleteKey,
  clearErrors,
})(Review)
