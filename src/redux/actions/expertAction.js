import * as t from '../types'
import axios from 'axios'
import {setConfig} from "../../functions";


export const get_expert = id => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/experts/${id}/details/`, config)

    dispatch({
      type: t.GET_EXPERT_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_EXPERT_FAIL,
      payload: err.response.data,
    })
  }
}

export const get_popular_experts = () => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/experts/popular/`, config)

    dispatch({
      type: t.GET_POPULAR_EXPERTS_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_POPULAR_EXPERTS_FAIL,
      payload: err.response.data,
    })
  }
}
