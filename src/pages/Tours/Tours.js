import React, {useEffect, useState} from 'react'
import styles from './Tours.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import {Link} from "react-router-dom";
import ButtonsSet from "../../components/ButtonsSet/ButtonsSet";
import Title from "./Title";
import ToursSet from "./ToursSet";
import SearchSection from "../../components/SearchSection";
import TextSection from "./TextSection";
import {getToursByFilters} from "../../redux/actions/filterActions";
import Section from "../../components/Section";
import Tour from "./Tour";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

const Tours = ({language, location, all_tours, getToursByFilters, tours_page_data}) => {

  const [loading, setLoading] = useState(false)

  const handleFilterUpdate = () => {
    setLoading(true)
  }

  useEffect(() => {
    if(loading && all_tours?.length > 0) {
      setLoading(false)
    }
  }, [all_tours, loading])


  useEffect(() => {
    getToursByFilters()
  }, [])


  const {pathname} = location
  const page = pathname[0] === '/' ? pathname.substring(1).split('/')[1] : pathname

  const left_part = (<div className={styles.sort_button}>Сначала популярные</div>)

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
      </MetaTags>
      <MainLayout page={pathname}>

        <Section>
          <div className='breadcrumbs breadcrumbs_margin'>
            <Breadcrumbs>
              <Breadcrumb
                link={`/${language}`}
              >
                Главная
              </Breadcrumb>
              <Breadcrumb>
                Путешествия
              </Breadcrumb>
            </Breadcrumbs>
          </div>
          <ButtonsSet data={all_tours?.filter_set} action={handleFilterUpdate}/>
        </Section>

        <Section padding={'0 0 10px 0'}>
          <Title title={'Путешествия'} border_color={'blue'} left={left_part} travels_count={all_tours?.length}/>
          {loading && (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          )}
          {!loading && (
            <div className={styles.tours_wrapper}>
              {all_tours?.results?.map((tour, index) => <Tour key={index} tour={tour}/>)}
            </div>
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
  tours_page_data: state.tours.tours_page_data,
  all_tours: state.tours.all_tours,
  language: state.languages.language,
})

const mapDispatchToProps = {getToursByFilters}

export default connect(mapStateToProps, mapDispatchToProps)(Tours)