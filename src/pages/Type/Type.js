import React, {useEffect, useState} from 'react'
import styles from './Type.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Section from "../../components/Section";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Tour from "../Tours/Tour";
import {getTypeData} from "../../redux/actions/toursActions";
import {getToursByFilters, setFilters} from "../../redux/actions/filterActions";
import ButtonsSet from "../../components/ButtonsSet/ButtonsSet";
import LoaderComponent from "../../components/LoaderComponent";
import ToursComponent from "../../components/ToursComponent";
import {parseQs} from "../../functions";
import ToursPagesComponent from "../../components/ToursPagesComponent";
import SearchSection from "../../components/SearchSection";
import {getIdent} from "../../redux/actions/authActions";

const Type = ({
                match, language, getToursByFilters, all_tours, current_filter_set,
                current_filters, setFilters, location,
              }) => {

  const [loading, setLoading] = useState(false)
  const [ident, setIdent] = useState('');
  const [page, setPage] = useState('')
  const [item, setItem] = useState('')

  useEffect(() => {
    setPage('tipy-turov')
    setItem(match?.params?.type)
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('ident')) {
      getIdent()
    }
    setIdent(localStorage.getItem('ident'))
  }, [])

  const {type} = match.params

  useEffect(() => {
    getTypeData(type)
    return () => getTypeData(type, 'clear')
  }, [type])

  const handleFilterUpdate = () => {
    setLoading(true)
  }

  // useEffect(() => {
  //   if (page && type) {
  //     getToursByFilters(`page_slug=${page}&item_slug=${type}`)
  //   }
  // }, [page, type])

  // useEffect(() => {
  //   const setCurrentFilters = async(filterSet) => {
  //     await parseQs(filterSet).map(item => {
  //       item.data.map(data => setFilters(item.type, data))
  //     })
  //   }
  //   if (!location?.search) {
  //     getToursByFilters()
  //   } else {
  //     let querystring
  //     if (location?.search[0] === '?') {
  //       querystring = location?.search?.slice(1)
  //     } else {
  //       querystring = location?.search
  //     }
  //
  //     setCurrentFilters(location.search).then(() => console.log(current_filters))
  //     getToursByFilters(querystring)
  //
  //   }
  // }, [location])

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='1'/>
      </MetaTags>
      <MainLayout
        // page={page}
      >
        {all_tours?.image &&
          <div className={styles.type_wallpaper} style={{backgroundImage: `url(${all_tours?.image})`}}/>}
        <SearchSection
          background={'#f6f7f9'}
          padding={'40px 0'}
          search_bar_border={false}
          page_slug={page}
          item_slug={item}
          ident={ident}
          location={location}
        />
        <Section padding={'0px'}>
          <Breadcrumbs>
            <Breadcrumb
              link={`/${language}`}
            >
              Главная
            </Breadcrumb>
            <Breadcrumb
              link={`/${language}/types`}
            >
              Типы туров
            </Breadcrumb>
            <Breadcrumb>
              {all_tours?.name}
            </Breadcrumb>
          </Breadcrumbs>
        </Section>
        <Section padding={'0 0 30px 0'}>
          <div className={styles.type_header}>
            <div className={styles.type_title}>
              {all_tours?.name}
            </div>
            <div className={styles.type_data}>
              <div>Туров: {all_tours?.count}</div>
              <div>Просмотров: {all_tours?.views_count}</div>
            </div>
          </div>
          {all_tours?.description && <div className={styles.type_description}>
            {all_tours?.description}
          </div>}
        </Section>
        <Section padding={'0'}>
          <ButtonsSet data={current_filter_set?.data}
                      button={current_filter_set?.button}
                      location={location}
                      current_filters={current_filters}
                      page_slug={'tipy-turov'}
                      item_slug={match?.params?.type}
                      load_tours_action={getToursByFilters}/>
        </Section>
        <Section padding={'30px 0 0 0'}>
          {loading && (
            <LoaderComponent/>
          )}
          {!loading && (
            <ToursPagesComponent tours={all_tours?.results}/>
          )}

        </Section>
      </MainLayout>
    </>
  )
}

const mapStateToProps = state => ({
  all_tours: state.tours.all_tours,
  language: state.languages.language,
  current_filter_set: state.filters.current_filter_set,
  current_filters: state.filters.current_filters,
})

const mapDispatchToProps = {
  getToursByFilters,
  setFilters,
}

export default connect(mapStateToProps, mapDispatchToProps)(Type)