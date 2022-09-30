import React, {useEffect, useState} from 'react'
import styles from './Favorite.module.css'
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
import {getToursByFilters} from "../../redux/actions/toursActions";
import {getFavorite} from "../../redux/actions/authActions";
import SearchSection from "../../components/SearchSection";
import ListPageComponent from "../../components/ListPageComponent";

const Favorite = ({language, location, favorites, getFavorite, tours_page_data}) => {

  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState('')
  const [item, setItem] = useState('')

  useEffect(() => {
    setPage('favorite')
  }, [])

  useEffect(() => {
    getFavorite()
  }, [])

  return (
    <>
      {page && <ListPageComponent page={page} item={item} location={location} is_favorite={true}/>}
      {/*<MetaTags>*/}
      {/*  <title>Traveler Market - Маркетплейс авторских туров</title>*/}
      {/*  <meta name='description' content='' />*/}
      {/*</MetaTags>*/}
      {/*<MainLayout page={'favorite'}>*/}
      {/*  <SearchSection*/}
      {/*    background={'#f6f7f9'}*/}
      {/*    padding={'40px 0'}*/}
      {/*    search_bar_border={false}*/}
      {/*  />*/}

      {/*  <Section>*/}
      {/*    <div className='breadcrumbs breadcrumbs_margin'>*/}
      {/*      <Breadcrumbs>*/}
      {/*        <Breadcrumb*/}
      {/*          link={`/${language}`}*/}
      {/*        >*/}
      {/*          Главная*/}
      {/*        </Breadcrumb>*/}
      {/*        <Breadcrumb>*/}
      {/*          Избранное*/}
      {/*        </Breadcrumb>*/}
      {/*      </Breadcrumbs>*/}
      {/*    </div>*/}
      {/*  </Section>*/}
      {/*  <Section padding={'0 0 10px 0'}>*/}
      {/*    <Title title={'Избранное'} border_color={'blue'} travels_count={favorites?.length}/>*/}
      {/*    {loading && (*/}
      {/*      <Box sx={{ display: 'flex' }}>*/}
      {/*        <CircularProgress />*/}
      {/*      </Box>*/}
      {/*    )}*/}
      {/*    {!loading && (*/}
      {/*      <div className={styles.tours_wrapper}>*/}
      {/*        {favorites?.map((tour, index) => <Tour key={index} tour={tour}/>)}*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  </Section>*/}

      {/*  <SearchSection*/}
      {/*    background={'#2AA2D6'}*/}
      {/*    padding={'40px 0'}*/}
      {/*    title={'Подобрать тур'}*/}
      {/*    sub_title={'Мы подберем только лучшее'}*/}
      {/*    title_color={'white'}*/}
      {/*    title_border_color={'white'}*/}
      {/*  />*/}

      {/*  <Section padding={'40px 0'}>*/}
      {/*    <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>*/}
      {/*    <TextSection/>*/}
      {/*  </Section>*/}

      {/*</MainLayout>*/}
      {/*Favorite*/}
    </>
  )
}

const mapStateToProps = state => ({
  tours_page_data: state.tours.tours_page_data,
  favorites: state.auth.favorites,
  language: state.languages.language,
})

const mapDispatchToProps = {
  getFavorite,
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)