import React, {useEffect} from 'react';
import styles from './Blog.module.css';
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Section from "../../components/Section";
import {Link} from "react-router-dom";
import Title from "../../components/Title";
import BlogCard from "./BlogCard";
import TextSection from "../Tours/TextSection";
import whatsapp from './images/Socials/whatsapp.svg'
import telegram from './images/Socials/telegram.svg'
import twitter from './images/Socials/twitter.svg'
import vk from './images/Socials/vk.svg'
import fb from './images/Socials/fb.svg'
import {get_all_articles, get_single_article,} from "../../redux/actions/blogActions";
import {connect} from "react-redux";
import {properDate} from "../../functions";
import SearchSection from "../../components/SearchSection";

const SingleBlog = ({
                      location,
                      match,
                      get_all_articles,
                      get_single_article,
                      articles,
                      article,
                    }) => {

  const {pathname} = location
  const page = pathname[0] === '/' ? pathname.substring(1) : pathname

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if(!article) {
      get_all_articles()
      get_single_article(match.params.slug)
    }
  }, [article])

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
      </MetaTags>

      <MainLayout page={page}>

        <div className={styles.blog_wallpaper} style={{backgroundImage: `url(${article?.image})`}}/>

        <Section>
          <div className='breadcrumbs breadcrumbs_margin'>
            <span><Link to='/'>Главная</Link> - <Link to='/article'>Статьи</Link></span> - <span>{article?.title}</span>
          </div>
        </Section>

        <Section>
          <div className={styles.blog_page_wrapper}>
            <section className={styles.blog_main_section}>
              {/*<div className={styles.main_section_header}>*/}
              {/*  <div className={styles.main_section_header_author}>*/}
              {/*    /!*<div className={styles.main_section_header_author_avatar} style={{backgroundImage: `url(${avatar4})`}}/>*!/*/}
              {/*    /!*<div className={styles.main_section_header_author_data}>*!/*/}
              {/*    /!*  <div className={styles.main_section_header_author_name}>Кристина</div>*!/*/}
              {/*    /!*  <div className={styles.main_section_header_author_rating}><img src={star} alt="star"/> 4.7 <span>(89)</span></div>*!/*/}
              {/*    /!*</div>*!/*/}
              {/*  </div>*/}
              {/*  <div className={styles.main_section_header_social_networks}>*/}
              {/*    <div>Поделиться:</div>*/}
              {/*    <div className={styles.fb}><img src={fb} alt=""/></div>*/}
              {/*    <div className={styles.vk}><img src={vk} alt=""/></div>*/}
              {/*    <div className={styles.telegram}><img src={telegram} alt=""/></div>*/}
              {/*    <div className={styles.twitter}><img src={twitter} alt=""/></div>*/}
              {/*    <div className={styles.whatsapp}><img src={whatsapp} alt=""/></div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className={styles.main_section_title}>{article?.title}</div>
              <div className={styles.main_section_date}>{properDate(article?.date)}</div>
              <div className={styles.main_section_content} dangerouslySetInnerHTML={{__html: article?.text}}/>
            </section>
            <aside  className={styles.blog_aside_section}>
              <Title title={'Популярные статьи'} sub_title={'Вам обязательно будет интересно'} border_color={'blue'}/>
              <div className={styles.blog_aside_section_popular}>
                {articles?.map((item, i) => {
                  if(i < 3) {
                    return <BlogCard key={i} data={item}/>
                  }
                })}
              </div>
            </aside>
          </div>
        </Section>

        <SearchSection
          background={'#2AA2D6'}
          padding={'40px 0'}
          title={'Подобрать тур'}
          sub_title={'Мы подберем только лучшее'}
          title_color={'white'}
          title_border_color={'white'}
        />

        <Section background={'#F6F7F9'} padding={'40px 0'}>
          <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>
          <TextSection/>
        </Section>

      </MainLayout>
    </>
  );
};

const mapStateToProps = state => ({
  articles: state.blog.articles,
  article: state.blog.article
})

const mapDispatchToProps = {get_all_articles, get_single_article,}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog)