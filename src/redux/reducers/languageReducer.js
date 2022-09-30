import * as t from '../types'

const initialState = {
  languages: ['ru',],
  language: 'ru',
}

const languageReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.GET_ALL_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: payload,
      }
    case t.SET_LANGUAGE_SUCCESS:
      return {
        ...state,
        current_language: payload,
      }
    case t.GET_ALL_ARTICLES_FAIL:
      return {
        ...state,
        languages: [],
      }
    default:
      return state
  }
}

export default languageReducer
