import React from 'react'
import styles from './BlockTypeTours.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock';
import Htag from '../Htag/Htag';
import CardCollection from '../CardCollection/CardCollection';
import Section from "../Section";
import Title from "../Title";

const BlockTypeTours = ({ block_style, children, className, tour_types, ...props }) => {
    return (

      <>
        <Section background={'transparent'} padding={'30px 0 0 0'}>
          <Title title={'Туры по типам'} sub_title={`Мы разделили туры на типы чтобы вам было удобнее выбрать нужный`} border_color={'blue'}/>
          <CardCollection name_block='type' data={tour_types}/>
        </Section>
      </>

    );
};

export default BlockTypeTours