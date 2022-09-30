import React, {useEffect, useState} from 'react'
import styles from './Faq.module.css'
import {connect} from 'react-redux'
import Title from "../../components/Title";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Destination from "../Destinations/Destination";
import Section from "../../components/Section";
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import TextSection from "../Tours/TextSection";
import {getFaqCategories} from "../../redux/actions/supportActions";
import SingleFaq from "./SingleFaq";
import SearchSection from "../../components/SearchSection";

const Faq = ({language, getFaqCategories, faq_categories}) => {

  const {pathname} = location
  const page = pathname[0] === '/' ? pathname.substring(1).split('/')[1] : pathname

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(loading && faq_categories?.length > 0) {
      setLoading(false)
    }
  }, [faq_categories, loading])

  useEffect(() => {
    getFaqCategories()
  }, [])

  return (
    <>


      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
      </MetaTags>
      <MainLayout page={pathname}>

        <Section padding={'0'}>
          <Breadcrumbs>
            <Breadcrumb
              link={`/${language}`}
            >
              Главная
            </Breadcrumb>
            <Breadcrumb>
              Частые вопросы
            </Breadcrumb>
          </Breadcrumbs>
        </Section>

        <Section padding={'30px 0 0 0'} background={'#F6F7F9'}>
          <Title title={'Ответы на вопросы'} border_color={'blue'} sub_title={`Любые ответы на любые вопросы`}/>
          {loading && (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          )}

          {!loading &&
            (<>
              <div className={styles.categories_wrapper}>
                {faq_categories?.map((item, index) =>
                  (<>
                    <SingleFaq key={index} data={item}/>
                  </>)
                )}
              </div>
            </>)
          }

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
  faq_categories: state.support.faq_categories,
})

const mapDispatchToProps = {getFaqCategories,}

export default connect(mapStateToProps, mapDispatchToProps)(Faq)