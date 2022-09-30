import React, {useState, useEffect} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import RemoteDataSelect from '../FormFields/RemoteDataSelect'


import {connect} from 'react-redux'
import {
  clearCurrentTour,
  setEditing,
  copyTour
} from '../../../redux/actions/toursActions'
import Input from "../FormFields/Input";
import SelectInput from "../FormFields/SelectInput";
import Button from "./Button";


const Modal = ({
                 title,
                 copyTour,
                 tour_id,
                 button_name,
                 action,
               }) => {


  const [active, setActive] = useState(false)
  const [date, setDate] = useState('')
  const [dataType, setDataType] = useState('')

  const handleSubmit = () => {
    const date_obj = {start_date: date}
    copyTour(tour_id, date_obj)
    clearCurrentTour()
    setEditing(false)
    // setTimeout(() => {
    //
    // }, 1000)
    setActive(false)
    action()
  }

  const handleOpen = () => {
    setActive(true)
  }
  const handleClose = () => {
    setActive(false)
  }
  const handleInput = (name, value) => {
    setDate(value)
  }

  return (
    <>
      <div onClick={handleOpen} style={{
        cursor: 'pointer',
      }}>
        {button_name}
      </div>

      <div className={`modal-wrapper ${active && 'modal-active'}`}>
        <div className='modal-body'>
          <div className='modal-header'>
            Введите дату начала нового тура.
            <div onClick={handleClose} className='modal-close-button'/>
          </div>
          <div className='modal-content'>
            <div className='my-tours-input-section'>
              <div className='my-tours-input-full-modal'>
                <Input
                  action={handleInput}
                  name='start_date'
                  label='Дата начала тура'
                  value={date}
                  type='date'
                  // multiple
                />
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <Button text='Копировать тур' action={handleSubmit}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect(null, {
  clearCurrentTour,
  setEditing,
  copyTour
})(Modal)