import {
  GET_TEAM_MEMBERS_SUCCESS,
  GET_TEAM_MEMBERS_FAIL,
  GET_TEAM_MEMBER_SUCCESS,
  GET_TEAM_MEMBER_FAIL,
  ADD_TEAM_MEMBER_SUCCESS,
  ADD_TEAM_MEMBER_FAIL,
  UPDATE_TEAM_MEMBER_SUCCESS,
  UPDATE_TEAM_MEMBER_FAIL,
  DELETE_TEAM_MEMBER_SUCCESS,
  DELETE_TEAM_MEMBER_FAIL,
  ADD_TEAM_MEMBER_AVATAR_SUCCESS,
  ADD_TEAM_MEMBER_AVATAR_FAIL,
  GET_USER_INN_SUCCESS,
  GET_USER_INN_FAIL,
  GET_DATA_BY_BIK_SUCCESS,
  GET_DATA_BY_BIK_FAIL,
  RESET_BIK_DATA,
  RESET_USER_INN,
  GET_RECIPIENT_INN_SUCCESS,
  GET_RECIPIENT_INN_FAIL,
  UPDATE_CARD_DATA_SUCCESS,
  UPDATE_CARD_DATA_FAIL,
  CLEAR_TEAM_MEMBER_SUCCESS,
} from '../types'

import axios from 'axios'
import {setConfig} from "../../functions";

export const getTeamMembers = () => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/teammembers/`, config)

    dispatch({
      type: GET_TEAM_MEMBERS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_TEAM_MEMBERS_FAIL,
    })
  }
}

export const getTeamMember = id => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/teammembers/${id}/`, config)

    dispatch({
      type: GET_TEAM_MEMBER_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_TEAM_MEMBER_FAIL,
    })
  }
}

export const addTeamMember = data => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/teammembers/`, body, config)

    dispatch({
      type: ADD_TEAM_MEMBER_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_TEAM_MEMBER_FAIL,
    })
  }
}

export const updateTeamMember = (data, id) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  try {
    const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/teammembers/${id}/`, body, config)

    dispatch({
      type: UPDATE_TEAM_MEMBER_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: UPDATE_TEAM_MEMBER_FAIL,
    })
  }
}

export const deleteTeamMember = id => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/teammembers/${id}/`, config)

    dispatch({
      type: DELETE_TEAM_MEMBER_SUCCESS,
      payload: id,
    })
  } catch (err) {
    dispatch({
      type: DELETE_TEAM_MEMBER_FAIL,
    })
  }
}

export const addTeamMemberAvatar = (image, id) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  let form_data = new FormData()

  form_data.append('avatar', image, image.name)

  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/teammembers/${id}/avatar/`,
      form_data,
      config
    )

    dispatch({
      type: ADD_TEAM_MEMBER_AVATAR_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_TEAM_MEMBER_AVATAR_FAIL,
      payload: res
    })
  }
}

export const deleteTeamMemberAvatar = (id) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/teammembers/${id}/avatar/`,
      config
    )

    dispatch({
      type: ADD_TEAM_MEMBER_AVATAR_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_TEAM_MEMBER_AVATAR_FAIL,
      payload: res
    })
  }
}

export const clearTeamMember = data => dispatch => {
  dispatch({
    type: CLEAR_TEAM_MEMBER_SUCCESS,
  })
}

export const getUserInn = (data) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/get_recipient/`,
      body,
      config
    )

    dispatch({
      type: GET_USER_INN_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_USER_INN_FAIL,
      payload: err
    })
  }
}

export const resetUserInn = () => async dispatch => {

  dispatch({
    type: RESET_USER_INN,
  })
}

export const getRecipientInn = (data) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/get_recipient/`,
      body,
      config
    )

    dispatch({
      type: GET_RECIPIENT_INN_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_RECIPIENT_INN_FAIL,
      payload: err
    })
  }
}

export const getDataByInn = (data) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/get_bank/`,
      body,
      config
    )

    dispatch({
      type: GET_BANK_CARD_DATA_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_BANK_CARD_DATA_FAIL,
      payload: err
    })
  }
}

