import React, { useEffect, useState } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'
import ObjectFileInput from '../FormFields/ObjectFileInput'
import TextEditor from '../FormFields/TextEditor'
import Button from './Button'

import {
  addExtraService,
  updateExtraService,
  setDayImage,
} from '../../../redux/actions/toursActions'
import { connect } from 'react-redux'
import TextArea from "../FormFields/TextArea";

const Day = ({ id, day, action, tour, addExtraService, updateExtraService, setDayImage, error, }) => {
  

  const handleInput = (name, value) => {
    updateExtraService(id, name, value)
  }
 
  return (
    <>
      <SingleWrapper label='Описание услуги' comment=''>
        <TextArea
          action={handleInput}
          name='extra_text'
          label=''
          value={day && day.extra_text}
          rows='7'
          error={error}
        />
      </SingleWrapper>
      <SingleWrapper label='Стоимость услуги' comment=''>
        <Input
          action={handleInput}
          name='extra_service_price'
          value={day && day.extra_service_price}
          error={error}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
  error: state.tours.error,
})

export default connect(mapStateToProps, { addExtraService, updateExtraService, setDayImage })(Day)
