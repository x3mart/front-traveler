import * as t from '../types'
import axios from 'axios'
import {
  GET_DATA_BY_BIK_FAIL,
  GET_DATA_BY_BIK_SUCCESS, RESET_BIK_DATA, UPDATE_CARD_DATA_FAIL, UPDATE_CARD_DATA_SUCCESS,
  UPDATE_TOUR_WALLPAPER_FAIL,
  UPDATE_TOUR_WALLPAPER_SUCCESS
} from "../types";
import {setConfig} from "../../functions";

function parseJwt(token) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

export const getTravelHistory = () => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/travels_history/`, config)

    dispatch({
      type: t.TRAVEL_HISTORY_LOADED_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.TRAVEL_HISTORY_LOADED_FAIL,
      payload: err && err.response && err.response.data
    })
  }
}

export const getDashboard = (id) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))
  const current_user = parseJwt(localStorage.getItem('access')).user_status
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/${current_user}/${id}/dashboard/`, config)

    dispatch({
      type: t.DASHBOARD_LOADED_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.DASHBOARD_LOADED_FAIL,
      payload: err && err.response && err.response.data
    })
  }
}

export const getIdent = () => async dispatch => {
  if(!localStorage.getItem('ident')) {
    const config = setConfig(!!localStorage.getItem('access'))
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/identifiers/`, config)

      dispatch({
        type: t.IDENT_SUCCESS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: t.IDENT_FAIL,
        payload: err && err.response && err.response.data
      })
    }
  }
}

export const load_user = () => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = setConfig(!!localStorage.getItem('access'))

    const current_user = parseJwt(localStorage.getItem('access')).user_status

    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/${current_user}/me/`, config)
      const data = {
        data: res.data,
        status: current_user,
      }

      dispatch({
        type: t.USER_LOADED_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: t.USER_LOADED_FAIL,
        payload: err && err.response && err.response.data
      })
    }
  } else {
    dispatch({
      type: t.USER_LOADED_FAIL,
    })
  }
}

export const update_user = data => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = setConfig(!!localStorage.getItem('access'))

    if(data.old_email !== data.email) {
      data = {
        ...data,
        email_confirmed: false
      }
    }

    if(data.old_phone !== data.phone) {
      data = {
        ...data,
        phone_confirmed: false
      }
    }

    if(!data.password) {
      delete data.password
      delete data.new_password
    }

    delete data.old_email
    delete data.old_phone

    const body = JSON.stringify(data)

    const current_user = parseJwt(localStorage.getItem('access')).user_status

    try {
      const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/${current_user}/me/`, body, config)
      const data = {
        data: res.data,
        status: user,
        reg_status: res.status,
      }

      dispatch({
        type: t.USER_UPDATE_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: t.USER_UPDATE_FAIL,
        payload: err.response.data,
      })
    }
  } else {
    dispatch({
      type: t.USER_LOADED_FAIL,
    })
  }
}

export const update_local_user = data => async dispatch => {
  dispatch({
    type: t.UPDATE_LOCAL_USER,
    payload: data,
  })
}

export const signUp = (status, data) => async dispatch => {
  setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/${status}/`, body, config)


    dispatch({
      type: t.SIGNUP_SUCCESS,
      payload: res.status
    })
  } catch (err) {

    dispatch({
      type: t.SIGNUP_FAIL,
      payload: {data: err.response.data, status: err.response.status},
    })
  }
}

export const login = data => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config)

    dispatch({
      type: t.LOGIN_SUCCESS,
      payload: res.data,
    })
    dispatch(load_user())
  } catch (err) {
    dispatch({
      type: t.LOGIN_FAIL,
      payload: {data: err?.response?.data, status: err?.response?.status},
    })
  }
}

export const checkAuthenticated = () => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = setConfig(!!localStorage.getItem('access'))


    const body = JSON.stringify({token: localStorage.getItem('access')})

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)

      if (res.data.code !== 'token_not_valid') {
        dispatch({
          type: t.AUTHENTICATED_SUCCESS,
        })
      } else {
        dispatch({
          type: t.AUTHENTICATED_FAIL,
          payload: err.response.data
        })
      }
    } catch (err) {
      dispatch({
        type: t.AUTHENTICATED_FAIL,
        payload: err.response.data
      })
    }
  } else {
    dispatch({
      type: t.AUTHENTICATED_FAIL,
    })
  }
}

export const logout = () => dispatch => {
  dispatch({
    type: t.LOGOUT,
  })
}

export const reset_password = email => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify({email})

  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password/`, body, config)

    dispatch({
      type: t.PASSWORD_RESET_SUCCESS,
    })
  } catch (err) {
    dispatch({
      type: t.PASSWORD_RESET_FAIL,
    })
  }
}

export const reset_password_confirm =
  (uid, token, new_password, re_new_password) => async dispatch => {
    const config = setConfig(!!localStorage.getItem('access'))

    const body = JSON.stringify({uid, token, new_password, re_new_password})

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
        body,
        config
      )

      dispatch({
        type: t.PASSWORD_RESET_CONFIRM_SUCCESS,
      })
    } catch (err) {
      dispatch({
        type: t.PASSWORD_RESET_CONFIRM_FAIL,
      })
    }
  }

export const setPage = title => dispatch => {
  dispatch({
    type: t.SET_PAGE,
    payload: title,
  })
}

export const update_avatar = (image) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  let form_data = new FormData()

  form_data.append('avatar', image, image.name)

  const current_user = parseJwt(localStorage.getItem('access')).user_status

  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/${current_user}/avatar/`,
      form_data,
      config
    )

    dispatch({
      type: t.UPDATE_AVATAR_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.UPDATE_AVATAR_FAIL,
    })
  }
}

export const delete_avatar = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  const current_user = parseJwt(localStorage.getItem('access')).user_status

  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/${current_user}/avatar/`,
      config
    )

    dispatch({
      type: t.DELETE_AVATAR_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.DELETE_AVATAR_FAIL,
    })
  }
}

export const email_confirm_request = () => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = ''

  const current_user = parseJwt(localStorage.getItem('access')).user_status

    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/${current_user}/send_confirmation_email/`,
        body,
        config
      )


      dispatch({
        type: t.EMAIL_CONFIRM_REQUEST_SUCCESS,
        payload: res.status
      })
    } catch (err) {
      dispatch({
        type: t.EMAIL_CONFIRM_REQUEST_FAIL,
        payload: 'error'
      })
    }
  }

export const email_confirm = (data) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  const current_user = parseJwt(localStorage.getItem('access')).user_status

  try {
    let res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/${current_user}/confirm_email/`,
      body,
      config
    )

    dispatch({
      type: t.EMAIL_CONFIRM_SUCCESS,
      payload: res.status
    })
  } catch (err) {
    dispatch({
      type: t.EMAIL_CONFIRM_FAIL,
      payload: 'error'
    })
  }
}

export const clear_confirm_status = () => dispatch => {

    dispatch({
      type: t.CLEAR_CONFIRM,
    })
}

export const clear_errors = () => dispatch => {

  dispatch({
    type: t.CLEAR_ERRORS,
  })
}

export const getBikData = (data, source) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/get_bank/`,
      body,
      config
    )

    let payload = {data: res.data, source: source}

    dispatch({
      type: t.GET_DATA_BY_BIK_SUCCESS,
      payload: payload,
    })
  } catch (err) {
    dispatch({
      type: GET_DATA_BY_BIK_FAIL,
      payload: err
    })
  }
}

export const resetBikData = (source) => async dispatch => {
  dispatch({
    type: t.RESET_BIK_DATA,
    payload: source,
  })
}

export const updateCardData = (id, data) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  const current_user = parseJwt(localStorage.getItem('access')).user_status

  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/${current_user}/${id}/debet_card/`,
      body,
      config
    )

    dispatch({
      type: t.UPDATE_CARD_DATA_SUCCESS,
      payload: res.status,
    })
  } catch (err) {
    dispatch({
      type: t.UPDATE_CARD_DATA_FAIL,
      payload: err.response.data,
    })
  }
}

export const updateLegalVerificationData = (id, data) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  const current_user = parseJwt(localStorage.getItem('access')).user_status

  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/${current_user}/${id}/legal_verification/`,
      body,
      config
    )

    dispatch({
      type: t.UPDATE_LEGAL_VERIFICATION_DATA_SUCCESS,
      payload: res.status,
    })
  } catch (err) {
    dispatch({
      type: t.UPDATE_LEGAL_VERIFICATION_DATA_FAIL,
      payload: err.response.data
    })
  }
}

export const updateVerificationData = (result) => async dispatch => {
// export const updateIndividualVerificationData = (id, data) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `JWT ${localStorage.getItem('access')}`,
//       Accept: 'application/json',
//     },
//   }
//
//   const body = JSON.stringify(data)
//
//   const current_user = parseJwt(localStorage.getItem('access')).user_status
//
//   try {
//     const res = await axios.patch(
//       `${process.env.REACT_APP_API_URL}/api/${current_user}/${id}/verification/`,
//       // `${process.env.REACT_APP_API_URL}/api/${current_user}/${id}/individual_verification/`,
//       body,
//       config
//     )
//
//     dispatch({
//       type: t.UPDATE_INDIVIDUAL_VERIFICATION_DATA_SUCCESS,
//       payload: res.status,
//     })
//   } catch (err) {
//     dispatch({
//       type: t.UPDATE_INDIVIDUAL_VERIFICATION_DATA_FAIL,
//       payload: err.response.data,
//     })
//   }

  if(result === 'ok') {
    dispatch({
      type: t.UPDATE_INDIVIDUAL_VERIFICATION_DATA_SUCCESS,
      payload: 200,
    })
  } else {
    dispatch({
      type: t.UPDATE_INDIVIDUAL_VERIFICATION_DATA_FAIL,
      payload: result,
    })
  }

}

export const clear_verification_status = () => dispatch => {

  dispatch({
    type: t.CLEAR_VERIFICATION_STATUS,
  })
}

export const updateTransactionData = (id, data) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  const current_user = parseJwt(localStorage.getItem('access')).user_status

  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/${current_user}/${id}/bank_transaction/`,
      body,
      config
    )

    dispatch({
      type: t.UPDATE_TRANSACTION_DATA_SUCCESS,
      payload: res.status,
    })
  } catch (err) {
    dispatch({
      type: t.UPDATE_TRANSACTION_DATA_FAIL,
      payload: err.response.data
    })
  }
}

export const clear_update_status = () => dispatch => {

  dispatch({
    type: t.CLEAR_UPDATE_STATUS,
  })
}

export const getInnData = (data, source) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/get_recipient/`,
      body,
      config
    )

    dispatch({
      type: t.GET_DATA_BY_INN_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.GET_DATA_BY_INN_FAIL,
      payload: err
    })
  }
}

export const resetInnData = () => async dispatch => {
  dispatch({
    type: t.RESET_INN_DATA,
  })
}

export const getRecipientInnData = (data, source) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/get_recipient/`,
      body,
      config
    )

    dispatch({
      type: t.GET_RECIPIENT_DATA_BY_INN_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.GET_RECIPIENT_DATA_BY_INN_FAIL,
      payload: err
    })
  }
}

export const resetRecipientInnData = (source) => async dispatch => {
  dispatch({
    type: t.RESET_RECIPIENT_INN_DATA,
    payload: source,
  })
}

export const upload_docs = (image) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  let form_data = new FormData()

  form_data.append('file', image, image.name)

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/scans/`,
      form_data,
      config
    )

    dispatch({
      type: t.UPDATE_DOCS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    console.error(err)
    dispatch({
      type: t.UPDATE_DOCS_FAIL,
    })
  }
}

export const delete_docs = (id) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/scans/${id}/`,
      config
    )

    dispatch({
      type: t.DELETE_DOCS_SUCCESS,
      payload: id,
    })
  } catch (err) {
    dispatch({
      type: t.DELETE_DOCS_FAIL,
    })
  }
}

export const phone_confirm_request = id => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = ''

  const current_user = parseJwt(localStorage.getItem('access')).user_status

  try {
    let res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/${current_user}/${id}/send_confirmation_call/`,
      body,
      config
    )


    dispatch({
      type: t.PHONE_CONFIRM_REQUEST_SUCCESS,
      payload: res.status
    })
  } catch (err) {
    dispatch({
      type: t.PHONE_CONFIRM_REQUEST_FAIL,
      payload: 'error'
    })
  }
}

export const phone_confirm = (id, data) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = JSON.stringify(data)

  const current_user = parseJwt(localStorage.getItem('access')).user_status

  try {
    let res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/${current_user}/${id}/check_confirmation_code/`,
      body,
      config
    )

    dispatch({
      type: t.PHONE_CONFIRM_SUCCESS,
      payload: res.status
    })
  } catch (err) {
    dispatch({
      type: t.PHONE_CONFIRM_FAIL,
      payload: {data: err.response.data, status: err.response.status},
    })
  }
}

export const setFavorite = (id) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  const body = null

  try {
    await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/tours/${id}/favorite/`,
      body,
      config
    )

    dispatch({
      type: t.ADD_FAVORITE_SUCCESS,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: t.ADD_FAVORITE_FAIL,
      payload: {data: err.response.data, status: err.response.status},
    })
  }
}

export const resetFavorite = (id) => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/tours/${id}/favorite/`,
      config
    )

    dispatch({
      type: t.REMOVE_FAVORITE_SUCCESS,
      payload: id
    })
  } catch (err) {
    console.error(err)
    dispatch({
      type: t.REMOVE_FAVORITE_FAIL,
    })
  }
}

export const getFavorite = () => async dispatch => {
  const config = setConfig(!!localStorage.getItem('access'))

  try {
    let res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/tours/favorites/`,
      config
    )

    dispatch({
      type: t.GET_FAVORITES_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: t.GET_FAVORITES_FAIL,
      payload: {data: err.response.data, status: err.response.status},
    })
  }
}






