import React, {useEffect} from 'react'
import styles from './ToursPagesComponent.module.css'
import {connect} from 'react-redux'
import Tour from "../../pages/Tours/Tour";
import {clearTours} from "../../redux/actions/toursActions";
import CardComponent from "../CardComponent";
import EmptyCard from "./EmptyCard";

const ToursPagesComponent = ({tours, clearTours, type}) => {

  return (
    <>
      <div className={styles.tours_wrapper}>
        {tours?.map((tour, index) => <CardComponent key={index} data={tour} type={type}/>)}
        <EmptyCard/>
      </div>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  clearTours
}

export default connect(mapStateToProps, mapDispatchToProps)(ToursPagesComponent)