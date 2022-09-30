import React, {useState, useEffect} from 'react'
import styles from './BlockRecent.module.css'
import {connect} from 'react-redux'
import Title from "../Title";
import ToursSet from "./ToursSet";
import Section from "../Section";

const BlockRecent = ({
                       recent,
                       title = 'Недавно просмотренные туры',
                       subtitle = `Мы сохранили для вас недавно просмотренные вами туры, возможно вы захотите к ним вернуться и выбрать один из них`,
                       color = 'blue',
                       background = 'var(--background-grey)'
}) => {
  // let recent = JSON.parse(localStorage.getItem('recent'))

  return (
    <>
      {recent && (
        <>
          <Section background={'var(--background-grey)'} padding={'30px 0'}>
            <Title title={title} sub_title={subtitle} border_color={color}/>
            <ToursSet tours={recent}/>
          </Section>
        </>
      )}
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BlockRecent)