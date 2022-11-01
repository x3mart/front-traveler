import React, {useState, useEffect} from 'react'
import MainLayout from '../MainLayout'
import MetaTags from 'react-meta-tags'
import {Link, useHistory, Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import SideBar from '../../components/sideBar/SideBar'

import {load_user} from '../../redux/actions/authActions'
import {
  openSecondaryMenu,
  addTour,
  deleteTour,
  tourToServerUpdate,
  clearCurrentTour,
  setPage
} from "../../redux/actions/toursActions";

import CircularProgress from '@mui/material/CircularProgress'
import Modal from "../../components/AccountTours/Components/Modal";

import isNotEmptyObject from "../../helpers/isNotEmptyObject";
import PopUp from "../../components/PopUp/PopUp";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Section from "../../components/Section";

const TourPreviewLayout = ({
                             language,
                             preview = false,
                             tour,
                             menu_item,
                             secondary_item,
                             secondary_name,
                             completed,
                             isAuthenticated,
                             children,
                             openSecondaryMenu,
                             addTour,
                             deleteTour,
                             tourToServer,
                             clearCurrentTour,
                             setPage,
                             page,
                             tour_id,
                             tourToServerUpdate,
                           }) => {

  const history = useHistory()


  const [title, setTitle] = useState('Название тура')

  const [loading, setLoading] = useState(false)

  const [activePopUp, setActivePopUp] = useState(false)

  if (!isAuthenticated) {
    return <Redirect to={`/${language}/login`}/>
  }

  // useEffect(() => {
  //   if (!isNotEmptyObject(tour)) {
  //     addTour()
  //   }
  // }, [tour])

  useEffect(() => {
    openSecondaryMenu(true)
    return () => openSecondaryMenu(false)
  }, [])

  useEffect(() => {
    if (tour && tour.name) {
      setTitle(tour.name)
    } else {
      setTitle('Название тура')
    }
  }, [tour])

  const handleTourCopy = () => {
    history.push(`/${language}/account/tours/list`)
  }

  const handleTourDelete = async () => {
    setActivePopUp(false)
    await deleteTour(tour.id)
      .then(() => history.push(`/${language}/account/tours/list`))
  }

  const handleTourEdit = () => {
    console.log(preview)
    // if (!preview) {
      tourToServerUpdate(tour, tour.id)
      setPage(history.location)
      history.push(`/${language}/account/tours/${tour.id}/edit/main`)
    //} } else {
    //   history.push(`/${language}/${page}`)
    //   setPage('')
    // }
  }

  useEffect(() => {
    if (!tour && loading) {
      setLoading(false)
    }
  }, [tour, loading])

  const handleModeration = async () => {
    await tourToServerUpdate({...tour, on_moderation: true, is_draft: false}, tour.id)
      .then(() => history.push(`/${language}/account/tours/list`))
      .then(() => clearCurrentTour())
  }

  const handleSave = async () => {
    await tourToServerUpdate(tour, tour.id)
      .then(() => history.push(`/${language}/account/tours/list`))
      .then(() => clearCurrentTour())
  }

  return (
    <MainLayout>
      <>
        <MetaTags>
          <title>Просмотр тура - {secondary_name}</title>
          <meta name='description' content=''/>
          <link rel='icon' href='/favicon.ico'/>
        </MetaTags>

        <section>
          <div className='wrapper'>
            <div className='breadcrumbs breadcrumbs_margin'>
              <span><Link to={`/${language}`}>Главная</Link></span> - <span><Link
              to={`/${language}/account`}>Личный кабинет</Link></span> - <span>Просмотр тура</span>
            </div>
          </div>
        </section>

        <section>
          <div className='wrapper'>
            <div className='global-h2-heading'>
              <h2>Просмотр тура</h2>
            </div>

            <div className='control-buttons'>
              <div className='control-buttons-set'>
                <button onClick={() => setActivePopUp(true)}>Удалить</button>
                {activePopUp && <PopUp status={'danger'}
                                 title={'Уверены, что хотите удалить?'}
                                 text={'Информация будет удалена навсегда.'}
                                 button={'Отменить'}
                                 button2={'Удалить'}
                                 action={() => setActivePopUp(false)}
                                 second_action={handleTourDelete}/>}
                <button><Modal tour_id={tour.id} button_name='Создать копию' action={handleTourCopy}/></button>
                <button onClick={handleTourEdit}>Редактировать</button>
              </div>

              <div className='control-buttons-set'>
                <button onClick={handleModeration}>На модерацию</button>
                <button className='button-green' onClick={handleSave}>
                  Сохранить
                </button>
              </div>
            </div>
            {tour?.decline_reasons && <div className='control-buttons' style={{flexDirection: 'column'}}>
              <h2 style={{color: '#DF7070', marginBottom: '10px'}}>Отказ публикации тура!</h2>
              <h3 style={{marginBottom: '10px'}}>Причины:</h3>
              <div dangerouslySetInnerHTML={{__html: tour?.decline_reasons?.replace(/\n/g, "<br />")}}/>
            </div>}


          </div>
          <main>
            {children}
          </main>
        </section>
      </>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
  page: state.tours.page,
  language: state.languages.language,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {
  openSecondaryMenu,
  addTour,
  deleteTour,
  tourToServerUpdate,
  clearCurrentTour,
  setPage,
})(TourPreviewLayout)
