import * as t from '../types'

const initialState = {
  expert: null,
  popular_expert: null,
}

const expertReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.GET_EXPERT_SUCCESS:
      return {
        ...state,
        expert: payload,
      }
    case t.GET_EXPERT_FAIL:
      return {
        ...state,
        expert: null,
      }

    case t.GET_POPULAR_EXPERTS_SUCCESS:
      return {
        ...state,
        popular_expert: payload,
      }
    case t.GET_POPULAR_EXPERTS_FAIL:
      return {
        ...state,
        popular_expert: null,
      }
    default:
      return state
  }
}

export default expertReducer
