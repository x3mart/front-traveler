import * as t from '../types'
import {DELETE_AVATAR_SUCCESS, EMAIL_CONFIRM_REQUEST_FAIL, GET_DATA_BY_INN_SUCCESS} from "../types";
import {confirm_request} from "../actions/authActions";
import {isNotEmptyObject} from "../../functions";

const initialState = {
  dashboard: null,
  travel_history: [],
  reg_status: null,
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: !!(
    localStorage.getItem('access') && localStorage.getItem('refresh')
  ),
  user: null,
  update_status: '',
  status: '',
  page: '',
  avatar: '',
  confirm_request: null,
  confirm: null,
  error: null,
  inn_data: null,
  update_verification_status: '',
  phone_error: null,
  favorite: [],
  favorites: null,
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      }
    case t.DASHBOARD_LOADED_SUCCESS:
      return {
        ...state,
        dashboard: payload,
      }
    case t.DASHBOARD_LOADED_FAIL:
      return {
        ...state,
        dashboard: null,
      }

    case t.TRAVEL_HISTORY_LOADED_SUCCESS:
      return {
        ...state,
        travel_history: payload,
      }
    case t.TRAVEL_HISTORY_LOADED_FAIL:
      return {
        ...state,
        travel_history: [],
      }
    case t.LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access)
      localStorage.setItem('refresh', payload.refresh)
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      }

    case t.IDENT_SUCCESS:
      localStorage.setItem('ident', payload.ident)
      return {
        ...state,
      }
    case t.USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload.data,
        status: payload.status,
        favorite: payload.data.favorite_tours,
      }

    case t.ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        favorite: [...state.favorite, payload],
      }

    case t.GET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: payload,
      }

    case t.REMOVE_FAVORITE_SUCCESS:

      const updateFavorite = (payload) => {
        if(state?.favorite?.length <= 1) {
          return []
        } else {
          return state?.favorite?.filter(item => item !== payload)
        }
      }

      const updateFavorites = (payload) => {
        if(state?.favorites?.length <= 1) {
          return []
        } else {
          return state?.favorites?.filter(item => item.id !== payload)
        }
      }

      return {
        ...state,
        favorite: updateFavorite(payload),
        favorites: updateFavorites(payload),
      }

    case t.UPDATE_AVATAR_SUCCESS:
      return {
        ...state,
        user: payload,
      }

    case t.UPDATE_DOCS_SUCCESS:
      const updateDocs = (user, doc) => {

        let docs = []

        if(user?.bank_transaction?.scans) {
        }
        let u = {}
        if(user?.bank_transaction) {
          let {bank_transaction} = user
          if(bank_transaction.scans) {
            let {scans} = bank_transaction
            u = {
              ...user,
              bank_transaction: {
                ...bank_transaction,
                scans: [
                  ...scans,
                  doc
                ],
              }
            }
          } else {
            u = {
              ...user,
              bank_transaction: {
                ...bank_transaction,
                scans: [
                  doc
                ],
              }
            }
          }

        } else {
            u = {
              ...user,
              bank_transaction: {
                scans: [
                  doc
                ],
              }
            }
          }
          return u
        }

      return {
        ...state,
        user: updateDocs(state.user, payload),
      }
    case t.DELETE_DOCS_SUCCESS:
      const deleteDocs = (user, id) => {
        const docs = user.bank_transaction.scans.filter(item => item.id !== id)
        return {
          ...user,
          bank_transaction: {
            ...user.bank_transaction,
            scans: docs
          }
        }
        }

      return {
        ...state,
        user: deleteDocs(state.user, payload),
      }
    case t.DELETE_AVATAR_SUCCESS:
      return {
        ...state,
        user: payload,
      }

    case t.UPDATE_CARD_DATA_SUCCESS:
    case t.UPDATE_TRANSACTION_DATA_SUCCESS:
      return {
        ...state,
        update_status: payload,
        error: null,
      }

    case t.UPDATE_LEGAL_VERIFICATION_DATA_SUCCESS:
    case t.UPDATE_INDIVIDUAL_VERIFICATION_DATA_SUCCESS:
      return {
        ...state,
        update_verification_status: payload,
        error: null,
      }

    case t.CLEAR_VERIFICATION_STATUS:
      return {
        ...state,
        update_verification_status: '',
      }

    case t.UPDATE_LEGAL_VERIFICATION_DATA_FAIL:
    case t.UPDATE_INDIVIDUAL_VERIFICATION_DATA_FAIL:
      return {
        ...state,
        error: payload,
      }

    case t.CLEAR_UPDATE_STATUS:
      return {
        ...state,
        update_status: '',
      }

    case t.UPDATE_TRANSACTION_DATA_FAIL:
      return {
        ...state,
        error: payload,
      }

    case t.UPDATE_CARD_DATA_FAIL:
      return {
        ...state,
        error: payload,
      }

    case t.GET_RECIPIENT_DATA_BY_INN_SUCCESS:
      return {
        ...state,
        inn_data: payload,
      }

    case t.GET_RECIPIENT_DATA_BY_INN_FAIL:
    case t.RESET_RECIPIENT_INN_DATA:
      return {
        ...state,
        inn_data: null,
      }

    case t.GET_DATA_BY_BIK_SUCCESS:
      const updateUserDataByBik = (user, data, source) => {
        if(source === 'card'){
          let debet_card = {
            bank_bik: '',
            bank_name: '',
            bank_account: '',
            bank_inn: '',
            bank_kpp: '',
          }
          return {
            ...user,
            debet_card: {
              ...debet_card,
              ...data
            },
          }
        } else if(source === 'transaction') {

          let {bank_transaction} = user
          bank_transaction = {
            ...bank_transaction,
            bank_bik: '',
            bank_name: '',
            bank_account: '',
            bank_inn: '',
            bank_kpp: '',
          }
          return {
            ...user,
            bank_transaction: {
              ...bank_transaction,
              ...data
            },
          }
        }

      }
      return {
        ...state,
        user: updateUserDataByBik(state.user, payload.data, payload.source),
      }

      case t.GET_DATA_BY_INN_SUCCESS:
      const updateUserDataByInn = (user, data) => {
        let {bank_transaction} = user
        bank_transaction = {
          ...bank_transaction,
          recipient_name: '',
          recipient_inn: '',
          recipient_kpp: '',
          recipient_ogrn: '',
          recipient_status: '',
          recipient_registration_date: '',
        }
        return {
          ...user,
          bank_transaction: {
            ...bank_transaction,
            ...data
          },
        }
      }
      return {
        ...state,
        user: updateUserDataByInn(state.user, payload),
      }

    case t.RESET_INN_DATA:
      let resetInnData = (user) => {
        let {bank_transaction} = user
        return {
          ...user,
          bank_transaction: {
            ...bank_transaction,
            recipient_name: '',
            recipient_inn: '',
            recipient_kpp: '',
            recipient_ogrn: '',
            recipient_status: '',
            recipient_registration_date: '',
          },
        }
    }

      return {
        ...state,
        user: resetInnData(state.user),
      }

    case t.RESET_BIK_DATA:
      let resetData = (user, source) => {
        if(source === 'card') {
          let {debet_card} = user
          return {
            ...user,
            debet_card: {
              ...debet_card,
              bank_bik: '',
              bank_name: '',
              bank_account: '',
              bank_inn: '',
              bank_kpp: '',
            },
          }
        } else if(source === 'transaction') {
          let {bank_transaction} = user
          return {
            ...user,
            bank_transaction: {
              ...bank_transaction,
              bank_bik: '',
              bank_name: '',
              bank_account: '',
              bank_inn: '',
              bank_kpp: '',
            },
          }
        }
    }

      return {
        ...state,
        user: resetData(state.user, payload),
      }
    case t.USER_UPDATE_SUCCESS:
      return {
        ...state,
        user: payload.data,
        status: payload.status,
        reg_status: payload.reg_status,
      }

    case t.USER_UPDATE_FAIL:
      return {
        ...state,
        error: payload,
      }

    case t.UPDATE_LOCAL_USER:
      return {
        ...state,
        user: payload,
      }
    case t.SIGNUP_SUCCESS:
      return {
        ...state,
        reg_status: payload,
      }
    case t.LOGIN_FAIL:
    case t.SIGNUP_FAIL:
      return {
        ...state,
        error: payload.data,
        reg_status: payload.status,
      }
    case t.SET_PAGE:
      return {
        ...state,
        page: payload,
      }
    case t.LOGOUT:
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
        favorite: [],
        favorites: null,
      }
    case t.EMAIL_CONFIRM_REQUEST_SUCCESS:
    case t.EMAIL_CONFIRM_REQUEST_FAIL:
    case t.PHONE_CONFIRM_REQUEST_SUCCESS:
    case t.PHONE_CONFIRM_REQUEST_FAIL:
      return {
        ...state,
        confirm_request: payload,
      }
    case t.EMAIL_CONFIRM_SUCCESS:
    case t.EMAIL_CONFIRM_FAIL:
    case t.PHONE_CONFIRM_SUCCESS:
      return {
        ...state,
        confirm: payload,
        phone_error: null,
      }

    case t.PHONE_CONFIRM_FAIL:
      return {
        ...state,
        confirm: payload.status,
        phone_error: payload.data,
      }

    case t.CLEAR_CONFIRM:
      return {
        ...state,
        confirm_request: null,
        confirm: null,
      }

    case t.AUTHENTICATED_FAIL:
    case t.USER_LOADED_FAIL:
      return {
        ...state,
      }

    case t.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        reg_status: null,
      }
    default:
      return state
  }
}

export default authReducer
