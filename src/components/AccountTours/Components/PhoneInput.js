import React, {useState, useEffect, useRef} from 'react'
import email from '../../../assets/img/message.svg'
import password from '../../../assets/img/padlock5.svg'
import user from '../../../assets/img/user.svg'
import {connect} from 'react-redux'
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {COUNTRIES} from "../../../data";
import InputMask from 'react-input-mask';

const PhoneInput = ({
                      language,
                      disabled = false,
                      label,
                      action,
                      name,
                      type = 'phone',
                      value,
                      region_code,
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
  const [currentRegion, setCurrentRegion] = useState(null)
  const [codeWidth, setCodeWidth] = useState(0)
  const [regionCode, setRegionCode] = useState('')
  const [activeModal, setActiveModal] = useState(false)

  const code_ref = useRef()
  const modal_body = useRef()

  useEffect(() => {
    setCodeWidth(code_ref.current.clientWidth)
  }, [code_ref])

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
    } else if (error && name === 'phone') {
      setCurrentError(error['phone'])
    }
  }, [error, name])

  useEffect(() => {
    if (value) {
      setData(value)
    }
  }, [value])

  useEffect(() => {
    if (region_code) {
      setRegionCode(region_code)
    }
  }, [region_code])

  useEffect(() => {
    if (language) {
      setCurrentRegion(COUNTRIES.filter(item => item.iso === language.toUpperCase())[0])
    }
  }, [language])

  const handleData = e => {
    setCurrentError([])
    setData(e.target.value)
    action(name, e.target.value)
  }

  const RegionSelectModal = () => {
    return (
      <>
        <div className="region-select-modal-wrapper">
          <div ref={modal_body} className="region-select-modal-body">

            <div ref={modal_body} className="region-select-modal-body-elements-wrapper">
              {COUNTRIES.map((item, index) => (
                <>
                  <div key={index} className="region-select-modal-body-element" onClick={() => {
                    setCurrentRegion(item)
                    setRegionCode(item.code)
                    setData('')
                    setActiveModal(false)
                  }}>
                    <div className="region-select-modal-body-element-name">
                      {item.native_name}
                    </div>
                    <div className="region-select-modal-body-element-data">
                      +{item.code}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }


  return (<>
      <div className="with-errors-wrapper" style={{margin: margin}} id={name}>
        {activeModal && <RegionSelectModal/>}
        <div className={`phone-select-input-wrapper`}>
          <div className={`phone-select-input ${currentError?.length > 0 ? 'error' : 'ok'}`}>
            <div className='phone-select-input-flag-wrapper'>
              <img src={currentRegion?.flag} alt="icon" onClick={() => setActiveModal(true)}/>
            </div>
            <div ref={code_ref} className='phone-select-input-country_code-wrapper'>
              {`+${regionCode}`}
            </div>
            <InputMask
              // style={{paddingLeft: `${58 + codeWidth}px`}}
              mask={currentRegion?.mask}
              required={required}
              className={`phone-select-input-style`}
              placeholder={currentRegion?.mask}
              name={name}
              value={data}
              type={type}
              onChange={handleData}
            />
          </div>

        </div>

        {spinner && <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <CircularProgress/>
        </Box>}
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

const mapStateToProps = state => ({
  language: state.languages.language,
})

export default connect(mapStateToProps)(PhoneInput)