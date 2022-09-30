import React, {useState, useEffect} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'

import {connect} from 'react-redux'
import {
  setTourImages,
  deleteKey,
  clearErrors,
} from '../../../redux/actions/toursActions'
import ObjectFileInput from "../FormFields/ObjectFileInput";
import ToursFormLayout from "../../../layouts/account/ToursFormLayout";
import MultipleFileInput from "../FormFields/MultipleFileInput";

const Gallery = ({
                   tour,
                   setTourImages,
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

  const handleInput = image => {
    setTourImages(image, tour.id)
  }

  return (
    <>
      <ToursFormLayout
        section_slug={'gallery'}
        section_name={'Галерея'}
        tour_id={match.params.id}
        forward_url={'route'}
        backward_url={'prices'}
        submit_url={''}
      >
        {/*<SingleWrapper*/}
        {/*  label='Добавить фото'*/}
        {/*  comment='Добавьте не менее 7 фотографий, первая из них станет обложкой тура на предпросмотре. НЕ используйте стоковый контент и материалы других фотографов без их разрешения, так как это является нарушением авторского права и может привести к судебным разбирательствам и штрафам. Подробнее о том, где искать и как правильно использовать фото и видео для своих туров смотрите в статье. '*/}
        {/*  tour={tour} name='tour_images'*/}
        {/*>*/}
        {/*  <ObjectFileInput*/}
        {/*    position={'gallery'}*/}
        {/*    tour={tour}*/}
        {/*    action={handleInput}*/}
        {/*    name='tour_images'*/}
        {/*    type='file'*/}
        {/*    error={error}*/}
        {/*    value={tour &&*/}
        {/*      tour.tour_images &&*/}
        {/*      tour.tour_images.length > 0 && tour.tour_images}*/}
        {/*  />*/}
        {/*</SingleWrapper>*/}

        <SingleWrapper
          label='Добавить фото'
          comment='Добавьте не менее 7 фотографий, первая из них станет обложкой тура на предпросмотре. НЕ используйте стоковый контент и материалы других фотографов без их разрешения, так как это является нарушением авторского права и может привести к судебным разбирательствам и штрафам. Подробнее о том, где искать и как правильно использовать фото и видео для своих туров смотрите в статье. '
          tour={tour} name='tour_images'
        >
          <MultipleFileInput
            position={'gallery'}
            tour={tour}
            action={handleInput}
            // delete_action
            name='tour_images'
            type='file'
            error={error}
            section={'gallery'}
            value={tour &&
              tour.tour_images &&
              tour.tour_images.length > 0 ? tour.tour_images : []}
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
  setTourImages,
  deleteKey,
  clearErrors,
})(Gallery)
