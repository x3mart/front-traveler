import React from 'react'
import styles from './BlockSaleTours.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock';
import Htag from '../Htag/Htag';
import CardCollection from '../CardCollection/CardCollection';
import Section from "../Section";
import Title from "../Title";
import ToursSet from "../BlockRecent/ToursSet";

const BlockSaleTours = ({ discounted }) => {

  return (
    <>
      {discounted && (
        <>
          <Section background={'var(--background-grey)'} padding={'30px 0'}>
            <Title title={'Туры со скидками '} sub_title={`Только сегодня уникальные предложения по доступным ценам`} border_color={'orange'}/>
            <ToursSet tours={discounted}/>
          </Section>
        </>
      )}
    </>
  )
};

export default BlockSaleTours