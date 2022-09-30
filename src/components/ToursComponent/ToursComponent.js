import React, {useEffect, useState} from 'react'
import styles from './Tours.module.css'
import {connect} from 'react-redux'
import {clearTours} from "../../redux/actions/toursActions";
import {getToursByFilters} from "../../redux/actions/filterActions";
import Tour from "../../pages/Tours/Tour";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ButtonsSet from "../ButtonsSet/ButtonsSet";

const ToursComponent = ({tours, clearTours, }) => {

  useEffect(() => {
    return () => clearTours()
  }, [])

  return (
    <>
      <div className={styles.tours_wrapper}>
        {tours?.map((tour, index) => <Tour key={index} tour={tour}/>)}
      </div>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  clearTours
}

export default connect(mapStateToProps, mapDispatchToProps)(ToursComponent)