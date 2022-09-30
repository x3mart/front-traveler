import React, { useState, useEffect } from 'react'
import Input from './Input'
import DayAfterDay from './DayAfterDay'

import SingleWrapper from './SingleWrapper'
import TextEditor from './TextEditor'

const DaysHandler = ({ action, old_data, label, type = 'text', day_num }) => {

    const [days, setDays] = useState(['1'])
    const [newDay, setNewDay] = useState('')

    

    const addNewDay = () => {
      let num = parseInt(days[days.length - 1]) + 1
      setNewDay(num.toString())
    }

    useEffect(() => {
      newDay && setDays([...days, newDay])
      newDay && setData([...data, { day_num: newDay }])
    }, [newDay])

    const [data, setData] = useState([])

    const dataHandler = (day) => {
        setData([
            ...data,
            day
        ])
    }
  

  return (
    <>
      {days.map((item, index) => (
        <DayAfterDay
          key={index}
          day_num={item}
          action={dataHandler}
          name='tour_activities'
          old_data={data[index] ? data[index] : {}}
        />
      ))}

      <button className='add-component' onClick={addNewDay}>
        Добавить день
      </button>
    </>
  )
}

export default DaysHandler
