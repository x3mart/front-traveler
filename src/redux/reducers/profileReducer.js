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
  GET_RECIPIENT_INN_SUCCESS,
  RESET_USER_INN,
  GET_DATA_BY_BIK_SUCCESS,
  GET_DATA_BY_BIK_FAIL,
  RESET_BIK_DATA,
  CLEAR_TEAM_MEMBER_SUCCESS,
} from '../types'

const initialState = {
  user_inn_data: null,
  recipient_inn_data: null,
  bik_data: null,
  members: [],
  member: null,
  error: null,
}

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_TEAM_MEMBERS_SUCCESS:
      return {
        ...state,
        members: payload,
      }
    case GET_TEAM_MEMBERS_FAIL:
      return {
        ...state,
        members: [],
      }

    case GET_TEAM_MEMBER_SUCCESS:
    case ADD_TEAM_MEMBER_SUCCESS:
    case UPDATE_TEAM_MEMBER_SUCCESS:
    case ADD_TEAM_MEMBER_AVATAR_SUCCESS:
      return {
        ...state,
        member: payload,
      }
    case GET_TEAM_MEMBER_FAIL:
    case ADD_TEAM_MEMBER_FAIL:
    case UPDATE_TEAM_MEMBER_FAIL:
    case CLEAR_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        member: null,
      }

    case GET_USER_INN_SUCCESS:
      return {
        ...state,
        user_inn_data: payload,
      }

    case GET_RECIPIENT_INN_SUCCESS:
      return {
        ...state,
        recipient_inn_data: payload,
      }

    case RESET_USER_INN:
      return {
        ...state,
        user_inn_data: null,
      }

    case GET_DATA_BY_BIK_SUCCESS:
      return {
        ...state,
        bik_data: payload,
      }

    case RESET_BIK_DATA:
      return {
        ...state,
        bik_data: null,
      }

    case ADD_TEAM_MEMBER_AVATAR_FAIL:
      return {
        ...state,
        error: payload,
      }

    case DELETE_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        members: state.members.filter(item => item.id !== payload),
      }

    case DELETE_TEAM_MEMBER_FAIL:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default profileReducer
