import React, {useEffect, useState} from 'react'
import styles from './Regions.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Section from "../../components/Section";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import {Link, useHistory} from "react-router-dom";
import ButtonsSet from "../../components/ButtonsSet/ButtonsSet";
import Title from "../../components/Title";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Tour from "../Tours/Tour";
import TextSection from "../Tours/TextSection";
import {getAllRegions} from "../../redux/actions/toursActions";
import Region from "./Region";
import Wallpaper from "../../components/TourPageComponents/Wallpaper/Wallpaper";
import ReactPaginate from "react-paginate";
import SearchSection from "../../components/SearchSection";
import {parseQs} from "../../functions";

const Regions = ({language, location, active_regions, getAllRegions }) => {

  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const {pathname} = location
  const [currentSearchParams, setCurrentSearchParams] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [allTours, setAllTours] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    if (active_regions) {
      setAllTours(active_regions)
    }
  }, [active_regions])
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

    }
  }, [location])
  const handlePaginate = n => {
    history.push(`${pathname}?${currentSearchParams}${currentSearchParams ? '&' : ''}page=${n}`)
  }
  useEffect(() => {
    if (allTours?.page_size) {
      setPageCount(Math.ceil(allTours?.count / allTours?.page_size))
    }
  }, [allTours])

  useEffect(() => {
    if(loading && active_regions?.length > 0) {
      setLoading(false)
    }
  }, [active_regions, loading])

  useEffect(() => {
    getAllRegions()
  }, [])

  const page = pathname[0] === '/' ? pathname.substring(1).split('/')[1] : pathname

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
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
              Регионы
            </Breadcrumb>
          </Breadcrumbs>
        </Section>

        <Section padding={'0 0 30px 0'}>
          <Title title={'Регионы'} border_color={'blue'} sub_title={`Регионов: ${active_regions?.length}`}/>
          {loading && (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          )}
          {!loading && (
            <>
            <div className={styles.regions_wrapper}>
              {active_regions?.map((region, index) => <Region key={index} region={region}/>)}
            </div>
              {pageCount > 1 && (<div className={'pagination'}>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={e => {
                    handlePaginate(e.selected + 1)
                    window.scrollTo(0, 0)
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
  active_regions: state.tours.active_regions,
})

const mapDispatchToProps = {
  getAllRegions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Regions)