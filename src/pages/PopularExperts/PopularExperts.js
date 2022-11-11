import React, {useEffect, useState} from 'react'
import styles from './PopularExperts.module.css'
import {connect} from 'react-redux'
import {get_popular_experts} from "../../redux/actions/expertAction";
import MetaTags from "react-meta-tags";
import Title from "../../components/Title";
import LoaderComponent from "../../components/LoaderComponent";
import Destination from "../Destinations/Destination";
import Section from "../../components/Section";
import TextSection from "../Tours/TextSection";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import MainLayout from "../../layouts/MainLayout";
import {Link} from "react-router-dom";
import StarBigIcon from "../../assets/img/star-big.svg";
import SearchSection from "../../components/SearchSection";

const PopularExperts = ({location, language, get_popular_experts, popular_expert}) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    get_popular_experts()
  }, [])

  useEffect(() => {
    if(loading && popular_expert?.length > 0) {
      setLoading(false)
    }
  }, [popular_expert, loading])

  const {pathname} = location

  const Expert = ({expert}) => {
    return (
      <>
        <div className={`${styles.card_wrapper}`}>
          {expert?.public_url && <Link to={expert?.public_url} className={`${styles.expert_avatar}`}
                                       style={{backgroundImage: `url(${expert?.tmb_avatar})`}}/>}
          {!expert?.public_url && <div className={`${styles.expert_avatar}`} style={{backgroundImage: `url(${expert?.tmb_avatar})`}}/>}
          {expert?.public_url && <Link to={expert?.public_url} className={`${styles.expert_name}`}>
            {`${expert?.first_name} ${expert?.last_name}`}
          </Link>}
          {!expert?.public_url && <div className={`${styles.expert_name}`}>
            {`${expert?.first_name} ${expert?.last_name}`}
          </div>}
          <div className={`${styles.expert_data_wrapper}`}>
            <div className={`${styles.expert_data} ${styles.rating}`}>
              <div className={`${styles.expert_data_name}`}>
                Рейтинг:
              </div>
              <div className={`${styles.expert_data_amount}`}>
                <img src={StarBigIcon} alt=""/> {expert?.rating}

              </div>
            </div>
            <div className={`${styles.expert_data} ${styles.reviews}`}>
              <div className={`${styles.expert_data_name}`}>
                Отзывы:
              </div>
              <div className={`${styles.expert_data_amount}`}>
                {expert?.reviews_count}
              </div>
            </div>
            <div className={`${styles.expert_data} ${styles.tours}`}>
              <div className={`${styles.expert_data_name}`}>
                Активных туров:
              </div>
              <div className={`${styles.expert_data_amount}`}>
                {expert?.active_tours}
              </div>
            </div>
          </div>
        </div>
      </>
    )
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

        <Section padding={'0px'} background={'var(--background-grey)'}>
          <Breadcrumbs>
            <Breadcrumb
              link={`/`}
            >
              Главная
            </Breadcrumb>
            <Breadcrumb>
              Популярные эксперты
            </Breadcrumb>
          </Breadcrumbs>
        </Section>

        <Section padding={'0'} background={'var(--background-grey)'}>
          <Title title={'Популярные тревел-эксперты'} border_color={'blue'} sub_title={`Экспертов: ${popular_expert?.count}`}/>
          {loading && (
            <LoaderComponent/>
          )}
          {!loading && (
            <div className={styles.experts_card_wrapper}>
              {popular_expert?.results?.map((expert, index) => <Expert key={index} expert={expert}/>)}
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
  language: state.languages.language,
  popular_expert: state.expert.popular_expert
})

const mapDispatchToProps = {
    get_popular_experts,
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularExperts)