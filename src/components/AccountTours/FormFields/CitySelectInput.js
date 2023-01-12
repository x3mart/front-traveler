import React, {useState, useEffect, useRef} from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import ok from '../../PopUp/ok.svg'
import close from '../../PopUp/close.svg'
import styles from '../../PopUp/PopUp.module.css'
import useOutsideClick from "../../../hooks/useOutsideClick";
import Select from 'react-dropdown-select';
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import {connect} from "react-redux";
import {
  getCities,
  tourToServerUpdate,
} from "../../../redux/actions/toursActions";
import useDebounce from "../../../hooks/useDebounce";
import axios from "axios";
import {GET_CITIES_FAIL, GET_CITIES_SUCCESS} from "../../../redux/types";
import {setConfig} from "../../../functions";
import Button from "../../AccountTours/Components/Button";
import PopUp from "../../PopUp/PopUp"


const CitySelectInput = ({action, name, label, val, options, multiple, margin, basic_type, required, tour,
                       tourToServerUpdate, labelField='name', error = {},}) => {

  const [data, setData] = useState([])
  const [optionsArray, setOptionsArray] = useState([])
  const [currentError, setCurrentError] = useState([])
  const [newCity, setNewCity] = useState(null)
  const popup_ref = useRef()
  useOutsideClick(popup_ref, () => close_action());

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

  const handleSelect = (values) => {
    if(!multiple){
      action(name, values[0])
      console.log(name, values[0])
    } else {
      action(name, values)
    }
    setCurrentError([])
  }

  const confirmAddNew = (values) => {
    setNewCity(values)
  }

  const cancelAddNew = () => {
    setData([])
    setCurrentDestination([])
    setNewCity(null)
  }

  const handleAddNewCity = () => {
    tourToServerUpdate({
      ...tour,
      [name]: {
        id: null,
        full_name: newCity.full_name,
        destination_id: currentDestination.id
      }
    }, tour.id)
    setCurrentError([])
    setNewCity(null)
    setCurrentDestination([])
  }

  const handleDestination = (values) => {
    setCurrentDestination(values[0])
  }

  useEffect(() => {
    if(basic_type) {
      setOptionsArray(options.filter(item => item.id !== basic_type.id))
    } else {
      setOptionsArray(options)
    }
  }, [options, basic_type])

  useEffect(() => {
    if (Array.isArray(val) && val.length > 0 && basic_type) {
      setData(val.filter(item => item.id !== basic_type.id))
    } else if (Array.isArray(val) && val.length > 0) {
      setData(val)
    } else if (val && !Array.isArray(val) && isNotEmptyObject(val)) {
      let arr = []
      arr.push(val)
      setData(arr)
    }
  }, [val, basic_type])

  useEffect(() => {
    async function getDestinations() {
      if (newCity && !destinations?.length) {
        const config = setConfig(!!localStorage.getItem('access'))
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/destinations/`, config)
          setDestinations(res.data)
        } catch (err) {
          console.log(err)
        }
      }
    }
    getDestinations()
  }, [newCity])

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [currentDestination, setCurrentDestination] = useState([])

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const searchCharacters = async (search) => {
    const config = setConfig(!!localStorage.getItem('access'))

    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/cities/?search=${search}`, config)
      setResults(res.data)
      setIsSearching(false);
    } catch (err) {
    }
  }

  const onSearch = ({ props, state, methods }) => {
    setSearchTerm(state.search)
  };

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm)
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );
 
  const customNoDataRenderer = ({ props, state, methods }) => {

    return (
      <>
        <div className='custom-select-dropdown'>
          {props.options.length === 0 && !isSearching && <div className='select-empty-list'>
            Нет данных. Начните набирать название города для поиска.
          </div>}

          {
            isSearching &&
            <div className='select-searching'>
              <CircularProgress/>
            </div>
          }
          {
            props.options &&
            <div>
              <ul>
                {props.options.map((item, index) => <li key={index} className={'select-list'} onClick={() => methods.addItem(item)}>{item.full_name}</li>)}
              </ul>
            </div>
          }
        </div>
      </>
    )

  };


  return (
    <div id={name}>
      {!!newCity && <div className={styles.popup_wrapper}>
        <div ref={popup_ref} className={styles.popup_body} style={{maxWidth: '395px'}}>
          <img className={styles.close_icon} src={close} alt="" onClick={cancelAddNew}/>
          <div className={styles.popup_icon}><img src={ok} alt=""/></div>
          <div className={styles.popup_title}>{`Добавить новый город ${newCity.full_name}?`}</div>
          <div className={styles.popup_text}>{'Обязательно укажите туристическое направление города!'}</div>

          <Select
            required={true}
            style={{width: '325px', padding: '10px 20px', marginBottom:'20px'}}
            className={`custom-select-style ok`}
            placeholder={'Выбрать тур направление'}
            searchable={true}
            searchBy={'name'}
            clearable={true}
            multi={false}
            options={destinations}
            onChange={handleDestination}
            values={currentDestination}
            labelField={'name'}
            valueField={'id'}
            // searchFn={onSearch}
            // noDataRenderer={customNoDataRenderer}
          />
          <Button text={'Добавить'} action={handleAddNewCity} color={'button-primary'} width={'100%'} margin={'0'}/>
          <Button text={'Отменить'} action={cancelAddNew} color={'button-danger'} width={'100%'} margin={'20px 0 0 0'}/>
        </div>
      </div>}
      <Select
        required={required}
        style={{margin: margin, padding: '10px 20px'}}
        className={`custom-select-style ${currentError.length > 0 ? 'error' : 'ok'}`}
        placeholder={'Выбрать'}
        searchable={true}
        clearable
        multi={multiple}
        options={results}
        onChange={handleSelect}
        values={data}
        labelField={'full_name'}
        valueField={'id'}
        create={!multiple && true}
        onCreateNew={confirmAddNew}
        createNewLabel="Добавить {search}"
        searchFn={onSearch}
        noDataRenderer={customNoDataRenderer}
        // dropdownRenderer={customDropdownRenderer}
        // inputRenderer={({ props, state, methods, inputRef }) => <component ref={inputRef}/>}
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
    </div>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  tourToServerUpdate,
})(CitySelectInput)
