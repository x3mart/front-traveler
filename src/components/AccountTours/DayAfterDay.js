import React, { useState, useEffect } from 'react'
import Input from './FormFields/Input'

import SingleWrapper from './Wrappers/SingleWrapper'
import TextEditor from './FormFields/TextEditor'

const DayAfterDay = ({ action, old_data, label, type = 'text', day_num }) => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')

  const [data, setData] = useState({})

  //   const [arr, setArr] = useState([])

  useEffect(() => {
    setName('day_' + day_num)
    setTitle('День ' + day_num)
  }, [])

  useEffect(() => {
    if (old_data) {
      setData(old_data.day_num === day_num ? old_data : '')
    }
  }, [old_data, day_num])

  const handleSend = () => {
    action(data)
  }

  const handleData = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }

  const comment = (
    <div className='comment-markdown'>
      <p>Заполните описание каждого дня путешествия в отдельной ячейке.</p>
      <p>
        Количество дней в описании должно совпадать с количеством дней в туре.
      </p>
      <p>
        Исключение составляют путешествия следующих типов: арт, горнолыжный,
        йога, мама и малыш, серфинг, фитнес.
      </p>
    </div>
  )

  return (
    <div onBlur={handleSend}>
      <SingleWrapper label={title} comment={comment}>
        <Input
          action={handleData}
          name='subtitle'
          old_data={data}
          value={data.subtitle ? data.subtitle : ''}
        />
      </SingleWrapper>
      <SingleWrapper label='Локация' comment=''>
        <Input
          action={handleData}
          name='location'
          old_data={data}
          value={data.location}
          //   options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Описание дня' comment=''>
        <TextEditor
          action={handleData}
          name='day_description'
          old_data={data}
          value={data.day_description}
          //   options={toursTypes}
          // multiple
        />
      </SingleWrapper>
    </div>
  )
}

export default DayAfterDay
