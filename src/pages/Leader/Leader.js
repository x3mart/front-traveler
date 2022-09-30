import React, {useEffect} from 'react'
import styles from './Leader.module.css'
import {connect} from 'react-redux'
import MainLayout from "../../layouts/MainLayout";
import LeaderSection from "./LeaderSection";
import TeamSection from "./TeamSection";
import Section from "../../components/Section";
import Title from "../../components/Title";
import TextSection from "../Tours/TextSection";
import ToursSection from "./ToursSection";
import ReviewsSection from "./ReviewsSection";
import {get_expert} from "../../redux/actions/expertAction";
import SearchSection from "../../components/SearchSection";

const Leader = ({get_expert, match, expert}) => {

  useEffect(() => {
    const {id} = match.params
    get_expert(id)
  }, [match])


  return (
    <>
      <MainLayout>
        <SearchSection
          background={'#f6f7f9'}
          padding={'40px 0'}
          search_bar_border={false}
        />
        {expert && <LeaderSection expert={expert}/>}
        {expert?.team_members && <TeamSection team={expert?.team_members}/>}
        {expert?.expert_tours && <ToursSection tours={expert?.expert_tours}/>}
        <ReviewsSection/>


        <SearchSection
          background={'#2AA2D6'}
          padding={'40px 0'}
          title={'Подобрать тур'}
          sub_title={'Мы подберем только лучшее'}
          title_color={'white'}
          title_border_color={'white'}
        />

        <Section padding={'40px 0'}>
          <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>
          <TextSection/>
        </Section>
      </MainLayout>
    </>
  )
}

const mapStateToProps = state => ({
  expert : state.expert.expert
})

const mapDispatchToProps = {get_expert}

export default connect(mapStateToProps, mapDispatchToProps)(Leader)