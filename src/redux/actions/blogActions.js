import * as t from '../types'
import axios from 'axios'
import {setConfig} from "../../functions";

export const get_all_articles = () => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/articles/`, config)

    dispatch({
      type: t.GET_ALL_ARTICLES_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_ALL_ARTICLES_FAIL,
      payload: err.response.data,
    })
  }
}

export const get_single_article = (id) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/articles/${id}/`, config)

    dispatch({
      type: t.GET_SINGLE_ARTICLE_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_SINGLE_ARTICLE_FAIL,
      payload: err.response.data,
    })
  }
}

export const clear_single_article = () => async dispatch => {
  dispatch({
    type: t.CLEAR_SINGLE_ARTICLE,
  })
}



