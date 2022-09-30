import React, {useEffect, useState} from 'react'
import MetaTags from "react-meta-tags";
import {Helmet} from "react-helmet";
import MainLayout from "../../layouts/MainLayout";
import TourBody from "./TourBody";
import {connect} from "react-redux";
import {getTourReview} from "../../redux/actions/toursActions";
import useScript from "../../hooks/useScript";
import tour_page from '../../scripts/tour_page'

const Tour = ({
                location,
                match,
                getTourReview,
}) => {


  const {pathname, search} = location
  const page = pathname[0] === '/' ? pathname.substring(1) : pathname

  console.log(location)

  const [id, setId] = useState(null)

  useScript(`
    (window["rrApiOnReady"] = window["rrApiOnReady"] || [])
        .push(function () {
            try {
                rrApi.view(${id});
            } catch (e) { }
        })
  `);

  useEffect(() => {
    if(search) {
      const query = new URLSearchParams(search);
      setId(query.get('date_id'))
    }
  },[search])

  useEffect(() => {
    getTourReview(match.params.slug, id)
    return () => getTourReview(match.params.slug, id, 'reset')
  }, [id])


  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='1' />
      </MetaTags>
      <MainLayout page={page}>
        <TourBody id={id} url={pathname}/>
      </MainLayout>
    </>
  )
}

const mapDispatchToProps = {getTourReview,}

export default connect(null, mapDispatchToProps)(Tour)