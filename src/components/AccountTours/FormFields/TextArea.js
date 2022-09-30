import React, {useState, useEffect} from 'react'
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";

const TextArea = ({
                    label, action, name, value, rows = 5, required, error = {},
                  }) => {
  const [data, setData] = useState('')
  const [currentError, setCurrentError] = useState([])

  useEffect(() => {
    if(error && error.detail) {
      let arr = []
      arr.push(error.detail)
      setCurrentError(arr)
    } else if(error && name === 're_password') {
      setCurrentError(error['password'])
    } else if(error && error[name]) {
      setCurrentError(error[name])
    }
  }, [error, name])

  useEffect(() => {
    if (value) {
      setData(value)
    }
  }, [value])

  const handleData = e => {
    setCurrentError([])
    setData(e.target.value)
    action(name, e.target.value)
  }

  return (
      <div className="with-errors-wrapper" id={name}>
    <textarea
      required={required}
      className={`custom-textarea-style ${currentError.length > 0 ? 'error' : 'ok'}`}
      placeholder={label}
      name={name}
      value={data}
      onChange={handleData}
      rows={rows}
    />
        <div className="errors-list">
          {/*{currentError}*/}
          <ul>
            { Array.isArray(currentError) && currentError.length > 0 && currentError.map((item, index) => (
              <li key={index} >{item}</li>
            ))
            }
          </ul>
        </div>
    </div>)
}

export default TextArea
