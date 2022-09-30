import React, { useState, useEffect } from 'react'
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";

const NameInput = ({ action, name, type = 'text', value, error = {}, margin = '0', }) => {
  const [data, setData] = useState('')

  const [currentError, setCurrentError] = useState([])

  useEffect(() => {
    if(isNotEmptyObject(error) && error.detail) {
      let arr = []
      arr.push(error.detail)
      setCurrentError(arr)
    } else if(isNotEmptyObject(error) && name === 're_password') {
      setCurrentError(error['password'])
    } else if(error[name]) {
      setCurrentError(error[name])
    }
  }, [error, name])

  useEffect(() => {
    if (value) {
      setData(value)
    }
  })

  const handleData = e => {
    setCurrentError([])
    setData(e.target.value)
    action(name, e.target.value)
  }
  // const handleSend = () => {
  //   action(name, data)
  // }

  return (
    <>
      <div className="with-errors-wrapper" style={{margin: margin}} id={name}>
        <div>
          <input
            className={`custom-input-style ${Array.isArray(currentError) && currentError.length > 0 ? 'error' : 'ok'}`}
            name={name}
            value={data}
            type={type}
            onChange={handleData}
          />
        </div>
        <div className="errors-list">
          {/*{currentError}*/}
          <ul>
            { Array.isArray(currentError) && currentError.length > 0 && currentError.map((item, index) => (
              <li key={index} >{item}</li>
            ))
            }
          </ul>
        </div>
      </div>

    </>
  )
}

export default NameInput
