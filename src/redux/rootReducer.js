import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import toursReducer from './reducers/toursReducer'
import profileReducer from './reducers/profileReducer'
import chatReducer from './reducers/chatReducer'
import supportReducer from './reducers/supportReducer'
import blogReducer from './reducers/blogReducer'
import expertReducer from './reducers/expertReducer'
import orderReducer from './reducers/orderReducer'
import languageReducer from './reducers/languageReducer'
import filtersReducer from './reducers/filtersReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  tours: toursReducer,
  profile: profileReducer,
  chat: chatReducer,
  support: supportReducer,
  blog: blogReducer,
  expert: expertReducer,
  orders: orderReducer,
  languages: languageReducer,
  filters: filtersReducer,
})

export default rootReducer
