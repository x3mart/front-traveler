import React from 'react'
import styles from './CardComponent.module.css'
import {connect} from 'react-redux'
import TourCard from "./TourCard";
import CutTourCard from "./CutTourCard";

const CardComponent = ({type = 'tour', data}) => {

  if(type === 'tour') {
    return <TourCard tour={data}/>
  } else if (type === 'cut_tour') {
    return <CutTourCard tour={data}/>
  }

}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent)