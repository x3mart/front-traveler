import React, { Fragment, useEffect, useRef, useState } from 'react'
import MetaTags from 'react-meta-tags'
import MainLayout from '../../layouts/MainLayout'
import BlockPresentation from '../../components/BlockPresentation/BlockPresentation'
import {getHomePage} from "../../redux/actions/toursActions";
import {connect} from "react-redux";
import Section from "../../components/Section";
import Title from "../../components/Title";
import TextSection from "../Tours/TextSection";
import HomePageSection from "./HomePageSection";
import useScript from "../../hooks/useScript";
import SearchSection from "../../components/SearchSection";


const Home = ({getHomePage, home_page}) => {

  useEffect(() => {

    getHomePage()

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
        window.addEventListener("load", () => {
           retailrocket.markup.render();
        });
      `;
    document.body.append(inlineScript);

    // componentWillUnmount() {}
    return () => {
      inlineScript.remove();
    };
  }, []);

  // useEffect(() => {
  //   getHomePage()
  // }, [])

  let recent = JSON.parse(localStorage.getItem('recent'))

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </MetaTags>
      <MainLayout>
        <BlockPresentation block_style='presentation_block' />
        {home_page?.map((item, index) => (
          <HomePageSection key={index} data={item} background={(index === 0 || index % 2 === 0) ? 'dark' : 'light'} />
        ))}

        {/*{home_page?.recent?.length > 0 && <BlockRecent recent={home_page?.recent}/>}*/}
        {/*/!*<BlockViewed />*!/*/}
        {/*{home_page?.popular && <BlockPopularCountry popular={home_page?.popular}/>}*/}
        {/*<BlockRecomendation recommendations={home_page?.recommendations}/>*/}
        {/*/!*{home_page?.recommendations && <BlockRecomendation recommendations={home_page?.recommendations}/>}*!/*/}
        {/*<BlockAdvantage />*/}
        {/*{home_page?.new && <SliderBlock new_tours={home_page?.new}/>}*/}
        {/*{home_page?.regions && <BlockChangeCountry regions={home_page?.regions}/>}*/}



        {/*{home_page?.all_tours?.length > 0 && <BlockRecent recent={home_page?.all_tours} title={'Все туры'} subtitle={'Окунитесь в мир прекрасного'} color={'orange'}/>}*/}

        {/*{home_page?.types && <BlockTypeTours tour_types={home_page?.types}/>}*/}
        {/*{home_page?.discounted && <BlockSaleTours discounted={home_page?.discounted}/>}*/}
        {/*{home_page?.experts && <BlockTravelExperts experts={home_page?.experts}/>}*/}
        {/*{home_page?.rated && <BlockRaitingTours rated={home_page?.rated}/>}*/}
        {/*{home_page?.reviews?.length > 0 && <BlockFeedback reviews={home_page?.reviews}/>}*/}
        {/*{home_page?.types_all?.length > 0 && <BlockMoodTours types={home_page?.types_all}/>}*/}
        <SearchSection
          background={'#2AA2D6'}
          padding={'40px 0'}
          title={'Подобрать тур'}
          sub_title={'Мы подберем только лучшее'}
          title_color={'white'}
          title_border_color={'white'}
        />

        <Section background={'var(--background-grey)'} padding={'40px 0'}>
          <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>
          <TextSection/>
        </Section>
      </MainLayout>
    </>
    // <MainLayout>

    //   <Head>
    //     <title>Traveler Market - Маркетплейс авторских туров</title>
    //     <meta name='description' content='Generated by create next app' />
    //     <link rel='icon' href='/favicon.ico' />
    //   </Head>

    //   {/* <BlockViewed /> */}
    //   {/* <BlockPopularCountry /> */}
    //   {/* <BlockRecomendation /> */}
    //   {/* <BlockAdvantage /> */}
    //   {/* <BlockNewTour /> */}
    //   {/* <BlockChangeCountry /> */}
    //   {/* <BlockTypeTours /> */}
    //   {/* <BlockRaitingTours /> */}
    //   {/* <BlockTravelExperts /> */}
    //   {/* <BlockSaleTours /> */}
    //   {/* <BlockFeedback /> */}
    //   {/* <BlockMoodTours /> */}
    //   {/* <BlockFindTour /> */}
    //   <BlockAboutUs />
    // </MainLayout>
  )
}

const mapStateToProps = state => ({
  home_page: state.tours.home_page,
})

const mapDispatchToProps = {
  getHomePage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
