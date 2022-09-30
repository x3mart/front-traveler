import * as t from '../types'
import axios from 'axios'
import {setConfig} from "../../functions";


export const set_current_ticket = id => async dispatch => {
  dispatch({
    type: t.SET_CURRENT_TICKET,
    payload: id,
  })
}

export const clear_current_ticket = () => async dispatch => {
  dispatch({
    type: t.CLEAR_CURRENT_TICKET,
  })
}

export const set_current_ticket_status = n => async dispatch => {
  dispatch({
    type: t.SET_CURRENT_TICKET_STATUS,
    payload: n,
  })
}

export const clear_current_ticket_status = () => async dispatch => {
  dispatch({
    type: t.CLEAR_CURRENT_TICKET_STATUS,
  })
}

export const get_all_tickets = () => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/support_tickets/
`, config)

    dispatch({
      type: t.GET_ALL_TICKETS_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_ALL_TICKETS_FAIL,
      payload: err.response.data,
    })
  }
}

export const set_new_ticket = (data) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/support_tickets/`,
      body,
      config)

    dispatch({
      type: t.SET_NEW_TICKET_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.SET_NEW_TICKET_FAIL,
      payload: err.response.data,
    })
  }
}

export const set_archive_ticket = () => async dispatch => {
  dispatch({
    type: t.SET_ARCHIVE_TICKET,
  })
}

export const close_ticket = (id) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = null

  try {
    const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/support_tickets/${id}/close_ticket/`,
      body,
      config)

    dispatch({
      type: t.CLOSE_TICKET_SUCCESS,
      payload: res.data,
    })
    dispatch(set_archive_ticket())

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.SET_NEW_TICKET_FAIL,
      payload: err.response.data,
    })
  }
}

export const set_current_support_messages = data => async dispatch => {
  dispatch({
    type: t.SET_CURRENT_SUPPORT_MESSAGES,
    payload: data,
  })
}

export const clear_current_support_messages = () => async dispatch => {
  dispatch({
    type: t.CLEAR_CURRENT_SUPPORT_MESSAGES,
  })
}

export const set_all_support_messages_read = () => async dispatch => {
  dispatch({
    type: t.SET_ALL_SUPPORT_MESSAGES_READ,
  })
}

export const set_all_support_messages_unread = () => async dispatch => {
  dispatch({
    type: t.SET_ALL_SUPPORT_MESSAGES_UNREAD,
  })
}

export const getFaqCategories = () => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/faq_categories/`,
      config)

    dispatch({
      type: t.GET_FAQ_CATEGORIES_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_FAQ_CATEGORIES_FAIL,
      payload: err.response.data,
    })
  }
}

export const getFaqCategory = (id) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/faq_categories/${id}/`,
      config)

    dispatch({
      type: t.GET_FAQ_CATEGORY_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_FAQ_CATEGORY_FAIL,
      payload: err.response.data,
    })
  }
}






