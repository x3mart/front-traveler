import React, {useEffect, useState} from 'react';
import styles from './ButtonsSet.module.css';
import {Link, useHistory} from "react-router-dom";
import SearchButtonsSection from "../SearchBar/SearchButtonsSection";
import {
  getCurrentFilterSet,
  getSearchFilters,
  getToursByFilters,
  resetAllFilters,
  resetFilter,
  setFilters
} from "../../redux/actions/filterActions";
import {connect} from "react-redux";
import queryString from 'query-string';
import {parseQs} from "../../functions";
import {clearTours} from "../../redux/actions/toursActions";

const ButtonsSet = ({
                      data,
                      button,
                      getCurrentFilterSet,
                      current_filters,
                      resetFilter,
                      language,
                      resetAllFilters,
                      location,
                      page_slug,
                      item_slug,
                      ident,
                      load_tours_action,
                      clearTours,
                    }) => {


  const path = location?.pathname?.substring(1)?.split('/').slice(1).join('/')

  const [searchStr, setSearchStr] = useState('')
  const [pageParamsStr, setPageParamsStr] = useState('')

  const history = useHistory()

  useEffect(() => {

    const propsHandler = (props) => {
      if(props) {
        if(props[0] === '?') {
          return props?.slice(1)
        } else {
          return props
        }
      }
    }
    let str = ''
    if(ident || page_slug || item_slug || location) {
      str = `${ident ? `ident=${ident}&` : ``}${page_slug ? `page_slug=${page_slug}&` : ``}${item_slug ? `item_slug=${item_slug}&` : ``}${
        location ? propsHandler(location?.search) : ''
      }`
    }
    setPageParamsStr(str)
    getCurrentFilterSet(str)
    load_tours_action(str)
  }, [ident, page_slug, item_slug, location])

  useEffect(() => {
    setSearchStr(`${current_filters?.length > 0 && current_filters?.map(item => {
      let str = `${item?.type}=${item?.data?.length > 1 ? item?.data?.join(',') : item?.data}`
      if (str[str.length - 1] === ',') {
        str = str.substring(0, str.length - 1)
      }
      return str
    })
      .join('&')}`)
  }, [current_filters])

  const handleSubmit = () => {
    getCurrentFilterSet(`${ident ? `ident=${ident}&` : ``}${page_slug ? `page_slug=${page_slug}&` : ``}${item_slug ? `item_slug=${item_slug}&` : ``}${pageParamsStr == true ? pageParamsStr + '&' : ''}${searchStr}`)
  }

  const handleReset = (type) => {
    let filter = current_filters
      // .filter(item => !item.hasOwnProperty('field'))
      ?.filter(item => item?.type !== type)?.map(item => {
        return `${item?.type}=${item?.data?.join()}`
      })
    // filter = filter
    getCurrentFilterSet(`${filter?.join('&')}${pageParamsStr ? '&' + pageParamsStr : ''}`)
    resetFilter(type)
  }

  const handleSubmitAll = () => {
    // getCurrentFilterSet(pageParamsStr)
    history.push(`/${path}?${searchStr}`)
  }

  const handleResetAll = async () => {
    await resetAllFilters()
    history.push(`/${path}`)
    history.go(0)
  }


  return (
    <>
      {data && <div className='wrapper'>
        <div className={styles.buttons_set}>
          <SearchButtonsSection
            filters={data}
            submit_action={handleSubmit}
            reset_action={handleReset}
            // current_filters={current_filters}
          />
          {current_filters?.length > 0 && button &&
            <button className={styles.submit} onClick={handleSubmitAll}>{button}</button>}
          {current_filters?.length > 0 &&
            <button className={styles.reset} onClick={handleResetAll}>Сбросить фильтры</button>}
        </div>
      </div>}
    </>
  );
};

const mapStateToProps = state => ({
  language: state.languages.language,
  current_filters: state.filters.current_filters,
})
const mapDispatchToProps = {
  getSearchFilters,
  getToursByFilters,
  resetFilter,
  getCurrentFilterSet,
  setFilters,
  resetAllFilters,
  clearTours,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonsSet)