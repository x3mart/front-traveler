import React, {useEffect, useState} from 'react'
import styles from './ListPageComponent.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Section from "../Section";
import Breadcrumbs from "../Breadcrumbs";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import ButtonsSet from "../ButtonsSet/ButtonsSet";
import LoaderComponent from "../LoaderComponent";
import ToursComponent from "../ToursComponent";
import {getToursByFilters} from "../../redux/actions/filterActions";
import useScript from "../../hooks/useScript";
import {getFavorite, getIdent} from "../../redux/actions/authActions";
import ReactPaginate from "react-paginate";
import ToursPagesComponent from "../ToursPagesComponent";
import SearchSection from "../SearchSection";
import {useHistory} from "react-router-dom";
import {parseQs} from "../../functions";

const ListPageComponent = ({
                             page,
                             item,
                             language,
                             getToursByFilters,
                             all_tours,
                             with_script = false,
                             location,
                             current_filter_set,
                             current_filters,
                             favorites,
                             is_favorite = false,
                             match
                           }) => {

  const history = useHistory()

  const {pathname} = location


  const [loading, setLoading] = useState(false)
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [ident, setIdent] = useState('');
  const [allTours, setAllTours] = useState(null);

  const [currentSearchParams, setCurrentSearchParams] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

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
    if(is_favorite) {
      getFavorite()
    }
  }, [is_favorite])

  useEffect(() => {
    if(is_favorite && favorites) {
      setAllTours(favorites)
    } else if(!is_favorite && all_tours) {
      setAllTours(all_tours)
    }
  }, [is_favorite, all_tours])


  useEffect(() => {
    if (allTours?.page_size) {
      setPageCount(Math.ceil(allTours?.count / allTours?.page_size))
    }
  }, [allTours])

  useEffect(() => {
    if (loading && allTours?.results?.length > 0) {
      setLoading(false)
    }
  }, [allTours, loading])

  useEffect(() => {
    if (!localStorage.getItem('ident')) {
      getIdent()
    }
    setIdent(localStorage.getItem('ident'))
  }, [])

  const handlePaginate = n => {
    history.push(`${pathname}?${currentSearchParams}${currentSearchParams ? '&' : ''}page=${n}`)
  }

  if (with_script) {
    useScript(`
            (window["rrApiOnReady"] = window["rrApiOnReady"] || [])
              .push(function () {
                  try {
                      rrApi.categoryView(${allTours?.item_id});
                  } catch(e) { }
            })
  `);
  }

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='1'/>
      </MetaTags>
      <MainLayout
        // page={page}
      >

        {allTours?.image &&
          <div className={styles.list_page_wallpaper} style={{backgroundImage: `url(${allTours?.image})`}}/>}
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
            <Breadcrumb>
              {allTours?.name}
            </Breadcrumb>
          </Breadcrumbs>
        </Section>
        <Section padding={'0 0 30px 0'}>
          <div className={styles.list_page_header}>
            <div className={styles.list_page_title}>
              {allTours?.name}
            </div>
            <div className={styles.list_page_data}>
              <div>Туров: {allTours?.count}</div>
              <div>Просмотров: {allTours?.views_count}</div>
            </div>
          </div>
          {allTours?.description && <div className={styles.list_page_description}>
            {allTours?.description}
          </div>}
        </Section>
        <Section padding={'0'}>
          {/*<ButtonsSet data={allTours?.filter_set?.data} page_slug={page} item_slug={item} location={location}/>*/}
          <ButtonsSet data={current_filter_set?.data}
                      button={current_filter_set?.button}
                      location={location}
                      current_filters={current_filters}
                      page_slug={page}
                      item_slug={item}
                      ident={ident}
                      load_tours_action={getToursByFilters}
          />
        </Section>

        <Section padding={'30px 0 0 0'}>
          {loading && (
            <LoaderComponent/>
          )}
          {!loading && (
            <>
              {/*<ToursComponent tours={allTours?.results}/>*/}
              <ToursPagesComponent tours={allTours?.results}/>

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
      </MainLayout>
    </>
  )
}

const mapStateToProps = state => ({
  all_tours: state.tours.all_tours,
  language: state.languages.language,
  current_filter_set: state.filters.current_filter_set,
  current_filters: state.filters.current_filters,
  favorites: state.auth.favorites,
})

const mapDispatchToProps = {
  getToursByFilters,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPageComponent)