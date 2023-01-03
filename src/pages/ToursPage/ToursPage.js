import React, {useEffect, useState} from 'react'
import styles from './ToursPage.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import ButtonsSet from "../../components/ButtonsSet/ButtonsSet";
import Section from "../../components/Section";
import Title from "../../components/Title";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Tour from "../Tours/Tour";
import TextSection from "../Tours/TextSection";
import {getToursByFilters, getCurrentFilterSet, resetAllFilters, setFilters} from "../../redux/actions/filterActions";
import CardComponent from "../../components/CardComponent";
import LoaderComponent from "../../components/LoaderComponent";
import ReactPaginate from "react-paginate";
import {parseQs} from "../../functions";
import ToursPagesComponent from "../../components/ToursPagesComponent";
import SearchSection from "../../components/SearchSection";
import {useHistory} from "react-router-dom";

const ToursPage = ({
                     language,
                     location,
                     all_tours,
                     getToursByFilters,
                     current_filter_set,
                     resetAllFilters,
                     setFilters,
                     current_filters,
                     getCurrentFilterSet,
                   }) => {

  const history = useHistory()

  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentSearchParams, setCurrentSearchParams] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    return () => resetAllFilters()
  }, [])

  useEffect(() => {
    if (all_tours?.page_size) {
      setPageCount(Math.ceil(all_tours?.count / all_tours?.page_size))
    }
  }, [all_tours])

  useEffect(() => {
    let querystring
    if (location?.search) {
      if (location?.search[0] === '?') {
        querystring = location?.search?.slice(1)
      } else {
        querystring = location?.search
      }
      let search = parseQs(querystring).filter(item => item.type !== 'page').map(item => {
        return `${item.type}=${item.data.join(',')}`
      }).join('&')
      if(search !== currentSearchParams) {
        setCurrentSearchParams(search)
      }

      if(parseQs(querystring).some(item => item.type === 'page')) {
        parseQs(querystring).map(item => {
          if(item.type === 'page') {
            setCurrentPage(Number(item.data-1))
          }
        })
      }

    }
  }, [location])

  useEffect(() => {
    const setCurrentFilters = async(filterSet) => {
      await parseQs(filterSet)?.filter(set => set.type !== 'page')?.map(item => {
        item?.data?.map(data => setFilters(item.type, data))
      })
    }
    if (!location?.search) {
      getToursByFilters()
    } else {
      let querystring
      if (location?.search[0] === '?') {
        querystring = location?.search?.slice(1)
      } else {
        querystring = location?.search
      }
      console.log(querystring)
      setCurrentFilters(location.search).then(() => console.log(current_filters))
      getToursByFilters(querystring)
      getCurrentFilterSet(querystring)
    }
  }, [location])
  useEffect(() => {
    if(location?.search && current_filters?.some(item => item?.type && item?.data?.length === 0)) {
      history.go(0)
    }
  }, [location, current_filters])

  // useEffect(() => {
  //
  //   console.log(location?.search)
  //   console.log(current_filters)
  //   console.log(current_filters?.some(item => item?.type && item?.data?.length === 0))
  //
  //   if(location?.search && current_filters?.some(item => item?.type && item?.data?.length === 0)) {
  //     history.go(0)
  //   }
  //
  // }, [location, current_filters])


  const {pathname} = location
  const page = pathname[0] === '/' ? pathname.substring(1).split('/')[1] : pathname

  const left_part = (<div className={styles.sort_button}>Сначала популярные</div>)

  const handlePaginate = n => {
    history.push(`${pathname}?${currentSearchParams}${currentSearchParams ? '&' : ''}page=${n}`)
  }

  return (
    <>

      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content=''/>
      </MetaTags>
      <MainLayout page={pathname}>
        <SearchSection
          background={'#f6f7f9'}
          padding={'40px 0'}
          search_bar_border={false}
        />
        <Section>
          <Breadcrumbs>
            <Breadcrumb
              link={`/`}
            >
              Главная
            </Breadcrumb>
            <Breadcrumb>
              Путешествия
            </Breadcrumb>
          </Breadcrumbs>
          {!loading ?
            <ButtonsSet
              data={current_filter_set?.data}
              button={current_filter_set?.button}
              location={location}
              // current_filters={current_filters}
              load_tours_action={getToursByFilters}
            />
            :
            <div/>
          }
        </Section>

        <Section padding={'0 0 10px 0'}>
          <Title title={'Путешествия'} border_color={'blue'} left={left_part} travels_count={all_tours?.length}/>
          {/*<div className={styles.tours_wrapper}>*/}
          {/*  {all_tours?.results?.map((tour, index) => <CardComponent key={index} data={tour} type={'tour'}/>)}*/}
          {/*</div>*/}
          <ToursPagesComponent tours={all_tours?.results}/>
          {pageCount > 1 && (<div className={'pagination'}>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              // onPageChange={e => console.log(e)}
              onPageChange={e => {
                handlePaginate(e.selected + 1)
                window.scrollTo(0, 0)
              }}
              // onPageChange={e => {
              //   getToursByFilters(`page=${e.selected + 1}`)
              // }}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              forcePage={currentPage}
              // hrefAllControls={true}
              hrefBuilder={(page, pageCount, selected) =>
                page >= 1 && page <= pageCount ? `${pathname}?${currentSearchParams}${currentSearchParams ? '&' : ''}page=${page}` : '#'
              }
            />
          </div>)}
        </Section>

        <SearchSection
          background={'#2AA2D6'}
          padding={'40px 0'}
          title={'Подобрать тур'}
          sub_title={'Мы подберем только лучшее'}
          title_color={'white'}
          title_border_color={'white'}
        />

        <Section padding={'40px 0'}>
          <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>
          <TextSection/>
        </Section>

      </MainLayout>


    </>
  )
}

const mapStateToProps = state => ({
  all_tours: state.tours.all_tours,
  current_filter_set: state.filters.current_filter_set,
  language: state.languages.language,
  current_filters: state.filters.current_filters,
})

const mapDispatchToProps = {
  getToursByFilters,
  getCurrentFilterSet,
  resetAllFilters,
  setFilters,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToursPage)