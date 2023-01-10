import React, {useState, useEffect} from 'react'

import Select from 'react-dropdown-select';
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import {connect} from "react-redux";
import {
  tourToServerUpdate,
} from "../../../redux/actions/toursActions";

const SelectInput = ({action, name, label, val, options, multiple, margin, basic_type, required, tour,
                       tourToServerUpdate, labelField='name', currency, prc=false, error = {}, disabled=false}) => {

  const [data, setData] = useState([])
  const [optionsArray, setOptionsArray] = useState([])
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
    if(prc) {
      if(currency) {
        setOptionsArray([{id: 0, name: currency}, {id: 1, name: '%'}])
      } else {
        setOptionsArray([{id: 1, name: '%'}])
      }
    }
  }, [prc, currency])


  useEffect(() => {
    if(prc && optionsArray) {
      let arr = []
      if(val === true) {
        arr.push(optionsArray[1])
      } else if(val === false) {
        arr.push(optionsArray[0])
      }
      setData(arr)
    }
  }, [prc, optionsArray, val])

  const handleSelect = (values) => {
    setCurrentError([])
    if(!multiple){
      action(name, values[0])
    } else {
      action(name, values)
    }
  }

  const handleAddNew = (values) => {
    tourToServerUpdate({
      ...tour,
      [name]: values.name
    }, tour.id)
  }

  useEffect(() => {
    if(basic_type) {
      setOptionsArray(options.filter(item => item.id !== basic_type.id))
    } else if(prc) {
    } else {
      setOptionsArray(options)
    }
  }, [options, basic_type, prc, val])

  useEffect(() => {
    if (labelField === 'tour_date' && val) {
      setData(options.filter(item => item.id == val))
    } else if (Array.isArray(val) && val.length > 0 && basic_type) {
      setData(val.filter(item => item.id !== basic_type.id))
    } else if (Array.isArray(val) && val.length > 0) {
      setData(val)
    } else if (val && !Array.isArray(val) && isNotEmptyObject(val)) {
      let arr = []
      arr.push(val)
      setData(arr)
    }
  }, [val, basic_type, labelField])

  return (
    <div id={name}>
      {!prc && <Select
        required={required}
        style={{margin: margin, padding: '10px 20px'}}
        className={`custom-select-style ${currentError.length > 0 ? 'error' : 'ok'}`}
        placeholder={labelField === 'tour_date' ? 'Выбрать дату тура' : 'Выбрать'}
        searchable
        searchBy={'name'}
        // clearable
        multi={multiple}
        options={optionsArray}
        onChange={handleSelect}
        values={data}
        labelField={labelField}
        valueField={'id'}
        create={!multiple && true}
        onCreateNew={handleAddNew}
        createNewLabel="Добавить {search}"
        disabled={disabled}
      />}
      {prc && currency && optionsArray.length> 0 && <Select
        required={required}
        style={{margin: margin, padding: '10px 20px'}}
        className={`custom-select-style ${currentError.length > 0 ? 'error' : 'ok'}`}
        placeholder={'Выбрать'}
        // clearable
        options={optionsArray}
        onChange={handleSelect}
        values={data}
        labelField={'name'}
        valueField={'id'}
        disabled={disabled}
      />}
      <div className="errors-list">
        {/*{currentError}*/}
        <ul>
          {Array.isArray(currentError) && currentError.length > 0 && currentError.map((item, index) => (
            <li key={index} >{item}</li>
          ))
          }
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  tourToServerUpdate,
})(SelectInput)
