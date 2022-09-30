import * as t from '../types'
import {CLEAR_SEARCH_DATES, SET_SEARCH_DATES_SUCCESS} from "../types";
import {properDate, serverProperDate} from "../../functions";

const initialState = {
  filters: [],
  current_filter_set: null,
  current_filters: [],
  current_search_dates: [],
  search_regions: [],
  search_region: null,
  search_destinations: [],
  current_search_destinations: [],
  destination_filter: '',
}

const filtersReducer = (state = initialState, action) => {
  const {type, payload} = action

  const setData = (data, id) => {
    if(data.includes(id)) {
      return data.filter(i => i !== id)
    } else {
      return [...data, id]
    }
  }

  const updateField = (state, data) => {
    const obj = {field: data.type}
    let newState = state.filter(content => !content.hasOwnProperty('field'))
    newState.push(obj)
    return newState
  }

  const setFiltersData = (filter, newFilter) => {
    if(filter.type === newFilter.type) {
      if(filter.data.includes(newFilter.data)) {
        return {type: filter.type, data: [...filter.data.filter(item => item !== newFilter.data)]}
      } else {
        return {type: filter.type, data: [...filter.data, newFilter.data]}
      }
    } else {
      return filter
    }
  }

  const setFilters = (state, data) => {
    if(data.type === 'start_date') {
      let d = data.data.map(d => serverProperDate(d))
      return [...state.filter(item => item.type !== 'start_date'), {type: 'start_date', data: d}]
    } else if(state?.some(content => content?.type === data?.type)) {
      return state.map(item => setFiltersData(item, data))
    } else {
      return [...state, {type: data.type, data: [data.data]}]
    }
  }

  switch (type) {
    case t.SET_DESTINATION_FILTER:

      const composeFilter = (data, state) => {
        let value = []
        if(state?.current_search_destinations?.length > 0) {
          value = state?.current_search_destinations?.map(item => item.id)
        } else if (state?.current_search_destinations?.length === 0 && state?.search_region) {
          value = state?.search_region?.destinations?.map(item => item.id)
        }
        return [
          ...data?.filter(item => item?.type !== 'start_destination'),
          {type: 'start_destination', data: [...value]},
        ]
      }

      return {
        ...state,
        current_filters: composeFilter(state.current_filters, state),
      }

    case t.SET_DATES_FILTER:

      const composeDatesFilter = (data, state) => {
        if(state?.current_search_dates?.length > 0) {
          return [
            ...data?.filter(item => item?.type !== 'start_date'),
            {type: 'start_date', data: state?.current_search_dates?.map(item => serverProperDate(item))},
          ]
        }
      }

      return {
        ...state,
        current_filters: composeDatesFilter(state.current_filters, state),
      }

    case t.GET_CURRENT_FILTER_SET_SUCCESS:
      return {
        ...state,
        current_filter_set: payload.filter_set,
      }

    case t.GET_CURRENT_FILTER_SET_FAIL:
      return {
        ...state,
        current_filter_set: null,
      }

    case t.SET_CURRENT_SEARCH_REGION:

      const updateSearchRegion = (current, new_region) => {
        if(current?.id === new_region?.id) {
          return null
        } else {
          return new_region
        }
      }

      return {
        ...state,
        search_region: updateSearchRegion(state.search_region, payload),
      }

    case t.SET_CURRENT_SEARCH_DESTINATIONS:

      const updateDestinationsList = (list, item) => {
        if(list.some(i => i.id === item.id)) {
          return list.filter(i => i.id !== item.id)
        } else {
          return [...list, item ]
        }
      }

      return {
        ...state,
        current_search_destinations: updateDestinationsList(state.current_search_destinations, payload.obj),
        current_filters: setFilters(state.current_filters, payload),
      }

    case t.RESET_DESTINATIONS:
      return {
        ...state,
        search_destinations: [],
        current_search_destinations: [],
      }

    case t.RESET_REGION:
      return {
        ...state,
        search_region: null,
      }

    case t.GET_SEARCH_REGIONS_SUCCESS:
      return {
        ...state,
        search_regions: payload,
      }
    case t.GET_SEARCH_REGIONS_FAIL:
      return {
        ...state,
        search_regions: [],
      }

    case t.GET_SEARCH_DESTINATIONS_SUCCESS:
      return {
        ...state,
        search_destinations: payload,
      }
    case t.GET_SEARCH_DESTINATIONS_FAIL:
      return {
        ...state,
        search_destinations: [],
      }

    case SET_SEARCH_DATES_SUCCESS:
      return {
        ...state,
        current_search_dates: payload.data,
        current_filters: setFilters(state.current_filters, payload),
      }

    case CLEAR_SEARCH_DATES:
      return {
        ...state,
        current_search_dates: [],
      }

    case t.GET_FILTERS_SUCCESS:
      return {
        ...state,
        filters: payload,
      }

    case t.SET_FILTERS:

      return {
        ...state,
        current_filters: setFilters(state.current_filters, payload),
      }

    case t.SET_RANGE_FILTERS:

      const setRangeFilters = (state, data) => {
        if(state?.some(content => content.type === data.type)) {
          return state.map(filter => {
            if(filter.type === data.type) {
              return {
                ...filter,
                data: data.data
              }
            } else {
              return filter
            }
          })
        } else {
          return [...state, {type: data.type, data: data.data}]
        }
      }

      return {
        ...state,
        current_filters: setRangeFilters(state.current_filters, payload),
      }

    case t.SET_RATING_FILTERS:

      const setRatingFilters = (state, data) => {
        return [...state?.filter(item => item?.type !== data?.type), {type: data?.type, data: [data?.data]}]
      }

      return {
        ...state,
        current_filters: setRatingFilters(state.current_filters, payload),
      }

    case t.RESET_FILTER:

      const resetFilters = (state, type) => {
        if(!type) {
          return []
        } else if(state?.some(item => item?.type === type)) {
          return state.filter(item => item?.type !== type)
        }
      }

      return {
        ...state,
        current_filters: resetFilters(state.current_filters, payload),
      }
    case t.RESET_ALL_FILTERS:

      return {
        ...state,
        current_filters: [],
      }
    default:
      return state
  }
}

export default filtersReducer
