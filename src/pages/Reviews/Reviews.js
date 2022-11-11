import React, {useEffect, useState} from 'react'
import styles from './Reviews.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import {Link} from "react-router-dom";
import ButtonsSet from "../../components/ButtonsSet/ButtonsSet";
import Title from "../../components/Title";
import ToursSet from "../Tours/ToursSet";
import TextSection from "../Tours/TextSection";
import MainLayout from "../../layouts/MainLayout";
import avatar from './user.png'
import image from './img.png'
import ReviewCard from "./ReviewCard";
import Section from "../../components/Section";
import ReviewsButton from "./ReviewsButton";
import {getAllReviews} from "../../redux/actions/toursActions";
import SearchSection from "../../components/SearchSection";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

const Reviews = ({
                   location,
                   language,
                   reviews,
                   getAllReviews,
}) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(loading && reviews?.length > 0) {
      setLoading(false)
    }
  }, [reviews, loading])

  useEffect(() => {
    getAllReviews()
  }, [])

  const {pathname} = location

  const loadMore = () => {
    console.log('load more')
  }

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
              Отзывы
            </Breadcrumb>
          </Breadcrumbs>
        </Section>

        <Section background={'#F6F7F9'} padding={'40px 0'}>
          <Title title={'Отзывы'} sub_title={'Отзывы путешественников'} border_color={'blue'} button={'Добавить отзыв'}/>
          {reviews && reviews.map((item, i) => <ReviewCard key={i} data={item}/>)}
          {reviews?.length > 5 && <ReviewsButton action={loadMore}/>}
        </Section>

        <SearchSection
          background={'#2AA2D6'}
          padding={'40px 0'}
          title={'Подобрать тур'}
          sub_title={'Мы подберем только лучшее'}
          title_color={'white'}
          title_border_color={'white'}
        />

        <Section background={'#F6F7F9'} padding={'40px 0'}>
          <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>
          <TextSection/>
        </Section>

        <Section background={'#F6F7F9'} padding={'40px 0'}>

        </Section>

      </MainLayout>

    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  reviews: state.tours.reviews,
})

const mapDispatchToProps = {
  getAllReviews,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)