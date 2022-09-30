import React, { useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import TextEditor from '../FormFields/TextEditor'

import { connect } from 'react-redux'
import {
  updateTour,
  deleteKey,
  clearErrors,
} from '../../../redux/actions/toursActions'
import ToursFormLayout from "../../../layouts/account/ToursFormLayout";

const ExtraServices = ({
                         tour,
                         updateTour,
                         match,
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

  return (
    <>
      <ToursFormLayout
        section_slug={'important'}
        section_name={'Важно знать'}
        tour_id={match.params.id}
        forward_url={''}
        backward_url={'details'}
        submit_url={'/account/tours/list'}
      >
        <SingleWrapper label='Требования к гостю' comment='' tour={tour} name={'guest_requirements'}>
          <TextEditor
            action={handleInput}
            name='guest_requirements'
            value={tour && tour.guest_requirements}
          />
        </SingleWrapper>
        <SingleWrapper label='Что взять с собой?' comment='' tour={tour} name={'take_with'}>
          <TextEditor
            required={true}
            action={handleInput}
            name='take_with'
            value={tour && tour.take_with}
          />
        </SingleWrapper>
        <SingleWrapper label='Ключевые  особенности?' comment='' tour={tour} name={'key_features'}>
          <TextEditor
            action={handleInput}
            name='key_features'
            value={tour && tour.key_features}
          />
        </SingleWrapper>
        <SingleWrapper label='Что нового я увижу?' comment='' tour={tour} name={'new_to_see'}>
          <TextEditor
            action={handleInput}
            name='new_to_see'
            value={tour && tour.new_to_see}
          />
        </SingleWrapper>
      </ToursFormLayout>
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
  error: state.tours.error,
  field_key: state.tours.key,
})

export default connect(mapStateToProps, {
  updateTour,
  deleteKey,
  clearErrors,
})(ExtraServices)
