import React, {useEffect, useRef, useState} from 'react'
import styles from './SearchBar.module.css'
import {connect} from 'react-redux'
import search from './img/search.svg'
import calendar from './img/calendar.svg'
import mappin from './img/mappin.svg'
import Calendar from "./Calendar";
import Button from "../AccountTours/Components/Button";
import {properDate, serverProperDate, truncateText} from "../../functions";
import Region from "./Region";
import {clearSearchDates, setDatesFilter} from "../../redux/actions/filterActions";
import useOutsideClick from "../../hooks/useOutsideClick";
import {
  getCurrentFilterSet,
  getToursByFilters,
  resetDestinations,
  resetRegion,
  setDestinationFilter
} from "../../redux/actions/filterActions";
import {useHistory} from "react-router-dom";

const SearchBar = ({
                     border,
                     search_region,
                     current_search_destinations,
                     clearSearchDates,
                     current_search_dates,
                     margin_bottom,
                     resetDestinations,
                     resetRegion,
                     setDestinationFilter,
                     getToursByFilters,
                     destination_filter,
                     dates_filter,
                     getCurrentFilterSet,
                     setDatesFilter,
                     current_filters,
                     language,
                     page_slug,
                     item_slug,
                     ident,
                     location,
                     current_filter_set,
                   }) => {

  const path = location?.pathname?.substring(1)?.split('/').slice(1).join('/')

  const [searchStr, setSearchStr] = useState('')

  console.log(searchStr)

  useEffect(() => {
    if(current_filters?.length > 0){
      setSearchStr(`${current_filters?.length > 0 && current_filters?.map(item => {
        let str = `${item?.type}=${item?.data?.length > 1 ? item?.data?.join(',') : item?.data}`
        if (str[str.length - 1] === ',') {
          str = str.substring(0, str.length - 1)
        }
        return str
      })
        .join('&')}`)
    }
  }, [current_filters])

  const history = useHistory()

  const cal_ref = useRef()
  const reg_ref = useRef()

  const [active, setActive] = useState('')

  useOutsideClick(cal_ref, () => setActive(''));
  useOutsideClick(reg_ref, () => setActive(''));

    console.log(current_search_dates)

  const handleCalSubmit = () => {
    getCurrentFilterSet(`${ident ? `ident=${ident}&` : ``}${page_slug ? `page_slug=${page_slug}&` : ``}${item_slug ? `item_slug=${item_slug}&` : ``}${searchStr}`)
    // let filter = ''
    // if(current_search_dates?.length > 0) {
    //   filter = `start_date=${current_search_dates.map(d => serverProperDate(d)).join(',')}`
    // }
    // console.log(filter)
    // getCurrentFilterSet(filter)
    setDatesFilter()
    setActive('')
  }

  const handleRegSubmit = () => {
    getCurrentFilterSet(`${ident ? `ident=${ident}&` : ``}${page_slug ? `page_slug=${page_slug}&` : ``}${item_slug ? `item_slug=${item_slug}&` : ``}${searchStr}`)
    setDestinationFilter()
    setActive('')
  }


  const handleCalendar = () => {
    if (active === 'calendar') {
      setActive('')
    } else {
      setActive('calendar')
    }
  }

  const handleRegion = () => {
    if (active === 'region') {
      setActive('')
    } else {
      setActive('region')
    }
  }

  const handleReset = () => {
    if (active === 'region') {
      resetDestinations()
      resetRegion()
    }
  }

  const handleSubmit = () => {
    let filter = ''
    if(current_filters?.length > 0) {
      filter = current_filters?.map(item => {
        return `${item?.type}=${item?.data?.filter(d => d).join(',')}`
      }).join('&')
      // getCurrentFilterSet(filter)
      // getToursByFilters(filter)
    }
    history.push(`/${language}/${path ? path : 'puteshestviia'}?${filter}`)
  }

  return (
    <>
      <div className={`${styles.search_bar_wrapper} ${active === 'region' ? styles.active_region : ''}`}
           style={{marginBottom: margin_bottom}}>

        <div className={styles.search_field_wrapper}>
          <div className={styles.search_field}>
            <div className={`${styles.search_bar_country} ${border ? styles.border : ''}`}>
              <div className={`${styles.search_bar_country_input} ${active === 'region' ? styles.active_region : ''}`}
                   onClick={handleRegion}>
                <img src={mappin} alt="Map pin"/>

                {active !== 'region' && search_region ?
                  <span className={`${styles.search_bar_country_input_text} ${styles.active}`}>
                    {current_filter_set?.current_region ?
                      `${current_filter_set?.current_region?.name} (${truncateText(current_filter_set?.current_region?.destinations?.map(item => item.name).join(', '), 18)})`
                      :
                      `${search_region?.name} ${current_search_destinations?.length > 0 ? `(${truncateText(current_search_destinations.map(item => item.name).join(', '), 18)})` : ''}`
                    }

                    </span>
                  :
                  <span
                    className={`${styles.search_bar_country_input_text} ${active === 'region' ? styles.active : ''}`}>
                  {active === 'region' ? 'Куда: ' : 'Регион, направление'}
                    {search_region?.name ? search_region?.name : ''}
                    {current_search_destinations?.length > 0 ? ' (' + truncateText(current_search_destinations.map(item => item.name).join(', '), 18) + ')' : ''}
                    </span>
                }

              </div>
            </div>

            <div className={styles.search_bar_date}>
              <div className={styles.search_bar_date_input} onClick={handleCalendar}>
                <img src={calendar} alt="Calendar"/>

                {active !== 'calendar' && current_search_dates.length > 0 ?
                  <span className={`${styles.search_bar_date_input_text} ${styles.active}`}>
                    {current_filter_set?.current_date ? current_filter_set?.current_date.map(item => properDate(item)).join(' - ') : current_search_dates.length > 0 ? ' ' + current_search_dates.map(item => properDate(item)).join(' - ') : ''}
                </span>
                  :
                  <span
                    className={`${styles.search_bar_date_input_text} ${active === 'calendar' ? styles.active : ''}`}>
                  {active === 'calendar' || current_search_dates.length > 0 ? 'Когда:' : 'Даты'}
                    {current_search_dates.length > 0 ? ' ' + current_search_dates.map(item => properDate(item)).join(' - ') : ''}
                </span>
                }

              </div>
              {active === 'calendar' && (
                <div ref={cal_ref} className={styles.search_bar_date_active}>
                  <Calendar/>
                  <Button width={'100%'} color={'button-primary'} text={'Применить'} action={handleCalSubmit}/>
                  <div className={styles.search_bar_date_active_footer} onClick={clearSearchDates}>
                    <div>Сбросить выбор</div>
                  </div>
                </div>
              )}
            </div>

          </div>
          {active === 'region' && (
            <div ref={reg_ref} className={styles.search_bar_region_active}>
              <Region/>
              <Button width={'100%'} color={'button-primary'} text={'Применить'} action={handleRegSubmit}/>
              <div className={styles.search_bar_date_active_footer} onClick={handleReset}>
                <div>Сбросить выбор</div>
              </div>
            </div>
          )}
        </div>

        <div className={`${styles.search_bar_button} ${border ? styles.search_bar_button_border : ''}`} onClick={handleSubmit}>
          <img src={search} alt="Search"/>
          <span>Подобрать тур</span>
        </div>

      </div>
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  search_region: state.filters.search_region,
  destination_filter: state.filters.destination_filter,
  dates_filter: state.filters.dates_filter,
  current_search_destinations: state.filters.current_search_destinations,
  current_search_dates: state.filters.current_search_dates,
  current_filters: state.filters.current_filters,
  current_filter_set: state.filters.current_filter_set,
})

const mapDispatchToProps = {
  clearSearchDates,
  resetDestinations,
  resetRegion,
  setDestinationFilter,
  getToursByFilters,
  getCurrentFilterSet,
  setDatesFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)