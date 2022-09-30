import React, {useEffect, useState} from 'react';
import styles from './Home.module.css';
import {connect} from 'react-redux';
import Section from "../../components/Section";
import Title from "../../components/Title";
import DataSection from "./DataSection";
import {Link} from "react-router-dom";

const HomePageSection = ({data, background = 'light'}) => {

  const [left, setLeft] = useState('')

  useEffect(() => {
    if(data?.public_url) {
      setLeft(<Link to={`${data?.public_url}`} className={styles.all_button_style}>Смотреть все</Link>)
    } else {
      setLeft('')
    }
  }, [data])

  return (
    <Section padding={'30px 0'} background={background === 'dark' ? 'var(--background-grey)' : 'transparent'}>
      <Title title={data.title} sub_title={data.subtitle} border_color={background === 'dark' ? 'orange' : 'blue'} left={left}/>
      <DataSection type={data.type} content={data}/>
    </Section>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePageSection)