import React from 'react';
import styles from './Leader.module.css';
import {connect} from 'react-redux';
import Section from "../../components/Section";
import Title from "../../components/Title";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import TeamCard from "./TeamCard";

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 4 },
};

const TeamSection = ({team}) => {
  return (
    <>
      <Section background={'#F6F7F9'} padding={'30px 0'}>
        <Title title={'Команда'} sub_title={'Познакомьтесь с дружной командой. Эти ребята сделают ваше путешествие незабываемым! '} border_color={'blue'}/>
        <div className={styles.tours_set_section}>

          {team.length <= 4 && <>
            <div className={styles.tours_wrapper}>
              {team && team.map((team, index) => <TeamCard key={index} team={team}/>)}
            </div>

          </>}
          {team.length > 4 && <AliceCarousel
            mouseTracking
            infinite
            items={team && team.map((team, index) => <TeamCard key={index} team={team}/>)}
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls
          />}
        </div>
      </Section>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamSection)