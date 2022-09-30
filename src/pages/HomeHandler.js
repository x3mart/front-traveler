import React from 'react'

import {getHomePage} from "../redux/actions/toursActions";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import Home from "./Home";
import Page404 from "./404";


const HomeHandler = ({match, languages}) => {

  const {language} = match.params

  return (
    <>
      {languages.includes(language) ? <Home/> : <Page404 match={match}/>}
    </>
  )
}

const mapStateToProps = state => ({
  languages: state.languages.languages,
})

export default connect(mapStateToProps)(HomeHandler)
