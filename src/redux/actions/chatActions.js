import * as t from '../types'
import axios from 'axios'
import {setConfig} from "../../functions";


export const add_chat_user = data => async dispatch => {
  dispatch({
    type: t.ADD_CHAT_USER,
    payload: data,
  })
}

export const delete_chat_user = () => async dispatch => {
  dispatch({
    type: t.DELETE_CHAT_USER,
  })
}

export const get_chat_rooms = () => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/chats/`, config)

    dispatch({
      type: t.GET_CHAT_ROOMS_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_CHAT_ROOMS_FAIL,
      payload: err.response.data,
    })
  }
}

export const add_chat_room = id => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify({chat_with: id})

  try {
    const room = await axios.post(`${process.env.REACT_APP_API_URL}/api/chats/`, body, config)
    const rooms = await axios.get(`${process.env.REACT_APP_API_URL}/api/chats/`, config)

    const data = rooms.data.filter(item => item.id !== room.data.id)

    const payload = {
      data: [room.data, ...data ],
      id: room.data.id
    }

    dispatch({
      type: t.ADD_CHAT_ROOM_SUCCESS,
      payload: payload,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.ADD_CHAT_ROOM_FAIL,
      payload: err.response.data,
    })
  }
}

export const set_current_room = id => async dispatch => {
  dispatch({
    type: t.SET_CURRENT_ROOM,
    payload: id,
  })
}

export const update_chat_room = data => async dispatch => {
  dispatch({
    type: t.UPDATE_CHAT_ROOM,
    payload: data,
  })
}

export const update_chat_rooms = data => async dispatch => {
  dispatch({
    type: t.UPDATE_CHAT_ROOMS,
    payload: data,
  })
}

export const clear_current_room = () => async dispatch => {
  dispatch({
    type: t.CLEAR_CURRENT_ROOM,
  })
}

export const set_current_messages = data => async dispatch => {
  dispatch({
    type: t.SET_CURRENT_MESSAGES,
    payload: data,
  })
}

export const set_all_messages_read = () => async dispatch => {
  dispatch({
    type: t.SET_ALL_MESSAGES_READ,
  })
}

export const set_all_messages_unread = () => async dispatch => {
  dispatch({
    type: t.SET_ALL_MESSAGES_UNREAD,
  })
}

export const clear_current_messages = () => async dispatch => {
  dispatch({
    type: t.CLEAR_CURRENT_MESSAGES,
  })
}

export const set_users_online = data => async dispatch => {
  dispatch({
    type: t.SET_USERS_ONLINE,
    payload: data,
  })
}

export const set_users_offline = data => async dispatch => {
  dispatch({
    type: t.SET_USERS_OFFLINE,
    payload: data,
  })
}

export const clear_all_notifications = () => async dispatch => {
  dispatch({
    type: t.CLEAR_ALL_NOTIFICATIONS,
  })
}

