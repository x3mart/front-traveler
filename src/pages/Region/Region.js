import React, {useEffect} from 'react'
import styles from './Region.module.css'
import {connect} from 'react-redux'
import {getRegionData} from "../../redux/actions/toursActions";
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import TourBody from "../Tour/TourBody";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Section from "../../components/Section";
import Tour from "../Tours/Tour";
import useScript from "../../hooks/useScript";
import Destination from "./Destination";

const Region = ({match, getRegionData, current_region, language,}) => {

  const {region} = match.params

  useEffect(() => {
    getRegionData(region)
    return () => getRegionData(region, 'clear')
  }, [region])


  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='1'/>
      </MetaTags>
      <MainLayout
        // page={page}
      >
        {current_region?.image && <div className={styles.region_wallpaper} style={{backgroundImage: `url(${current_region?.image})`}}/>}
        <Section padding={'0px'}>
          <Breadcrumbs>
            <Breadcrumb
              link={`/`}
            >
              Главная
            </Breadcrumb>
            <Breadcrumb
              link={`/regions`}
            >
              Регионы
            </Breadcrumb>
            <Breadcrumb>
              {current_region?.name}
            </Breadcrumb>
          </Breadcrumbs>
        </Section>
        <Section padding={'0 0 30px 0'}>
          <div className={styles.region_header}>
            <div className={styles.region_title}>
              {current_region?.name}
            </div>
            <div className={styles.region_data}>
              {/*<div>Туров: {current_region?.tours_count}</div>*/}
              {/*<div>Просмотров: {current_region?.views_count}</div>*/}
            </div>
          </div>
          {current_region?.description && <div className={styles.region_description}>
            {current_region?.description}
          </div>}
        </Section>
        <Section padding={'0 0 30px 0'}>
          <div className={styles.region_tours}>
            {current_region?.destinations?.map((item, index) => <Destination key={index} destination={item} language={language}/>)}
          </div>
        </Section>
      </MainLayout>
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  current_region: state.tours.current_region,
})

const mapDispatchToProps = {
  getRegionData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Region)