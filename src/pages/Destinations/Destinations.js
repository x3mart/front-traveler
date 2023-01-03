import React, {useEffect, useState} from 'react'
import styles from './Destinations.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Section from "../../components/Section";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Title from "../../components/Title";
import TextSection from "../Tours/TextSection";
import {getAllDestinations} from "../../redux/actions/toursActions";
import Destination from "./Destination";
import LoaderComponent from "../../components/LoaderComponent";
import ReactPaginate from "react-paginate";
import SearchSection from "../../components/SearchSection";
import {useHistory} from "react-router-dom";
import {parseQs} from "../../functions";

const Destinations = ({language, location, active_destinations, getAllDestinations}) => {

  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const {pathname} = location
  const [currentSearchParams, setCurrentSearchParams] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [allTours, setAllTours] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    if (active_destinations) {
      setAllTours(active_destinations)
    }
  }, [active_destinations])
  useEffect(() => {
    let querystring
    if (location?.search) {
      if (location?.search[0] === '?') {
        querystring = location?.search?.slice(1)
      } else {
        querystring = location?.search
      }
      getAllDestinations(querystring)
      let search = parseQs(querystring).filter(item => item.type !== 'page').map(item => {
        return `${item.type}=${item.data.join(',')}`
      }).join('&')
      if (search !== currentSearchParams) {
        setCurrentSearchParams(search)
      }

      if (parseQs(querystring).some(item => item.type === 'page')) {
        parseQs(querystring).map(item => {
          if (item.type === 'page') {
            setCurrentPage(Number(item.data - 1))
          }
        })
      }

    } else {
      getAllDestinations()
    }
  }, [location])

  const handlePaginate = n => {
    history.push(`${pathname}?${currentSearchParams}${currentSearchParams ? '&' : ''}page=${n}`)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [active_destinations])


  useEffect(() => {
    if (allTours?.page_size) {
      setPageCount(Math.ceil(allTours?.count / allTours?.page_size))
    }
  }, [allTours])

  useEffect(() => {
    if (loading && active_destinations?.length > 0) {
      setLoading(false)
    }
  }, [active_destinations, loading])

  // useEffect(() => {
  //   getAllDestinations()
  // }, [])

  const page = pathname[0] === '/' ? pathname.substring(1).split('/')[1] : pathname

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

        <Section padding={'0px'}>
          <Breadcrumbs>
            <Breadcrumb
              link={`/`}
            >
              Главная
            </Breadcrumb>
            <Breadcrumb>
              Направления
            </Breadcrumb>
          </Breadcrumbs>
        </Section>

        <Section padding={'0'}>
          <Title title={'Направления'} border_color={'blue'} sub_title={`Направлений: ${active_destinations?.count}`}/>
          {loading && (
            <LoaderComponent/>
          )}
          {!loading && (
            <>
              <div className={styles.destinations_wrapper}>
                {active_destinations?.results?.map((destination, index) => <Destination key={index}
                                                                                        destination={destination}/>)}
              </div>
              {pageCount > 1 && (<div className={'pagination'}>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={e => {
                    handlePaginate(e.selected + 1)
                  }}
                  // onPageChange={e => {
                  //   getToursByFilters(`ident=${ident}&page_slug=${page}&item_slug=${item}&page=${e.selected + 1}`)
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
            </>
          )}
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
  language: state.languages.language,
  active_destinations: state.tours.active_destinations,
})

const mapDispatchToProps = {getAllDestinations,}

export default connect(mapStateToProps, mapDispatchToProps)(Destinations)