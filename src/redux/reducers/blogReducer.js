import * as t from '../types'

const initialState = {
  articles: [],
  article: null,
}

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.GET_ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: payload,
      }
    case t.GET_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: payload,
      }
    case t.GET_ALL_ARTICLES_FAIL:
      return {
        ...state,
        articles: [],
      }
    case t.GET_SINGLE_ARTICLE_FAIL:
    case t.CLEAR_SINGLE_ARTICLE:
      return {
        ...state,
        article: null,
      }
    default:
      return state
  }
}

export default blogReducer
