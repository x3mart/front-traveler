import React from 'react';
import styles from './Leader.module.css';
import {connect} from 'react-redux';
import Title from "../../components/Title";
import Section from "../../components/Section";

const ReviewsSection = () => {
  return (
    <>
      <Section background={'#F6F7F9'} padding={'30px 0'}>
        <Title title={'Отзывы (120)'} sub_title={'Отзывы путешественников'} border_color={'blue'}/>
      </Section>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewsSection)