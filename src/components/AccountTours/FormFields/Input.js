import React, {useState, useEffect} from 'react'
import email from '../../../assets/img/message.svg'
import password from '../../../assets/img/padlock5.svg'
import user from '../../../assets/img/user.svg'
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Input = ({
                 disabled = false,
                 label,
                 action,
                 name,
                 type = 'text',
                 value,
                 required,
                 icon,
                 error = null,
                 margin = '0',
                 tour,
                 spinner = false,
                 clear = false,
                 blur_action,
               }) => {
  const [data, setData] = useState('')
  const [currentError, setCurrentError] = useState([])

  useEffect(() => {
    if (clear) {
      setData('')
    }
  }, [clear])

  useEffect(() => {
    if (error && error.detail) {
      let arr = []
      arr.push(error.detail)
      setCurrentError(arr)
    } else if (error && name === 're_password') {
      setCurrentError(error['password'])
    } else if (error && name === 'phone') {
      setCurrentError(error['phone'])
    } else if (error && error[name]) {
      setCurrentError(error[name])
    } else {
      setCurrentError([])
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
  // const handleSend = () => {
  //   action(name, data)
  // }


  return (<>
      <div className="with-errors-wrapper" style={{margin: margin}} id={name}>
        {type === 'date' && <input
          required={required}
          className={`custom-input-style not-phone-input ${currentError?.length > 0 ? 'error' : 'ok'}`}
          placeholder={label}
          name={name}
          value={data}
          type={type}
          onChange={handleData}
          max="2999-12-31"
          onBlur={blur_action}
        />}
        {type !== 'date' && <>

          {icon && !spinner && <div className={`with-icon`}>
            <input
              required={required}
              className={`custom-input-style not-phone-input ${currentError?.length > 0 ? 'error' : 'ok'}`}
              placeholder={label}
              name={name}
              value={data}
              type={type}
              onChange={handleData}
            />
            <div className='with-icon-image'>
              <img src={icon === 'email' ? email : icon === 'user' ? user : password} alt="icon"/>
            </div>

          </div>}
          {!icon && !spinner && <div>
            <input
              required={required}
              className={`custom-input-style not-phone-input ${currentError?.length > 0 ? 'error' : 'ok'}`}
              placeholder={label}
              name={name}
              value={data}
              type={type}
              onChange={handleData}
              disabled={disabled}
            />
          </div>}

          {spinner && <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress/>
          </Box>}


        </>}
        <div className="errors-list">
          {/*{currentError}*/}
          <ul>
            {Array.isArray(currentError) && currentError.length > 0 && currentError.map((item, index) => (
              <li key={index}>{item}</li>))}
          </ul>
        </div>
      </div>
    </>

  )
}
export default Input