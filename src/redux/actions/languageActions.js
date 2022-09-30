import * as t from '../types'
import axios from 'axios'
import {setConfig} from "../../functions";

export const get_all_languages = () => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/languages/`, config)

    dispatch({
      type: t.GET_ALL_LANGUAGES_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_ALL_LANGUAGES_FAIL,
      payload: err.response.data,
    })
  }
}

export const set_language = (language) => dispatch => {
  dispatch({
    type: t.SET_LANGUAGE_SUCCESS,
    payload: language,
  })
}


