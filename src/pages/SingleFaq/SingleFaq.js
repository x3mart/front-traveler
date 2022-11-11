import React, {useEffect, useState} from 'react'
import styles from './SingleFaq.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Section from "../../components/Section";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Title from "../../components/Title";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Destination from "../Destinations/Destination";
import TextSection from "../Tours/TextSection";
import {getFaqCategories, getFaqCategory} from "../../redux/actions/supportActions";
import Question from "./Question";
import Categories from "./Categories";
import SearchSection from "../../components/SearchSection";

const SingleFaq = ({match, getFaqCategories, getFaqCategory, faq_categories, language}) => {

  const {category_id, question_id} = match.params

  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState(null)
  const [question, setQuestion] = useState(null)

  useEffect(() => {
    getFaqCategories()
  }, [])

  useEffect(() => {
    if(loading && faq_categories) {
      setLoading(false)
    }
  }, [faq_categories, loading])

  useEffect(() => {
    getFaqCategory()
  }, [])


  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
      </MetaTags>
      <MainLayout page={`faqs`}>

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

        <Section padding={'0 0 30px 0'}>
          <Title title={'Популярные вопросы'} border_color={'blue'} sub_title={`У нас часто это спрашивают`}/>
          {loading && (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          )}
          {!loading && (
            <>
              <div className={styles.faq_page_wrapper}>
                <Question data={question}/>
                <Categories categories={faq_categories} category={category_id} action={setQuestion}/>
              </div>
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
  faq_category: state.support.faq_category,
  faq_categories: state.support.faq_categories,
})

const mapDispatchToProps = {
  getFaqCategory,
  getFaqCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFaq)