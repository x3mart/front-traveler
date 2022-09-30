import React, {useState} from 'react';
import styles from './Leader.module.css';
import {connect} from 'react-redux';
import Title from "../../components/Title";
import ToursSet from "../Tours/ToursSet";
import Section from "../../components/Section";

const ToursSection = ({tours}) => {


  return (
    <>
      <Section  padding={'30px 0'}>
        <Title title={'Туры эксперта '} sub_title={'Все туры эксперта актуальные на данный момент'} border_color={'orange'} />
        {tours && <ToursSet tours={tours}/>}
      </Section>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToursSection)