import React, {useEffect, useState} from 'react'

import {connect} from "react-redux";
import {getTourAccountReview} from "../../redux/actions/toursActions";

import isNotEmptyObject from "../../helpers/isNotEmptyObject";

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import {useStickyBox} from "react-sticky-box";

import styles from './TourPage.module.css';
import Wallpaper from "../../components/TourPageComponents/Wallpaper/Wallpaper";
import TourHeader from "../../components/TourPageComponents/TourHeader/TourHeader";
import TourLocation from "../../components/TourPageComponents/TourLocation/TourLocation";
import TourInfoBlocks from "../../components/TourPageComponents/TourInfoBlocks/TourInfoBlocks";
import TourImpressions from "../../components/TourPageComponents/TourImpressions/TourImpressions";
import TourReview from "../../components/TourPageComponents/TourReview/TourReview";
import TourGallery from "../../components/TourPageComponents/TourGallery/TourGallery";
import TourRoute from "../../components/TourPageComponents/TourRoute/TourRoute";
import TourDays from "../../components/TourPageComponents/TourDays/TourDays";
import TourAccommodation from "../../components/TourPageComponents/TourAccomodation/TourAccommodation";
import TourIncluded from "../../components/TourPageComponents/TourIncluded/TourIncluded";
import TourLeader from "../../components/TourPageComponents/TourLeader/TourLeader";
import ToursEditLayout from "../../layouts/account/ToursEditLayout";
import TourTypes from "../../components/TourPageComponents/TourTypes/TourTypes";
import TourPreviewLayout from "../../layouts/account/TourPreviewLayout";
import {Link, useHistory} from "react-router-dom";
import ok from '../../assets/img/ok2.svg'
import heart from '../../assets/img/heart.svg'
import stopwatch from '../../assets/img/stopwatch.svg'
import group from '../../assets/img/users_group.svg'
import calendar from '../../assets/img/calendar2.svg'
import chevron_down from '../../assets/img/chevron_down.svg'
import star from '../../components/TourPageComponents/TourLeader/star.svg'
import AirTickets from "../../components/TourPageComponents/TourRoute/AirTickets";
import TourImportantToKnow from "../../components/TourPageComponents/TourImportantToKnow";
import {add_chat_user} from "../../redux/actions/chatActions";
import Expert from "../../components/Expert";
import axios from "axios";
import {setConfig} from "../../functions";

const TourPage = ({
                    language,
                    tour,
                    getTourAccountReview,
                    tour_preview,
                    match,
}) => {

  const stickyRef = useStickyBox({offsetTop: 30, offsetBottom: 30})

  const [places, setPlaces] = useState(1)

  const history = useHistory()

  // const handleExpertChat = () => {
  //   add_chat_user(tour_preview.expert.id)
  //   history.push(isAuthenticated ? '/account/chat' : '/login/chat')
  // }

  const handleAdd = () => {
    if (places < tour.vacants_number) {
      setPlaces(places + 1)
    }
  }

  const handleSubtract = () => {
    if (places > 1) {
      setPlaces(places - 1)
    }
  }

  const handleBook = async () => {
    const config = setConfig(!!localStorage.getItem('access'))

    const body = JSON.stringify({travelers_number: places, tour: tour_preview.id})
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/orders/`, body, config)
      if(res){
        history.push(`/account/orders/${res.data.id}/payment`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getTourAccountReview(match.params.id)
    return () => getTourAccountReview(match.params.id, 'reset')
  }, [])


  // useEffect(() => {
  //   if (isNotEmptyObject(tour)) {
  //     getTourAccountReview(tour.id)
  //     return () => getTourAccountReview(tour.id, 'reset')
  //   }
  // }, [tour])

  const PriceComment = () => {
    const [showMore, setShowMore] = useState(false)

    return (
      tour_preview && tour_preview.price_comment && tour_preview.price_comment && (
        <>
          {tour_preview && tour_preview.price_comment && tour_preview.price_comment.length <= 23
            ?
            (<div>
              {tour_preview.price_comment}
            </div>)
            :
            (
              <>
                {showMore
                  ?
                  <div>
                    {tour_preview.price_comment + ' '}
                    <div className={styles.price_comment_row_more} onClick={() => setShowMore(false)}>
                      {' '}скрыть
                    </div>
                  </div>
                  :
                  <div>
                    {tour_preview.price_comment.slice(0, 23) + ' '}
                    <div className={styles.price_comment_row_more} onClick={() => setShowMore(true)}>
                      {' '}подробнее...
                    </div>
                  </div>
                }
              </>
            )
          }
        </>
      )
    )
  }

  return (
    <>
      <TourPreviewLayout secondary_item='' secondary_name='Общее' preview={true}>
        {tour_preview && (
          <>
            {tour_preview.wallpaper && <Wallpaper image={tour_preview.wallpaper}/>}
            <div className="wrapper" style={{paddingBottom: '30px'}}>
              <div className={styles.preview_wrapper}>
                <div className={styles.tour_body}>
                  {tour_preview.name &&
                    < TourHeader
                      title={tour_preview.name}
                      rating={tour_preview.rating}
                      reviews={tour_preview.reviews_count}
                    />}
                  {tour_preview.start_country && <TourLocation
                    country={tour_preview.start_country}
                    region={tour_preview.start_russian_region ? tour_preview.start_russian_region : tour_preview.start_city}
                  />}
                  {tour_preview.basic_type && <TourTypes
                    main_type={tour_preview.basic_type}
                    extra_types={tour_preview.additional_types}
                  />}
                  <TourInfoBlocks
                    comfort={tour_preview.comfort_level} difficulty={tour_preview.difficulty_level}
                    language={tour_preview.languages}
                    age={tour_preview.age_starts + '-' + tour_preview.age_ends}
                  />
                  <div className={styles.divider}/>
                  {tour_preview.main_impressions && tour_preview.main_impressions.length > 0 && <TourImpressions impressions={tour_preview.main_impressions}/>}
                  {((tour_preview.plan && tour_preview.plan.length > 0) || tour_preview.media_link || tour_preview.description) && <TourReview text={tour_preview.description} activities={tour_preview.plan} video={tour_preview && tour_preview.media_link ? tour_preview.media_link : ''}/>}
                  {tour_preview.tour_images && tour_preview.tour_images.length > 0 && <TourGallery gallery={tour_preview.tour_images}/>}
                  {tour_preview.start_date && tour_preview.start_city && <TourRoute
                    ya_map={tour_preview && tour_preview.map}
                    start_date={tour_preview && tour_preview.start_date}
                    start_city={tour_preview && tour_preview.start_city}
                    start_time={tour_preview && tour_preview.start_time}
                    finish_date={tour_preview && tour_preview.finish_date}
                    finish_city={tour_preview && tour_preview.finish_city}
                    finish_time={tour_preview && tour_preview.finish_time}
                  />}
                  {Array.isArray(tour_preview.tour_days) &&
                    <TourDays days={tour_preview && tour_preview.tour_days}/>
                  }
                  {(Array.isArray(tour_preview.tour_property_types) || Array.isArray(tour_preview.tour_property_images)) && <TourAccommodation
                    property_types={tour_preview.tour_property_types}
                    images={tour_preview.tour_property_images}
                  />}
                  {((tour_preview.tour_included_services && tour_preview.tour_included_services.length > 0) || (tour_preview.tour_excluded_services && tour_preview.tour_excluded_services.length > 0)) &&
                    <TourIncluded inclusions={tour_preview.tour_included_services}
                                  exclusions={tour_preview.tour_excluded_services}/>}
                  {tour_preview.air_tickets &&
                    <AirTickets
                      start_date={tour_preview && tour_preview.start_date}
                      start_city={tour_preview && tour_preview.start_city}
                      start_time={tour_preview && tour_preview.start_time}
                      finish_date={tour_preview && tour_preview.finish_date}
                      finish_city={tour_preview && tour_preview.finish_city}
                      finish_time={tour_preview && tour_preview.finish_time}
                      text={tour_preview && tour_preview.air_tickets}
                    />
                  }

                  {tour_preview.tour_addetional_services &&
                    <>
                      <h3>Дополнительные услуги</h3>
                      <div style={{marginTop: '20px'}}>
                        {tour_preview && tour_preview.tour_addetional_services && tour_preview.tour_addetional_services.map((item, index) => (
                          <div key={index} style={{marginBottom: '10px'}}>
                            {item.extra_text}
                            {item.extra_service_price && (
                              <>
                                {' '}
                                -
                                {' '}
                                {item.extra_service_price}
                                <span className={'rub-sign'}>{tour_preview.currency.sign}</span>
                              </>
                            )}
                            {/*{`${item.extra_text} ${item.extra_service_price ? ' - ' + item.extra_service_price + <span className={'rub-sign'}>{tour_preview.currency.sign}</span> : ''}`}*/}
                          </div>
                        ))}
                      </div>
                    </>
                  }

                  {(tour_preview.guest_requirements || tour_preview.take_with || tour_preview.key_features || tour_preview.new_to_see) && <TourImportantToKnow
                    guest_requirements={tour_preview.guest_requirements}
                    take_with={tour_preview.take_with}
                    key_features={tour_preview.key_features}
                    new_to_see={tour_preview.new_to_see}
                  />}

                  {tour_preview.team_member && <TourLeader
                    leader={tour_preview.team_member}
                    // action={handleExpertChat}
                  />
                  }

                </div>

                <div
                  className={styles.tour_sidebar_body}
                  // ref={stickyRef}
                  style={{position: 'sticky', top: '30px'}}
                >
                  <div className={styles.tour_sidebar_header}>
                    <Link to={`/register`}>
                      Зарегистрируйтесь!
                    </Link>
                    <span>
                    И начните путешествовать по новому!
                    </span>
                  </div>

                  <div className={styles.tour_sidebar_main}>
                    <div className={styles.guarantied_row}>
                      <div className={styles.guarantied_row_guarantied}>
                        <div className={styles.guarantied_row_guarantied_icon}>
                          <img src={ok} alt="Ok"/>
                        </div>
                        <div className={styles.guarantied_row_guarantied_text}>
                          Тур проверен
                          {' '}
                          {tour_preview.is_guaranteed ? 'и гарантирован' : ''}
                        </div>
                      </div>
                      <div className={styles.guarantied_row_guarantied_favourite}>
                        <img src={heart} alt="heart"/>
                      </div>
                    </div>
                    {tour_preview.price && <div className={styles.price_row}>
                      {tour_preview && tour_preview.price && <div className={styles.price_row_total_price}>
                        {tour_preview && tour_preview.discounted_price &&
                          <div className={styles.price_row_total_price_total}>
                            {tour_preview && tour_preview.price && tour_preview.price.toLocaleString('ru')}
                            {' '}
                            <span className='rub-sign'>₽</span>
                          </div>}
                        <div className={styles.price_row_total_price_discounted}>
                          {(tour_preview && tour_preview.discounted_price ? tour_preview.discounted_price : tour_preview.price).toLocaleString('ru')}
                          {' '}
                          <span className='rub-sign'>₽</span>
                        </div>
                      </div>}
                      {tour_preview && tour_preview.daily_price && <div className={styles.price_row_daily_price}>
                        {'в день'}
                        {' '}
                        {tour_preview && tour_preview.daily_price && (tour_preview.daily_price * places).toLocaleString('ru')}
                        {' '}
                        <span className='rub-sign'>₽</span>
                      </div>}
                    </div>}
                    <div className={styles.price_comment_row}>
                      <PriceComment/>
                    </div>

                    {(tour_preview.duration || tour_preview.vacants_number || tour_preview.members_number) && <div className={styles.duration_row}>
                      <div className={styles.duration_row_col}>
                        <div className={styles.duration_row_icon}>
                          <img src={stopwatch} alt="stopwatch"/>
                        </div>
                        <div className={styles.duration_row_text}>
                          <div className={styles.duration_row_text_title}>
                            Длительность:
                          </div>
                          <div className={styles.duration_row_text_data}>
                            {tour_preview.duration}
                            {' '}
                            дней
                          </div>
                        </div>

                      </div>
                      <div className={styles.duration_row_col}>
                        <div className={styles.duration_row_icon}>
                          <img src={group} alt="group"/>
                        </div>
                        <div className={styles.duration_row_text}>
                          <div className={styles.duration_row_text_title}>
                            Свободно мест:
                          </div>
                          <div className={styles.duration_row_text_data}>
                            {tour_preview.vacants_number}
                            {' '}
                            из
                            {' '}
                            {tour_preview.members_number}
                          </div>
                        </div>

                      </div>

                    </div>}

                    <div className={styles.inputs_row}>
                      {/*<div className={styles.inputs_row_date_input + ' ' + styles.calendar}>*/}
                      {/*  <img src={calendar} alt="calendar"/>*/}
                      {/*  <div className={styles.inputs_row_date_input_text}>Выберите дату</div>*/}
                      {/*  <img src={chevron_down} alt="chevron_down"/>*/}
                      {/*</div>*/}
                      <div className={styles.inputs_row_date_input}>
                        <div className={styles.inputs_row_date_input_button_minus} onClick={handleSubtract}>
                          —
                        </div>
                        <div className={styles.inputs_row_date_input_text}>
                          Мест:
                          {' '}
                          {places}
                        </div>
                        <div className={styles.inputs_row_date_input_button} onClick={handleAdd}>
                          +
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputs_row_button} onClick={handleBook}>
                      {tour_preview.is_guaranteed ? 'Забронировать' : 'Хочу поехать'}
                    </div>

                    <div className={styles.inputs_row_text}>
                      {tour_preview && tour_preview.book_price && <div className={styles.inputs_row_text_heading}>
                        Для бронирования тура
                        достаточно {tour_preview && tour_preview.book_price && (tour_preview.book_price * places).toLocaleString('ru')}
                        <span className='rub-sign'>₽</span>
                      </div>}
                      <div className={styles.inputs_row_text_text}>
                        При отмене бронирования любого путешествия в течение 24 часов после оплаты вы получаете полный
                        возврат.
                      </div>
                    </div>


                  </div>

                  <div className={styles.tour_sidebar_footer}>

                    {tour_preview?.expert && <div className={styles.footer_row_leader}>
                      <Expert
                        reviews={tour_preview.expert.tour_reviews_count}
                        name={tour_preview.expert.first_name}
                        rating={tour_preview.expert.rating}
                        id={tour_preview.expert.id}
                        avatar={tour_preview.expert.tmb_avatar}
                        extra={', Автор туров'}
                        public_url={tour_preview.expert.public_url}
                      />
                      {/*<div className={styles.footer_row_leader_image}*/}
                      {/*     style={{backgroundImage: 'url(' + tour_preview.expert.tmb_avatar}}/>*/}
                      {/*<div className={styles.footer_row_leader_leader}>*/}
                      {/*  <div className={styles.footer_row_leader_name}>*/}
                      {/*    <span>{tour_preview.expert.first_name}</span>, Автор туров*/}
                      {/*  </div>*/}
                      {/*  <div className={styles.footer_row_leader_rating}>*/}
                      {/*    <img src={star} alt="star"/>*/}
                      {/*    {tour_preview.expert.rating}*/}
                      {/*    <span> (201)</span>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                    </div>}

                    <div
                      className={styles.footer_row_button}
                      // onClick={handleExpertChat}
                    >
                      Написать автору тура
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {!tour_preview && (
          <Box sx={{display: 'flex'}}>
            <CircularProgress/>
          </Box>
        )}
      </TourPreviewLayout>
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
  tour: state.tours.current_tour,
  tour_preview: state.tours.tour_preview,
})

export default connect(mapStateToProps, {getTourAccountReview, add_chat_user})(TourPage)
