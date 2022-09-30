import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'
import ObjectFileInput from '../FormFields/ObjectFileInput'
import SelectInput from '../FormFields/SelectInput'

import { connect } from 'react-redux'
import {
  updateTour,
  setPropertyImage,
  addActivity,
  deleteKey,
  clearErrors,
} from '../../../redux/actions/toursActions'
import ToursFormLayout from "../../../layouts/account/ToursFormLayout";
import MultipleFileInput from "../FormFields/MultipleFileInput";


const Accommodation = ({
                         updateTour,
                         setPropertyImage,
                         toursTypes,
                         tour_property_types,
                         tour_accomodations,
                         tour,
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

  const handleImageLoad = image => {
    setPropertyImage(image, tour.id)
  }

  return (
    <ToursFormLayout
      section_slug={'accommodation'}
      section_name={'Проживание'}
      tour_id={match.params.id}
      forward_url={'details'}
      backward_url={'route'}
      submit_url={''}
    >
      <SingleWrapper label='Где планируется проживание' comment='' tour={tour} name='tour_property_types'>
        <SelectInput
          action={handleInput}
          name='tour_property_types'
          label='Где планируется проживание'
          val={tour && tour.tour_property_types}
          options={tour_property_types}
          multiple={true}
          error={error}
        />
      </SingleWrapper>
      <SingleWrapper
        label='Название отеля'
        comment='Вводите, если уверены в 100% гарантии размещения '
        tour={tour} name='hotel_name'
      >
        <Input
          action={handleInput}
          name='hotel_name'
          value={tour && tour.hotel_name}
          options={toursTypes}
          error={error}
        />
      </SingleWrapper>
      <SingleWrapper label='Размещение' comment='' tour={tour} name='accomodation'>
        <SelectInput
          action={handleInput}
          name='accomodation'
          label='Размещение'
          val={tour && tour.accomodation}
          options={tour_accomodations}
          multiple={true}
          error={error}
        />
      </SingleWrapper>

      <SingleWrapper
        label='Добавить фото мест проживания в путешествии'
        comment=''
        tour={tour} name='tour_property_images'
      >
        <MultipleFileInput
          position={'accommodation'}
          tour={tour}
          action={handleImageLoad}
          name='tour_property_images'
          type='file'
          error={error}
          section={'accommodation'}
          value={tour &&
            tour.tour_property_images &&
            tour.tour_property_images.length > 0 && tour.tour_property_images}
        />
        {/*<ObjectFileInput*/}
        {/*  position={'accommodation'}*/}
        {/*  tour={tour}*/}
        {/*  action={handleImageLoad}*/}
        {/*  name='tour_property_images'*/}
        {/*  value={tour && tour.tour_property_images}*/}
        {/*  type='file'*/}
        {/*  error={error}*/}
        {/*/>*/}
      </SingleWrapper>
    </ToursFormLayout>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  tour_property_types: state.tours.tour_property_types,
  tour_accomodations: state.tours.tour_accomodations,
  tour: state.tours.current_tour,
  error: state.tours.error,
  field_key: state.tours.key,
})

export default connect(mapStateToProps, {
  updateTour,
  setPropertyImage,
  addActivity,
  deleteKey,
  clearErrors,
})(Accommodation)
