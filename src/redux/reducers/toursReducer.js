import {
  GET_EXPERT_TOURS_FILTERSET_SUCCESS,
  GET_EXPERT_TOURS_FILTERSET_FAIL,
  GET_CURRENT_FILTER_SET_SUCCESS,
  GET_CURRENT_FILTER_SET_FAIL,
  GET_ALL_REVIEWS_SUCCESS,
  GET_ALL_REVIEWS_FAIL,
  GET_POPULAR_DESTINATIONS_SUCCESS,
  GET_POPULAR_DESTINATIONS_FAIL,
  CLEAR_ALL_TOURS,
  GET_TYPE_SUCCESS,
  GET_TYPE_FAIL,
  GET_REGION_SUCCESS,
  GET_REGION_FAIL,
  GET_DESTINATION_SUCCESS,
  GET_DESTINATION_FAIL,
  GET_MAIN_MENU_SUCCESS,
  GET_MAIN_MENU_FAIL,
  // SET_RATING_FILTERS,
  GET_ALL_REGIONS_SUCCESS,
  GET_ALL_REGIONS_FAIL,
  GET_ALL_DESTINATIONS_SUCCESS,
  GET_ALL_DESTINATIONS_FAIL,
  GET_ALL_TYPES_SUCCESS,
  GET_ALL_TYPES_FAIL,
  GET_HOME_PAGE_SUCCESS,
  GET_HOME_PAGE_FAIL,
  RESET_FILTER,
  SET_FILTERS,
  SET_RANGE_FILTERS,
  GET_FILTERS_SUCCESS,
  GET_FILTERS_FAIL,
  GET_TOUR_TYPES_SUCCESS,
  GET_TOUR_TYPES_FAIL,
  ADD_TOUR_SUCCESS,
  ADD_TOUR_FAIL,
  GET_TOUR_PROPERTY_TYPES_SUCCESS,
  GET_TOUR_PROPERTY_TYPES_FAIL,
  GET_TOUR_ACCOMODATIONS_SUCCESS,
  GET_TOUR_ACCOMODATIONS_FAIL,
  UPDATE_TOUR_SUCCESS,
  UPDATE_TOUR_FAIL,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAIL,
  GET_COUNTRIES_SUCCESS,
  GET_FINISH_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_START_RUSSIAN_REGIONS_SUCCESS,
  GET_FINISH_RUSSIAN_REGIONS_SUCCESS,
  GET_RUSSIAN_REGIONS_FAIL,
  GET_START_CITIES_SUCCESS,
  GET_FINISH_CITIES_SUCCESS,
  GET_CITIES_FAIL,
  GET_TOUR_SUCCESS,
  GET_TOUR_FAIL,
  CLEAR_CURRENT_TOUR,
  CLEAR_CURRENT_TOUR_FAIL,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAIL,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAIL,
  SET_PROPERTY_IMAGE_SUCCESS,
  SET_PROPERTY_IMAGE_FAIL,
  SET_TOUR_DAY_IMAGE_SUCCESS,
  SET_TOUR_DAY_IMAGE_FAIL,
  ADD_DAY_SUCCESS,
  ADD_DAY_FAIL,
  REMOVE_DAY_SUCCESS,
  UPDATE_DAY_SUCCESS,
  UPDATE_DAY_FAIL,
  SET_TOUR_IMAGE_SUCCESS,
  SET_TOUR_IMAGE_FAIL,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAIL,
  ADD_ACTIVITY_SUCCESS,
  REMOVE_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_FAIL,
  UPDATE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_FAIL,
  SET_ACTIVITY_IMAGE_SUCCESS,
  SET_ACTIVITY_IMAGE_FAIL,
  GET_TOUR_LEADERS_SUCCESS,
  GET_TOUR_LEADERS_FAIL,
  SET_CURRENT_SECTION,
  SET_ACTIVE_SECTION,
  DELETE_ACTIVE_SECTION,
  SET_SECONDARY_NAV,
  OPEN_SECONDARY_MENU,
  SET_TOUR_NAME,
  UPDATE_LOCAL_TOUR_SUCCESS,
  SET_EDITING,
  UPDATE_GUEST_GUIDE_SUCCESS,
  SET_GUEST_GUIDE_IMAGE_SUCCESS,
  SET_GUEST_GUIDE_IMAGE_FAIL,
  ADD_EXTRA_SERVICE_SUCCESS,
  UPDATE_EXTRA_SERVICE_SUCCESS,
  UPDATE_TOUR_WALLPAPER_SUCCESS,
  UPDATE_TOUR_WALLPAPER_FAIL,
  DELETE_TOUR_WALLPAPER_SUCCESS,
  COPY_TOUR_SUCCESS,
  COPY_TOUR_FAIL,
  GET_TOUR_PREVIEW_SUCCESS,
  GET_TOUR_PREVIEW_FAIL,
  SET_PAGE,
  GET_CITIES_SUCCESS,
  DELETE_TOUR_IMAGE_SUCCESS,
  DELETE_TOUR_IMAGE_FAIL,
  DELETE_TOUR,
  DELETE_PROPERTY_IMAGE_SUCCESS,
  DELETE_PROPERTY_IMAGE_FAIL,
  DELETE_TOUR_DAY_IMAGE,
  CLEAR_ERRORS,
  SET_KEY,
  DELETE_KEY,
  DELETE_ACTIVITY_IMAGE,
  GET_ALL_TOURS_SUCCESS,
  GET_ALL_TOURS_FAIL,
  GET_LEGAL_DOCS_SUCCESS,
  GET_LEGAL_DOCS_FAIL,
  GET_LEGAL_DOC_SUCCESS,
  REMOVE_EXTRA_SERVICE_SUCCESS,
  GET_SEARCH_REGIONS_SUCCESS,
  GET_SEARCH_REGIONS_FAIL,
  SET_SEARCH_IS_RUSSIA,
  SET_SEARCH_REGION_SUCCESS,
  SET_SEARCH_DATA_SUCCESS,
  GET_SEARCH_DATA_SUCCESS,
  SET_SEARCH_DATES_SUCCESS,
  CLEAR_SEARCH_REGION,
  CLEAR_SEARCH_DATES,
} from '../types'

const initialState = {
  expert_tours_filterset: [],
  current_destination: null,
  current_region: null,
  current_type: null,
  main_menu: [],
  active_regions: [],
  reviews: [],
  active_destinations: [],
  popular_destinations: [],
  active_types: [],
  home_page: null,
  doc: null,
  docs: [],
  key: '',
  res_status: null,
  error: {},
  tours: [],
  all_tours: null,
  tours_page_data: null,
  cities: [],
  current_tour: {},
  tour_preview: null,
  tour_types: [],
  regions: [],
  search_regions: [],
  is_russia: false,
  current_search_region: null,
  search_data: [],
  current_search_data: [],
  current_search_dates: [],
  filters: [],
  current_filter_set: null,
  current_filters: [],
  countries: [],
  start_russian_regions: [],
  start_cities: [],
  finish_countries: [],
  finish_russian_regions: [],
  finish_cities: [],
  currencies: [],
  languages: [],
  tour_property_types: [],
  tour_accomodations: [],
  plan: [],
  page: '',
  tour_leaders: [],
  current_section: 'common',
  active_sections: [],
  secondary_nav: [
    {value: 'main', text: 'Основное', active: false},
    {value: 'review', text: 'Обзор', active: false},
    {value: 'prices', text: 'Цены', active: false},
    {value: 'gallery', text: 'Галерея', active: false},
    {value: 'route', text: 'Маршрут', active: false},
    {value: 'accommodation', text: 'Проживание', active: false},
    {value: 'details', text: 'Детали', active: false},
    {value: 'important', text: 'Важно знать', active: false},
  ],
  secondary: false,
  tour_name: '',
  editing: false,
}

const toursReducer = (state = initialState, action) => {
  const {type, payload} = action

  const updateField = (state, data) => {
    const obj = {field: data.type}
    let newState = state.filter(content => !content.hasOwnProperty('field'))
    newState.push(obj)
    return newState
  }

  const setTourWallpaper = (tour, data) => {
    return {
      ...tour,
      wallpaper: data.wallpaper,
      tmb_wallpaper: data.tmb_wallpaper,
    }
  }

  const deleteTourWallpaper = (tour) => {
    return {
      ...tour,
      wallpaper: '',
      tmb_wallpaper: '',
    }
  }

  const setPropertyImages = (tour, image) => {
    return {
      ...tour,
      tour_property_images: image,
    }
  }
  const setTourImages = (tour, data) => {
    return {
      ...tour,
      tour_images: data,
    }
  }

  const setDay = (tour, day) => {
    let result = {}
    if (Array.isArray(tour.tour_days)) {
      let arr = [...tour.tour_days]
      arr.push(day)
      result = {
        ...tour,
        tour_days: arr,
      }
    } else {
      let arr = []
      arr.push(day)
      result = {
        ...tour,
        tour_days: arr,
      }
    }
    return result
  }

  const setDayImage = (tour, data) => {
    let arr = []
    tour.tour_days.map(item => {
      if (item.id === data.id) {
        arr = item.image
      }
    })
    arr = [
      ...arr, data.image
    ]
    return {
      ...tour,
      tour_days: tour.tour_days.map(item => {
        if (item.id === data.id) {
          return {...item, image: arr}
        } else {
          return item
        }
      }),
    }
  }

  const updateDay = (tour, day) => {
    let result = {
      ...tour,
      tour_days: tour.tour_days.map(item => {
        if (item.id === day.id) {
          return {...item, [day.name]: day.data}
        } else {
          return item
        }
      }),
    }
    return result
  }

  const deleteDay = (tour, day) => {
    let result = {
      ...tour,
      tour_days: tour.tour_days.filter((item, index) => index !== day),
    }
    return result
  }

  const setActivity = (tour, activity) => {
    let result = {}
    if (Array.isArray(tour.plan)) {
      let arr = [...tour.plan]
      arr.push(activity)
      result = {
        ...tour,
        plan: arr,
      }
    } else {
      let arr = []
      arr.push(activity)
      result = {
        ...tour,
        plan: arr,
      }
    }
    return result
  }

  const removeActivity = (tour, id) => {
    let result = {
      ...tour,
      plan: tour.plan.filter((item, index) => index !== id),
    }
    return result
    // return {
    //   ...tour,
    //   plan: tour.plan.filter(item => item.id !== id)
    // }
  }

  const setActivityImage = (tour, data) => {
    return {
      ...tour,
      plan: tour.plan.map(item => {
        if (item.id === data.id) {
          return {...item, image: data.image}
        } else {
          return item
        }
      }),
    }
  }

  const deleteActivityImage = (tour, id) => {
    return {
      ...tour,
      plan: tour.plan.map(item => {
        if (item.id === id) {
          return {...item, image: {}}
        } else {
          return item
        }
      }),
    }
  }

  const updateActivity = (tour, data) => {
    let result = {
      ...tour,
      plan: tour.plan.map(item => {
        if (item.id === data.id) {
          return {...item, description: data.description}
        } else {
          return item
        }
      }),
    }
    return result
  }

  const setGuestGuideImage = (tour, data) => {
    const gg = {
      ...tour.guest_guide,
      tmb_avatar: data.tmb_image,
      avatar: data.image,
    }
    return {
      ...tour,
      guest_guide: gg,
    }
  }

  const setExtraService = (tour, data) => {
    let result = {}
    if (Array.isArray(tour.tour_addetional_services)) {
      let arr = [...tour.tour_addetional_services]
      arr.push(data)
      result = {
        ...tour,
        tour_addetional_services: arr,
      }
    } else {
      let arr = []
      arr.push(data)
      result = {
        ...tour,
        tour_addetional_services: arr,
      }
    }
    return result
  }

  const updateExtraService = (tour, data) => {
    let result = {
      ...tour,
      tour_addetional_services: tour.tour_addetional_services.map(item => {
        if (item.id === data.id) {
          return {...item, [data.name]: data.data}
        } else {
          return item
        }
      }),
    }
    return result
  }

  const deleteExtraService = (tour, service) => {
    let result = {
      ...tour,
      tour_addetional_services: tour.tour_addetional_services.filter((item, index) => index !== service),
    }
    return result
  }

  const updateNav = (nav, data) => {
    return nav.map(item => {
      if(data.includes(item.value)) {
        return {
          ...item,
          active: true,
        }
      } else {
        return {
          ...item,
          active: false,
        }      }
    })
  }

  switch (type) {
    case GET_TOURS_SUCCESS:
      return {
        ...state,
        tours: payload,
      }

    case GET_EXPERT_TOURS_FILTERSET_SUCCESS:
      return {
        ...state,
        expert_tours_filterset: payload,
      }

    case GET_EXPERT_TOURS_FILTERSET_FAIL:
      return {
        ...state,
        expert_tours_filterset: [],
      }

    case GET_DESTINATION_SUCCESS:
      return {
        ...state,
        current_destination: payload,
      }
    case GET_DESTINATION_FAIL:
      return {
        ...state,
        current_destination: null,
      }

    case GET_TYPE_SUCCESS:
      return {
        ...state,
        current_type: payload,
      }
    case GET_TYPE_FAIL:
      return {
        ...state,
        current_type: null,
      }

    case GET_REGION_SUCCESS:
      return {
        ...state,
        current_region: payload,
      }
    case GET_REGION_FAIL:
      return {
        ...state,
        current_region: null,
      }

    // case GET_CURRENT_FILTER_SET_SUCCESS:
    //   return {
    //     ...state,
    //     all_tours: payload,
    //   }
    // case GET_CURRENT_FILTER_SET_FAIL:
    //   return {
    //     ...state,
    //     current_filter_set: null,
    //   }

    case GET_MAIN_MENU_SUCCESS:
      return {
        ...state,
        main_menu: payload,
      }
    case GET_MAIN_MENU_FAIL:
      return {
        ...state,
        main_menu: [],
      }

    case GET_ALL_REGIONS_SUCCESS:
      return {
        ...state,
        active_regions: payload,
      }

    case GET_ALL_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: payload,
      }

    case GET_ALL_DESTINATIONS_SUCCESS:
      return {
        ...state,
        active_destinations: payload,
      }

    case GET_POPULAR_DESTINATIONS_SUCCESS:
      return {
        ...state,
        popular_destinations: payload,
      }

    case GET_ALL_TYPES_SUCCESS:
      return {
        ...state,
        active_types: payload,
      }

    case GET_ALL_TYPES_FAIL:
      return {
        ...state,
        active_types: [],
      }

    case GET_HOME_PAGE_SUCCESS:
      return {
        ...state,
        home_page: payload,
      }

    case GET_HOME_PAGE_FAIL:
      return {
        ...state,
        home_page: null,
      }

    case GET_LEGAL_DOCS_SUCCESS:
      return {
        ...state,
        docs: payload,
      }

    case GET_LEGAL_DOC_SUCCESS:
      return {
        ...state,
        doc: payload,
      }

    case GET_ALL_TOURS_SUCCESS:
      return {
        ...state,
        all_tours: payload,
      }
    case CLEAR_ALL_TOURS:
      return {
        ...state,
        // tours_page_data: payload,
        all_tours: null,
        // all_tours: payload.results,
      }

    case SET_KEY:
      return {
        ...state,
        key: payload,
      }
    case DELETE_KEY:
      return {
        ...state,
        key: '',
      }
    case COPY_TOUR_SUCCESS:
      return {
        ...state,
        tours: {
          ...state.tours,
          results:[payload, ...state.tours.results]
        }}
    case GET_TOURS_FAIL:
      return {
        ...state,
        tours: [],
      }
    case DELETE_TOUR_IMAGE_SUCCESS:
      const updateGallery = (tour, payload) => {
        const gallery = state.current_tour.tour_images.filter(item => item.id !== payload.id)
        return {
          ...tour,
          tour_images: gallery
        }
      }
      return {
        ...state,
        current_tour: updateGallery(state.current_tour, payload),
      }

    case DELETE_PROPERTY_IMAGE_SUCCESS:
      const updatePropertyImage = (tour, payload) => {
        const gallery = state.current_tour.tour_property_images.filter(item => item.id !== payload.id)
        return {
          ...tour,
          tour_property_images: gallery
        }
      }
      return {
        ...state,
        current_tour: updatePropertyImage(state.current_tour, payload),
      }

    case DELETE_TOUR:
      return {
        ...state,
        tours: {
          ...state.tours,
          results: state.tours.results.filter(item => item.id !== payload)
        }}

    case GET_CITIES_SUCCESS:
      return {
        ...state,
        cities: [],
      }

    case UPDATE_TOUR_SUCCESS:
      return {
        ...state,
        current_tour: payload,
        error: {},
        secondary_nav: updateNav(state.secondary_nav, payload.completed_sections),
      }

    case ADD_TOUR_SUCCESS:
    case GET_TOUR_SUCCESS:
    case UPDATE_LOCAL_TOUR_SUCCESS:
      return {
        ...state,
        current_tour: payload,
        secondary_nav: updateNav(state.secondary_nav, payload.completed_sections),
      }
    case GET_TOUR_PREVIEW_SUCCESS:
      return {
        ...state,
        tour_preview: payload,
      }

    case ADD_TOUR_FAIL:
    case GET_TOUR_FAIL:
      return {
        ...state,
        current_tour: {},
      }

    case UPDATE_TOUR_FAIL:
      return {
        ...state,
        error: payload,
      }
    case GET_TOUR_TYPES_SUCCESS:
      return {
        ...state,
        tour_types: payload,
      }
    case GET_TOUR_TYPES_FAIL:
      return {
        ...state,
        tour_types: [],
      }
    case GET_TOUR_PROPERTY_TYPES_SUCCESS:
      return {
        ...state,
        tour_property_types: payload,
      }
    case GET_TOUR_PROPERTY_TYPES_FAIL:
      return {
        ...state,
        tour_property_types: [],
      }
    case GET_TOUR_ACCOMODATIONS_SUCCESS:
      return {
        ...state,
        tour_accomodations: payload,
      }
    case GET_TOUR_ACCOMODATIONS_FAIL:
      return {
        ...state,
        tour_accomodations: [],
      }

    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: payload,
      }
    case GET_CURRENCIES_FAIL:
      return {
        ...state,
        currencies: [],
      }
    case GET_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: payload,
      }
    case GET_LANGUAGES_FAIL:
      return {
        ...state,
        languages: [],
      }
    case UPDATE_TOUR_WALLPAPER_SUCCESS:
      return {
        ...state,
        current_tour: setTourWallpaper(state.current_tour, payload),
      }
    case SET_GUEST_GUIDE_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setGuestGuideImage(state.current_tour, payload),
      }
    case SET_PROPERTY_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setPropertyImages(state.current_tour, payload),
      }

    case SET_ACTIVITY_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setActivityImage(state.current_tour, payload),
      }
    case DELETE_ACTIVITY_IMAGE:
      return {
        ...state,
        current_tour: deleteActivityImage(state.current_tour, payload),
      }
    case SET_TOUR_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setTourImages(state.current_tour, payload),
      }

    case ADD_EXTRA_SERVICE_SUCCESS:
      return {
        ...state,
        current_tour: setExtraService(state.current_tour, payload),
      }
    case UPDATE_EXTRA_SERVICE_SUCCESS:
      return {
        ...state,
        current_tour: updateExtraService(state.current_tour, payload),
      }
    case REMOVE_EXTRA_SERVICE_SUCCESS:
      return {
        ...state,
        current_tour: deleteExtraService(state.current_tour, payload),
      }
    case ADD_DAY_SUCCESS:
      return {
        ...state,
        current_tour: setDay(state.current_tour, payload),
      }
    case UPDATE_DAY_SUCCESS:
      return {
        ...state,
        current_tour: updateDay(state.current_tour, payload),
      }
    case REMOVE_DAY_SUCCESS:
      return {
        ...state,
        current_tour: deleteDay(state.current_tour, payload),
      }
    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        // plan: payload,
        current_tour: setActivity(state.current_tour, payload),
      }
    case REMOVE_ACTIVITY_SUCCESS:
      return {
        ...state,
        current_tour: removeActivity(state.current_tour, payload),
      }
    case SET_TOUR_DAY_IMAGE_SUCCESS:
      return {
        ...state,
        // plan: payload,
        current_tour: setDayImage(state.current_tour, payload),
      }
    case DELETE_TOUR_DAY_IMAGE:
      const handleImageDelete = (tour, data) => {
        const days = tour.tour_days.map(item => {
            if (item.id === data.day) {
              item.image = item.image.filter(image => image.id !== data.image)
            }
            return item
          }
        )
        return {
          ...tour,
          tour_days: days
        }

      }
      return {
        ...state,
        current_tour: handleImageDelete(state.current_tour, payload),
      }
    case UPDATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        current_tour: updateActivity(state.current_tour, payload),
      }

    case GET_REGIONS_SUCCESS:
      return {
        ...state,
        regions: payload,
      }

    case GET_SEARCH_REGIONS_FAIL:
      return {
        ...state,
        search_regions: [],
      }

    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: payload,
      }
    case GET_START_RUSSIAN_REGIONS_SUCCESS:
      return {
        ...state,
        start_russian_regions: payload,
      }
    case GET_START_CITIES_SUCCESS:
      return {
        ...state,
        start_cities: payload,
      }

    case GET_FINISH_COUNTRIES_SUCCESS:
      return {
        ...state,
        finish_countries: payload,
      }
    case GET_FINISH_RUSSIAN_REGIONS_SUCCESS:
      return {
        ...state,
        finish_russian_regions: payload,
      }
    case GET_FINISH_CITIES_SUCCESS:
      return {
        ...state,
        finish_cities: payload,
      }
    case GET_TOUR_LEADERS_SUCCESS:
      return {
        ...state,
        tour_leaders: payload,
      }
    case SET_PAGE:
      return {
        ...state,
        page: payload,
      }

    case CLEAR_CURRENT_TOUR:
      return {
        ...state,
        current_tour: {},
        tour_types: [],
        regions: [],
        start_countries: [],
        start_russian_regions: [],
        start_cities: [],
        finish_countries: [],
        finish_russian_regions: [],
        finish_cities: [],
        currencies: [],
        languages: [],
        tour_property_types: [],
        tour_accomodations: [],
        plan: [],
        page: '',
        tour_leaders: [],
        tour_name: '',
        secondary_nav: [
          {value: 'main', text: 'Основное', active: false},
          {value: 'review', text: 'Обзор', active: false},
          {value: 'prices', text: 'Цены', active: false},
          {value: 'gallery', text: 'Галерея', active: false},
          {value: 'route', text: 'Маршрут', active: false},
          {value: 'accommodation', text: 'Проживание', active: false},
          {value: 'details', text: 'Детали', active: false},
          {value: 'important', text: 'Важно знать', active: false},
        ],
      }

    case SET_CURRENT_SECTION:
      return {
        ...state,
        current_section: payload,
      }
    case SET_ACTIVE_SECTION:
      return {
        ...state,
        active_sections: payload,
      }
    case DELETE_ACTIVE_SECTION:
      return {
        ...state,
        active_sections: state.active_sections.filter(item => item !== payload),
      }
    case SET_SECONDARY_NAV:
      return {
        ...state,
        secondary_nav: payload,
      }
    case OPEN_SECONDARY_MENU:
      return {
        ...state,
        secondary: payload,
      }
    case SET_TOUR_NAME:
      return {
        ...state,
        tour_name: payload,
      }
    case SET_EDITING:
      return {
        ...state,
        editing: payload,
      }
    case DELETE_TOUR_WALLPAPER_SUCCESS:
      return {
        ...state,
        current_tour: deleteTourWallpaper(state.current_tour),
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        res_status: null,
        error: {},
      }

    case GET_FILTERS_SUCCESS:
      return {
        ...state,
        filters: payload,
      }

    case SET_FILTERS:

      const setData = (data, id) => {
        if(data.includes(id)) {
          return data.filter(i => i !== id)
        } else {
          return [...data, id]
        }
      }

      const setFilters = (state, data) => {
        if(state?.some(content => content.type === data.type)) {
          return updateField(state.map(filter => {
            if(filter.type === data.type) {
              return {
                ...filter,
                data: setData(filter.data, data.id)
              }
            } else {
              return filter
            }
          }), data)
        } else {
          return updateField([...state, {type: data.type, data: [data.id]}], data)
        }
      }

      return {
        ...state,
        current_filters: setFilters(state.current_filters, payload),
      }

    case SET_RANGE_FILTERS:

      const setRangeFilters = (state, data) => {
        if(state?.some(content => content.type === data.type)) {
          return updateField(state.map(filter => {
            if(filter.type === data.type) {
              return {
                ...filter,
                data: data.data
              }
            } else {
              return filter
            }
          }), data)
        } else {
          return updateField([...state, {type: data.type, data: data.data}], data)
        }
      }

      return {
        ...state,
        current_filters: setRangeFilters(state.current_filters, payload),
      }

    // case SET_RATING_FILTERS:
    //
    //   const setRatingFilters = (state, data) => {
    //     if(state?.some(content => content.type === data.type)) {
    //       return updateField(state.map(filter => {
    //         if(filter.type === data.type) {
    //           return {
    //             ...filter,
    //             data: data.data
    //           }
    //         } else {
    //           return filter
    //         }
    //       }), data)
    //     } else {
    //       return updateField([...state, {type: data.type, data: data.data}], data)
    //     }
    //   }
    //
    //   return {
    //     ...state,
    //     current_filters: setRatingFilters(state.current_filters, payload),
    //   }

    case RESET_FILTER:

      const resetFilters = (state, type) => {
        if(state?.some(item => item.type === type)) {
          return state.filter(item => item.type !== type)
        }
      }

      return {
        ...state,
        current_filters: resetFilters(state.current_filters, payload),
      }

    case SET_SEARCH_IS_RUSSIA:
      return {
        ...state,
        is_russia: payload,
      }

    case SET_SEARCH_REGION_SUCCESS:
      return {
        ...state,
        current_search_region: payload,
      }

    case SET_SEARCH_DATA_SUCCESS:
      const handleSearchData = (state, data) => {
        if(state.some(item => item.id === data.id)) {
          return state.filter(item => item.id !== data.id)
        } else {
          return [
            ...state,
            data,
          ]
        }
      }
      return {
        ...state,
        current_search_data: handleSearchData(state.current_search_data, payload),
      }

    case GET_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        search_data: payload,
      }

    case CLEAR_SEARCH_REGION:
      return {
        ...state,
        is_russia: false,
        current_search_region: null,
        current_search_data: [],
      }

    case SET_TOUR_DAY_IMAGE_FAIL:
    case ADD_DAY_FAIL:
    case SET_TOUR_IMAGE_FAIL:
    case SET_PROPERTY_IMAGE_FAIL:
    case UPDATE_DAY_FAIL:
    case ADD_ACTIVITY_FAIL:
    case UPDATE_ACTIVITY_FAIL:
    case CLEAR_CURRENT_TOUR_FAIL:
    case GET_TOUR_LEADERS_FAIL:
    case GET_REGIONS_FAIL:
    case GET_COUNTRIES_FAIL:
    case GET_RUSSIAN_REGIONS_FAIL:
    case GET_CITIES_FAIL:
    case DELETE_TOUR_IMAGE_FAIL:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default toursReducer
