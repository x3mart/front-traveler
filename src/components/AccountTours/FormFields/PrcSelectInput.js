import React, {useState, useEffect} from 'react'

import Select from 'react-dropdown-select';
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import {connect} from "react-redux";
import {
  tourToServer,
} from "../../../redux/actions/toursActions";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const PrcSelectInput = ({action, name, val, margin, tour, error = {},}) => {

  const [data, setData] = useState([])
  const [currencyName, setCurrencyName] = useState('')
  const [currentError, setCurrentError] = useState([])
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  useEffect(() => {
    if(tour && tour.currency && tour.currency.short_name) {
      setCurrencyName(tour.currency.short_name)
    }
  }, [tour])

  useEffect(() => {
    if(currencyName) {
      setOptions([{id: 0, name: currencyName}, {id: 1, name: '%'}])
    }
  }, [currencyName])

  useEffect(() => {
    if(options.length > 0 && loading) {
      setLoading(false)
    }
  }, [options, loading])

  useEffect(() => {
    if (isNotEmptyObject(error) && error.detail) {
      let arr = []
      arr.push(error.detail)
      setCurrentError(arr)
    } else if (isNotEmptyObject(error) && name === 're_password') {
      setCurrentError(error['password'])
    } else if (error[name]) {
      setCurrentError(error[name])
    }
  }, [error, name])

  useEffect(() => {
    if(options.length > 0){
      let arr = []
      if (val === true) {
        arr.push(options[1])
      } else if (val === false) {
        arr.push(options[0])
      }
      setData(arr)
    }
  }, [options, val])

  const handleSelect = (values) => {
    setCurrentError([])
    action(name, values[0])
  }

  return (
    <>
      {!loading && <div id={name}>
        {options.length > 0 && <Select
          style={{margin: margin, padding: '10px 20px'}}
          className={`custom-select-style ${currentError.length > 0 ? 'error' : 'ok'}`}
          placeholder={'Выбрать'}
          options={options}
          onChange={handleSelect}
          values={data}
          labelField={'name'}
          valueField={'id'}
        />}
        <div className="errors-list">
          <ul>
            {Array.isArray(currentError) && currentError.length > 0 && currentError.map((item, index) => (
              <li key={index}>{item}</li>
            ))
            }
          </ul>
        </div>
      </div>}
      {loading && (
        <div className='fake-file-input loader-spinner'>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </div>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  tourToServer,
})(PrcSelectInput)
