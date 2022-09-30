import * as t from '../types'
import axios from 'axios'
import {getFilteredTours} from "./toursActions";
import {parseQs, setConfig} from "../../functions";
import {
  CLEAR_SEARCH_DATES,
  GET_SEARCH_DESTINATIONS_SUCCESS,
  GET_SEARCH_REGIONS_FAIL,
  GET_SEARCH_REGIONS_SUCCESS,
  SET_SEARCH_DATES_SUCCESS
} from "../types";

export const getSearchFilters = () => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/filter_set/`, config)

    dispatch({
      type: t.GET_FILTERS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.GET_FILTERS_FAIL,
    })
  }
}

export const setFilters = (type, data) => dispatch => {

  console.log(123123)
  console.log(type)
  console.log(data)

  dispatch({
    type: t.SET_FILTERS,
    payload: {type: type, data: data},
  })
}

export const setRangeFilters = (type, data) => dispatch => {


  dispatch({
    type: t.SET_RANGE_FILTERS,
    payload: {type: type, data: data},
  })
}

export const setRatingFilters = (type, data) => dispatch => {


  dispatch({
    type: t.SET_RATING_FILTERS,
    payload: {type: type, data: data},
  })
}

export const resetFilter = (type) => dispatch => {
  dispatch({
    type: t.RESET_FILTER,
    payload: type,
  })
}

export const resetAllFilters = () => dispatch => {
  dispatch({
    type: t.RESET_ALL_FILTERS,
  })
}

export const getToursByFilters = (filter) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tours/${filter ? '?' + filter : ''}`, config)

    dispatch({
      type: t.GET_ALL_TOURS_SUCCESS,
      payload: res.data,
    })
    // dispatch(getFilteredTours(res.data))
  } catch (err) {
    dispatch({
      type: t.GET_ALL_TOURS_FAIL,
    })
  }
}

export const getCurrentFilterSet = (filter) => async dispatch => {
  console.log(filter)
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tours/filterset/${filter ? '?' + filter : ''}`, config)

    dispatch({
      type: t.GET_CURRENT_FILTER_SET_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.GET_CURRENT_FILTER_SET_FAIL,
    })
  }
}

export const getSearchRegions = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/active_regions/`, config)

    dispatch({
      type: t.GET_SEARCH_REGIONS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.GET_SEARCH_REGIONS_FAIL,
    })
  }
}

export const setCurrentSearchRegion = (data) => dispatch => {
  dispatch({
    type: t.SET_CURRENT_SEARCH_REGION,
    payload: data,
  })
}

export const setSearchDestinations = (data) => dispatch => {
  dispatch({
    type: t.GET_SEARCH_DESTINATIONS_SUCCESS,
    payload: data,
  })
}

export const setCurrentSearchDestinations = (data) => dispatch => {
  console.log(data)
  dispatch({
    type: t.SET_CURRENT_SEARCH_DESTINATIONS,
    payload: {obj: data, type: 'start_destination', data: data.id},
  })
}

export const resetRegion = () => dispatch => {
  dispatch({
    type: t.RESET_REGION,
  })
}

export const resetDestinations = () => dispatch => {
  dispatch({
    type: t.RESET_DESTINATIONS,
  })
}

export const setDestinationFilter = () => dispatch => {
  dispatch({
    type: t.SET_DESTINATION_FILTER,
  })
}

export const setSearchDates = (data) => dispatch => {
  console.log(data)
  dispatch({
    type: SET_SEARCH_DATES_SUCCESS,
    payload: {data: data, type: 'start_date'},
  })
}

export const clearSearchDates = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH_DATES,
  })
}

export const setDatesFilter = () => dispatch => {
  dispatch({
    type: t.SET_DATES_FILTER,
  })
}
